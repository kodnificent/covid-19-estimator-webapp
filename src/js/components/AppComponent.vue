<template>
    <div class="bg-gray-100">

        <section class="bg-primary-lighter px-4 py-6 md:py-8" style="min-height: 250px;">
            <div class="w-full md:w-1/2 mx-auto">
                <h1 class="text-4xl md:text-5xl font-black text-primary text-center">Covid19 Impact Estimator</h1>
                
                <p class="text-center font-semibold italic text-lg text-gray-800">
                    Too many patients, not enough hospitals and beds. A serious shortage of ventilators, masks 
                    and other PPE - if we donʼt practice social distancing.
                </p>
                
                <img class="mx-auto mt-4" src="/assets/imgs/corona.svg" height="250" width="250" alt="corona virus" />
            </div>
        </section>

        <section class="section">
            <div class="w-full md:w-1/2 lg:w-1/3 mx-auto">
                <h1 class="section__title mb-0">Estimate Calculator</h1>
                <p class="text-center text-gray-700">
                    This Estimate calculator calculates the impact of COVID19 on lives, health systems, supply chains, and the economy.
                </p>
            </div>
            <form-component></form-component>
        </section>
        
        <footer class="bg-gray-300 py-4 px-4 text-center">
            <p>
                Teched up by <a rel="nofollow" target="__blank" href="https://twitter.com/kodnificent">kodnificent</a> &copy; 2020 Covid-19 Impact Estimator
            </p>
            <p>
                <a rel="nofollow" target="__blank" href="https://github.com/kodnificent/covid-19-estimator-webapp">source code</a>
            </p>
        </footer>
    </div>
</template>

<script>
export default {
    props: {
        //
    },

    mounted()
    {
        //
    }
}
</script>

<style lang="sass">
    .section
        @apply px-4 py-8 bg-white
        .section__title
            @apply font-bold text-primary text-center
    
    .btn
        @apply py-2 px-2
        &:focus
            @apply outline-none shadow-outline
        &--rounded
            @apply rounded
        &--shadowed
            @apply shadow
        &--primary
            @apply bg-primary text-on-primary
        &__text
            @apply uppercase
</style>