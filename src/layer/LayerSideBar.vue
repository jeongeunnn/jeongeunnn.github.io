<template>
  <aside class="sideBar">
    <button 
      @click="handleLayer"
      class="sideBar__controler for-wide-screen" 
      type="button" 
      :title="closeControler"
    ></button>
    <!-- logo -->
    <div id="logo">
      <router-link to="/" title="Home">
        <!-- <img class="" :src="require(`@/assets/images/${logoSrc}`)" :alt="logoAlt"> -->
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="100%" 
          height="100%" 
          :viewBox="viewBox"
          preserveAspectRatio="xMinYMin meet"
        >
          <g transform="translate(-842 -16)">
            <path id="logo-text" d="M10.3.313A9.055,9.055,0,0,1,6.875-.312,7.918,7.918,0,0,1,4.227-2.031,7.7,7.7,0,0,1,2.516-4.617a8.452,8.452,0,0,1-.609-3.227v-.641a9.627,9.627,0,0,1,.648-3.625,8.6,8.6,0,0,1,1.734-2.75,7.463,7.463,0,0,1,2.531-1.75,7.744,7.744,0,0,1,3.039-.609,8.022,8.022,0,0,1,3.25.617,6.4,6.4,0,0,1,2.352,1.734,7.591,7.591,0,0,1,1.43,2.648,11.092,11.092,0,0,1,.484,3.359v1.578H5.656a5.576,5.576,0,0,0,.484,1.828A4.885,4.885,0,0,0,7.164-3.992a4.636,4.636,0,0,0,1.484.969,4.846,4.846,0,0,0,1.867.352,6.069,6.069,0,0,0,2.617-.562,5.16,5.16,0,0,0,1.945-1.547l2.031,1.906A6.2,6.2,0,0,1,16.063-1.7a7.277,7.277,0,0,1-1.5,1.016,9.053,9.053,0,0,1-1.93.719A9.424,9.424,0,0,1,10.3.313ZM9.844-14.2a3.725,3.725,0,0,0-1.453.281,3.664,3.664,0,0,0-1.2.82,4.753,4.753,0,0,0-.9,1.313,6.434,6.434,0,0,0-.523,1.758h7.922v-.281a5.4,5.4,0,0,0-.289-1.445A3.822,3.822,0,0,0,12.688-13a3.409,3.409,0,0,0-1.18-.875A3.936,3.936,0,0,0,9.844-14.2ZM28.86.313a9.055,9.055,0,0,1-3.422-.625A7.918,7.918,0,0,1,22.79-2.031a7.7,7.7,0,0,1-1.711-2.586,8.452,8.452,0,0,1-.609-3.227v-.641a9.627,9.627,0,0,1,.648-3.625,8.6,8.6,0,0,1,1.734-2.75,7.463,7.463,0,0,1,2.531-1.75,7.744,7.744,0,0,1,3.039-.609,8.022,8.022,0,0,1,3.25.617,6.4,6.4,0,0,1,2.352,1.734,7.591,7.591,0,0,1,1.43,2.648,11.092,11.092,0,0,1,.484,3.359v1.578H24.219A5.576,5.576,0,0,0,24.7-5.453a4.885,4.885,0,0,0,1.023,1.461,4.636,4.636,0,0,0,1.484.969,4.846,4.846,0,0,0,1.867.352A6.069,6.069,0,0,0,31.7-3.234a5.16,5.16,0,0,0,1.945-1.547l2.031,1.906A6.2,6.2,0,0,1,34.626-1.7a7.277,7.277,0,0,1-1.5,1.016A9.053,9.053,0,0,1,31.2.039,9.423,9.423,0,0,1,28.86.313ZM28.407-14.2a3.725,3.725,0,0,0-1.453.281,3.664,3.664,0,0,0-1.2.82,4.753,4.753,0,0,0-.9,1.313,6.434,6.434,0,0,0-.523,1.758h7.922v-.281a5.4,5.4,0,0,0-.289-1.445A3.822,3.822,0,0,0,31.251-13a3.409,3.409,0,0,0-1.18-.875A3.936,3.936,0,0,0,28.407-14.2ZM47.423.313A9.055,9.055,0,0,1,44-.312a7.918,7.918,0,0,1-2.648-1.719,7.7,7.7,0,0,1-1.711-2.586,8.452,8.452,0,0,1-.609-3.227v-.641a9.627,9.627,0,0,1,.648-3.625,8.6,8.6,0,0,1,1.734-2.75,7.463,7.463,0,0,1,2.531-1.75,7.744,7.744,0,0,1,3.039-.609,8.022,8.022,0,0,1,3.25.617,6.4,6.4,0,0,1,2.352,1.734,7.591,7.591,0,0,1,1.43,2.648A11.092,11.092,0,0,1,54.5-8.859v1.578H42.783a5.576,5.576,0,0,0,.484,1.828A4.885,4.885,0,0,0,44.29-3.992a4.636,4.636,0,0,0,1.484.969,4.846,4.846,0,0,0,1.867.352,6.069,6.069,0,0,0,2.617-.562A5.16,5.16,0,0,0,52.2-4.781l2.031,1.906A6.2,6.2,0,0,1,53.189-1.7a7.277,7.277,0,0,1-1.5,1.016,9.053,9.053,0,0,1-1.93.719A9.424,9.424,0,0,1,47.423.313ZM46.97-14.2a3.725,3.725,0,0,0-1.453.281,3.664,3.664,0,0,0-1.2.82,4.753,4.753,0,0,0-.9,1.313,6.434,6.434,0,0,0-.523,1.758h7.922v-.281a5.4,5.4,0,0,0-.289-1.445A3.822,3.822,0,0,0,49.814-13a3.409,3.409,0,0,0-1.18-.875A3.936,3.936,0,0,0,46.97-14.2ZM68.955-2.312A6.28,6.28,0,0,1,66.869-.367a5.462,5.462,0,0,1-2.742.7,6.8,6.8,0,0,1-2.4-.406,4.564,4.564,0,0,1-1.859-1.289,6.174,6.174,0,0,1-1.2-2.25,11.05,11.05,0,0,1-.43-3.289v-10h3.734V-6.875a9.393,9.393,0,0,0,.18,2.016,3.093,3.093,0,0,0,.555,1.266,2.032,2.032,0,0,0,.938.664,4.111,4.111,0,0,0,1.344.2,4.458,4.458,0,0,0,2.422-.586A3.7,3.7,0,0,0,68.8-4.906v-12h3.75V0H69.174ZM80.049-16.906l.234,2.344a6.547,6.547,0,0,1,2.227-1.961,6.065,6.065,0,0,1,2.9-.7,7.12,7.12,0,0,1,2.367.375,4.7,4.7,0,0,1,1.844,1.172,5.4,5.4,0,0,1,1.2,2.063,9.528,9.528,0,0,1,.43,3.047V0H87.518V-10.5a5.432,5.432,0,0,0-.242-1.75,2.749,2.749,0,0,0-.687-1.125,2.551,2.551,0,0,0-1.086-.6,5.387,5.387,0,0,0-1.453-.18,4.105,4.105,0,0,0-2.148.547,4.242,4.242,0,0,0-1.477,1.484V0h-3.75V-16.906Zm18.563,0,.234,2.344a6.547,6.547,0,0,1,2.227-1.961,6.065,6.065,0,0,1,2.9-.7,7.12,7.12,0,0,1,2.367.375,4.7,4.7,0,0,1,1.844,1.172,5.4,5.4,0,0,1,1.2,2.063,9.528,9.528,0,0,1,.43,3.047V0h-3.734V-10.5a5.432,5.432,0,0,0-.242-1.75,2.749,2.749,0,0,0-.687-1.125,2.551,2.551,0,0,0-1.086-.6,5.387,5.387,0,0,0-1.453-.18,4.105,4.105,0,0,0-2.148.547,4.242,4.242,0,0,0-1.477,1.484V0h-3.75V-16.906Zm18.563,0,.234,2.344a6.547,6.547,0,0,1,2.227-1.961,6.065,6.065,0,0,1,2.9-.7,7.12,7.12,0,0,1,2.367.375,4.7,4.7,0,0,1,1.844,1.172,5.4,5.4,0,0,1,1.2,2.063,9.528,9.528,0,0,1,.43,3.047V0h-3.734V-10.5a5.432,5.432,0,0,0-.242-1.75,2.749,2.749,0,0,0-.687-1.125,2.551,2.551,0,0,0-1.086-.6,5.387,5.387,0,0,0-1.453-.18,4.105,4.105,0,0,0-2.148.547,4.242,4.242,0,0,0-1.477,1.484V0H113.8V-16.906Z" transform="translate(888.094 44.219)" fill="#1f1f1f"/>
            <g>
              <path d="M12,0H28A12,12,0,0,1,40,12V28A12,12,0,0,1,28,40H12A12,12,0,0,1,0,28V12A12,12,0,0,1,12,0Z" transform="translate(842 16)" fill="#5a81fa"/>
              <path d="M2.414.612A3.937,3.937,0,0,1,.17.017,1.852,1.852,0,0,1-.714-1.6,1.87,1.87,0,0,1-.136-3.026,2,2,0,0,1,1.292-3.57a2.9,2.9,0,0,1,1.547.476A3.523,3.523,0,0,1,4.08-1.054q.17.442.459.459t.527-.357a7.5,7.5,0,0,0,.816-1.9,18.6,18.6,0,0,0,.544-2.55Q6.664-6.8,6.9-8.449t.51-3.519q.272-1.6.595-3.6t.663-4.284a1.631,1.631,0,0,0-1.054-1.938L6.97-22.1l.068-.34h8.534l-.068.34-.612.306a2.513,2.513,0,0,0-1.5,1.938l-1.53,8.466a32.261,32.261,0,0,1-1.139,4.539A15.284,15.284,0,0,1,9.452-4.046,9.915,9.915,0,0,1,6.307-.6,7.022,7.022,0,0,1,2.414.612Z" transform="translate(854.714 46.44)" fill="#fff"/>
            </g>
          </g>
        </svg>
      </router-link>
    </div>
    <ComponentNavgation 
      :hideSideBar="hideSideBar" 
      @newTitle="nameTitle()"
    />
    <!-- sns -->
    <div class="sns">
      <a 
        :href="item.url"
        target="_blank" 
        v-for="(item, index) in sns" :key="index" 
        :title="`${item.title}`" 
        :class="item.cName"
      >
      </a>
    </div>
  </aside>
</template>

<script>
  //components
  import ComponentNavgation from "../components/ComponentNavgation";

  //vuex
  import { mapState } from "vuex";

  export default {
    name: 'LayerSideBar',
    data() {
      return {
        hideSideBar: false,
        closeControler: 'Close Slidebar',
        offCanvas: false, 
        viewBox: '0 0 174.473 40',
      }
    },
    components: {
      ComponentNavgation,
    },
    computed: {
      ...mapState({
        sns: 'sns',
      }),
    },
    methods: {
      nameTitle(){
        this.offCanvas = true;
        if(this.offCanvas === true){
          this.closeControler='Push Slidebar';
          this.viewBox = '0 0 174.473 40';
        }
      },
      hideSlidebar(){
        document.body.classList.remove('offCanvas');
        document.body.classList.add('sideBar-hide');
        this.closeControler = 'Open Slidebar';
        this.hideSideBar = true;
        this.viewBox = '0 0 40 40';
      },
      showSlidebar(){
        document.body.classList.remove('sideBar-hide'); 
        document.body.classList.remove('offCanvas');
        this.hideSideBar = false;
        this.closeControler = 'Close Slidebar';
        this.viewBox = '0 0 174.473 40';
      },
      changeClass(item1, item2){
        item1.forEach(menuItem => {
          menuItem.classList.add('collapsed');
        });
        item2.forEach(menuItem => {
          menuItem.classList.remove('show');
          menuItem.classList.add('collapse');
        });
      },
      handleLayer(){
        const menuBtn = Array.from(document.getElementsByClassName('accordion-button'));
        const menuList = Array.from(document.getElementsByClassName('accordion-collapse'));

        const ww = document.body.clientWidth;

        if(ww >= 768){
          if(this.hideSideBar === false){
            this.hideSlidebar();
            this.changeClass(menuBtn, menuList);
          }else{
            this.showSlidebar();
            if(this.offCanvas === true){
              this.offCanvas = false;
            }
          }
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>