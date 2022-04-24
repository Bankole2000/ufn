<template>
  <div class="footer">
    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="primary" v-if="$vuetify.breakpoint.mdAndUp">
          <strong class="subheading">Contact us today</strong>

          <v-spacer></v-spacer>

          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            :href="icon.link"
            class="mx-4"
            target="_blank"
            dark
            icon
          >
            <v-icon size="24px">{{ icon.icon }}</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-title v-else class="primary justify-center">
          <v-btn
            :href="icon.link"
            target="_blank"
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            dark
            icon
          >
            <v-icon size="24px">{{ icon.icon }}</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} —
          <strong>Ultimately Fertile Nation</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: [
      { icon: "mdi-whatsapp", link: "https://wa.link/31q1jj" },
      { icon: "mdi-phone", link: "tel:09082013666" },
    ],
  }),
};
</script>

<style>
</style>