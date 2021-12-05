import {ActionType} from './actions';

const GenreType = {
  All: 'Все квесты',
  Adventures: 'Приключения',
  Horrors: 'Ужасы',
  Mystic: 'Мистика',
  Detective: 'Детектив',
  SciFi: 'Sci-fi',
};

const initialState = {
  genre: GenreType.All,
  questList: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return {...state, genre: action.payload};
    case ActionType.FillQuestList:
      return {...state, questList: action.payload};
    default: return state;
  }
}

 export {reducer};
