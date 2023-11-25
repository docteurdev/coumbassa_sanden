<template>
  <h1>TAXTECH ENREGISTREMENT FORFAIT 1</h1>
  <!-- <Modal  /> -->
  <div style="margin-top: 5rem;" v-if="submited">

    <Recu />
  </div>
  <div v-else class="form-wrapper" >

    <q-form class="q-gutter-m form" @submit.prevent="registerForfait(e)">
      <div class="input-text-bx" >
       <div class="num">
        <h4>01</h4>
       </div>
       <q-input
         filled
         class="input-text"
         type="text"
         v-model="contratNom"
         label="Saissisez l'intitulé de votre contrat"
         hint="REPONSE LIBRE"
       />
      </div>

      <CheckItem
      v-if="contratNom"
      @changing-input="question1"
      text="Votre contrat est - il déjà enregistré au centre des impôts"
      num="02"
      />
      <CheckItem
      v-if="reqTrueOne"
      @changing-input="question1"
      text="Si réponse oui, nous vous proposons d'assurer le rappel du renouvellement du bail et du renouvellement des formulaires d'enregistrement"
      num="03"
      
      />
      
      <div v-if="reqTrueOne" style="display: flex; align-items: center; gap: 15px;">

        <div class="num">
          <h4>04</h4>
         </div>
        <FileItem @handle-file="handleFile" />
      </div>

      <div v-if="reqTrueOne" class="btn-bx">
        <q-btn class="cust-btn" label="Payer votre forfait" type="submit"  color="primary"/>
      </div>
    </q-form>

  </div>
</template>
<style scoped>

.form-wrapper{
  /* border: 1px solid red; */
}

.form{
  /* border: 1px solid red; */
}

.cust-input input{
   display: none;
   cursor: pointer;
}

.cust-input {
   cursor: pointer;
   border: 1px solid #ad8e63;
   margin-left: -0.5rem !important;
   padding: 12px 20px;
   border-radius: 6px;
}

.btn-bx{
  text-align: right;
  padding-right: 1rem;
}

.cust-btn{
  width: 300px;
  padding: 15px 0;
  margin-top: 10px;
  background-color: #ad8e63 !important;
}

button.bg-primary:hover{
  background-color: #272727 !important;
}


h1{
  text-align: center;
  margin-top: 12rem;
}
.form{
  /* border: 1px solid red; */
  width: 800px;
  margin: 3rem auto;
}

.input-bx{
    width: 80%;
}

.input-text-bx{
  display: flex;
   align-items: center;
   gap: 15px;
}

.input-text{
  width: 94%;
}



.input-bx p{
    font-weight: 600;
}
.input-bx input{
    width: 100%;
  border: 2px solid #ccc;
  outline: none;
  padding: 12px;
  border-radius: 6px;
}


.num{
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: rgb(242 242 242);
  margin-left: -.5rem;
  margin-bottom: 1rem;
}

.input-text-bx .num {
  margin-bottom: 1.5rem;

}

.num h4{
  margin: 0;
}


/* media queries */

@media screen and  (max-width:860PX) {
  h1 {
   margin-top: .5rem;
  }

  .form{
    width: 80%;
  }

  .btn-bx{
  text-align: center;
  padding: 1rem 0;
}
.num{
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: rgb(242 242 242);
  margin-left: -.7rem;
  margin-bottom: 1rem;
}



.input-text-bx{
  flex-direction: column;
  align-items: flex-start;
}

.input-text-bx .num{
  margin-bottom: 3px;
}

}



</style>
<script>
import CheckItem from "../../components/register/CheckItem.vue";
import FileItem from "../../components/register/FileItem.vue";
import Modal from "../../components/Modal.vue"
import Recu from "../../components/Recu.vue"
import axios from "axios";
import { useQuasar } from 'quasar'

export default {
  // props:["onChanging-input"],
  components:{
    CheckItem,
    FileItem,
    Modal,
    Recu
  },
  data(){
    return{
     $q : useQuasar(),
     yes: true,
     no: false,
     //  registert
     reqTrueOne: null,
     reqTrueTwo: null,
     isModal: false,
     file: null,
     contratNom: "",
     submited: false
    }
  },
  methods:{

    question1(res) {
      console.log("isChecked",res);
      if(res.num =="02"){
        this.reqTrueOne = res.value;
        if(!res.value){
          this.$q.notify({
          color: "red",
          message: "Ce forfait ne vous convient pas",
          position: "top",
          icon: "report_problem",
          multiLine: true
        })
        }
      }else{
        this.reqTrueTwo = res.value

      }
      
    },
    handleFile(file){
      this.file = file;
       console.log(file);
    },
    
    registerForfait(){
      this.submited = true;
      return
      let data = new FormData();

      data.append('contratNom', this.contratNom);
      data.append('contratimpot', this.reqTrueOne);
      data.append('renovoBail', this.reqTrueTwo);
      data.append('bail', this.file);
      
      // const data ={
      //   data:{
      //     contratNom: this.contratNom,
      //     contratimpot: this.reqTrueOne,
      //      renovoBail: this.reqTrueTwo,
      //      bail: this.file
      //   }
      // }
      // formData.append("data",data)
      axios
        .post("https://api.coumbassa-sanden.com/api/taxtechregisters", data)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  
}
</script>
