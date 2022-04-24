<template>
  <div class="home">
    <Jumbotron />
    <MainValues />
    <IntroBlock />
    <WhyInfertility />
    <Causes />
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

export default {
  name: "Home",
  components: {
    Jumbotron,
    MainValues,
    IntroBlock,
    Footer,
    WhyInfertility,
    Causes,
  },
};
</script>
