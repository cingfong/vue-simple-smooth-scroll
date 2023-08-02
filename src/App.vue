<template>
  <div id="app">
    <div class="smooth-scroll-wrap">
      <smoothScroll>
        <div class="textWrap">
          <h1>smooth</h1>
          <h1>1</h1>
          <h1>2</h1>
          <h1>3</h1>
          <h1>4</h1>
          <h1>5</h1>
          <h1>6</h1>
          <h1>7</h1>
        </div>
      </smoothScroll>
    </div>
    <div class="common textWrap">
      <h1>default</h1>
      <h1>1</h1>
      <h1>2</h1>
      <h1>3</h1>
      <h1>4</h1>
      <h1>5</h1>
      <h1>6</h1>
      <h1>7</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  }
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  display: flex;
}
.smooth-scroll-wrap {
  width: 50%;
}
.common {
  width: 50%;
  right: 0px;
  position: relative;
}
.textWrap {
  display: flex;
  flex-wrap: wrap;
}
h1 {
  font-weight: normal;
  font-size: 10em;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px #2c3e50;
}
</style>
