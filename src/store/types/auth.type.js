const authTypes = {
  setUser: payload => ({ type: 'SET_USER', payload }),
  setAuthentication: payload => ({  type: 'SET_AUTHENTICATION', payload })
}
export default authTypes