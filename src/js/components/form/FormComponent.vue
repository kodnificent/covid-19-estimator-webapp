<template>
    <form ref="form" class="form md:w-1/2 lg:w-1/4" @submit.prevent.stop="submitForm" name="estimation-form">
        <form-progress-indicator v-bind="{ steps, current_step }" />

        <fieldset class="form__fieldset" v-show="current_step.sn === 1" :data-active="current_step.sn === 1">
            <legend class="form__legend">
                Region Information
                <span class="block text-xs text-gray-700" aria-hidden="true">
                    All fields are required <span class="text-red-600">*</span>
                </span>
            </legend>

            <div class="form__group">
                <label class="form__label" for="region.name">
                    Which region would like to estimate for?
                </label>

                <select
                    data-invalid="false" 
                    class="form__select" 
                    id="region.name" 
                    name="region[name]" 
                    aria-required="true"
                    aria-describedby="region.name-feedback">

                    <option value="Africa">Africa</option>
                    <option value="Asia">Asia</option>
                    <option value="Australia">Australia</option>
                    <option value="Europe">Europe</option>
                    <option value="North America">North America</option>
                    <option value="South America">South America</option>
                </select>

                <small class="form__feedback" data-invalid="false" id="region.name-feedback" aria-live="polite"></small>
            </div>

            <div class="form__group">

                <label class="form__label" for="region.avgAge">
                    What is the average age of the citizens?
                </label>

                <input
                    data-invalid="false" 
                    class="form__input" 
                    id="region.avgAge" 
                    name="region[avgAge]" 
                    type="number" 
                    placeholder="18"
                    aria-required="true"
                    aria-describedby="region.avgAge-feedback" />

                <small class="form__feedback" data-invalid="false" id="region.avgAge-feedback" aria-live="polite"></small>
            </div>

            <div class="form__group">
                <label class="form__label" for="region.avgDailyIncomeInUSD">
                    What is the average daily income of the citizens? ($)
                </label>
                
                <input
                    data-invalid="false" 
                    class="form__input" 
                    id="region.avgDailyIncomeInUSD" 
                    name="region[avgDailyIncomeInUSD]" 
                    type="number" 
                    placeholder="10"
                    aria-required="true"
                    aria-describedby="region.avgDailyIncomeInUSD-feedback" />
                
                <small class="form__feedback" data-invalid="false" id="region.avgDailyIncomeInUSD-feedback" aria-live="polite"></small>
            </div>

            <div class="form__group">
                <label class="form__label" for="region.avgDailyIncomePopulation">
                    What is the ratio of the average daily income to the population?
                </label>

                <input
                    data-invalid="false" 
                    class="form__input" 
                    id="region.avgDailyIncomePopulation" 
                    name="region[avgDailyIncomePopulation]" 
                    type="number" 
                    placeholder="0.75"
                    aria-required="true"
                    aria-describedby="region.avgDailyIncomePopulation-feedback" />
                
                <small class="form__feedback" data-invalid="false" id="region.avgDailyIncomePopulation-feedback" aria-live="polite"></small>
            </div>
        </fieldset>

        <!-- STEP TWO -->

        <fieldset class="form__fieldset" v-show="current_step.sn === 2" :data-active="current_step.sn === 2">
            <legend class="form__legend">
                Estimation Data
                <span class="block text-xs text-gray-600" aria-hidden="true">
                    All fields are required <span class="text-red-600">*</span>
                </span>
            </legend>

            <div class="form__group">
                <label class="form__label" for="population">Population of the region</label>

                <input
                    data-invalid="false" 
                    class="form__input" 
                    id="population" 
                    name="population" 
                    type="number" 
                    placeholder="58,000,000"
                    aria-required="true" 
                    aria-describedby="population-feedback"
                    data-population />
                
                <small class="form__feedback" data-invalid="false" id="population-feedback" aria-live="polite"></small>
            </div>

            <div class="form__group">
                <label class="form__label" for="timeToElapse">What is the expected duration of this estimate?</label>
                
                <input
                    data-invalid="false" 
                    class="form__input" 
                    id="timeToElapse" 
                    name="timeToElapse" 
                    type="number" 
                    placeholder="28"
                    aria-required="true" 
                    aria-describedby="timeToElapse-feedback"
                    data-time-to-elapse />
                
                <small class="form__feedback" data-invalid="false" id="timeToElapse-feedback" aria-live="polite"></small>
            </div>

            <div class="form__group">
                <label class="form__label" for="periodType">Will this duration be in days, weeks or months?</label>
                <input data-period-type hidden>
                <select
                    data-invalid="false" 
                    class="form__select" 
                    id="periodType" 
                    name="periodType" 
                    aria-required="true" 
                    aria-describedby="periodType-feedback"
                    data-period-type>

                    <option value="" selected>choose an option</option>
                    <option value="days">days</option>
                    <option value="days">weeks</option>
                    <option value="days">months</option>
                </select>
                
                <small class="form__feedback" data-invalid="false" id="periodType-feedback" aria-live="polite"></small>
            </div>

            <div class="form__group">
                <label class="form__label" for="reportedCases">How many positive cases of COVID19 has been reported?</label>
                
                <input
                    data-invalid="false" 
                    class="form__input" 
                    id="reportedCases" 
                    name="reportedCases" 
                    type="number" 
                    placeholder="5"
                    aria-required="true" 
                    aria-describedby="reportedCases-feedback"
                    data-reported-cases />
                
                <small class="form__feedback" data-invalid="false" id="reportedCases-feedback" aria-live="polite"></small>
            </div>

            <div class="form__group">
                <label class="form__label" for="totalHospitalBeds">How many hospital beds are available in this region?</label>
                
                <input
                    data-invalid="false" 
                    class="form__input" 
                    id="totalHospitalBeds" 
                    name="totalHospitalBeds" 
                    type="number" 
                    placeholder="28,000,000"
                    aria-required="true" 
                    aria-describedby="totalHospitalBeds-feedback"
                    data-total-hospital-beds />
                
                <small class="form__feedback" data-invalid="false" id="totalHospitalBeds-feedback" aria-live="polite"></small>
            </div>
        </fieldset>

        <div role="alert">
            <output-component v-if="output" :output="output" />
        </div>

        <!-- FORM BUTTON -->
        <div class="form__group">
            <button 
                :disabled="isFirstStep || submitting"
                type="button" 
                @click.stop.prevent="previousStep"
                class="btn btn--rounded">

                <span class="btn__text">previous</span>
            </button>

            <button 
                :disabled="submitting"
                v-show="!isLastStep" 
                type="button" 
                @click.stop.prevent="nextStep"
                class="btn btn--rounded btn--shadowed btn--primary mt-2">

                <span class="btn__text">next</span>
            </button>
            <input data-go-estimate disabled>
            <button 
                :disabled="submitting"
                v-show="isLastStep" 
                type="submit" 
                @click.stop.prevent="submitForm"
                class="btn btn--rounded btn--shadowed btn--primary mt-2"
                data-go-estimate>
                
                <span class="btn__text">estimate</span>
            </button>
        </div>
    </form>
</template>

<script>
import { validatejs } from '../../validate';
import  * as Qs  from "qs";
export default {
    props: {
        //
    },

    computed: {
        isFirstStep()
        {
            return this.current_step.sn === 1;
        },

        isLastStep()
        {
            return this.current_step.sn === this.steps.length - 1;
        }
    },

    methods: {
        /**
         * Set the current step value
         * 
         * @param {number} index
         * @return void
         */
        setCurrentStep(index)
        {
            // set is_current prop to false on other steps
            this.steps.forEach(step=>{
                step.is_current = false;
            });

            let step = this.steps[index - 1];
            step.is_current = true;
            this.current_step = step;
        },

        /**
         * Move to the previous form step
         * 
         * @return void
         */
        previousStep()
        {
            this.setCurrentStep(this.current_step.sn - 1);
        },

        /**
         * Move to the next form step
         * 
         * @return void
         */
        nextStep()
        {
            if(this.validateCurrentStep())
            {
                this.current_step.is_completed = true;
                this.setCurrentStep(this.current_step.sn + 1)
            }
        },

        /**
         * Validate the current form step
         * 
         * @return void
         */
        validateCurrentStep()
        {
            const form = this.$refs['form'];
            const form_data = new FormData(form);
            const rules = this.current_step.rules
            const errors = validatejs(form_data, rules);

            // reset errors
            rules.forEach(rule=>{
                let el = form.querySelector(`[name="${rule.attr}"]`);
                el.dataset['invalid'] = false;
                
                let feedback_id = el.getAttribute('aria-describedby');
                let feedback_el = document.getElementById(feedback_id);
                if(feedback_el){
                    feedback_el.dataset['invalid'] = false;
                    feedback_el.innerText = '';
                };
            })

            if(errors.length === 0) return true;

            errors.forEach(error => {
                let el = form.querySelector(`[name="${error.attr}"]`);
                el.dataset['invalid'] = true;
                
                let feedback_id = el.getAttribute('aria-describedby');
                let feedback_el = document.getElementById(feedback_id);
                if(feedback_el){
                    feedback_el.dataset['invalid'] = true;
                    feedback_el.innerText = error.msg;
                };
            });

            return false;
        },

        /**
         * form submit handler
         * 
         * @return void
         */
        submitForm()
        {
            if(!this.validateCurrentStep()) return;

            const url = 'http://covid19-estimator-api.herokuapp.com/api/v1/on-covid-19/json';
            const form_data = new FormData(this.$refs['form']);

            this.submitting = true;

            axios({
                method: 'POST',
                url,
                data: Qs.stringify(form_data),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            }).then(res=>{
                this.success = true;
                this.output = res.data;
                this.current_step.is_completed = true;
                this.setCurrentStep(this.current_step.sn + 1)
            }).catch(err=>{
                // error
                this.success = false;
            }).then(()=>{
                this.submitting = false;
            })
        }
    },

    data(){
        return {
            output: null,
            success: false,
            submitting: false,
            steps: [
                {
                    sn: 1,
                    progress_text: 'Step 1 of 3: Period Type',
                    progress_label: 'step 1',
                    is_current: false,
                    is_completed: false,
                    rules: [
                        {
                            attr: 'region[name]',
                            rule: ['required', 'number']
                        },
                        {
                            attr: 'region[avgAge]',
                            rule: ['required', 'number']
                        },
                        {
                            attr: 'region[avgDailyIncomeInUSD]',
                            rule: ['required', 'number']
                        },
                        {
                            attr: 'region[avgDailyIncomePopulation]',
                            rule: ['required', 'number']
                        }
                    ],
                },
                {
                    sn: 2,
                    progress_text: 'Step 2 of 3: Data',
                    progress_label: 'step 2',
                    is_current: false,
                    is_completed: false,
                    rules: [
                        {
                            attr: 'population',
                            rule: ['required', 'number']
                        },
                        {
                            attr: 'timeToElapse',
                            rule: ['required', 'number']
                        },
                        {
                            attr: 'reportedCases',
                            rule: ['required', 'number']
                        },
                        {
                            attr: 'totalHospitalBeds',
                            rule: ['required', 'number']
                        },
                        {
                            attr: 'periodType',
                            rule: ['required', 'number']
                        },
                    ],
                },
                {
                    sn: 3,
                    progress_text: 'Step 3 of 3: Complete',
                    progress_label: 'complete',
                    is_current: false,
                    is_completed: false,
                },
            ],
            current_step: {}
        }
    },

    created()
    {
        this.setCurrentStep(1);
    },

    mounted()
    {
        //
    }
}
</script>

<style lang="sass" scoped>
    .form
        @apply shadow py-4 px-4 mt-6 w-full mx-auto border-1

        &__fieldset
            @apply mt-4 opacity-0 transition-all
            min-height: 300px
            &[data-active]
                animation-name: showField
                animation-delay: 0.25s
                animation-fill-mode: forwards
            @keyframes showField
                0%
                    @apply opacity-0
                100%
                    @apply opacity-100

        
        &__group
            @apply mb-4 flex flex-col

        &__legend
            @apply text-lg text-primary mb-3 capitalize text-left

        &__label
            @apply text-sm mb-1 font-semibold
        
        &__input, &__select
            @apply shadow px-2 py-2 rounded border-1
            &[data-invalid=true]
                @apply border-red-600 border-1
            &:focus
                @apply outline-none shadow-outline

        &__feedback
            @apply text-gray-700 mt-1
            &[data-invalid=true]
                @apply text-red-600
</style>