<template>
  <div class="ingredients-list my-16">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card-title class="primary white--text headline">
            Female Fertility Ingredients
          </v-card-title>

          <v-expansion-panels accordion>
            <v-expansion-panel v-for="(item, i) in items" :key="i">
              <v-expansion-panel-header class="title"
                >{{ i + 1 }}. {{ item.title }}</v-expansion-panel-header
              >
              <v-expansion-panel-content>
                {{ item.description }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
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
        {
          title: "Natto",
          description:
            "This is boiled soybeans that have been fermented with a bacterium called Bacillus. natto is what the enzyme 'nattokinase' is extracted from. Soy is the only food from which nattokinase can be extracted. Nattokinase is a fibrinolytic enzyme. it enhances the body’s production of plasmin, the enzyme that dissolves and breaks down fibrin which aggravates many gynecological conditions and fertility health issues (some of which can contribute to infertility). Thereby being well known for providing relief to: abdominal cramps, menstrual headaches, period clots, high blood pressure, Uterine polyps and fibroids, Endometriosis, Blocked fallopian tubes, blood clotting concerns including Factor V Leiden, immunological infertility or chronic immune system weakness, fibrocystic breasts and others too numerous to enlist.",
        },
        {
          title: "White Peony",
          description:
            "White Peony is used to soothe painful menstruation, endometriosis, uterine fibroids and PCOS. It helps the circulation of blood to the pelvic area thereby improving conception levels. This is also able to increase the production of estrogen and progesterone. Also increases the sensitivity of the cell receptors of the sexual organs to hormonal stimuli, making the action of estrogen more effective. Very helpful in developing and maintainance of the reproductive system as part of the menstrual cycle, it helps adult females get pregnant.",
        },
        {
          title: "KELP",
          description:
            "Kelp contain the vitamins B.D.E and K all of which contribute to hormonal health and fertility not to mention it's iodine richness. The iodine in kelp helps boost the thyroid and assist in the correction of hypothyroidism which is one of the commonest causes of infertility and links directly with endemetriosis. The high fiber content is extremely important for proper blood sugar levels; which helps to handle PCOS. Fiber also helps to remove excess estrogen in the body; this is very important for fertility issues such as endometriosis, PCOS, ovarian cysts, and uterine fibroids, all of which are estrogen dominant conditions.",
        },
        {
          title: "Agnus Castus (chasteberry)",
          description:
            "This is well known to play a huge role in optimizing progesterone levels. chasteberry increases luteinizing hormone and inhibits the release of follicle stimulating hormone, which thus boosts the levels of progesterone production and improves the chances of getting pregnant and maintaining the pregnancy. responsible for promoting ovulation levels. It also encourages the production of corpus luteum. Chasteberry helps in healing fibroids, uterine cysts, and endometriosis. very helpful in preventing miscarriages. used to control and treat irregular menses. helps normalize menorrhagia (heavy menstrual flow) and amenorrhea (absent menses), and decreases polymenorrhea (very frequent periods). As it is capable of reducing inflammation of the uterus or the ovaries, it works well for women who are prone to painful fibroids and cysts. decrease the levels of prolactin which leads to increased chances of pregnancy.",
        },
        {
          title: "Red Raspberry Leaves",
          description:
            "red raspberry leaves which is a well venerated uterine tonic helps to increase the levels of progesterone, which may, in turn, enhance fertility. Additionally, red raspberry leaf has been shown to reduce inflammation and strengthen the uterine lining. aids in improving or maintaining healthy functioning of the reproductive organs. prevention of miscarriage, prevention of postdates pregnancy, decrease of discomfort in prodromal labor, and decrease of morning sickness.",
        },
        {
          title: "Black Cohosh (Actaea racemosa syn. Cimicifuga racemosa)",
          description:
            "Black cohosh (Actaea racemosa syn. Cimicifuga racemosa) has been demonstrated to have an estrogen-like effect on the central nervous system, and therefore may induce ovulation in women with PCOS. It is well known for its impact in female reproductive health. It helps eradicates PCOS thereby increasing the chances of achieving conception or pregnancy. black cohosh may decrease the size of uterine fibroids by up to 30%. Helps with Premenstrual syndrome (PMS) and premenstrual dysphoric disorder (PMDD).",
        },
        {
          title: "Nettle Leaf",
          description:
            "helps to promote fertility. Full of goodness, nettle leaves contain vitamins A, C, D and K. By sipping this tea, women also boost their levels of calcium, potassium, iron, and sulphur. It is also good for foetal health. Nettle has more chlorophyll than any other herb along with vitamin A, C, D, and K; calcium; potassium; phosphorus; and iron. Nettle is particularly beneficial for leg cramps and other muscle spasms because of the high calcium content. The vitamins in nettle increase the iron in the blood and reduce the risk of hemorrhage. It also strengthens the blood vessels, which reduces the risk of hemorrhoids, and increases the amount of breast milk a mother produces.",
        },
        {
          title: "Shatavari (Asparagus)",
          description:
            "This is extremely beneficial for women's reproductive health throughout all stages of their life. Research demonstrates that Shatavari roots can help promote the production of breast milk in lactating women, and support overall immunity. ideal for stress-induced and immune-mediated infertility. It helps promote conception but also goes on to support a healthy pregnancy. Clinical studies have also shown it increases the quality and quantity of milk flow in breastfeeding women. nourishes ovary and rejuvenates its functions by promoting growth and development of ovarian follicles, enhances ovulation, regulating menstrual cycle and revitalizing the female reproductive system",
        },
        {
          title: "Evening Primrose Oil - EPO",
          description:
            "evening primrose oil helps improve the quality of cervical mucus; cervical mucus is necessary for the sperm to find their way to the egg. It's suggested that you only take evening primrose oil up until ovulation, as it does have negative effects in early pregnancy. a natural source of Omega 6 fatty acids, it helps improve fertility. necessary for proper hormonal balance. Getting enough LA and GLA omega-6 EFAs through EPO supplementation ensures you are promoting healthy prostaglandin function.",
        },
        {
          title: "Cinnamon",
          description:
            "Well known to help jumpstart irregular menstrual cycles in women with polycystic ovarian syndrome (PCOS), boost menstrual flow, hence improving the opportunities of becoming pregnant. Cinnamon help women maintain their blood glucose levels by improving insulin resistance because ovulation and blood sugar levels are linked, so with lower blood shugar levels, increased chances of pregnancy.",
        },
      ],
    };
  },
};
</script>

<style>
</style>