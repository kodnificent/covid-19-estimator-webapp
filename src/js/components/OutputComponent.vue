<template>
    <div>
        {{ output.data.region.name }}
    </div>
</template>

<script>
export default {
    props: {
        output: {
            required: true,
            type: Object,
        }
    },

    mounted()
    {
        //
    }
}
</script>