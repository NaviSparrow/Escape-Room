import { fillQuestList } from './actions';

export const APIRoute = {
  QuestList: 'quests',
  NewOrder: 'orders',
};

export const fetchQuestListAction = () => async dispatch => {
const response = await fetch('http://localhost:3001/quests');
const data = await response.json();
dispatch(fillQuestList(data));
}
