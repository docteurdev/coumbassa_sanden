<template>
  <div class="">

    <label class="cust-input" for="file-me">
        {{this.file? this.file.name : label? label : 'Transmettez une copie du bail'}} <q-icon name="attach_file" size="md" />
        <input @input="handleFile" type="file" name="" id="file-me"> 
      </label>
      <p class="text-danger">Types de formats acceptés (pdf, png, jpeg), taille maximale 5MO </p>
  </div>
 </template>

 <script>
  export default{

    emits: ["handle-file"],
    props:{
        label: {type: String, required: false},
    },
    data(){
    return{
      file: null
    }
  },
  methods:{
    handleFile(e){
      this.file =  e.target.files[0];
      this.$emit("handle-file", this.file)
    }
  }
  }
</script>

<style scoped>

.cust-input input{
 display: none !important;

}
.cust-input {
  border: 1px solid #ad8e63;
  padding: 12px 20px;
  border-radius: 6px;

}

@media screen and  (max-width:860PX) {

.cust-input {
   cursor: pointer;
   border: 1px solid #ad8e63;
   /* margin-left: -0.5rem !important; */
   padding: 12px 20px;
   border-radius: 6px;
}

  /* file input */

  .cust-input{
    width: 80%;
  }

  .cust-input i{
    float: right;
  }



  
}

  </style>
