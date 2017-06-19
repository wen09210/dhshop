export const deliveryStatusToCH = (val) => {
  let deliveryStatusCH = ''
  switch (val) {
    case '1':
      deliveryStatusCH = '未出貨'
      break
    case '2':
      deliveryStatusCH = '已出貨'
      break
    case '3':
      deliveryStatusCH = '已送達'
      break
    case '4':
      deliveryStatusCH = '退貨中'
      break
    case '5':
      deliveryStatusCH = '退貨完成'
      break
  }
  return deliveryStatusCH
}
