<template>
  <ul>
    <li v-for="board in boards">
      <NuxtLink :to="`/boards/${board.id}`" class="flex gap-x-2">
        <span>{{ board.no }}</span>
        <h3>{{ board.title }}</h3>
      </NuxtLink>
    </li>
  </ul>
  <button class="p-4 rounded-lg shadow-lg bg-violet-500" @click="$alert('this is custom message')">Test Button</button>
</template>

<script lang="ts" setup>
const page = ref(1)
const { data: boards } = await useAsyncData(
  'boards',
  () => $fetch('/api/boards', {
    params: {
      page: page.value
    }
  }), {
  watch: [page]
}
)


const { $alert } = useNuxtApp()
</script>

<style></style>