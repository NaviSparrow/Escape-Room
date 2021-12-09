export const FROM = 0;
export const TO = 1;
export const RADIX_VALUE = 10;
export const ORDER_SUCCESS_POST = 'Вы успешно отправлили заявку!';
export const ORDER_ERROR = 'При отправке заявки возникла ошибка!';

export const APIRoute = {
  QuestList: 'quests',
  NewOrder: 'orders',
};

export const AppRoute = {
  Root: '/',
  Contacts: '/contacts',
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
  ['easy', 'простой'],
]);

export const Menu = {
  Quests: 'Квесты',
  Newbies: 'Новичкам',
  Reviews: 'Отзывы',
  Stocks: 'Акции',
  Contact: 'Контакты',
};

export const filterQuestsByType = (questList, currentType) => {
  if (currentType === QuestType.All) {
    return questList;
  }
  return questList.filter(
    (quest) => QuestTypesMap.get(quest.type) === currentType,
  );
};
