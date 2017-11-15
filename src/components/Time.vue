<template>
  <div>
    <router-link to="/time/time-add" class="btn btn-primary">创建</router-link>
    <router-view></router-view>
    <hr>
    <ul class="list-group" v-for="list in lists">
      <li class="list-group-item">
        <div class="row">
          <div class="col-md-2 text-center">
            <img :src="list.avatar" width="100px">
            {{list.name}}
          </div>
          <div class="col-md-3">
            <i class="glyphicon glyphicon-time"></i>{{list.timer}}小时
            <i class="glyphicon glyphicon-calendar text-info"></i>{{list.date}}
          </div>
          <div class="col-md-6">{{list.comment}}</div>
          <div class="col-md-1">
            <button class="btn btn-danger" @click="remove(list)">&times;</button>
          </div>
        </div>
      </li>
    </ul>
    <div class="text-warning" v-show="!isShow">亲，请添加你的计划</div>
  </div>
</template>

<script>
  import {mapState,mapActions,mapGetters} from 'vuex';
  export default {
    data(){
      return{

      }
    },
    components:{},
    computed:{
      ...mapState(['lists']),
      ...mapGetters(['isShow'])
    },
    methods:{
      ...mapActions(['decrementTotaltime']),
      ...mapActions(['removePlan']),
      remove(list){
        //list是当前删除的那一项
        this.decrementTotaltime(list.time);
        this.removePlan(list);
      }
    }
  }
</script>

<style scoped>
</style>
