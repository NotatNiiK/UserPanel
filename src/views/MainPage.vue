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

<style scoped src="../assets/styles/views/mainpage.scss"></style>
