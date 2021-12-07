import * as S from '../common/header/header.styled';
import * as C from '../detailed-quest/detailed-quest.styled';

import logo from '../../assets/img/logo.svg';

const NotFoundPage = () => (
  <>
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.Logo>
          <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
        </S.Logo>

        <S.LinkItem>
          <S.Link $isActiveLink to="/">
            Вернуться на главную
          </S.Link>
        </S.LinkItem>

      </S.HeaderWrapper>
    </S.StyledHeader>

    <C.Main>
      <C.PageHeading>
        <C.PageTitle>404. Page not found</C.PageTitle>
      </C.PageHeading>
    </C.Main></>

);

export default NotFoundPage;
