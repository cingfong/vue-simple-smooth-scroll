<template>
  <div class="vue-toast-wraper" v-show="isShowToast">
    {{ toastMsg }}
    <h1 class="toast">asdas</h1>
  </div>
</template>

<script>
export default {
  name: "vueToast",
  data() {
    return {
      toastMsg: "登陆成功",
      isShowToast: true
    };
  },
  mounted() {
    if (this.isShowToast) {
      setTimeout(() => {
        this.isShowToast = false;
      }, 2500);
    }
  }
};
</script>

<style scoped>
.vue-toast-wraper {
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 17px;
  padding: 10px;
  border-radius: 12px;
  display: -webkit-box;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 2000;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
</style>
