<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          class="secondary white--text px-6 text-capitalize"
          :x-large="$vuetify.breakpoint.mdAndUp"
          >What's in this
          <v-icon v-if="$vuetify.breakpoint.mdAndUp" right
            >mdi-help-circle-outline</v-icon
          ></v-btn
        >
      </template>

      <v-card>
        <v-card-title class="secondary white--text">
          What is in Ultimate Male Fertility
        </v-card-title>

        <v-card-text class="pa-4">
          <v-list-item two-line v-for="(item, i) in items" :key="i">
            <v-list-item-content>
              <v-list-item-title> &middot; {{ item.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ item.text }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="secondary" text @click="dialog = false">Okay</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      items: [
        {
          title: "Blood Pressure reducer",
          text: "From Fractus Jujube",
        },
        {
          title: "Sperm Count improver",
          text: "Maca Root",
        },
        {
          title: "Inflammation reducer",
          text: "from Fructus Lycii",
        },
        {
          title: "Libido + Fertility enhancer",
          text: "from Radix Ginseng",
        },
      ],
    };
  },
};
</script>

<style>
</style>