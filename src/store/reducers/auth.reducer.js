const initialState = {
  user:{},
  authientication: false
}

const auth = (state=initialState, action) => {
  switch(action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      }
    case 'SET_AUTHENTICATION':
      return {
        ...state,
        authientication: action.payload
      }
    default:
      return state       
  }
}

export default auth