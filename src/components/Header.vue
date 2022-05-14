<template>
  <header>
    <img src="../../public/img/icons/header_logo.png" alt="ロゴimg" />
    <nav>
      <ul>
        <li><a to="/about">About</a></li>
        <li><a to=""> Today's Weather</a></li>
        <li><a to=""> Today's best clothes</a></li>
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
</style>
>
