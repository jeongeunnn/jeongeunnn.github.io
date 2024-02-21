<template>
  <div class="title">
      <h4 class="fs-3 fw-bold">Design Skills</h4>
  </div>
  <div class="round-box space-box">
    <IntroDesignSkillChart/>
  </div>
</template>

<script>
  //chart.js
  import IntroDesignSkillChart from './IntroDesignSkillChart'

  export default {
    name: 'IntroDesignSkill',
    components: {
      IntroDesignSkillChart,
    },
  };
</script>

<style lang='scss' scoped>

</style>