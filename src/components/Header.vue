<template>
  <header>
    <div class="header__left">
      <img src="../../public/img/icons/header_logo.png" alt="ロゴimg" />
      <!-- <div class="woman">
        <video src="../../public/video/girl-running.mp4" autoplay loop></video>
      </div> -->
    </div>
    <nav>
      <ul>
        <!-- <li><a to="/about">About</a></li>
        <li><a to=""> Today's Weather</a></li>
        <li><a to=""> Today's best clothes</a></li> -->
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;

  img {
    height: 10rem;
    width: 20rem;
  }
  nav {
    ul {
      display: flex;
    }
    li {
      margin: 1.5rem 2rem;
      list-style: none;
    }
  }
}
.header__left {
  display: flex;
}
.woman {
  video {
    z-index: 2;
    width: 10rem;
    height: 10rem;
    // position: absolute;
    // bottom: -23rem;
    // left: -4rem;
  }
}
</style>
>
