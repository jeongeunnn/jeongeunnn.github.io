<template>
  <div class="title">
    <h4 class="fs-3 fw-bold">Portfolio</h4><small>since 2019</small>
    <router-link :to="nav[1].url" class="title__btn">View all</router-link>
  </div>
  <div class="round-box space-box">
    <div>
      <swiper
        :breakpoints="swiperOptions.breakpoints"
        @swiper="onSwiper"
        @slideChange="onSlideChange">
        <swiper-slide
        v-for="(item, index) in reverseProject(projects)" :key="index">
          <ComponentCard :projects="item" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { mapState } from "vuex";

  // Import Swiper styles
  import 'swiper/css';

  //components
  import ComponentCard from "../ComponentCard";

  export default {
    name: 'PortfolioProject',
    data() {
      return {
        swiperOptions: {
          breakpoints: {       
            320: {       
              slidesPerView: 1.5,  
              spaceBetween: 4  
            }, 
            720: {       
              slidesPerView: 2.5,
              spaceBetween: 4     
            },    
            960: {       
              slidesPerView: 3.5,
              spaceBetween: 4     
            },  
            1200: {       
              slidesPerView: 3.5,       
              spaceBetween: 12     
            },
            1400: {       
              slidesPerView: 4.5,       
              spaceBetween: 12     
            }, 
          }
        }  
      } 
    },
    components: {
      Swiper,
      SwiperSlide,
      ComponentCard,
    },  
    computed: {
      ...mapState({
        projects: 'projects',
        nav: 'nav',
      })
    },
    methods: {
      reverseProject(data){
        Object.assign([], data)
        return [...data].reverse();
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>