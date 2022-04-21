<template>
  <header>
    <img src="../../public/img/icons/header_logo.png" alt="ロゴimg" />
    <nav>
      <ul>
        <li>About</li>
        <li>Today's Weather</li>
        <li>Today's best clothes</li>
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
