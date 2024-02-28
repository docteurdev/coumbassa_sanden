<template>
  <h1>TAXTECH ENREGISTREMENT FORFAIT 3</h1>
  
  <div style="margin-top: 5rem;" v-if="submited">

    <Recu />
  </div>

  <div class="form-wrapper" v-else>
    <q-form class="q-gutter-m form" @submit.prevent="regesterForfait">
      <div class="input-text-bx">
        <div class="num">
          <h4>01</h4>
        </div>
        <q-input
          class="input-text"
          filled
          type="text"
          v-model="contratNom"
          label="Saissisez l'intitulé de votre contrat"
          hint="REPONSE LIBRE"
        />
      </div>

      <div v-if="contratNom" class="">

          <CheckItem
            @changing-input="question1"
            text="Votre contrat est -il déjà enregistré au centre des impôts?"
            num="02"
          />
          <CheckItem
          v-if="!reqTrueTwo"
            @changing-input="question1"
            text="Si réponse non à la question 2, la location porte t-elle uniquement sur la location d'un bien immobilier(Terrain, Bureaux, Hangars, Dépôts, etc.)?"
            num="03"
          />

          <div v-if="reqTrueThree" class="">
          
              <CheckItem
                @changing-input="question1"
                
                text="La location porte t-elle sur des éléments mobiliers et fonds de commerce?"
                num="04"
              />

             
              <CheckItem
                @changing-input="question1"
                
                text="Si réponse oui à la question 4, transmettre un contrat pour une simulation particulière?"
                num="05"
              />

               <!-- copie du bail -->
               <FileItem v-if="reqTrueFive" @handle-file="handleFile" />
          
              <div class="input-text-bx">
                <div class="num">
                  <h4>06</h4>
                </div>
                <q-input
                  filled
                  class="input-text input-date"
                  type="text"
                  v-model="duree"
                  label="Si réponse non à la question 4, quelle est la durée de la location?"
                />
              </div>
              <div class="input-text-bx">
                <div class="num">
                  <h4>07</h4>
                </div>
                <q-input
                  filled
                  class="input-text input-date"
                  type="date"
                  v-model="entree"
                  label="Date d'entrée dans les locaux"
                />
              </div>

              <div class="input-text-bx">
                <div class="num">
                  <h4>08</h4>
                </div>
                <q-input
                  filled
                  class="input-text input-date"
                  type="date"
                  v-model="dateSignature"
                  label="Date de signature du contrat de location"
                />
              </div>
        
              <div class="input-text-bx">
                <div class="num">
                  <h4>09</h4>
                </div>
                <q-input
                  filled
                  class="input-text"
                  type="text"
                  v-model="loyeran"
                  label="Quel est le loyer annuel?"
                  hint="REPONSE LIBRE"
                />
              </div>
              <CheckItem
                 @changing-input="question1"
                
                text="Souhaitez-vous que le cabinet C&S s'occoupe de faire enregistrer le contrat de bail au centre des impôts?"
                num="10"
              />
                <div v-if="reqTrueTen" class="">
          
                  <CheckItem
                     @changing-input="question1"
                    
                    text="Si oui à la question 10 transmettre le contrat"
                    num="11"
                  />
    
                  <CheckItem
                     @changing-input="question1"
                    
                    text="Payer votre forfait 3 vous recevez instantanément par email la liquidation des droits d'enregistrement"
                    num="12"
                  />
            
                  <CheckItem
                     @changing-input="question1"
                    
                    text="Calcul des droits et envoi par mail"
                    num="13"
                  />

                  <CheckItem
                     @changing-input="question1"
                    
                    text="Paiement des débours par le client"
                    num="14"
                  />
            
                  <CheckItem
                     @changing-input="question1"
                    
                    text="Enregistrement par C&S et transmission au client dans un délai indiqué par l'administration"
                    num="15"
                  />
                    
                  <div class="btn-bx">
                    <q-btn
                      class="cust-btn"
                      label="Payer votre forfait"
                      type="submit"
                      color="primary"
                      :disable="isloading"
                    />
                  </div>
                </div>
    
          </div>
    
    
    
        </div>  


        

    </q-form>
  </div>
</template>
<style scoped>
.form-wrapper {
  /* border: 1px solid red; */
}

.form {
  /* border: 1px solid red; */
}

.cust-input input {
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

.btn-bx {
  text-align: right;
  padding-right: 1rem;
}

.cust-btn {
  width: 300px;
  padding: 15px 0;
  margin-top: 10px;
  background-color: #ad8e63 !important;
}

h1 {
  text-align: center;
  margin-top: 12rem;
}
.form {
  /* border: 1px solid red; */
  width: 800px;
  margin: 3rem auto;
}

.input-bx {
  width: 80%;
}

.input-bx p {
  font-weight: 600;
}
.input-bx input {
  width: 100%;
  border: 2px solid #ccc;
  outline: none;
  padding: 12px;
  border-radius: 6px;
}

.num {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: rgb(242 242 242);
  margin-left: -0.6rem;
  margin-bottom: 1.5rem;
}

.input-text-bx {
  display: flex;
  align-items: center;
  gap: 15px;
}

.input-text {
  width: 94%;
}

.num h4 {
  margin: 0;
}

.input-date{
  /* border: 1px solid red; */
  margin-top: -12px;
}

/* media queries */

@media screen and (max-width: 860px) {
  h1 {
    margin-top: 0.5rem;
  }

  .form {
    width: 80%;
  }

  .btn-bx {
    text-align: center;
    padding: 1rem 0;
  }

  .input-text-bx {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1.5em;
  }

  .input-text {
    width: 100%;
  }

  .num {
    margin-bottom: -5px;
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

}
</style>
<script>
import axios from "axios";
import CheckItem from "../../components/register/CheckItem.vue";
import FileItem from "../../components/register/FileItem.vue";
import Recu from "../../components/Recu.vue"
import { useQuasar } from 'quasar'

export default {
  components: {
    CheckItem,
    FileItem,
    Recu
  },
  data() {
    return {
      yes: true,
      no: false,
      $q : useQuasar(),
      file: "",
      reqTrueTwo: null,
      reqTrueThree: null,
      reqTrueFour: null,
      reqTrueFive: null,
      reqTrueSix: null,
      reqTrueSeven: null,
      reqTrueEight: null,
      reqTrueNine: null,
      reqTrueTen: null,
      reqTrueeEleven: null,
      reqTrueTwelve: null,
      reqTrueThirtheen: null,
      reqTrueFourTeen: null,
      reqTrueFiften: null,
      //register fields
      contratNom: "",
      loyeran: "",
      duree:0,
      entree: 0,
      dateSignature: 0,
      isloading: false,
      submited: false
    };
  },
  methods: {
    handleFile(file){
      this.file = file;
       console.log(file);
    },
    toasted(label, icon, mgs, color, action, link){
      this.$q.notify({
          color:  color? color : null,
          message: mgs,
          position: "top",
          icon:icon? "report_problem" : "",
          multiLine: true,
          actions: action && [
           {label: label, color:"orange", round: true, handler: () => navigateTo(`/register/${link}`)},
           {icon: "close", color:"white", handler: () => null},
          ]
        })
    },
    question1(res) {
      switch (res.num) {
        case "02":
          this.reqTrueTwo = res.value;
          if(res.value){
            this.reqTrueThree = false;
            this.toasted("forfait 1", false,"Ce forfait ne vous convient pas, consultez le forfait 1.",false, true,"forfait1")
          }
          break;

        case "03":
          this.reqTrueThree = res.value;
          if(!res.value){
            this.toasted(" ", true,"Ce forfait ne vous est pas applicable.","red", false,)
          }
          break;

        case "04":
          this.reqTrueFour = res.value;
          break;
        case "05":
          this.reqTrueFive = res.value;

          break;
        case "06":
          this.reqTrueSix = res.value;
          break;

        case "07":
          this.reqTrueSeven = res.value;
          break;
        case "08":
          this.reqTrueEight = res.value;
          break;
        case "10":
          this.reqTrueTen = res.value;
          if(!res.value){
            this.reqTrueThree = false;
            this.toasted("forfait 2", false,"Ce forfait ne vous convient pas, consultez le forfait 2.",false, true,"forfait2")
          }
          break;
        case "11":
          this.reqTrueeEleven = res.value;
          break;
        case "12":
          this.reqTrueTwelve = res.value;
          break;
        case "13":
          this.reqTrueThirtheen = res.value;
          break;
        case "14":
          this.reqTrueFourTeen = res.value;
          break;
          case "15":
          this.reqTrueFiften = res.value;
          break;
      }
    },
    regesterForfait() {
     this.isloading = true
      const data = {
        data: {
          contratnom: this.contratNom,
          contratimpot: this.reqTrueTwo,
          immobilier:  this.reqTrueThree,
          mobilier: this.reqTrueFour,
          simulation: this.reqTrueFive,
          duree: this.duree,
          entree: this.entree,
          signature: this.dateSignature,
          loyeran: this.loyeran,
          loyermois: 0,
          paye: this.reqTrueFourTeen,
          agencework: this.reqTrueTwelve,
          transmitCLient: this.reqTrueFiften,
          calculdroit: this.reqTrueThirtheen
        },
      };
   
      axios
        .post("https://api.coumbassa-sanden.com/api/taxtechregisters", data)
        .then((res) => {
          console.log(res.data);
          if(res.data){
           this.isloading = false
           this.submited = true
          }
        })
        .catch((error) => {
          console.log(error);
          this.isloading = false

        });
    },

  },
};
</script>
