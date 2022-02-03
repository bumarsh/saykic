const INITIAL_STATE = {
  loggedIn: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_LOGGED_IN':
      return {
        ...state,
        loggedIn: !state.loggedIn,
      }
    default:
      return state
  }
}