<template>
  <div ref="smoothWrapScroll" class="smooth-wrap-scroll">
    <div ref="smoothContentWrap" class="smooth-content-wrap">
      <div ref="smoothContentScroll" class="smooth-content-scroll">
        <slot />
      </div>
    </div>
    <div ref="smoothScroll" class="smooth-scroll"></div>
  </div>
</template>

<script>
export default {
  name: "smoothScroll",
  data() {
    return {
      windowScrollWait: false,
      scrollGoCtl: null
    };
  },
  mounted() {
    const vm = this;
    vm.$nextTick(() => {
      vm.$refs.smoothScroll.style.height = `${vm.$refs.smoothContentScroll.offsetHeight}px`;
      vm.$refs.smoothContentWrap.addEventListener(
        "wheel",
        this.throttled(vm.smoothContentWrapScroll, 10)
      );
      vm.$refs.smoothWrapScroll.addEventListener(
        "scroll",
        this.throttled(vm.smoothScrollFn, 10)
      );
      vm.$refs.smoothContentScroll.addEventListener("DOMNodeInserted", () => {
        vm.$refs.smoothScroll.style.height = `${vm.$refs.smoothContentScroll.offsetHeight}px`;
      });
    });
  },
  methods: {
    // 待修改
    throttled(fn, delay = 500) {
      let timer = null;
      return function(...args) {
        if (!timer) {
          timer = setTimeout(() => {
            fn.apply(this, args);
            timer = null;
          }, delay);
        }
      };
    },
    smoothContentWrapScroll(e) {
      this.$refs.smoothWrapScroll.scrollTop += -e.wheelDelta;
    },
    smoothScrollFn() {
      const vm = this;
      if (vm.windowScrollWait) return;
      if (!vm.windowScrollWait) {
        vm.windowScrollWait = true;
        if (vm.scrollGoCtl) clearTimeout(vm.scrollGoCtl);
        vm.scrollGoCtl = setTimeout(vm.scrollGo, 15);
        setTimeout(() => {
          vm.windowScrollWait = false;
        }, 100);
      }
    },
    scrollGo() {
      const vm = this;
      const smoothContentScrollTop = vm.$refs.smoothContentWrap.scrollTop;
      const smoothWrapScrollTop = vm.$refs.smoothWrapScroll.scrollTop;
      if (smoothWrapScrollTop === smoothContentScrollTop) return;
      if (
        smoothWrapScrollTop > smoothContentScrollTop &&
        smoothWrapScrollTop - smoothContentScrollTop < 25
      ) {
        vm.$refs.smoothContentWrap.scrollTop = smoothWrapScrollTop;
      } else if (smoothWrapScrollTop > smoothContentScrollTop) {
        vm.$refs.smoothContentWrap.scrollTop = smoothContentScrollTop + 25;
      } else if (
        smoothWrapScrollTop < smoothContentScrollTop &&
        smoothContentScrollTop - smoothWrapScrollTop < 25
      ) {
        vm.$refs.smoothContentWrap.scrollTop = smoothWrapScrollTop;
      } else if (smoothWrapScrollTop < smoothContentScrollTop) {
        vm.$refs.smoothContentWrap.scrollTop = smoothContentScrollTop - 25;
      }
      if (vm.scrollGoCtl) clearTimeout(vm.scrollGoCtl);
      vm.scrollGoCtl = setTimeout(vm.scrollGo, 5);
    }
  }
};
</script>

<style scoped>
.smooth-wrap-scroll {
  pointer-events: auto;
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100%;
  overflow-y: auto;
}
.smooth-scroll {
  pointer-events: none;
  position: relative;
}
.smooth-content-wrap {
  height: 100vh;
  width: 100%;
  overflow-y: auto;
  top: 0px;
  left: 0px;
  pointer-events: none;
  position: fixed;
  overflow: hidden !important;
}
.smooth-content-scroll {
  pointer-events: none;
  overflow: hidden;
}
.smooth-content.scroll * {
  pointer-events: auto;
}
</style>
