<template>

  <section class="contact-page-section">

    <div class="auto-container">
      <div class="inner-container">
        <!--        <h2>Contactez le support ou prenez rendez-vous <br> avec <span>un expert</span></h2>-->
        <div v-html="pages?.part1"></div>
        <div class="row clearfix">

          <!-- Info Column -->
          <div class="info-column col-lg-7 col-md-12 col-sm-12">
            <div class="inner-column">
              <h3 v-html="pages?.part2"></h3>
              <!--              <div class="text">-->
              <!--                Veuillez nous contacter en utilisant les informations ci-dessous. Pour plus d'informations-->
              <!--                sur nos services de conseil en gestion, veuillez visiter la page appropriée sur notre site.-->
              <!--              </div>-->
              <!--              <ul class="list-style-five">-->
              <!--                <li><span class="icon fa fa-building"></span> RCI Abidjan Zone 4</li>-->
              <!--                <li><span class="icon fa fa-fax"></span> +225 07 48 55 55 58</li>-->
              <!--                <li><span class="icon fa fa-envelope-o"></span>contact@coumbassa-sanden.com</li>-->
              <!--              </ul>-->
            </div>
          </div>

          <!-- Form Column -->
          <div class="form-column col-lg-5 col-md-12 col-sm-12">
            <div class="inner-column">

              <!--Contact Form-->
              <div class="contact-form">

                <!--                <form method="post" action="sendemail.php" id="contact-form" @submit.prevent="sendForm()">-->
                <form method="post" id="contact-form" @submit.prevent="sendForm()">


                  <div class="form-group">
                    <input v-model="myform.name" type="text" placeholder="Nom Complet">
                  </div>

                  <div class="form-group">
                    <input v-model="myform.email" type="text" name="email" placeholder="Email">
                  </div>

                  <div class="form-group">
                    <select v-model="myform.subject" class="custom-select-box">
                      <option value="Sujet">Sujet</option>
                      <option value="consultation">Consultation en ligne</option>
                      <option value="rdv">Rendez-vous</option>
                      <option value="autres">Autres</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <input class="form-control" v-if="myform.subject === 'rdv' || myform.subject === 'consultation'"
                           v-model="myform.start" type="datetime-local" name="start" placeholder="Date et Heure RDV"
                           style="border-radius: 0px;background: #e7e1d7">
                  </div>

                  <div class="form-group">
                    <textarea v-model="myform.description" name="message" placeholder="Votre message.."></textarea>
                  </div>

                  <VueClientRecaptcha
                      count="8"
                      :value="inputValue"
                      @getCode="getCaptchaCode"
                      @isValid="checkValidCaptcha"
                  />
                  <div class="form-group">
                    <input placeholder="Recopiez le code Captcha" name="captcha" type="text" v-model="inputValue" />
                  </div>

                  <div class="form-group">
                    <button type="submit" class="theme-btn" :disabled="!myformStatus">Envoyer</button>
                  </div>

                </form>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
  <!-- End Team Page Section -->

  <!-- Contact Info Section -->
  <section class="contact-info-section" style="background-image:url('/images/background/10.jpg')">
    <div class="auto-container">
      <div class="row clearfix">

        <div class="column col-lg-4 col-md-6 col-sm-12">
          <h4>Email</h4>
          <ul class="list-style-six">
            <li><span class="icon flaticon-e-mail-envelope"></span>contact@coumbassa-sanden.com</li>
          </ul>
        </div>
        <div class="column col-lg-4 col-md-6 col-sm-12">
          <h4>Téléphone</h4>
          <ul class="list-style-six">
            <li>
              <span class="icon flaticon-phone-receiver"></span>
              +(225) 07 10 10 29 43
            </li>
          </ul>
        </div>
        <div class="column col-lg-4 col-md-6 col-sm-12">
          <h4>Adresse</h4>
          <ul class="list-style-six">
            <li><span class="icon flaticon-map-1"></span> RCI Abidjan Zone 4</li>
          </ul>
        </div>

      </div>

    </div>
  </section>
  <!-- End Contact Info Section -->
</template>

<script setup>
import VueClientRecaptcha from "vue-client-recaptcha";

useHead({
  title: 'Contacts',
})
const runtimeConfig = useRuntimeConfig()
const api = runtimeConfig.public.api
const apiRoot = runtimeConfig.public.apiRoot

const subject = ref('')
const myform = ref({subject: 'Sujet'})
let myformStatus = ref(false)
const inputValue = ref(null);

const {data: pagesList} = await useFetch(() => api+'/blogpages/5')
const pages = pagesList.value['data']

async function sendForm() {
  // if(checkValidCaptcha) {
  //   console.log(myform.value)
  //   console.log(inputValue)
  // getCaptchaCode(inputValue)
    // console.log(checkValidCaptcha(inputValue))
    // console.log(getCaptchaCode(inputValue))
  // }
  // const res = useFetch(
  //     api+'/contacts',
  //     { method: 'POST', body: JSON.stringify({data: myform.value}) }
  // )
  // console.log(res);
}


const getCaptchaCode = (value) => {
  console.log(value);
  return value
};
const checkValidCaptcha = (value) => {
  console.log(value);
  myformStatus.value = value
  return value
};


</script>