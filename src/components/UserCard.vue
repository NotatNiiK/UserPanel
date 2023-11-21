<template>
  <v-card>
    <v-row align="center">
      <v-col>
        <v-card-title>
          {{ user.first_name }} {{ user.last_name }}
        </v-card-title>
        <v-card-subtitle>{{ user.email }}</v-card-subtitle>
        <div class="buttons">
          <v-btn size="small" @click="toggleModal">Edit</v-btn>
        </div>
      </v-col>
      <v-col>
        <v-avatar size="x-large" :image="user.avatar" />
      </v-col>
    </v-row>
  </v-card>
  <Modal v-model:show="isModal">
    <form @submit.prevent="editUser">
      <v-text-field v-model="localUser.first_name" label="Name"></v-text-field>
      <v-text-field
        v-model="localUser.last_name"
        label="Surname"
      ></v-text-field>
      <v-text-field v-model="localUser.email" label="Email"></v-text-field>
      <v-text-field v-model="localUser.avatar" label="Avatar"></v-text-field>
      <v-btn class="me-4" type="submit" block>Edit</v-btn>
    </form>
  </Modal>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IUser } from "../models/user";
import Modal from "./UI/Modal.vue";

interface IProps {
  user: IUser;
}
const { user } = defineProps<IProps>();

interface IEmits {
  (e: "edit-user", user: IUser): void;
}
const emit = defineEmits<IEmits>();

const localUser = ref<IUser>(JSON.parse(JSON.stringify(user)));
const isModal = ref<boolean>(false);

function toggleModal(): void {
  isModal.value = !isModal.value;
}

function editUser(): void {
  const isUserEdited: boolean =
    JSON.stringify(user) !== JSON.stringify(localUser.value);

  if (isUserEdited) {
    emit("edit-user", localUser.value);
  }

  isModal.value = false;
}
</script>

<style scoped lang="scss">
.buttons {
  padding: 15px;
}
</style>
