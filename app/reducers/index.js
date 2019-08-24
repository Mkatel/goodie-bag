import Axios from 'axios';
//const initialState = {}
const initialState = {
  candies: []
}
const GOT_CANDY = 'GOT_CANDY'
const gotCandies = (candies) => ({
  type: GOT_CANDY,
  candies
})
export const getCandies = () => {
  return async (dispath) => {
    const res = await Axios.get('/api/candies');
    dispath(gotCandies(res.data));
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CANDY:
        return {...state, candies: action.candies}
    default:
      return state
  }
}

export default rootReducer
