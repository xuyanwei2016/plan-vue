<template>
    <div>
      {{count}}
      <button @click="add">添加</button>
      <button @click="del">删除</button>
    </div>
</template>

<script>
  //mapActions放的都是方法 所以得放到methods中
  //mapState放的都是状态对象 所以要放在computed中去
  import {mapState,mapActions} from 'vuex';
    export default {
        data() {
            return {}
        },
        computed: {
          ...mapState(["count"])
        },
        methods: {
          ...mapActions(["increment"]),
          ...mapActions(["decrement"]),
          add(){
              this.increment(1)
          },
          del(){
            this.decrement(1);
          }
        }
    }
</script>

<style scoped>
</style>
