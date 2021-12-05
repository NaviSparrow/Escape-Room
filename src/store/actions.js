const ActionType = {
  ChangeGenre: 'main/changeGenre',
  FillQuestList: 'main/fillQuestList',
};

export const changeGenre = (genre) => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

export const fillQuestList = (questList) => ({
  type: ActionType.FillQuestList,
  payload: questList,
});
