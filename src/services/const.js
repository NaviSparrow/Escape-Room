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

export const QuestTypesMap = new Map([
  ['adventures', QuestType.Adventures],
  ['horror', QuestType.Horrors],
  ['mystic', QuestType.Mystic],
  ['detective', QuestType.Detective],
  ['sci-fi', QuestType.SciFi],
]);

export const LevelTypes = new Map([
  ['hard', 'сложный'],
  ['medium', 'средний'],
  ['easy', 'легкий'],
]);

export const FROM = 0;
export const TO = 1;

export const filterQuestsByType = (questList, currentType) => {
  if (currentType === QuestType.All) {
    return questList;
  }
  return questList.filter(
    (quest) => QuestTypesMap.get(quest.type) === currentType,
  );
};
