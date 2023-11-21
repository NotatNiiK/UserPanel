<template>
  <Teleport to="body">
    <Transition name="modal">
      <div class="modal" v-if="show" @click="closeModal">
        <div class="modal__wrapper">
          <div class="modal__body" @click.stop>
            <div class="modal__content">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

interface Props {
  show: boolean;
}

interface Emits {
  (e: "update:show"): void;
}

withDefaults(defineProps<Props>(), {
  show: false,
});

const emit = defineEmits<Emits>();

const closeModalByKey = (e: KeyboardEvent): void => {
  if (e.key === "Escape") {
    emit("update:show");
  }
};

const closeModal = (): void => {
  emit("update:show");
};

onMounted(() => {
  window.addEventListener("keyup", closeModalByKey);
});

onUnmounted(() => {
  window.removeEventListener("keyup", closeModalByKey);
});
</script>

<style scoped lang="scss">
.modal {
  display: grid;
  align-items: center;
  justify-items: center;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  overflow-x: hidden;

  &__wrapper {
    position: relative;
    z-index: 2;
    justify-self: stretch;
    padding: 40px 20px;
  }
  &__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    color: #333;
    padding: 20px;
    margin: 0 auto;
    max-width: 28rem;
    min-width: 11.75rem;
    min-height: 9.375rem;
    transition: all 0.7s ease 0s;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: #fff;
    box-shadow: 0px 1px 2px 0px rgba(255, 255, 255, 0.2) inset,
      0px 8px 10px -2px rgba(1, 1, 1, 0.34), 0px 2px 2px 1px rgba(0, 0, 0, 0.1);
  }
  &__close-button {
    cursor: pointer;
    position: absolute;
    z-index: 2;
    right: -8px;
    top: -8px;
    border-radius: 50px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    background: #262628;
    transition: all 0.4s ease 0s;
    @media (hover: hover) {
      &:hover {
        background: #3d3d3e;
      }
    }
  }
  &__content {
    align-self: stretch;
  }
}

.modal-enter-active .modal__body,
.modal-leave-active .modal__body {
  transition: all 0.4s ease 0s;
}

.modal-enter-from .modal__body,
.modal-leave-to .modal__body {
  opacity: 0;
  transform: translateY(-100%);
}
</style>
