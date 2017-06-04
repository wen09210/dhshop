import types from './types'
import Cookies from 'js-cookie'

export default {
  [types.GetShoppingCartItem]: (state) => state.shoppingCartItem,
  [types.GetshowAmtData]: (state) => state.showAmtData,
  [types.GetLoginInfo]: (state) => {
    if (Object.keys(state.LoginInfo).length === 0) {
      if (Cookies.getJSON('loginInfo') !== undefined) {
        state.LoginInfo = Cookies.getJSON('loginInfo')
      }
    }
    return state.LoginInfo
  }
}
