export const datetimeTrans = (val) => {
  let datetime = ''
  if (val !== '' || val !== null) {
    datetime = val.split('T')[0]
  }
  return datetime
}
