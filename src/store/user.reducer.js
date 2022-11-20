// import { userService } from "../services/user.service.js"

const initialState = {
  // user: userService.getLoggedinUser(),
  check: ''
}

export function userReducer(state = initialState, action) {
  var newState = state
  switch (action.type) {
    case "SET_USER":
      newState = { ...state, user: action.user }
      break

    case "CHECK":
      return { ...newState, check: action.check }

    default:
      return newState
  }

}
