import api from "../../config/axios";
import {
  PEOPLE_DETAILS,
  PEOPLE_DETAILS_LOADING,
  PEOPLE_DETAILS_ERROR,
} from "../reducers/people";

// export const getAllUserData = () => async (dispatch) => {
//   dispatch({
//     type: PEOPLE_DETAILS_LOADING,
//   });
//   try {
//     const response = await api.get("/api/users/user", {
//       headers: {
//         token: `${localStorage.getItem("token")}`,
//       },
//     });
//     if (response.status === 200) {
//       dispatch({
//         type: PEOPLE_DETAILS,
//         payload: response.data,
//       });
//     } else {
//       dispatch({
//         type: PEOPLE_DETAILS_ERROR,
//       });
//     }
//   } catch (e) {
//     dispatch({
//       type: PEOPLE_DETAILS_ERROR,
//     });
//   }
// };
export const addPerson = (person) => async (dispatch) => {
  dispatch({
    type: PEOPLE_DETAILS_LOADING,
  });
  try {
    dispatch({
      type: PEOPLE_DETAILS,
      payload: person,
    });
  } catch (e) {
    dispatch({
      type: PEOPLE_DETAILS_ERROR,
    });
  }
};
