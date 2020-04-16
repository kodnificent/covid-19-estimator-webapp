<template>
    <div>
        <h3 class="text-primary mb-3 capitalize">Estimate result for {{ output.data.region.name }}</h3>
        <h4 class="mb-1 font-semibold">Best case</h4>
        <p class="mb-4">
            Given the number of reported positive cases of covid19 infection, expect the number of <span class="font-semibold">currently infected persons</span>
            to be <span class="font-semibold">{{ (output.impact.currentlyInfected).toLocaleString() }}</span>.<br>
            In the next 
            <span class="font-semibold">{{ output.data.timeToElapse }} {{ output.data.periodType }}</span>, expect this number to increase to 
            <span class="font-semibold">{{ (output.impact.infectionsByRequestedTime).toLocaleString() }}</span>.
            <span class="font-semibold">{{ (output.impact.severeCasesByRequestedTime).toLocaleString() }}</span> persons 
            will require <span class="font-semibold">hospitalization to recover</span>.
        </p>
        <p class="mb-4">
            In <span class="font-semibold">{{ output.data.timeToElapse }} {{ output.data.periodType }}</span>, 
            {{ hospBedText(output.impact.hospitalBedsByRequestedTime) }}
        </p>
        <p class="mb-4">
            <span class="font-semibold">{{ (output.impact.casesForICUByRequestedTime).toLocaleString() }}</span> 
            covid19 positive patients will require <span class="font-semibold">intense ICU care</span> while 
            <span class="font-semibold">{{ (output.impact.casesForVentilatorsByRequestedTime).toLocaleString() }}</span> 
            will require <span class="font-semibold">ventilators</span>.
        </p>
        <p class="mb-4">
            The economy is likey to loose <span class="font-semibold">${{ (output.impact.dollarsInFlight).toLocaleString() }}</span>
             daily within the
             <span class="font-semibold">{{ output.data.timeToElapse }} {{ output.data.periodType }}</span> period.
        </p>

        <!-- WORST CASE -->
        <h4 class="mb-1 font-semibold">Worst case</h4>
        <p class="mb-4">
            Given the number of reported positive cases of covid19 infection, expect the number of <span class="font-semibold">currently infected persons</span>
            to be <span class="font-semibold">{{ (output.severeImpact.currentlyInfected).toLocaleString() }}</span>.<br>
            In the next 
            <span class="font-semibold">{{ output.data.timeToElapse }} {{ output.data.periodType }}</span>, expect this number to increase to 
            <span class="font-semibold">{{ (output.severeImpact.infectionsByRequestedTime).toLocaleString() }}</span>.
            <span class="font-semibold">{{ (output.severeImpact.severeCasesByRequestedTime).toLocaleString() }}</span> persons 
            will require <span class="font-semibold">hospitalization to recover</span>.
        </p>
        <p class="mb-4">
            In <span class="font-semibold">{{ output.data.timeToElapse }} {{ output.data.periodType }}</span>, 
            {{ hospBedText(output.severeImpact.hospitalBedsByRequestedTime) }}
        </p>
        <p class="mb-4">
            <span class="font-semibold">{{ (output.severeImpact.casesForICUByRequestedTime).toLocaleString() }}</span> 
            covid19 positive patients will require <span class="font-semibold">intense ICU care</span> while 
            <span class="font-semibold">{{ (output.severeImpact.casesForVentilatorsByRequestedTime).toLocaleString() }}</span> 
            will require <span class="font-semibold">ventilators</span>.
        </p>
        <p class="mb-4">
            The economy is likey to loose <span class="font-semibold">${{ (output.severeImpact.dollarsInFlight).toLocaleString() }}</span>
             daily within the
             <span class="font-semibold">{{ output.data.timeToElapse }} {{ output.data.periodType }}</span> period.
        </p>
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

    methods: {
        hospBedText(n)
        {
            let text = '';
            switch (true) {
                case n < 0:
                    text = `there will be a shortage of ${(n).toLocaleString()} hospital beds for severe covid19 patients after hospitals are full to capacity.`
                    break;
                
                case n > 0:
                    text = `there will be ${(n).toLocaleString()} available hospital beds for severe covid19 patients.`
            
                default:
                    text = `there will be no available hospital beds for severe covid19 patients.`
                    break;
            }
            return text;
        }
    },

    mounted()
    {
        //
    }
}
</script>