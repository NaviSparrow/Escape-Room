import logo from 'assets/img/logo.svg';
import * as S from './header.styled';
import { AppRoute, Menu } from '../../../services/const';
import { useDispatch, useSelector } from 'react-redux';
import { selectMenuScreen } from '../../../store/store';
import { ChangeMenuScreen } from '../../../store/actions';

const Header = () => {
  const currentMenuScreen = useSelector(selectMenuScreen);
  const dispatch = useDispatch();

  const handleClick = (menuItemName) => dispatch(ChangeMenuScreen(menuItemName));

  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.Logo>
          <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
        </S.Logo>

        <S.Navigation>
          <S.Links>
            <S.LinkItem>
              <S.Link
                $isActiveLink={currentMenuScreen === Menu.Quests}
                to={AppRoute.Root}
                onClick={() => handleClick(Menu.Quests)}>
                Квесты
              </S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link
                $isActiveLink={currentMenuScreen === Menu.Newbies}
                to="#"
                onClick={() => handleClick(Menu.Newbies)}>
                Новичкам
              </S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link
                $isActiveLink={currentMenuScreen === Menu.Reviews}
                to="#"
                onClick={() => handleClick(Menu.Reviews)}>
                Отзывы
              </S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link
                $isActiveLink={currentMenuScreen === Menu.Stocks}
                to="#"
                onClick={() => handleClick(Menu.Stocks)}>
                Акции
              </S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link
                $isActiveLink={currentMenuScreen === Menu.Contact}
                to={AppRoute.Contacts}
                onClick={() => handleClick(Menu.Contact)}>
                Контакты
              </S.Link>
            </S.LinkItem>
          </S.Links>
        </S.Navigation>
        <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  );
}

export default Header;
