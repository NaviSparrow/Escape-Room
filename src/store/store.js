import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export const selectQuestType = state => state.questType;
export const selectQuestList = state => state.questList;
export const selectDetailedQuest = state => state.detailedQuest;
export const selectMenuScreen = state => state.menuScreen;
