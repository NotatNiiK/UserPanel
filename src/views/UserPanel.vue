<template>
  <div class="panel">
    <v-container>
      <div class="panel__body">
        <h1 class="panel__title">Users panel:</h1>
        <v-alert
          v-if="errorAlert.show"
          :text="errorAlert.message"
          type="error"
        ></v-alert>
        <users-list :users="users" :loading="isLoading" @edit-user="editUser" />
      </div>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { IAlert } from "../models/alert.ts";
import { IUser, IUsers } from "../models/user";
import UsersList from "../components/UsersList.vue";

const store = useStore();

const users = ref<IUsers>([]);
const isLoading = ref<boolean>(false);
const errorAlert = ref<IAlert>({
  show: false,
  message: "",
});

onMounted(async (): Promise<void> => {
  if (!localStorage.getItem("users")) {
    const response = await getUsers();
    if (response) {
      users.value = response;
      localStorage.setItem("users", JSON.stringify(users.value));
      return;
    }
  }

  users.value = JSON.parse(localStorage.getItem("users") || "");
});

async function getUsers(): Promise<IUsers | void> {
  try {
    isLoading.value = true;
    const response = await store.dispatch("getUsers");
    if (response?.error) {
      errorAlert.value = {
        show: true,
        message: response.message,
      };
      return [];
    }
    return response;
  } finally {
    isLoading.value = false;
  }
}

function editUser(editedUser: IUser): void {
  const index = users.value.findIndex(
    (user: IUser) => user.id === editedUser.id
  );
  users.value[index] = { ...users.value[index], ...editedUser };
  localStorage.setItem("users", JSON.stringify(users.value));
}
</script>

<style scoped src="../assets/styles/views/panel.scss"></style>
