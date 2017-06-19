export const deliveryTypeToCH = (val) => {
  let deliveryTypeCH = ''
  switch (val) {
    case '1':
      deliveryTypeCH = '宅配'
      break
  }
  return deliveryTypeCH
}
