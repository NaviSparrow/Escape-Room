import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { createRef, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { postNewOrderAction } from '../../../../store/api-actions';
import { toast } from 'react-toastify';
import React from 'react';
import { ORDER_ERROR, ORDER_SUCCESS_POST } from '../../../../services/const';

const BookingModal = ({ onCloseBtnClick }) => {
  const dispatch = useDispatch();

  const [isChecked, setIsChecked] = useState(false);

  const formRef = createRef();
  const nameRef = useRef(null);
  const peopleCountRef = useRef(null);
  const phoneRef = useRef(null);
  const isLegal = isChecked;

  const onSuccess = () => {
    onCloseBtnClick(false);
    toast.success(ORDER_SUCCESS_POST);
  };

  const onFail = () => {
    toast.error(ORDER_ERROR);
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    dispatch(
      postNewOrderAction(
        {
          name: nameRef.current.value,
          peopleCount: Number(peopleCountRef.current.value),
          phone: phoneRef.current.value,
          isLegal: isLegal,
        },
        onSuccess,
        onFail,
      ),
    );
  };

  const handleClick = (evt) => {
    evt.preventDefault();
    setIsChecked(!isChecked);
  };

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={() => onCloseBtnClick(false)}>
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          action="https://echo.htmlacademy.ru"
          method="post"
          id="booking-form"
          ref={formRef}
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="Имя"
              required
              ref={nameRef}
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              type="tel"
              id="booking-phone"
              name="booking-phone"
              placeholder="Телефон"
              required
              maxlength="10"
              ref={phoneRef}
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              type="number"
              id="booking-people"
              name="booking-people"
              placeholder="Количество участников"
              required
              ref={peopleCountRef}
            />
          </S.BookingField>
          <S.BookingSubmit type="submit" onClick={handleFormSubmit}>
            Отправить заявку
          </S.BookingSubmit>
          <S.BookingCheckboxWrapper onClick={handleClick}>
            <S.BookingCheckboxInput
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              required
              checked={isChecked}
              readOnly
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  );
};
export default React.memo(BookingModal);
