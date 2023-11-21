<template>
  <loader v-if="loading" />
  <v-item-group v-else>
    <v-row>
      <v-col v-for="user in users" :key="user.id" cols="12" md="4">
        <v-item>
          <user-card :user="user"></user-card>
        </v-item>
      </v-col>
    </v-row>
  </v-item-group>
</template>

<script setup lang="ts">
import { IUsers } from "../models/user";
import UserCard from "../components/UserCard.vue";
import Loader from "./UI/Loader.vue";

interface IProps {
  users: IUsers;
  loading: boolean;
}

defineProps<IProps>();
</script>
