<template>
  <div class="title">
      <h4 class="fs-3 fw-bold">MBTI</h4>
  </div>
  <div class="round-box space-box">
    <IntroMbtiChart/>
  </div>
</template>

<script>
  import IntroMbtiChart from './IntroMbtiChart';

  export default {
    name: 'IntroMbti',
    components: {
      IntroMbtiChart,
    },
  };
</script>

<style lang="scss" scoped>

</style>