import axios from "axios";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const FETCH_LOGS_START = "logs/fetch-start";
const FETCH_LOGS_SUCCESS = "logs/fetch-success";
const FETCH_LOGS_FAILURE = "logs/fetch-failure";
const LOGS_DELETE_ALL = "logs/delete-all";

const loggerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOGS_START:
    case LOGS_DELETE_ALL:
      return { ...state, loading: true, error: null };

    case FETCH_LOGS_SUCCESS:
      return { items: action.payload, loading: false, error: null };

    case FETCH_LOGS_FAILURE:
      return { items: [], loading: false, error: action.payload };

    default:
      return state;
  }
};

export const fetchLogsStart = () => (dispatch) => {
  dispatch({ type: FETCH_LOGS_START });
  axios
    .get("/api/v1/logs")
    .then(({ data }) => dispatch(fetchLogsSuccess(data)))
    .catch((err) => dispatch(fetchLogsFailure(err)));
};

export const fetchLogsSuccess = (logs) => {
  return { type: FETCH_LOGS_SUCCESS, payload: logs };
};

export const fetchLogsFailure = (error) => {
  return { type: FETCH_LOGS_FAILURE, payload: error };
};

export const deleteLogs = () => (dispatch) => {
  dispatch({ type: LOGS_DELETE_ALL });
  axios.delete("/api/v1/logs").then(() => dispatch(fetchLogsStart()));
};

export default loggerReducer;
