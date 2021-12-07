import { fillQuestList } from './actions';

const BACKEND_URL = 'http://localhost:3001';

export const fetchQuestListAction = () =>
  async (dispatch) => {
const response = await fetch(`${BACKEND_URL}/quests`);
const data = await response.json();
dispatch(fillQuestList(data));
};
