<template>
  <div class="header">
    <v-app-bar
      :height="navbarHeight"
      elevate-on-scroll
      app
      color="transparent"
      class="py-0 ma-0"
    >
      <div
        :style="{ minHeight: `${navbarHeight}px` }"
        style="
          position: relative;
          display: flex;
          ailgn-items: center;
          width: 100%;
        "
        class="py-0"
      >
        <div
          style="
            position: absolute;
            left: 0;
            background-color: rgba(255, 255, 255, 0.5);
            top: 0;

            width: 100%;
            backdrop-filter: blur(5px);
          "
          :style="{ minHeight: `${navbarHeight}px` }"
        ></div>

        <div
          style="width: 100%; display: flex; align-items: center; z-index: 1"
          :style="{ height: `${navbarHeight}px` }"
          class="px-16"
        >
          <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
          <v-container
            style="display: flex; align-items: center"
            :style="{
              justifyContent: $vuetify.breakpoint.mdAndUp ? '' : 'center',
            }"
          >
            <div class="text-h4 d-flex align-center">
              <img
                src="@/assets/images/logo.png"
                contain
                :aspect-ratio="1"
                class="mr-4"
                height="50px"
              />
              <p v-if="$vuetify.breakpoint.mdAndUp" class="mb-0">
                <span class="primary--text font-weight-bold">Ultimately</span>
                <span class="info--text font-weight-bold">Fertile</span>
                <span class="secondary--text font-weight-bold">Nation</span>
              </p>
              <p v-else class="mb-0">
                <span class="primary--text font-weight-bold">U</span>
                <span class="info--text font-weight-bold">F</span>
                <span class="secondary--text font-weight-bold">N</span>
              </p>
            </div>
            <v-spacer v-if="$vuetify.breakpoint.mdAndUp"></v-spacer>

            <div class="d-flex align-center" v-if="$vuetify.breakpoint.mdAndUp">
              <v-btn
                v-for="(route, i) in navRoutes"
                exact-active-class="accent--text"
                exact-path
                :to="{ name: route.route }"
                text
                class="text-capitalize mx-2"
                :key="i"
              >
                {{ route.title }}
              </v-btn>
            </div>
            <!-- <v-spacer></v-spacer> -->
          </v-container>
        </div>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  data() {
    return {
      navRoutes: [
        { title: "Timeline", route: "pages.home" },
        { title: "Investors", route: "pages.investors" },
        { title: "Products", route: "pages.products" },
        { title: "Insights", route: "pages.insights" },
      ],
    };
  },
  computed: {
    // ...mapGetters({
    //   navbarHeight: 'ui/navbarHeight'
    // })
    navbarHeight() {
      return 90;
    },
  },
};
</script>

<style>
.v-toolbar__content {
  padding: 0px !important;
}
</style>