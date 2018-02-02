<template>
  <div class="container">
    <div class="main_section col-md-12">
      <div class="Contrast_title">dH退換貨申請表單</div>
    </div>
    <i-form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="120">
      <form-item label="申請日期">
        <row>
          <i-col span="11">
            <form-item prop="date">
              <date-picker type="date" placeholder="選擇日期" v-model="formValidate.date"></date-picker>
            </form-item>
          </i-col>
        </row>
      </form-item>
      <form-item label="訂單編號" prop="order_number">
        <i-input v-model="formValidate.order_number" placeholder="填入訂單編號"></i-input>
      </form-item>
      <form-item label="商品名稱" prop="product_name">
        <i-input v-model="formValidate.product_name" placeholder="您要退換貨的商品名稱"></i-input>
      </form-item>
      <form-item label="處理方式" prop="method">
        <radio-group v-model="formValidate.method">
          <radio label="return">退貨</radio>
          <radio label="change">換貨</radio>
        </radio-group>
      </form-item>
      <form-item label="收件地址" prop="address">
        <i-input v-model="formValidate.address" placeholder="為方便換貨商品寄送請務必填寫日間方便收貨之地址。"></i-input>
      </form-item>
      <form-item label="姓名" prop="name">
        <i-input v-model="formValidate.name" placeholder="請填寫全名"></i-input>
      </form-item>
      <form-item label="退換貨原因" prop="desc">
        <i-input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 10}" placeholder="請詳述退換貨原因"></i-input>
      </form-item>
      <br>
      <div class="intext">
        退貨帳戶資料※如選擇退貨必須填寫退款帳戶，經審核完畢符合資格始可退款。
      </div>
      <br>
      <form-item label="戶名" prop="bank_name">
        <i-input placeholder="退款之戶名"></i-input>
      </form-item>
      <form-item label="銀行" prop="bank">
        <i-input placeholder="退款銀行"></i-input>
      </form-item>
      <form-item label="分行" prop="seperate_bank">
        <i-input placeholder="退款分行"></i-input>
      </form-item>
      <form-item label="帳戶" prop="account">
        <i-input placeholder="退款帳戶"></i-input>
      </form-item>
      <i-button type="primary" @click="handleSubmit('formValidate')" long size="large">Submit</i-button>
    </i-form>
    <div class=" col-md-12">
      <div class="Contrast_title main_section">退換貨申請須知</div>
      <div class="intext">
        1.收到商品不符、破損、瑕疵怎麼辦？ 依照消費者保護法的規定，享有商品貨到日起七天猶豫期的權益。如您收到商品不符、破損、瑕疵， 建議您可於七天內填寫《退購申請》並重新訂購。 提醒您，退回商品必須為到貨時全新狀態且完整包裝(保持商品、附件、包裝、廠商紙箱及所有附隨文件或資料之完整性)，否則恕不接受退訂。
      </div>
      <div class="intext">
        2.如何辦理退訂 / 退貨？ 商品辦理退訂/退貨，我們將安排宅配公司與您聯繫，並於5個工作天內前往取貨。 依《消費者保護法》的規定，消費者享有商品貨到日起七天猶豫期的權益。 但猶豫期並非試用期，所以，您所退回的商品必須是全新的狀態、而且完整包裝(含商品本體、配件、贈品、保證書、原廠包裝及所有附隨文件或資料的完整性)， 切勿缺漏任何配件、請勿自行拆解檢查商品或損毀原廠外盒。原廠外盒及原廠包裝都屬於商品的一部分，或有遺失、毀損或缺件，可能影響您退貨的權益，也可能依照損毀程度扣除為回復原狀所必要的費用。
      </div>
      <div class="intext">
        3. 退貨、退款如何辦理？ 請詳填訂單編號、填寫商品退換資料；我們將於收到通知單後一週內安排商品回收作業。
      </div>
      <div class="intext">
        4. 退款時程？ 每月25號前完成退換貨商品程序，將於次月10號統一進行退款並於完成後發送通知至訂單填寫信箱。
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formValidate: {
        date: '',
        order_number: '',
        product_name: '',
        method: '',
        address: '',
        name: '',
        desc: '',
        bank_name: '',
        bank: '',
        seperate_bank: '',
        account: ''
      },
      ruleValidate: {
        order_number: [
          { required: true, message: '此欄不能為空', trigger: 'blur' }
        ],
        product_name: [
          { required: true, message: '此欄不能為空', trigger: 'blur' }
        ],
        method: [
          { required: true, message: '請選擇處理方式', trigger: 'change' }
        ],
        address: [
          { required: true, message: '請填寫完整地址', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '請填寫全名', trigger: 'blur' }
        ],
        desc: [
          { required: true, message: '請詳述退換貨原因', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('成功')
        } else {
          this.$Message.error('失敗')
        }
      })
    }
  }
}

</script>
<style scoped>
.img-responsive {
  border-radius: 3px;
}

.ivu-form .ivu-form-item-label {
  font-size: 18px;
}

.ivu-tabs-tabpane {
  height: 100%;
}

.main_section {
  margin: 20px 0px;
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 20px;
}

.col-md-4,
.col-md-6 {
  padding-left: 15px;
  padding-right: 15px;
}

.btnOrange {
  border-radius: 3px;
  font-weight: bold;
  margin-top: 15px;
}


.Contrast_title {
  font-weight: 700;
  margin-bottom: 0px;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: -0.6px;
  padding-top: 2px;
  padding-bottom: 2px;
  color: #484848;
}

.intext {
  font-size: 17px;
  line-height: 25px;
  padding-top: 0px;
  padding-bottom: 0px;
  color: #484848;
  font-weight: 400;
  margin-top: 20px;

}

.subtitle {
  margin: 0px;
  word-wrap: break-word;
  font-size: 19px;
  line-height: 24px;
  padding-top: 10px;
  padding-bottom: 0px;
  color: #484848;
  font-weight: 300;
}

@media (max-width:768px) {
  .description {

    min-height: auto;
  }
}

</style>
