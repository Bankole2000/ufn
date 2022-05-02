<template>
  <div class="home">
    <Jumbotron />
    <MainValues />
    <IntroBlock />
    <WhyInfertility />
    <Causes />
    <CanI />
    <FemaleFertility />
    <MaleFertility />
    <WhyChooseUs />
    <MediaCarousel />
    <IngredientsList />
    <IngredientCarousel />
    <Testimonials />
    <PurchaseForm />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Jumbotron from "@/components/blocks/Jumbotron.vue";
import Jumbotron from "@/components/blocks/Jumbotron.vue";
import MainValues from "../components/blocks/MainValues.vue";
import IntroBlock from "../components/blocks/IntroBlock.vue";
import Footer from "../components/blocks/Footer.vue";
import WhyInfertility from "../components/blocks/WhyInfertility.vue";
import Causes from "../components/blocks/Causes.vue";
import CanI from "../components/blocks/CanI.vue";
import WhyChooseUs from "../components/blocks/WhyChooseUs.vue";
import MaleFertility from "../components/blocks/MaleFertility.vue";
import FemaleFertility from "../components/blocks/FemaleFertility.vue";

import MediaCarousel from "../components/blocks/MediaCarousel.vue";
import IngredientsList from "../components/blocks/IngredientsList.vue";
import IngredientCarousel from "../components/blocks/IngredientCarousel.vue";
import PurchaseForm from "../components/forms/PurchaseForm.vue";
import Testimonials from "../components/blocks/Testimonials.vue";

export default {
  name: "Home",
  components: {
    Jumbotron,
    MainValues,
    IntroBlock,
    Footer,
    WhyInfertility,
    Causes,
    CanI,
    WhyChooseUs,
    MaleFertility,
    FemaleFertility,
    MediaCarousel,
    IngredientsList,
    IngredientCarousel,
    PurchaseForm,
    Testimonials,
  },
};
</script>,