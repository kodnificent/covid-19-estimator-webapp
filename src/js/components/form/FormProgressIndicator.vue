<template>
    <ol tabindex="0" 
        role="progressbar" 
        aria-valuemin="1" 
        aria-valuemax="3" 
        :aria-valuenow="current_step.sn" 
        :aria-valuetext="current_step.progress_text"
        aria-live="polite"
        class="progress-indicator">

        <li v-for="step in steps"
            :key="step.sn"
            class="progress-indicator__item"
            aria-hidden="true"
            :data-active="step.is_current ? 'true' : 'false'"
            :data-completed="step.is_completed ? 'true' : 'false'">
            
            <span class="progress-indicator__icon"></span>

            <span class="progress-indicator__text">{{ step.progress_label }}</span>
        </li>
    </ol>
</template>

<script>
export default {
    props: {
        steps: {
            required: true,
            type: Array,
        },

        current_step: {
            required: true,
            type: Object
        },
    },
}
</script>

<style lang="sass" scoped>
    .progress-indicator
        @apply flex justify-center py-2
        &:focus
            @apply outline-none
            .progress-indicator__item[data-active=true] .progress-indicator__icon
                @apply shadow-outline

        &__item
            @apply flex flex-col items-center
            &:not(:first-child)
                @apply ml-3
            &[data-active=true]
                .progress-indicator__icon
                    @apply bg-primary
                .progress-indicator__text
                    @apply text-gray-600
            &[data-completed=true]
                .progress-indicator__icon
                    @apply bg-primary-light
        &__icon
            @apply w-3 h-3 rounded-full bg-gray-400 block

        &__text
            @apply text-gray-400 lowercase text-sm
</style>