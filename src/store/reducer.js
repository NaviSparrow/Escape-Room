import {ActionType} from './actions';
import { Menu, QuestType } from '../services/const';

const initialState = {
  questType: QuestType.All,
  menuScreen: Menu.Quests,
  questList: [],
  detailedQuest: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ChangeQuestType:
      return {...state, questType: action.payload};
    case ActionType.ChangeMenuScreen:
      return {...state, menuScreen: action.payload};
    case ActionType.FillQuestList:
      return {...state, questList: action.payload};
    case ActionType.FillDetailedQuest:
      return {...state, detailedQuest: action.payload};
    default: return state;
  }
}

 export {reducer};
