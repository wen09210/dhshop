export default {
  productList: [],
  productItem: {
    name: '',
    count: 0,
    src: '',
    unitPrice: 0,
    totalAmt: 0
  },
  shoppingCartItem: [],
  ECPayParm: {
    MerchantID: '2000132',
    MerchantTradeNo: 'skl08007666',
    MerchantTradeDate: '2017/05/04 22:55:15',
    PaymentType: 'aio',
    TotalAmount: '1000',
    Remark: 'SKL',
    TradeDesc: 'SKL',
    ItemName: 'cellPhone',
    ReturnURL: 'https://ecpay20170417.azurewebsites.net/Home/PayOK',
    OrderResultURL: 'https://ecpay20170417.azurewebsites.net/Home/PayComplete',
    ChoosePayment: 'ATM',
    ChooseSubPayment: 'TAISHIN',
    CheckMacValue: '',
    EncryptType: '1',
    ExpireDate: '4',
    PaymentInfoURL: 'http://localhost:56483/Home/ServerGetAtm',
    ClientRedirectURL: 'http://localhost:56483/Home/ClientGetAtm'
  },
  BuyerDetail: {
    'Purchaser': '',
    'P_Phone': '',
    'P_Address': '',
    'P_Mail': '',
    'P_Note': '',
    'Recipient': '',
    'R_Phone': '',
    'R_Address': '',
    'R_Mail': '',
    'R_Time': '',
    'PayType': '',
    'InoviceType': ''
  },
  MacValue: ''
}
