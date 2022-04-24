<template>
  <div class="why-infertility my-8">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
          :class="{ 'px-8': !$vuetify.breakpoint.mdAndUp }"
        >
          <v-card elevation="0">
            <div>
              <p class="headline mb-2">Why Infertility</p>
              <v-divider class="mb-4"></v-divider>
              <p class="subtitle-2 text-justify font-weight-light">
                fertility is the ability of an individual or couple to reproduce
                through normal sexual activity. About 90 percent of healthy,
                fertile women are able to conceive within one year if they have
                intercourse with their healthy male partner regularly without
                contraception. While In contrast to the foregoing, infertility
                is inability to get pregnant as a woman or inability of a man to
                impregnate a woman which is a major challenge as it poses a
                difficulty in couples achieving conception and rubs most women
                the joy of motherhood. Essentially, Infertility is diagnosed in
                couples trying to get pregnant with frequent, unprotected sexual
                intercourse for at least a year with no success most
                inclusively, some couples who have been able to get pregnant at
                least once before, but now are unable to conceive over the
                years. It is important to state that Infertility may results
                from female factors as well as male factors. The cause is mostly
                a combination of male and female factors in the majority cases.
              </p>
            </div>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="6"
          :class="{ 'px-8': !$vuetify.breakpoint.mdAndUp }"
        >
          <v-card>
            <v-img src="@/assets/images/whyInfertility.jpeg"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>