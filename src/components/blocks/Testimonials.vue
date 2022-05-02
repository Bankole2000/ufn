<template>
  <div class="testimonials">
    <v-container>
      <v-row>
        <v-col cols="12">
          <p class="headline mb-0">Testimonials And Media</p>
          <v-divider class="mb-4"></v-divider>
          <v-slide-group show-arrows>
            <v-slide-item v-for="(item, i) in items" :key="i">
              <!-- v-slot:default="{ active, toggle }" -->
              <div class="mx-8" style="max-height: 300px">
                <video
                  controls
                  height="300"
                  :src="require(`@/assets/videos/${item}.mp4`)"
                ></video>
              </div>
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
      items: [1, 2, 3, 4, 5, 6, 7, 8],
    };
  },
};
</script>

<style>
</style>