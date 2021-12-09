export const ActionType = {
  ChangeQuestType: 'main/changeQuestType',
  ChangeMenuScreen: 'main/changeMenu',
  FillQuestList: 'main/fillQuestList',
  FillDetailedQuest: 'detail/fillDetailedQuest',
  ChangeIsOrderPass: 'order/changeIsOrderPass',
};

export const changeQuestType = (questType) => ({
  type: ActionType.ChangeQuestType,
  payload: questType,
});

export const ChangeMenuScreen = (menuScreen) => ({
  type: ActionType.ChangeMenuScreen,
  payload: menuScreen,
});

export const fillQuestList = (questList) => ({
  type: ActionType.FillQuestList,
  payload: questList,
});

export const fillDetailedQuest = (quest) => ({
  type: ActionType.FillDetailedQuest,
  payload: quest,
});
