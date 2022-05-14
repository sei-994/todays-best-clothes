<template>
  <Header></Header>

  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view />
  <div class="woman">
    <video src="../public/video/girl-running.mp4" autoplay loop></video>
  </div>
  <div class="cafe">
    <img src="../public/img/cafe.png" alt="" />
  </div>
  <footer></footer>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  position: relative;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.woman {
  video {
    z-index: 2;
    width: 30rem;
    height: 30rem;
    position: absolute;
    bottom: -23rem;
    left: -4rem;
  }
}
.cafe {
  img {
    width: 30rem;
    height: 30rem;
    position: absolute;
    z-index: 2;
    bottom: -30rem;
    right: -3rem;
  }
}
footer {
  height: 10rem;
  background: rgb(255, 255, 255);
}
// 共通クラス
.contents__box {
  margin: 0 8%;
}
</style>
