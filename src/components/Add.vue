<template>
  <div>
    <form>
      <div class="form-group">
        <div class="row">
          <div class="col-md-6">
            <label for="date" class="control-label">日期</label>
            <input type="date" class="form-control" id="date" v-model="date">
          </div>
          <div class="col-md-6">
            <label for="time" class="control-label">事件</label>
            <input type="number" class="form-control" id="time" placeholder="请输入数字" v-model.number="time">
          </div>
        </div>
      </div>
      <div class="form-group">
        <textarea class="form-control" placeholder="请输入提示内容" v-model="comment"></textarea>
      </div>
      <div class="form-group">
        <button class="btn btn-success" @click="add">添加计划</button>
        <button class="btn btn-default" @click="cancel">取消</button>
      </div>
    </form>
  </div>
</template>

<script>
  /*import * as from ''*/
  import {mapActions} from 'vuex';
  export default {
    data(){
      return{date:'',time:'',comment:''}
    },
    components:{},
    methods:{
      ...mapActions(['addPlan']),
      ...mapActions(['incrementTotaltime']),
      add(){
        //发布添加的动作
        this.addPlan({
          date:this.date,
          time:this.time,
          comment:this.comment
        });
        //发布增加总时间的动作
        this.incrementTotaltime(this.time)

      },
      cancel(){
        this.$router.go(-1);//回到上一级
      }
    }
  }
</script>

<style scoped>
</style>
