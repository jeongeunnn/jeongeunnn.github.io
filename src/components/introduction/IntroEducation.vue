<template>
  <div class="title">
    <h4 class="fs-3 fw-bold">Education</h4>
  </div>
  <div class="round-box space-box">
    <IntroEducationElem />
  </div>
</template>

<script>
  import IntroEducationElem from "./IntroEducationElem";

  export default {
    name: 'IntroExperience',
    props: {
      role: Boolean
    },
    components: {
      IntroEducationElem,
    },
  }
</script>

<style lang="scss" scoped>

</style>