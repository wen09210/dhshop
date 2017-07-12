<template>
  <div class="container">
    <h3 class="TT">
      <i class="fa fa-flag" aria-hidden="true"></i> 客服中心
    </h3>
    <div class="row">
      <div class="row">
        <div class="col-md-6">
          <div class="usercentertitle">付款問題</div>
          <div class="UserQuestion" @click="openAccordion(0)">
            <i :class=chevron[0] aria-hidden="true"></i>
            付款方式
            </div>
          <collapse v-model="showAccordion[0]">
          <div class="UserAnswer" >
            dHSHOP 為電子商務購物平台，全站商品以台幣計費。 目前只提供貨到付款及ATM轉帳，未來我們會持續增加不同的付費機制。
          </div>
          </collapse>
        </div>
        <div class="col-md-6">
          <div class="usercentertitle">發票問題</div>
          <div class="UserQuestion" @click="openAccordion(1)">
            <i :class=chevron[1] aria-hidden="true"></i>
            商品收到了，發票怎麼沒一起附上？
            </div>
          <collapse v-model="showAccordion[1]">
          <div class="UserAnswer">
            公司發票將於商品到貨日15日後以平信寄出。
          </div>
          </collapse>
        </div>
        <div class="col-md-6">
          <div class="usercentertitle">訂購問題</div>
          <div class="UserQuestion" @click="openAccordion(2)">
            <i :class=chevron[2] aria-hidden="true"></i>
            訂購需要先加入會員嗎？
            </div>
          <collapse v-model="showAccordion[2]">
          <div class="UserAnswer" >
            dHSHOP全館皆不需要加入會員，您無須註冊或登入即可立即享受購物樂趣!
          </div>
          </collapse>
          <div class="UserQuestion" @click="openAccordion(3)">
            <i :class=chevron[3] aria-hidden="true"></i>
            請問何時會出貨?
            </div>
          <collapse v-model="showAccordion[3]">
          <div class="UserAnswer">
            商品下單後會依訂單編號開始寄送，依地區而異，商品最遲會在下訂後起算的7個工作天內送達(不含例假日)。
          </div>
          </collapse>
          <div class="UserQuestion" @click="openAccordion(4)">
            <i :class=chevron[4] aria-hidden="true"></i>
            可以寄送海外或離島嗎？
            </div>
          <collapse v-model="showAccordion[4]">
          <div class="UserAnswer">
            配送範圍限台灣本島、離島地區(不含海外)，偏遠地區如花蓮、台東、外島等，依商品不同酌收運費。
          </div>
          </collapse>
          <div class="UserQuestion" @click="openAccordion(5)" >
            <i :class=chevron[5] aria-hidden="true"></i>
            如何確認我購買成功?
            </div>
          <collapse v-model="showAccordion[5]">
          <div class="UserAnswer">
            購買成功後將寄送電子郵件至您填寫的信箱，主旨為<br> 「dHSHOP購買通知，訂單編號:**********」。 請於訂購時填寫有效的手機號碼與常用 email。提醒您留意信箱與垃圾信件匣避免錯過系統通知。
          </div>
          </collapse>
        </div>
        <div class="col-md-6">
          <div class="usercentertitle">預購問題</div>
          <div class="UserQuestion" @click="openAccordion(6)">
            <i :class=chevron[6] aria-hidden="true"></i>
            要如何預購商品？
            </div>
          <collapse v-model="showAccordion[6]">
          <div class="UserAnswer">
            預購商品的付款方式以匯款為主，會依訂單編號安排出貨。已完成匯款者將優先出貨。 本公司匯款帳號如下
            <br> 匯款帳號
            <br> 銀行(分行)名稱 中國信託-中壢分行<br> 銀行代碼 822 <br> 戶名 運嘉國際有限公司 <br> 帳號 129540917055 <br>
          </div>
          </collapse>
          <div class="UserQuestion" @click="openAccordion(7)">
            <i :class=chevron[7] aria-hidden="true"></i>
            預購商品缺貨和延遲的處理
            </div>
          <collapse v-model="showAccordion[7]">
          <div class="UserAnswer">
            預購款有時會有缺貨或是斷貨的情形，若是廠商因故延遲出貨或是缺貨等情形，會先幫您寄出到貨的部份，延遲的商品您可選擇繼續等候或是更換商品。 若遇廠商通知款式斷貨，無法出貨，我們將聯繫您，並且如數退款給買家
          </div>
          </collapse>
          <div class="UserQuestion" @click="openAccordion(8)">
            <i :class=chevron[8] aria-hidden="true"></i>
            預購要等多久？
            </div>
          <collapse v-model="showAccordion[8]">
          <div class="UserAnswer">
            如預購商品為國外進口，需配合船期配送關係等候約10-30個工作天不含假日。 而一般國內預購商品，需等候約7-15個工作天不含假日
          </div>
          </collapse>
          <div class="UserQuestion" @click="openAccordion(9)">
            <i :class=chevron[9] aria-hidden="true"></i>
            現貨和預購是分開寄送嗎？
            </div>
          <collapse v-model="showAccordion[9]">
          <div class="UserAnswer">
            若訂單有預購之商品，需等商品全部到齊後才一起寄出。若您需拆單寄送，多餘的郵資買家需自行吸收。 但「預購商品」若因故延遲無法如期出貨，我們會將先行寄出「現貨」商品，郵資由dHSHOP負擔。
          </div>
          </collapse>
        </div>
        <div class="col-md-6">
          <div class="usercentertitle">退/換貨問題</div>
          <div class="UserQuestion" @click="openAccordion(10)">
            <i :class=chevron[10] aria-hidden="true"></i>
            收到商品不符、破損、瑕疵怎麼辦？
            </div>
          <collapse v-model="showAccordion[10]">
          <div class="UserAnswer">
            dHSHOP的消費者，都可以依照消費者保護法的規定，享有商品貨到日起七天猶豫期的權益。如您收到商品不符、破損、瑕疵， 建議您可於七天內點選<a href="dHSHOP退換貨申請單.docx">《退購申請》</a>下載退換貨申請單填寫每個欄位後以email寄回
            <a href="mailto:cs.dhshop@gmail.com">客服信箱cs.dhshop@gmail.com</a>完成申請，等候審核結果。 提醒您，退回商品必須為到貨時全新狀態且完整包裝(保持商品、附件、包裝、廠商紙箱及所有附隨文件或資料之完整性)，否則恕不接受退訂。但已拆封之電腦軟體、程式、錄音帶及錄影帶、CD、VCD、DVD、耗材品，以及商品銷售網頁特別載明之商品，均不接受退訂。
          </div>
          </collapse>
          <div class="UserQuestion" @click="openAccordion(11)">
            <i :class=chevron[11] aria-hidden="true"></i>
            如何辦理退訂 / 退貨？
            </div>
          <collapse v-model="showAccordion[11]">
          <div class="UserAnswer">
            商品辦理退訂/退貨，請點選<a href="dHSHOP退換貨申請單.docx">《退購申請》</a>下載退換貨申請單填寫每個欄位後以email寄回<a href="mailto:cs.dhshop@gmail.com">客服信箱cs.dhshop@gmail.com</a>完成申請，審核通過後，我們將安排宅配公司與您聯繫，並於5個工作天內前往取貨。
            依《消費者保護法》的規定，消費者享有商品貨到日起七天猶豫期的權益。 但猶豫期並非試用期，所以，您所退回的商品必須是全新的狀態、而且完整包裝(含商品本體、配件、贈品、保證書、原廠包裝及所有附隨文件或資料的完整性)， 切勿缺漏任何配件、請勿自行拆解檢查商品或損毀原廠外盒。原廠外盒及原廠包裝都屬於商品的一部分，或有遺失、毀損或缺件，可能影響您退貨的權益，也可能依照損毀程度扣除為回復原狀所必要的費用。
          </div>
          </collapse>
          <div class="UserQuestion" @click="openAccordion(12)">
            <i :class=chevron[12] aria-hidden="true"></i>
            退款如何辦理？
            </div>
          <collapse v-model="showAccordion[12]">
          <div class="UserAnswer">
            如有退貨需求，請於鑑賞期內點擊<a href="dHSHOP退換貨申請單.docx">《退購申請》</a>下載退換貨申請單填寫每個欄位，填寫完畢後以email寄回<a href="mailto:cs.dhshop@gmail.com">客服信箱cs.dhshop@gmail.com</a>完成申請，審核通過後；我們將安排物流業者與您聯繫，並於七至十個工作日內完成商品回收作業。
            <br>退款金額計算公式如下： (原訂單金額)-(運費)-(退款手續費$30)=退款總額 退款將於退貨檢驗完成後的次月15日前匯至您的指定戶頭
          </div>
          </collapse>
          <div class="UserQuestion" @click="openAccordion(13)">
            <i :class=chevron[13] aria-hidden="true"></i>
            哪些商品，不適用「7日內退貨」？
            </div>
          <collapse v-model="showAccordion[13]">
          <div class="UserAnswer">
            1、容易腐敗、保存期限較短或解約時快到期的商品。（商品時限）<br> 2、依消費者要求所做的客製化給付。
            <br> 3、報紙、期刊或雜誌。（智慧財產權）
            <br> 4、經消費者拆封的影音商品或電腦軟體。（智慧財產權）
            <br> 5、不是用有形媒介提供的數位內容，或是一經提供就完成的線上服務，經過消費者事先同意始提供。
            <br> 6、已拆封的個人衛生用品。
            <br> 7、國際航空客運服務。
            <br>
          </div>
          </collapse>
          <div class="UserQuestion" @click="openAccordion(14)">
            <i :class=chevron[14] aria-hidden="true"></i>
            七日內換貨說明
            </div>
          <collapse v-model="showAccordion[14]">
          <div class="UserAnswer">
            ●若商品因消費者個人不當拆卸使用而造成故障、損毀、擦傷、刮傷、髒污或包裝破損不完整，以致無法再銷售者，請恕無法接受換貨。 <br> ● 因每台電腦螢幕解析度不同，網站照片有時會與實際商品發生色差問題，更換標準仍需依廠商判定後為主。
            <br> ● 若您因個人因素換貨，可能需自行負擔換貨所產生之運費、匯款手續費等相關費用。 <br> ● 維修更換申請超過七天鑑賞期，需自行負擔部分維修、零件更換、寄送更換…等費用(保固商品除外)。
          </div>
          </collapse>
        </div>

        <div class="col-md-6">
          <div class="usercentertitle">保固/維護</div>          
          <div class="UserQuestion" @click="openAccordion(15)">
            <i :class=chevron[15] aria-hidden="true"></i>
            商品保固期多久？又如何保固、維修？
            </div>
          <collapse v-model="showAccordion[15]">
          <div class="UserAnswer">
            在dHSHOP訂購之商品，商品主體、配件及贈品之維修保固以原廠規定為主，(不過有關著作權法CD、VCD、DVD和耗材品等為無保固)。若所訂購的商品，日後有任何問題，請寄信至客服信箱，我們將有專人為你服務。
          </div>
          </collapse>
        </div>
        <div class="col-md-6">
          <div class="usercentertitle">聯絡我們</div>
          <div class="UserQuestion" @click="openAccordion(16)">
            <i :class=chevron[16] aria-hidden="true"></i>
            線上客服
            </div>
          <collapse v-model="showAccordion[16]">
          <div class="UserAnswer">
            dHSHOP 客服中心<br> 客服電話:0978-606871 <br> 客服信箱:
            <a href="mailto:cs.dhshop@gmail.com">cs.dhshop@gmail.com </a><br> 服務時間:周一至周五 am 9:00 - pm 21:00 <br>
          </div>
          </collapse>
          <div class="UserQuestion" @click="openAccordion(17)">
            <i :class=chevron[17] aria-hidden="true"></i>
            業務合作洽談
            </div>
          <collapse v-model="showAccordion[17]">
          <div class="UserAnswer">
            感謝您對dHSHOP好品點一下的支持與讚賞，也歡迎您加入我們合作廠商的行列。 請先準備商品資訊介紹、圖片與貴公司簡介和聯繫方式，寄到我們的
            <a href="mailto:cs.dhshop@gmail.com">客服信箱cs.dhshop@gmail.com</a>，信件主旨：業務合作，收到相關資訊後會轉交業務單位。
          </div>
          </collapse>
        </div>
        <div class="col-md-6">
          <div class="usercentertitle">dHSHOP政策</div>
          <div class="UserQuestion" @click="openAccordion(18)">
            <i :class=chevron[18] aria-hidden="true"></i>
            個資權益宣告
            </div>
          <collapse v-model="showAccordion[18]">
          <div class="UserAnswer">
            為了落實法令遵循，本公司依據個人資料保護法（以下稱個資法）第八條規定，向您告知本公司依法蒐集您的個人資料時，必須告知的各款事項，請您務必詳閱：<br> 1. 您的個人資料是提供給運嘉國際有限公司（下稱本公司）。<br>2.
            本公司蒐集及利用您的個人資料為商品配送、消費者客戶管理與服務、行銷及其他合於營業 　登記項目或章程所定業務之需要。
            <br>3. 本公司蒐集您的個人資料類別包含足以辨識個人/財務（如公司名稱、電話、信用卡號碼等）及 　特徵類（統一編號）等之資料。
            <br>4. 有關您的個人資料，本公司使用於台灣地區，且使用對象包含會員於訂購商品或銷退商品之收 　、送貨得委託供應商或物流業者進行配送等服務；有關您的個人資料利用期間，本公司為提供 　您相關服務（包括但不限於交易之查詢、退換貨及售後服務等），將於營運期間使用，並依法令
            　所訂保存年限規定（ex.商業會計法）履行。
            <br>5. 惟當您要求刪除個人資料時，本公司將先凍結該資料與其歷史訂單記錄，並禁止員工對該資料 　進行因行銷目的之蒐集、處理、利用，並於法令規定之保存期間屆滿後進行刪除。
            <br>6. 依據個資法第三條規定，您可以向本公司行使以下權利： 　(1)查詢或請求閱覽。 　(2)請求製給複製本。 　(3)請求補充或更正。 　(4)請求停止蒐集、處理或利用。 　(5)請求刪除。 　 　 但查詢或請求閱覽個人資料或製給複製本者，本公司得酌收必要成本費用每件NT60元。
          </div>
          </collapse>
          <div class="UserQuestion" @click="openAccordion(19)">防詐騙宣導</div>
          <collapse v-model="showAccordion[19]">
          <div class="UserAnswer" >提醒您：dHSHOP絕不會以任何理由，要求您操作ATM！ <br> 預防詐騙，請您留意以下相關事項： <br> 勿聽信可疑電話操作ATM
            <br> 詐騙集團可能以簽單分期須取消設定、退款、查詢餘額…等理由，要求會員至提款機操作英文介面。
            <br> 請注意：ATM僅會將您的錢轉出，無法取消分期設定、轉入退款…等。dHSHOP絕不會任意變更訂單的付款方式，請您務必小心！ <br> 勿隨意提供任何金融資料
            <br> dHSHOP絕不會以電話形式，要求您提供往來銀行、金融卡、信用卡資料，更不會以「中獎」、「問券調查」等名目要求您提供個人資料。 </div>
          </collapse>
        </div>
        

      </div>
    </div>
  </div>
</template>
<script>
import { Collapse } from 'uiv'
let Qarr = new Array(20)
Qarr.fill(false)
let cssarr = new Array(20)
cssarr.fill('fa fa-chevron-right chColor')
export default {
  components: {
    Collapse
  },
  data() {
    return {
      showAccordion: Qarr,
      chevron: cssarr
    }
  },
  methods: {
    openAccordion(id) {
      this.showAccordion[id] = !this.showAccordion[id]
      this.showAccordion = this.showAccordion.map(v => v)
      if(this.showAccordion[id] === true) {
        this.chevron[id] = 'fa fa-chevron-down chColor'
      }else{
        this.chevron[id] = 'fa fa-chevron-right chColor'
      }
      this.chevron = this.chevron.map(v => v)
    }
  }
}
</script>
<style scopped>
 .usercentertitle{
    color: #FF8000;
    font-size: 2.5rem;
    line-height: 3rem;
    font-weight: 700;
 }
 .UserQuestion{
    color: #000;
    font-size: 1.6rem;
    line-height: 4rem;
    margin: 0.3rem;
    cursor: pointer;
 }
 .UserAnswer{
    font-size: 1.4rem;
    margin: 1rem;
    color: #999;
 }
 .chColor{
   color: #FFc442;
 }
</style>

