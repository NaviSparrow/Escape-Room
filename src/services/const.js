export const APIRoute = {
  QuestList: 'quests',
  NewOrder: 'orders',
};

export const QuestType = {
  All: 'Все квесты',
  Adventures: 'Приключения',
  Horrors: 'Ужасы',
  Mystic: 'Мистика',
  Detective: 'Детектив',
  SciFi: 'Sci-fi',
};

export const QuestTypeMap = new Map([
  ['adventures', QuestType.Adventures],
  ['horror', QuestType.Horrors],
  ['mystic', QuestType.Mystic],
  ['detective', QuestType.Detective],
  ['sci-fi', QuestType.SciFi],
]);

export const filterQuestsByType = (questList, currentType) => {
  if (currentType === QuestType.All) {
    return questList;
  }
  return questList.filter(
    (quest) => QuestTypeMap.get(quest.type) === currentType,
  );
};
