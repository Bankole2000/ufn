<template>
  <div class="male-fertility my-16">
    <v-container>
      <v-row align="center">
        <v-col
          cols="12"
          md="6"
          :class="{ 'px-8': !$vuetify.breakpoint.mdAndUp }"
        >
          <v-hover v-slot:default="{ hover }">
            <v-card
              :elevation="hover ? 16 : 2"
              style="transition: all 0.3s ease"
            >
              <v-img src="@/assets/images/MALE.jpg">
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      size="72"
                      color="secondary"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
        <v-col
          cols="12"
          md="6"
          :class="{ 'px-8': !$vuetify.breakpoint.mdAndUp }"
        >
          <v-card elevation="0" tile>
            <v-card-title class="secondary--text headline font-weight-bold">
              Ultimate Male Fertility
            </v-card-title>
            <v-card-text class="pb-2 pt-0">
              <p class="mb-4 text-h6">
                Still can't perform as a man? Worry no more!
              </p>
              <p v-for="(item, i) in items" :key="i" class="title mb-2">
                - {{ item }}
              </p>
            </v-card-text>
            <v-divider class="mb-4"></v-divider>
            <v-card-actions>
              <WhatMale />
              <HowMale />
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import HowMale from "../modals/HowMale.vue";
import WhatMale from "../modals/WhatMale.vue";
export default {
  components: { WhatMale, HowMale },
  data() {
    return {
      items: [
        "Restores fertility and vitality in men",
        "Enhance sex drive",
        "Boost and improves sperm count",
        "Improves sperm mobility",
        "Boost strength and endurance in men",
        "Boost sexual performance and sperm production",
      ],
    };
  },
};
</script>

<style>
</style>