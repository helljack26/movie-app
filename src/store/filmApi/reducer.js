import
{
  SET_FILM_LIST,
  UPDATE_SEARCH_FILM,
} from './types';

export const filmApi = (
  state = { filmList: [], searchFilm: '' },
  action,
) =>
{
  switch ( action.type )
  {
    case SET_FILM_LIST:
      return { ...state, filmList: action.payload };
    case UPDATE_SEARCH_FILM:
      return { ...state, searchFilm: action.payload };

    default:
      return state;
  }
};