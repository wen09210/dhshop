export const inoviceStatusToCH = (val) => {
  let inoviceStatusCH = ''
  switch (val) {
    case '1':
      inoviceStatusCH = '未開發票'
      break
    case '2':
      inoviceStatusCH = '已開發票'
      break

  }
  return inoviceStatusCH
}
