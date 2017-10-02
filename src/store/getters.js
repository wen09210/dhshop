import types from './types'
import Cookies from 'js-cookie'
import Lockr from 'lockr'

export default {
  [types.GetShoppingCartItem]: (state) => {
    if (Object.keys(state.shoppingCartItem).length === 0) {
      if (Lockr.get('shoppingCartItem') !== undefined) {
        state.shoppingCartItem = Lockr.get('shoppingCartItem')
      }
    }
    return state.shoppingCartItem
  },
  [types.GetshowAmtData]: (state) => state.showAmtData,
  [types.GetLoginInfo]: (state) => {
    if (Object.keys(state.LoginInfo).length === 0) {
      if (Cookies.getJSON('loginInfo') !== undefined) {
        state.LoginInfo = Cookies.getJSON('loginInfo')
      }
    }
    return state.LoginInfo
  },
  [types.GetLoginModal]: (state) => state.openLoginModal,
  [types.GetBuyerDetail]: (state) => state.BuyerDetail
}
