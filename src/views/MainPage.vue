<template>
  <div class="home">
    <v-container>
      <div class="home__body">
        <h1 class="home__title">DevOcean test-task!</h1>
        <p class="home__paragraph" v-for="n in 3" :key="n">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          doloremque, placeat autem eaque numquam voluptate maiores eligendi
          facilis fuga similique nostrum. Accusantium fugit ut quod distinctio
          ullam veritatis corporis quisquam?
        </p>
      </div>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
.home {
  height: 100%;
  padding: 100px 0 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  &__body {
    max-width: 578px;
  }

  &__title {
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 2rem;
  }

  &__paragraph {
    font-size: 1rem;
    margin-bottom: 10px;
    line-height: 120%;
  }
}
</style>
