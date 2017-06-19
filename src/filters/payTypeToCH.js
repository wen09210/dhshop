export const payTypeToCH = (val) => {
  let paytypeCH = ''
  switch (val) {
    case '1':
      paytypeCH = 'ATM'
      break
    case '2':
      paytypeCH = '信用卡'
      break
    case '3':
      paytypeCH = '貨到付款'
      break
  }
  return paytypeCH
}
