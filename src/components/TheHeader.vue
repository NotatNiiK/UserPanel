<template>
  <v-app-bar color="primary" :elevation="2" class="header">
    <v-container>
      <v-row justify="space-between">
        <v-col>
          <v-app-bar-title>User Panel Application</v-app-bar-title>
        </v-col>
        <v-col align="end">
          <v-btn class="ml-2">
            <RouterLink to="/">Home</RouterLink>
          </v-btn>
          <v-btn class="ml-2">
            <RouterLink to="/panel">Panel</RouterLink>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
