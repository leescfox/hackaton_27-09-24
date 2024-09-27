<script setup lang="ts">
import { ref } from 'vue'
import { Roles } from '@/modules/welcome/enums/roles'
import { welcomeApi } from '@/modules/welcome/api'

const role = ref(Roles.HTML)
</script>

<template>
  <div class="home">
    <h1 class="home__h1">«Кривой-косой» - сайт для совместного кодинга</h1>
    <div class="home__description">
      <p>На этом сайте вы с другом/подругой сможете попробовать написать совместный код!</p>
      <p>Вам выпадет случайный лендинг. Один из вас будет писать html-вёрстку, другой - css-код</p>
      <p>Ваша задача - за 10 минут постараться повторить лендинг</p>
      <p>После истечения времени вы сможете оценить полученный результат!</p>
    </div>
    <h2 class="home__role-header">Выберите вашу роль:</h2>
    <v-btn-toggle v-model="role" rounded="0" class="home__role-buttons" mandatory>
      <v-btn :value="Roles.HTML">HTML</v-btn>
      <v-btn :value="Roles.CSS">CSS</v-btn>
    </v-btn-toggle>
    <v-btn class="home__share-button" height="48" @click="welcomeApi.getLobbyId(role)">
      Скопировать ссылку
    </v-btn>
  </div>
</template>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 16px;
}

.home__h1 {
  margin-bottom: 16px;
}

.home__description {
  margin-bottom: 32px;
  font-size: 16px;

  p:not(:last-of-type) {
    margin-bottom: 8px;
  }
}

.home__role-header {
  margin-bottom: 8px;
}

.home__role-buttons {
  margin-bottom: 16px;
}

.home__share-button {
  font-size: 20px;
  text-transform: none;
  letter-spacing: normal;
}
</style>
