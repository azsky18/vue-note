<template>
    <UModal prevent-close>
        <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
            <template #header v-if="option.header">
                <div class="flex items-center justify-between">
                    <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                        {{ option.headerText }}
                    </h3>
                </div>
            </template>
            <div class="h-48">{{ message }}</div>
            <template #footer>
                <UButton :label="option.closeButtonText" @click="option.callback()" />
            </template>
        </UCard>
    </UModal>
</template>

<script lang="ts" setup>
defineProps({
    message: {
        type: String,
        default: ''
    },
    option: {
        type: Object,
        default: {}
    }
})
</script>