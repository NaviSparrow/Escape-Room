import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import { appTheme } from './common';
import * as S from './app.styled';
import { useSelector } from 'react-redux';
import { selectQuestList } from '../../store/store';
import NotFoundPage from '../not-found-page/not-found-page';
import CheckPageForDetailedQuest from '../detailed-quest/check-page-for-detailed-quest/check-page-for-detailed-quest';
import { AppRoute, RADIX_VALUE } from '../../services/const';

const App = () => {
  const questList = useSelector(selectQuestList);
  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <Router>
        <Switch>
          <Route
            exact
            path="/quests/:id"
            render={(props) => {
              const propsId = props.match.params.id;
              const detailedQuest = questList.find(quest => quest.id === parseInt(propsId, RADIX_VALUE));
              if (detailedQuest === undefined) {
                return <NotFoundPage />;
              }
              return <CheckPageForDetailedQuest detailedQuest={detailedQuest} id={propsId} />;
                 }}>
          </Route>
          <Route exact path={AppRoute.Contacts}>
            <Contacts />
          </Route>
          <Route exact path={AppRoute.Root}>
            <Home />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
