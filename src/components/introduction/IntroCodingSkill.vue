<template>
  <div class="title">
      <h4 class="fs-3 fw-bold">Coding Skills</h4>
  </div>
  <div class="round-box space-box">
    <IntroCodingSkillChart/>
  </div>
</template>

<script>
  //chart.js
  import IntroCodingSkillChart from './IntroCodingSkillChart'

  export default {
    name: 'IntroCodingSkill',
    components: {
      IntroCodingSkillChart,
    },
  };
</script>

<style lang='scss' scoped>

</style>