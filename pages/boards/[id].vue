<template>
  <div>
    <div class="flex gap-x-2">
      <span>{{ board.no }}</span>
      <h3>{{ board.title }}</h3>
    </div>
    <div>
      {{ board.content }}
    </div>
  </div>
  <NuxtLink class="p-4 rounded-lg shadow-lg bg-violet-500 inline-block" to="/boards">To List</NuxtLink>
</template>

<script lang="ts" setup>
const route = useRoute()

const { data: board } = await useAsyncData(
  'board',
  () => $fetch(`/api/boards/${route.params.id}`, {
  }), {
}
)
</script>

<style></style>