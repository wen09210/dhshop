export const prodTypeToCH = (val) => {
  let prodtypeCH = ''
  switch (val) {
    case '1':
      prodtypeCH = '一般商品'
      break
    case '2':
      prodtypeCH = '加購商品'
      break
    case '3':
      prodtypeCH = '預購商品'
      break
    case '4':
      prodtypeCH = '贈品'
      break
  }
  return prodtypeCH
}
