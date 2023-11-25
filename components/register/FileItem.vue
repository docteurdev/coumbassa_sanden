<template>
    <label class="cust-input" for="file-me">
        {{this.file? this.file.name : 'Transmettez une copie du bail'}} <q-icon name="attach_file" size="md" />
        <input @input="handleFile" type="file" name="" id="file-me">
      </label>
 </template>

 <script>
  export default{

    emits: ["handle-file"],

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
