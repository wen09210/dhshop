import Cookies from 'js-cookie'
export const $decodeCookies = Cookies.withConverter(function(value, name) {
  var afterDecodeCookie = decodeURIComponent(value)
  return afterDecodeCookie
})

