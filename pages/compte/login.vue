<template>
  <section class="contact-page-section">
    <div class="auto-container">
      <div class="inner-container">
        <h2 class="text-center">Login</h2>
        <div class="row clearfix">

          <!-- Info Column -->
<!--          <div class="info-column col-lg-7 col-md-12 col-sm-12">-->
<!--            <div class="inner-column">-->
<!--              <div class="text">Please contact us using the information below. For additional information on our management consulting services, please visit the appropriate page on our site.</div>-->
<!--              <ul class="list-style-five">-->
<!--                <li><span class="icon fa fa-building"></span> RCI Abidjan Zone 4</li>-->
<!--                <li><span class="icon fa fa-fax"></span> +1 617 572 2000</li>-->
<!--                <li><span class="icon fa fa-envelope-o"></span>contact@coumbassa-sanden.com</li>-->
<!--              </ul>-->
<!--            </div>-->
<!--          </div>-->

          <!-- Form Column -->
          <div class="form-column offset-lg-3 col-lg-6 col-md-12 col-sm-12">
            <div class="inner-column">

              <!--Contact Form-->
              <div class="contact-form">
                <form method="post" action="sendemail.php" id="contact-form">

                  <div class="form-group">
                    <input type="text" name="firstname" value="" placeholder="Full name" required>
                  </div>

                  <div class="form-group">
                    <input type="text" name="email" value="" placeholder="Email" required>
                  </div>

                  <div class="form-group">
                    <select class="custom-select-box">
                      <option>Select topic</option>
                      <option>Topic One</option>
                      <option>Topic Two</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <textarea name="message" placeholder="write.."></textarea>
                  </div>

                  <div class="form-group">
                    <button type="submit" class="theme-btn ">Envoyer</button>
                  </div>

                </form>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

</template>
