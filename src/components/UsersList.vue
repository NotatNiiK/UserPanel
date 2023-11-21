<template>
  <loader v-if="loading" />
  <h2 class="not-found" v-else-if="!loading && users.length === 0"></h2>
  <v-item-group v-else>
    <v-row>
      <v-col v-for="user in users" :key="user.id" cols="12" md="4">
        <v-item>
          <user-card :user="user" @edit-user="editUser"></user-card>
        </v-item>
      </v-col>
    </v-row>
  </v-item-group>
</template>

<script setup lang="ts">
import { IUser, IUsers } from "../models/user";
import UserCard from "../components/UserCard.vue";
import Loader from "./UI/Loader.vue";

interface IProps {
  users: IUsers;
  loading: boolean;
}
defineProps<IProps>();

interface IEmits {
  (e: "edit-user", user: IUser): void;
}
const emit = defineEmits<IEmits>();

function editUser(editedUser: IUser): void {
  emit("edit-user", editedUser);
}
</script>

<style scoped>
.not-found {
  font-size: 1.2rem;
  text-align: center;
  padding: 15px 0;
}
</style>
