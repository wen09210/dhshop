import axios from 'axios'
function GetKey() {
  let key = '123456'
  axios({
    method: 'post',
    url: `http://localhost:53912/api/Ecpay/checkMacPost`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then(function (r) {
    console.log(r.data.key)
    key = r.data.key
    return 'key'
  })
  .catch(function (r) {
    console.log(r)
  })
  console.log('key', key)
  return 'key'
}

export {
  GetKey
}
