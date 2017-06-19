export const payStatusToCH = (val) => {
  let payStatusCH = ''
  switch (val) {
    case '1':
      payStatusCH = '未付款'
      break
    case '2':
      payStatusCH = '已付款'
      break
    case '3':
      payStatusCH = '退款中'
      break
    case '4':
      payStatusCH = '已退款'
      break
  }
  return payStatusCH
}
