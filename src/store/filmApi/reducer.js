import
{
  SET_FILM_LIST,
  UPDATE_SEARCH_FILM,
  SET_LOADING,
  UPDATE_PAGE_TITLE
} from './types';

export const filmApi = (
  state = { filmList: [], filmPage: '', searchFilm: '', loading: true },
  action, ) =>
{
  switch ( action.type )
  {
    case SET_FILM_LIST:
      return { ...state, filmList: action.payload };
    case UPDATE_SEARCH_FILM:
      return { ...state, searchFilm: action.payload };
    case UPDATE_PAGE_TITLE:
      return { ...state, filmPage: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};


