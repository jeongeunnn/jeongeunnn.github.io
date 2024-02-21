<template>
  <div class="title">
    <h4 class="fs-3 fw-bold">Experience</h4>
  </div>
  <div class="round-box space-box">
    <IntroExperienceElem :role="role" />
  </div>
</template>

<script>
  import IntroExperienceElem from "./IntroExperienceElem";

  export default {
    name: 'IntroExperience',
    props: {
      role: Boolean
    },
    components: {
      IntroExperienceElem,
    },
  }
</script>

<style lang="scss" scoped>

</style>