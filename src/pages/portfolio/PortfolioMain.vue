<template>
  <ComponentTop/>
  <h5 class="fs-3 fw-bold">{{ nav[1].subTitle[0] }}</h5>
  <section class="subpage">
    <ul class="row g-4">
      <li :class="cName"
      v-for="(item, index) in reverseProject(projects)" :key="index">
        <ComponentCard :projects="item"/>
      </li>
    </ul>
  </section>
</template>

<script>
  import ComponentCard from "../../components/ComponentCard";
  import ComponentTop from "../../components/ComponentTop";

  import { mapState } from "vuex";

  export default {
    name: 'ProjectListPage',
    data() {
      return {
        cName: '',
      }
    },
    components: {
      ComponentCard,
      ComponentTop
    },
    computed: {
      ...mapState({
        projects: 'projects',
        nav: 'nav',
      }),
    },
    created() {
      this.checkSize();
      window.addEventListener("resize", this.checkSize);
    },
    unmounted() {
      window.removeEventListener("resize", this.checkSize);
    },
    methods: {
      checkSize(){
        const ww = document.body.clientWidth;
        if(ww >= 1400){
          this.cName = 'col-xxl-2';
        }else if(ww < 1400 && ww >= 1200){
          this.cName = 'col-xl-3';
        }else if(ww < 1200 && ww >= 992){
          this.cName = 'col-lg-4';
        }else if(ww < 992 && ww >= 768){
          this.cName = 'col-md-6';
        }
      },
      reverseProject(data){
        Object.assign([], data)
        return [...data].reverse();
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>