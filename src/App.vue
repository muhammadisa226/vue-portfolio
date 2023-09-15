<template>
  <Content>
    <RouterView v-slot="{ Component }">
      <Transition name="slide" mode="out-in">
        <Component :is="Component" />
      </Transition>
    </RouterView>
  </Content>
</template>

<script setup>
import Content from "./components/BaseContent.vue";
import { RouterView } from "vue-router";
</script>

<style scoped>
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s ease-out;
}
</style>
