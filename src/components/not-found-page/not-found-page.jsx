import * as S from '../common/header/header.styled';
import * as C from '../detailed-quest/detailed-quest.styled';

import logo from '../../assets/img/logo.svg';
import { useHistory } from 'react-router-dom';
import { AppRoute } from '../../services/const';

const NotFoundPage = () => {
  const history = useHistory();
  return (
    <>
      <S.StyledHeader>
        <S.HeaderWrapper>
          <S.Logo>
            <S.Image src={logo} alt="Логотип Escape Room" width="290" height="150" />
          </S.Logo>
        </S.HeaderWrapper>
      </S.StyledHeader>

      <C.Main>
        <C.PageHeading>
          <C.PageTitle>404. Page not found</C.PageTitle>
        </C.PageHeading>
        <C.QuestBookingBtn onClick={() => history.push(AppRoute.Root)}>
          Вернуться на главную
        </C.QuestBookingBtn>
      </C.Main></>
  );
}

export default NotFoundPage;
