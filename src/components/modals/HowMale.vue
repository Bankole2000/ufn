<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          text
          color="secondary"
          class="text-capitalize px-6 mx-4"
          :x-large="$vuetify.breakpoint.mdAndUp"
          >How to take
          <v-icon v-if="$vuetify.breakpoint.mdAndUp" right
            >mdi-chevron-right-circle-outline</v-icon
          ></v-btn
        >
      </template>

      <v-card>
        <v-card-title class="secondary white--text">
          How to take Ultimate Male Fertility
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
          title: "Step 1",
          text: "Carefully cut open a sachet of male fertility formulae",
        },
        {
          title: "Step 2",
          text: "Empty Contents into hot water",
        },
        {
          title: "Step 3",
          text: "Stir with tea spoon continuously for 5 - 10 minutes",
        },
        {
          title: "Step 4",
          text: "Drink content while warm",
        },
      ],
    };
  },
};
</script>

<style>
</style>