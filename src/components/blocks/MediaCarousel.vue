<template>
  <div class="media-carousel">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card-title class="primary white--text headline">
            Ultimately Fertile Nation Gallery
          </v-card-title>
          <v-carousel continuous cycle>
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="require(`@/assets/images/media/${item}.jpeg`)"
              reverse-transition="fade-transition"
              transition="slide-x-transition"
            >
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    };
  },
};
</script>

<style>
</style>