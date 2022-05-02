<template>
  <div class="main-values mt-n16 mb-16">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
          v-for="(item, i) in productTypes"
          :key="i"
          class="px-8"
        >
          <v-hover v-slot:default="{ hover }">
            <v-card
              tile
              style="transition: all 0.3s ease"
              :elevation="hover ? 24 : 2"
              :class="{ 'on-hover': hover }"
            >
              <v-img
                :aspect-ratio="576 / 401"
                :src="require(`@/assets/images/${item.image}`)"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="
                      d-flex
                      transition-fast-in-fast-out
                      secondary
                      display-2
                      white--text
                      justify-center
                      align-center
                    "
                    style="
                      height: 20%;
                      bottom: 0;
                      position: absolute;
                      width: 100%;
                      opacity: 0.5;
                    "
                  >
                    {{ item.type }}
                  </div>
                </v-expand-transition>
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      size="72"
                      color="primary"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              <v-card-actions
                v-if="!$vuetify.breakpoint.mdAndUp"
                class="primary white--text title"
              >
                {{ item.type }} Fertility Products
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productTypes: [
        {
          type: "Female",
          image: "FEMALE.jpeg",
          text: "",
        },
        {
          type: "Male",
          image: "MALE.jpg",
          text: "",
        },
        {
          type: "Universal",
          image: "GENERAL.jpg",
          text: "",
        },
      ],
    };
  },
};
</script>

<style>
</style>