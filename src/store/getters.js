import types from './types'
import Lockr from 'lockr'
import {$decodeCookies} from '../extension/DecodeCookies'

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
      if ($decodeCookies.getJSON('loginInfo') !== undefined) {
        state.LoginInfo = $decodeCookies.getJSON('loginInfo')
      }
    }
    return state.LoginInfo
  },
  [types.GetLoginModal]: (state) => state.openLoginModal,
  [types.GetBuyerDetail]: (state) => state.BuyerDetail,
  [types.GetCouponCode]: (state) => state.CouponCode,
  [types.GetOpenCart]: (state) => state.cartModal
}
