const FETCH_SUCCESS = 'FETCH_SUCCESS';

const initialState = {
  greeting: 'Loading',
};

export const fetchPostsSuccess = (payload) => ({
  type: FETCH_SUCCESS,
  payload,
});

export const fetchPostsRequest = () => async (dispatch) => {
  const request = await fetch('http://localhost:3000/api/greetings');
  const result = await request.json();
  dispatch(
    fetchPostsSuccess(result.greetings[0].name),
  );
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_SUCCESS:
      return {
        greeting: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
