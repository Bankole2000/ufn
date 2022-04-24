<template>
  <div class="causes my-16">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
          :class="{ 'px-8': !$vuetify.breakpoint.mdAndUp }"
        >
          <v-card elevation="0">
            <v-img src="@/assets/images/causes.jpeg">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="primary"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="6"
          :class="{ 'px-8': !$vuetify.breakpoint.mdAndUp }"
        >
          <v-card elevation="0">
            <div>
              <p class="headline mb-2">What could cause infertility?</p>
              <v-divider class="mb-4"></v-divider>
              <p class="mb-4 subtitle-2 font-weight-light">
                There a numerous factors affecting a woman's fertility level.
                These principally includes but not limited to the following:
              </p>
              <div>
                <v-expansion-panels accordion>
                  <v-expansion-panel v-for="(item, i) in causes" :key="i">
                    <v-expansion-panel-header>
                      <p class="title mb-0 text-capitalize">
                        {{ i + 1 }}. {{ item.title }}
                      </p>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      {{ item.text }}
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>
            </div>
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
      causes: [
        {
          title: "age factor",
          text: `The quality and quantity of a woman's eggs begin to decline with age advancement.
When to see the Doctor can depend on your age:
@Up to age 35, most doctors recommend trying to get pregnant for at least a year before testing or treatment.
@If you're between 35 and 40, discuss your concerns with your doctor after six months of trying.
@If you're older than 40, your doctor might suggest testing or treatment right away.`,
        },
        {
          title: "hormonal imbalance",
          text: `issue that prevents ovulation.`,
        },
        {
          title: "irregular menstrual cycle",
          text: `A menstrual cycle that's too long (35 days or more), too short (less than 21 days), irregular or absent can mean that you're not ovulating.`,
        },
        {
          title: "Endometriosis & Structural complications",
          text: `(problems with the fallopian tubes, uterus or ovaries): if you or your partner has a known medical history of fertility problems, or if you have a history of irregular or painful periods, pelvic inflammatory disease like PCOS and multiple fibroids, repeated miscarriages, cancerous degeneration, endometriosis.`,
        },
      ],
    };
  },
};
</script>

<style>
</style>