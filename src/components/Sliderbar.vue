<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h2>计划的总时间</h2>
      </div>
      <div class="panel-body">
        {{time}}事件
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  export default {
    data(){
      return{}
    },
    computed:{
      ...mapState({time:'totalTime'})//名字相同用数组 不同用对象
    },
    components:{},
    methods:{}
  }
</script>

<style scoped>
</style>
