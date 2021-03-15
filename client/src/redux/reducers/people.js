export const PEOPLE_DETAILS = "PEOPLE_DETAILS";
export const PEOPLE_DETAILS_LOADING = "PEOPLE_DETAILS_LOADING";
export const PEOPLE_DETAILS_ERROR = "PEOPLE_DETAILS_ERROR";

const initialState = {
  loading: true,
  error: null,
  people: [],
};

const people = (state = initialState, action) => {
  switch (action.type) {
    case PEOPLE_DETAILS:
      state = {
        loading: false,
        error: null,
        people: [...state.people, action.payload],
      };
      break;
    case PEOPLE_DETAILS_LOADING:
      state = { ...state, loading: true };
      break;
    case PEOPLE_DETAILS_ERROR:
      state = { ...state, loading: false, error: action.payload };
      break;
    default:
      break;
  }
  return state;
};
export default people;
