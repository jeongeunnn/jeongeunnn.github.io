<template>
  <div class=" timeline">
    <dl class="detail" v-for="(item, index) in reverseTimeline(timeline)" :key="index">
      <dt class="detail__title">
        <router-link :to="`/introduction/detail/${item.id}`">{{ item.company }}&nbsp;<i class="bi bi-box-arrow-up-right"></i></router-link>
      </dt>
      <dd class="detail__contents">
          <dl>
            <dt>직책</dt>
            <dd>{{ item.position }}</dd>
          </dl>
          <dl>
            <dt>기간</dt>
            <dd>{{ item.period }}</dd>
          </dl>
          <dl v-if="role == true">
            <dt>담당업무</dt>
            <dd>
              <ul>
                <li class="list-item" v-for="elem in item.role" :key="elem">{{ elem }}</li>
              </ul>
            </dd>
          </dl>
      </dd>
    </dl>
  </div>
</template>

<script>
  //vuex
  import { mapState } from "vuex";

  export default {
    name: 'IntroExperienceElem',
    props: {
      role: Boolean
    },
    computed: {
      ...mapState({
        timeline: 'timeline',
      }),
    },
    methods: {
      reverseTimeline(data){
        Object.assign([], data)
        return [...data].reverse();
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>