<template>
  <!-- skip nav-->
  <div id="skipnavigation">
    <a href="/"> 메인 바로가기</a>
    <a href="/introduction">About Me 바로가기</a>
    <a href="/portfolio">Portfolio 바로가기</a>
    <a href="/animations/0">Wave Effect 바로가기</a>
    <a href="/animations/1">Particle Effect 바로가기</a>
    <a href="/animations/2">Mouse Effect 바로가기</a>
    <a href="/animations/3">Image Effect 바로가기</a>
  </div>
  <LayerSideBar v-if="hideAllElems" />
  <div id="container" v-if="hideAllElems">
    <LayerHeader :isNav="isNav" />
    <main>
      <router-view></router-view>
    </main>
    <footer>
      ©2021 Jeungeun. All Rights Reserved.
    </footer>
    <LayerModal :modal="modal"/>
  </div>
  <router-view v-if="hideSpecificElem"></router-view>
</template>

<script>
  //components
  import LayerSideBar from "./layer/LayerSideBar";
  import LayerHeader from "./layer/LayerHeader";
  import LayerModal from "./layer/LayerModal";

  //vuex
  import { mapState } from "vuex";
  
  export default {
    name: 'App',
    components: {
      LayerSideBar,
      LayerHeader,
      LayerModal
    },
    computed: {
      hideSpecificElem(){
        return this.$route.meta.hideSpecificElem != true;
      },
      hideAllElems(){
        return this.$route.meta.hideAllElems != true;
      },
      ...mapState({
        modal: 'modal',
      })
    },
    watch: {
      '$route' () {
        if(this.$route.meta.hideAllElems){
          document.querySelector('html').classList.add('for-only-element');
        }else{
          document.querySelector('html').classList.remove('for-only-element');
        }
      }
    },
  }
</script>

<style lang="scss">
  
</style>