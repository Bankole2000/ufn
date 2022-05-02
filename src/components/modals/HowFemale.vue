<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          text
          color="primary"
          class="text-capitalize px-6 mx-4"
          :x-large="$vuetify.breakpoint.mdAndUp"
          >How to take
          <v-icon v-if="$vuetify.breakpoint.mdAndUp" right
            >mdi-chevron-right-circle-outline</v-icon
          ></v-btn
        >
      </template>

      <v-card>
        <v-card-title class="primary white--text">
          How to take Ultimate Female Fertility
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
          <v-btn color="primary" text @click="dialog = false">Okay</v-btn>
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
          text: "Put 1 teabag in cup",
        },
        {
          title: "Step 2",
          text: "Pour in fresh boiling water and allow to stand for 3-5 minutes",
        },
        {
          title: "Step 3",
          text: "Drink before taking breakfast in the morning",
        },
      ],
    };
  },
};
</script>

<style>
</style>