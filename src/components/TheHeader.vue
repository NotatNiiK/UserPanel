<template>
  <v-app-bar color="primary">
    <v-container>
      <v-row justify="space-between" align="center">
        <v-col>
          <v-app-bar-title>User Panel Application</v-app-bar-title>
        </v-col>
        <v-col align="end">
          <v-btn class="ml-1" size="small" @click="$router.push('/')">
            Home
          </v-btn>
          <v-btn class="ml-1" size="small" @click="$router.push('/panel')">
            Panel
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
