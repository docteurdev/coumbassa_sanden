<template>
  <div class="checked-item" >
   <div class="num">
     <h4> {{ order }} </h4>

   </div>
     <p> {{text}} </p>
     <div class="checked-input" >

       <q-checkbox v-if="oneCheck" v-model="no" @update:model-value="handleChangeNo"   />
       <div v-else class="checked-input">
           <div class="">
             <p>OUI</p>
             <q-checkbox v-model="yes" @update:model-value="handleChange"  />
           </div>
           <div class="">
             <p>NON</p>
             <q-checkbox v-model="no" @update:model-value="handleChangeNo"   />
           </div>
       </div>

     </div>
   </div>
   <!-- <div>

</div> -->
</template>
<style scoped>

.checked-item{
display: flex;
align-items:center ;
justify-content: space-between;
/* background-color: red; */
height: 60px;
gap: 6px;
margin-bottom: 1rem;
margin-left: -1rem;
padding-left: 6px;
}

.num{
width: 8%;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
background-color: rgb(242 242 242);
}

.num h4{
margin: 0;
}

.checked-item p{
margin: 0;
text-align: left;
width: 80%;
}

.checked-item .checked-input{
display: flex;
align-items: center;
width: 18%;
}

.checked-item .checked-input > div{
margin: 10px;
text-align: center;
padding: 10px;
}

@media screen and  (max-width:860px) {
.checked-item {
 display: block;
 /* border: 1px solid red; */
 height: auto;
 margin-left: -10px !important;
 padding-left: 0px;
}

.num{
 width: 60px;
}

.checked-item p{
width: 100%;
}



}

</style>
<script>

export default{
 emits: ['changing-input',], // Declare custom events here
 props:{
     text: {type: String, required: true},
     num: {type: String, required: true},
     order: {type: String, required: true},
     oneCheck: {type: Boolean , required: false},
 },

 data(){
   return{
     yes: false,
     no: false,
     isChecked:  false
   }
 },
 methods:{
   handleChange(){
     console.log("ysessss", this.num);
       this.yes = this.yes;
       this.no = false
       this.isChecked = true
      this.$emit('changing-input', {value: this.isChecked, num:this.num})
   },
   handleChangeNo(){
     this.no = this.no
     this.yes = false;
     this.isChecked = false

      this.$emit('changing-input', {value: this.isChecked, num:this.num })
   }
 }
}
</script>
