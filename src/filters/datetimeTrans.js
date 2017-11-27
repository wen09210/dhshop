export const datetimeTrans = (val) => {
  let datetime = ''
  if (val) {
    datetime = val.split('T')[0]
    // datetime = val.replace(/\D/g, ' ')
  }
  return datetime
}
