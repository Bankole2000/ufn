<template>
  <div class="female-fertility my-16">
    <v-container>
      <v-row align="center">
        <v-col
          cols="12"
          order-md="2"
          md="6"
          :class="{ 'px-8': !$vuetify.breakpoint.mdAndUp }"
        >
          <v-hover v-slot:default="{ hover }">
            <v-card
              :elevation="hover ? 16 : 2"
              style="transition: all 0.3s ease"
            >
              <v-img src="@/assets/images/FEMALE.jpeg">
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
          order-md="1"
          md="6"
          :class="{ 'px-8': !$vuetify.breakpoint.mdAndUp }"
        >
          <v-card elevation="0" tile>
            <v-card-title class="primary--text headline font-weight-bold">
              Ultimate Female Fertility
            </v-card-title>
            <v-card-text class="pb-2 pt-0">
              <p class="mb-4 text-h6">
                You can overcome infertility with this!
              </p>
              <p v-for="(item, i) in items" :key="i" class="title mb-2">
                - {{ item }}
              </p>
            </v-card-text>
            <v-divider class="mb-4"></v-divider>
            <v-card-actions>
              <v-btn
                class="primary white--text px-6 text-capitalize"
                :x-large="$vuetify.breakpoint.mdAndUp"
                >What's in this
                <v-icon v-if="$vuetify.breakpoint.mdAndUp" right
                  >mdi-help-circle-outline</v-icon
                ></v-btn
              >
              <v-btn
                text
                color="primary"
                class="text-capitalize px-6"
                :x-large="$vuetify.breakpoint.mdAndUp"
                >How to take
                <v-icon v-if="$vuetify.breakpoint.mdAndUp" right
                  >mdi-chevron-right-circle-outline</v-icon
                ></v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        "Restores, supports and increase fertility",
        "Promotes and supports entire reproductive health",
        "Restores ovulation",
        "Unblocks fallopian tube",
        "Restores female hormonal balance",
        "Shrinks fibroid naturally",
        "Increases chances of conceiving",
        "Regulates menstrual cycle",
      ],
    };
  },
};
</script>

<style>
</style>