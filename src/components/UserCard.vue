<template>
  <v-card>
    <v-row align="center">
      <v-col>
        <v-card-title>
          {{ user.first_name }} {{ user.last_name }}
        </v-card-title>
        <v-card-subtitle>{{ user.email }}</v-card-subtitle>
        <div>
          <v-btn>Delete</v-btn>
          <v-btn>Edit</v-btn>
        </div>
      </v-col>
      <v-col>
        <v-avatar size="x-large" :image="user.avatar" />
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { IUser } from "../models/user";

interface IProps {
  user: IUser;
}

defineProps<IProps>();
</script>
