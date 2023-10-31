import types from '../types'

const authActions = {
  setUser: payload => {
    return async dispatch => {
      dispatch(types.setUser(payload))
    }
  },

  setAuthentication: payload => {
    return async dispatch => {
      dispatch(types.setAuthentication(payload))
    }
  }
}

export default authActions