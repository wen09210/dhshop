export const datetimeTrans = (val) => {
  let datetime = ''
  if (val !== '' || val !== null || val !== undefined) {
    datetime = val.split('T')[0]
  }
  return datetime
}
