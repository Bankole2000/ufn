<template>
  <div class="why-choose-us my-16">
    <v-container>
      <v-row>
        <v-col cols="12" :class="{ 'px-8': !$vuetify.breakpoint.mdAndUp }">
          <v-card elevation="0">
            <p class="display-1 text-center">Why Choose Us?</p>
            <v-divider class="mb-4"></v-divider>
            <p class="text-h5">
              Our ULTIMATE FEMALE FERTILITY is often specially recommended
              because it has:
            </p>
            <v-expansion-panels>
              <v-expansion-panel v-for="(item, i) in values" :key="i">
                <v-expansion-panel-header>
                  <div class="d-flex align-center">
                    <v-icon color="primary" class="mr-4">{{
                      item.icon
                    }}</v-icon>
                    <p class="mb-0 text-h5">{{ item.title }}</p>
                  </div>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  {{ item.description }}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
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
      values: [
        {
          title: "Proven to be a major Fertility booster",
          description:
            "This unique blend of natural ingredients Provides essential vitamins and nutrients to support natural reproductive menstrual cycle + improves ovulation in Females.	Proven to promote hormonal balancing, natural fertility + conception and complete reproductive wellness. These concentrates are designed to support female fertility in totality. 15 individually-sealed bags with natural strawberry pomegranate flavor making it uniquely tasty + conveniently Providing on-the-go fertility support",
          icon: "mdi-check-decagram",
        },
        {
          title: "Rare natural INGREDIENTS in appropriate proportions",
          description:
            "Amongst the numerous constituting ingredients of our ULTIMATE FEMALE FERTILITY concentrate is made up of.",
          icon: "mdi-leaf",
        },
      ],
    };
  },
};
</script>

<style>
</style>