<template>
  <div class="jumbotron">
    <div
      style="
        width: 100vw;
        height: 100vh;
        margin-top: -90px;
        padding-top: 90px;
        background-size: cover;
      "
      :style="{
        backgroundImage: `url(
          ${require('@/assets/images/jumbotronbackground.webp')}
        )`,
      }"
    >
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="8"
            :class="{ 'px-8': !$vuetify.breakpoint.mdAndUp }"
          >
            <div
              style="
                height: 80vh;
                display: flex;
                justify-content: center;
                flex-direction: column;
              "
            >
              <p class="headline">Welcome to</p>
              <p class="display-3">Ultimately Fertile Nation</p>
              <p class="headline">
                "<em>
                  Thou shalt be blessed above all people: For there shall be no
                  <strong>male</strong> or <strong>female</strong> barren in the
                  land</em
                >" <br />&nbsp; - (Deut 7: 14).
              </p>
              <div>
                <v-btn
                  depressed
                  :x-large="$vuetify.breakpoint.mdAndUp"
                  tile
                  href="https://wa.link/31q1jj"
                  target="_blank"
                  class="primary"
                  >Learn More</v-btn
                >
                <v-btn
                  depressed
                  :x-large="$vuetify.breakpoint.mdAndUp"
                  tile
                  href="tel:09082013666"
                  target="_blank"
                  class="mx-4 secondary"
                  >Contact Us</v-btn
                >
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="4"></v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>