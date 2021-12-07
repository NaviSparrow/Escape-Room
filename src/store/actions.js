export const ActionType = {
  ChangeQuestType: 'main/changeQuestType',
  FillQuestList: 'main/fillQuestList',
  FillDetailedQuest: 'detail/fillDetailedQuest',
};

export const changeQuestType = (questType) => ({
  type: ActionType.ChangeQuestType,
  payload: questType,
});

export const fillQuestList = (questList) => ({
  type: ActionType.FillQuestList,
  payload: questList,
});

export const fillDetailedQuest = (quest) => ({
  type: ActionType.FillDetailedQuest,
  payload: quest,
});
