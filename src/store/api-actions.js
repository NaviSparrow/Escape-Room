import { fillDetailedQuest, fillQuestList } from './actions';

const BACKEND_URL = 'http://localhost:3001';

export const fetchQuestListAction = () => async (dispatch) => {
  const response = await fetch(`${BACKEND_URL}/quests`);
  const data = await response.json();
  dispatch(fillQuestList(data));
};

export const fetchDetailedQuestAction = (id) => async (dispatch) => {
  const response = await fetch(`${BACKEND_URL}/quests/${id}`);
  const data = await response.json();
  dispatch(fillDetailedQuest(data));
};

export const postNewOrderAction = (orderData, onSuccess, onFail) => async (dispatch) => {
    try {
      const response = await fetch(`${BACKEND_URL}/orders`, {
        method: 'POST',
        body: JSON.stringify(orderData),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    } catch (error) {
      console.error(error);
    }
  };
