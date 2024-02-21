<template>
  <section class="mainpage">
    <article class="section1__left">
      <IntroBanner/>
    </article>
    <article class="section1__right">
      <IntroProfile/>
    </article>
    <article class="section2__left">
      <IntroExperience :role="role"/>
    </article>
    <div class="section2__right">
      <article class="top">
        <IntroCodingSkill/>
      </article>
      <article class="middle">
        <PortfolioProject/>
      </article>
      <article class="bottom">
        <AnimationsArea/>
      </article>
    </div>
  </section>
  
</template>

<script>
  /* components */
  //introduction
  import IntroBanner from "../components/introduction/IntroBanner";
  import IntroProfile from "../components/introduction/IntroProfile";
  //import IntroMbti from "../components/introduction/IntroMbti";
  import IntroCodingSkill from "../components/introduction/IntroCodingSkill";
  import IntroExperience from "../components/introduction/IntroExperience";
  //portfolio
  import PortfolioProject from "../components/portfolio/PortfolioProject";

  //import AppContents from "../components/contents/AppContents";
  //AnimationsArea
  import AnimationsArea from "../components/animations/AnimationsArea";
  
  export default {
    name: 'LayerMain',
    data() {
      return {
        role: false,
      }
    },
    components: {
      IntroProfile,
      IntroBanner,
      PortfolioProject,
      //IntroMbti,
      IntroCodingSkill,
      IntroExperience,
      //AppContents,
      AnimationsArea,
    },
  }
</script>

<style lang="scss" scoped>
</style>