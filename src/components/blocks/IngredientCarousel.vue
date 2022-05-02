<template>
  <div class="ingredients-carousel">
    <v-container>
      <v-row>
        <v-col cols="12">
          <p class="title mb-0">Ingredients Gallery</p>
          <v-divider class="mb-0"></v-divider>
          <v-slide-group
            v-model="model"
            class="pa-4"
            active-class="success"
            center-active
            show-arrows
          >
            <v-slide-item
              v-for="n in items"
              :key="n"
              v-slot:default="{ active, toggle }"
            >
              <v-card
                class="mx-4 mt-8 mb-16"
                width="250"
                height="250"
                @click="toggle"
                :elevation="active ? 24 : 0"
                :img="require(`@/assets/images/ingredients/${n}.jpeg`)"
                style="transition: all 0.3s ease"
                :style="{ transform: active ? 'scale(1.1)' : 'scale(1)' }"
              >
                &nbsp;
                <!-- <v-img
                  max-width="200"
                  :src="require(`@/assets/images/ingredients/${n}.jpeg`)"
                ></v-img> -->
              </v-card>
            </v-slide-item>
          </v-slide-group>
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
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22,
      ],
      model: 1,
    };
  },
  methods: {
    startSlides() {
      this.model++;
      if (this.model == 23) {
        this.model = 1;
      }
    },
  },
  mounted() {
    setInterval(() => {
      this.startSlides();
    }, 5000);
  },
};
</script>

<style>
</style>