<template>
  <div>
    <Navbar/>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="col-md-3">
            <Sliderbar/>
          </div>
          <div class="col-md-9">
            <transition enter-active-class="animated bounceIn" leaveActiveClass="animated bounceOut" mode="out-in">
              <router-view class="position"></router-view>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue';
  import Sliderbar from './components/Sliderbar.vue';
export default {
  components:{
    Navbar,
    Sliderbar
  }
}
</script>

<style scoped>
.position{ position: absolute; width:100%;}
</style>
