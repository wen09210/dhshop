<template>
  <div>
          <tabs ref="tabComponent" :justified="justified" v-model="tabIndex" >
          <tab title="<i class='fa fa-sign-in'></i>註冊"  :html-title="true">
           <mebRegister></mebRegister>
          </tab>
          <tab title="<i class='fa fa-search'></i> 訂單查詢" :html-title="true">
            <mebSearch></mebSearch>
          </tab>          
          <tab title="<i class='fa fa-pencil'></i> 會員資料修改" :html-title="true">
             <mebEdit></mebEdit>
          </tab>
        </tabs>
  
  
 
  </div>
</template>
<script>
  import { Tabs, Tab } from 'uiv'
  import mebRegister from './mebRegister.vue'
  import mebSearch from './mebSearch.vue'
  import mebEdit from './mebEdit.vue'
  export default {
    data() {
      return{
        tabIndex: 0,
        justified: true
      }
    },
    components: {
      Tabs,
      Tab,
      mebRegister,
      mebSearch,
      mebEdit
    }
  }
</script>
