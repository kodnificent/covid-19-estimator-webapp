(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,a){a(16),t.exports=a(59)},16:function(t,e,a){a(17),window.axios=a(18),window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",window.Vue=a(35);var s=a(39);s.keys().map((function(t){Vue.component(t.split("/").pop().split(".")[0],s(t).default)}));new Vue({el:"#app",mounted:function(){}})},39:function(t,e,a){var s={"./components/AppComponent.vue":46,"./components/ButtonComponent.vue":47,"./components/OutputComponent.vue":48,"./components/form/FormComponent.vue":45,"./components/form/FormProgressIndicator.vue":49};function r(t){var e=i(t);return a(e)}function i(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=i,t.exports=r,r.id=39},40:function(t,e,a){"use strict";var s=a(50);a.n(s).a},43:function(t,e,a){"use strict";var s=a(55);a.n(s).a},44:function(t,e,a){"use strict";var s=a(57);a.n(s).a},45:function(t,e,a){"use strict";a.r(e);var s=function(t,e){if(null===t||""==t)return e("Required")},r=a(14),i={props:{},computed:{isFirstStep:function(){return 1===this.current_step.sn},isLastStep:function(){return this.current_step.sn===this.steps.length-1}},methods:{setCurrentStep:function(t){this.steps.forEach((function(t){t.is_current=!1}));var e=this.steps[t-1];e.is_current=!0,this.current_step=e},previousStep:function(){this.setCurrentStep(this.current_step.sn-1)},nextStep:function(){this.validateCurrentStep()&&(this.current_step.is_completed=!0,this.setCurrentStep(this.current_step.sn+1))},validateCurrentStep:function(){var t=this.$refs.form,e=new FormData(t),a=this.current_step.rules,r=function(t,e){var a=[];return e.forEach((function(e){var r=t.get(e.attr);e.rule.some((function(t){if("required"===t){var i=s(r,(function(t){return t}));if(i)return a.push({attr:e.attr,msg:i}),!0}else if("function"==typeof t){var n=t(r,(function(t){return t}));if(n)return a.push({attr:e.attr,msg:n}),!0}}))})),a}(e,a);return a.forEach((function(e){var a=t.querySelector('[name="'.concat(e.attr,'"]'));a.dataset.invalid=!1;var s=a.getAttribute("aria-describedby"),r=document.getElementById(s);r&&(r.dataset.invalid=!1,r.innerText="")})),0===r.length||(r.forEach((function(e){var a=t.querySelector('[name="'.concat(e.attr,'"]'));a.dataset.invalid=!0;var s=a.getAttribute("aria-describedby"),r=document.getElementById(s);r&&(r.dataset.invalid=!0,r.innerText=e.msg)})),!1)},submitForm:function(){var t=this;if(this.validateCurrentStep()){var e=new FormData(this.$refs.form);this.submitting=!0,axios({method:"POST",url:"http://covid19-estimator-api.herokuapp.com/api/v1/on-covid-19/json",data:r.stringify(e),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){t.success=!0,t.output=e.data,t.current_step.is_completed=!0,t.setCurrentStep(t.current_step.sn+1)})).catch((function(e){t.success=!1})).then((function(){t.submitting=!1}))}}},data:function(){return{output:null,success:!1,submitting:!1,steps:[{sn:1,progress_text:"Step 1 of 3: Period Type",progress_label:"step 1",is_current:!1,is_completed:!1,rules:[{attr:"region[name]",rule:["required","number"]},{attr:"region[avgAge]",rule:["required","number"]},{attr:"region[avgDailyIncomeInUSD]",rule:["required","number"]},{attr:"region[avgDailyIncomePopulation]",rule:["required","number"]}]},{sn:2,progress_text:"Step 2 of 3: Data",progress_label:"step 2",is_current:!1,is_completed:!1,rules:[{attr:"population",rule:["required","number"]},{attr:"timeToElapse",rule:["required","number"]},{attr:"reportedCases",rule:["required","number"]},{attr:"totalHospitalBeds",rule:["required","number"]},{attr:"periodType",rule:["required","number"]}]},{sn:3,progress_text:"Step 3 of 3: Complete",progress_label:"complete",is_current:!1,is_completed:!1}],current_step:{}}},created:function(){this.setCurrentStep(1)},mounted:function(){}},n=(a(43),a(1)),o=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{ref:"form",staticClass:"form md:w-1/2 lg:w-1/4",attrs:{name:"estimation-form"},on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.submitForm(e)}}},[a("form-progress-indicator",t._b({},"form-progress-indicator",{steps:t.steps,current_step:t.current_step},!1)),t._v(" "),a("fieldset",{directives:[{name:"show",rawName:"v-show",value:1===t.current_step.sn,expression:"current_step.sn === 1"}],staticClass:"form__fieldset",attrs:{"data-active":1===t.current_step.sn}},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)]),t._v(" "),a("fieldset",{directives:[{name:"show",rawName:"v-show",value:2===t.current_step.sn,expression:"current_step.sn === 2"}],staticClass:"form__fieldset",attrs:{"data-active":2===t.current_step.sn}},[t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10)]),t._v(" "),a("div",{attrs:{role:"alert"}},[t.output?a("output-component",{attrs:{output:t.output}}):t._e()],1),t._v(" "),a("div",{staticClass:"form__group"},[a("button",{staticClass:"btn btn--rounded",attrs:{disabled:t.isFirstStep||t.submitting,type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.previousStep(e)}}},[a("span",{staticClass:"btn__text"},[t._v("previous")])]),t._v(" "),a("button",{directives:[{name:"show",rawName:"v-show",value:!t.isLastStep,expression:"!isLastStep"}],staticClass:"btn btn--rounded btn--shadowed btn--primary mt-2",attrs:{disabled:t.submitting,type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.nextStep(e)}}},[a("span",{staticClass:"btn__text"},[t._v("next")])]),t._v(" "),a("input",{attrs:{"data-go-estimate":"",disabled:""}}),t._v(" "),a("button",{directives:[{name:"show",rawName:"v-show",value:t.isLastStep,expression:"isLastStep"}],staticClass:"btn btn--rounded btn--shadowed btn--primary mt-2",attrs:{disabled:t.submitting,type:"submit","data-go-estimate":""},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.submitForm(e)}}},[a("span",{staticClass:"btn__text"},[t._v("estimate")])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("legend",{staticClass:"form__legend"},[this._v("\n            Region Information\n            "),e("span",{staticClass:"block text-xs text-gray-700",attrs:{"aria-hidden":"true"}},[this._v("\n                All fields are required "),e("span",{staticClass:"text-red-600"},[this._v("*")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form__group"},[a("label",{staticClass:"form__label",attrs:{for:"region.name"}},[t._v("\n                Which region would like to estimate for?\n            ")]),t._v(" "),a("select",{staticClass:"form__select",attrs:{"data-invalid":"false",id:"region.name",name:"region[name]","aria-required":"true","aria-describedby":"region.name-feedback"}},[a("option",{attrs:{value:"Africa"}},[t._v("Africa")]),t._v(" "),a("option",{attrs:{value:"Asia"}},[t._v("Asia")]),t._v(" "),a("option",{attrs:{value:"Australia"}},[t._v("Australia")]),t._v(" "),a("option",{attrs:{value:"Europe"}},[t._v("Europe")]),t._v(" "),a("option",{attrs:{value:"North America"}},[t._v("North America")]),t._v(" "),a("option",{attrs:{value:"South America"}},[t._v("South America")])]),t._v(" "),a("small",{staticClass:"form__feedback",attrs:{"data-invalid":"false",id:"region.name-feedback","aria-live":"polite"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form__group"},[e("label",{staticClass:"form__label",attrs:{for:"region.avgAge"}},[this._v("\n                What is the average age of the citizens?\n            ")]),this._v(" "),e("input",{staticClass:"form__input",attrs:{"data-invalid":"false",id:"region.avgAge",name:"region[avgAge]",type:"number",placeholder:"18","aria-required":"true","aria-describedby":"region.avgAge-feedback"}}),this._v(" "),e("small",{staticClass:"form__feedback",attrs:{"data-invalid":"false",id:"region.avgAge-feedback","aria-live":"polite"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form__group"},[e("label",{staticClass:"form__label",attrs:{for:"region.avgDailyIncomeInUSD"}},[this._v("\n                What is the average daily income of the citizens? ($)\n            ")]),this._v(" "),e("input",{staticClass:"form__input",attrs:{"data-invalid":"false",id:"region.avgDailyIncomeInUSD",name:"region[avgDailyIncomeInUSD]",type:"number",placeholder:"10","aria-required":"true","aria-describedby":"region.avgDailyIncomeInUSD-feedback"}}),this._v(" "),e("small",{staticClass:"form__feedback",attrs:{"data-invalid":"false",id:"region.avgDailyIncomeInUSD-feedback","aria-live":"polite"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form__group"},[e("label",{staticClass:"form__label",attrs:{for:"region.avgDailyIncomePopulation"}},[this._v("\n                What is the ratio of the average daily income to the population?\n            ")]),this._v(" "),e("input",{staticClass:"form__input",attrs:{"data-invalid":"false",id:"region.avgDailyIncomePopulation",name:"region[avgDailyIncomePopulation]",type:"number",placeholder:"0.75","aria-required":"true","aria-describedby":"region.avgDailyIncomePopulation-feedback"}}),this._v(" "),e("small",{staticClass:"form__feedback",attrs:{"data-invalid":"false",id:"region.avgDailyIncomePopulation-feedback","aria-live":"polite"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("legend",{staticClass:"form__legend"},[this._v("\n            Estimation Data\n            "),e("span",{staticClass:"block text-xs text-gray-600",attrs:{"aria-hidden":"true"}},[this._v("\n                All fields are required "),e("span",{staticClass:"text-red-600"},[this._v("*")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form__group"},[e("label",{staticClass:"form__label",attrs:{for:"population"}},[this._v("Population of the region")]),this._v(" "),e("input",{staticClass:"form__input",attrs:{"data-invalid":"false",id:"population",name:"population",type:"number",placeholder:"58,000,000","aria-required":"true","aria-describedby":"population-feedback","data-population":""}}),this._v(" "),e("small",{staticClass:"form__feedback",attrs:{"data-invalid":"false",id:"population-feedback","aria-live":"polite"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form__group"},[e("label",{staticClass:"form__label",attrs:{for:"timeToElapse"}},[this._v("What is the expected duration of this estimate?")]),this._v(" "),e("input",{staticClass:"form__input",attrs:{"data-invalid":"false",id:"timeToElapse",name:"timeToElapse",type:"number",placeholder:"28","aria-required":"true","aria-describedby":"timeToElapse-feedback","data-time-to-elapse":""}}),this._v(" "),e("small",{staticClass:"form__feedback",attrs:{"data-invalid":"false",id:"timeToElapse-feedback","aria-live":"polite"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form__group"},[a("label",{staticClass:"form__label",attrs:{for:"periodType"}},[t._v("Will this duration be in days, weeks or months?")]),t._v(" "),a("input",{attrs:{"data-period-type":"",hidden:""}}),t._v(" "),a("select",{staticClass:"form__select",attrs:{"data-invalid":"false",id:"periodType",name:"periodType","aria-required":"true","aria-describedby":"periodType-feedback","data-period-type":""}},[a("option",{attrs:{value:"",selected:""}},[t._v("choose an option")]),t._v(" "),a("option",{attrs:{value:"days"}},[t._v("days")]),t._v(" "),a("option",{attrs:{value:"days"}},[t._v("weeks")]),t._v(" "),a("option",{attrs:{value:"days"}},[t._v("months")])]),t._v(" "),a("small",{staticClass:"form__feedback",attrs:{"data-invalid":"false",id:"periodType-feedback","aria-live":"polite"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form__group"},[e("label",{staticClass:"form__label",attrs:{for:"reportedCases"}},[this._v("How many positive cases of COVID19 has been reported?")]),this._v(" "),e("input",{staticClass:"form__input",attrs:{"data-invalid":"false",id:"reportedCases",name:"reportedCases",type:"number",placeholder:"5","aria-required":"true","aria-describedby":"reportedCases-feedback","data-reported-cases":""}}),this._v(" "),e("small",{staticClass:"form__feedback",attrs:{"data-invalid":"false",id:"reportedCases-feedback","aria-live":"polite"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form__group"},[e("label",{staticClass:"form__label",attrs:{for:"totalHospitalBeds"}},[this._v("How many hospital beds are available in this region?")]),this._v(" "),e("input",{staticClass:"form__input",attrs:{"data-invalid":"false",id:"totalHospitalBeds",name:"totalHospitalBeds",type:"number",placeholder:"28,000,000","aria-required":"true","aria-describedby":"totalHospitalBeds-feedback","data-total-hospital-beds":""}}),this._v(" "),e("small",{staticClass:"form__feedback",attrs:{"data-invalid":"false",id:"totalHospitalBeds-feedback","aria-live":"polite"}})])}],!1,null,"249e4d59",null);e.default=o.exports},46:function(t,e,a){"use strict";a.r(e);var s={props:{},mounted:function(){}},r=(a(40),a(1)),i=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-gray-100"},[a("section",{staticClass:"bg-primary-lighter px-4 py-6 md:py-8",staticStyle:{"min-height":"250px"}},[a("div",{staticClass:"w-full md:w-1/2 mx-auto"},[a("h1",{staticClass:"text-4xl md:text-5xl font-black text-primary text-center"},[t._v("Covid19 Impact Estimator")]),t._v(" "),a("p",{staticClass:"text-center font-semibold italic text-lg text-gray-800"},[t._v("\n                Too many patients, not enough hospitals and beds. A serious shortage of ventilators, masks \n                and other PPE - if we donʼt practice social distancing.\n            ")]),t._v(" "),a("img",{staticClass:"mx-auto mt-4",attrs:{src:"./assets/imgs/corona.svg",height:"250",width:"250",alt:"corona virus"}})])]),t._v(" "),a("section",{staticClass:"section"},[t._m(0),t._v(" "),a("form-component")],1),t._v(" "),t._m(1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full md:w-1/2 lg:w-1/3 mx-auto"},[e("h1",{staticClass:"section__title mb-0"},[this._v("Estimate Calculator")]),this._v(" "),e("p",{staticClass:"text-center text-gray-700"},[this._v("\n                This Estimate calculator calculates the impact of COVID19 on lives, health systems, supply chains, and the economy.\n            ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"bg-gray-300 py-4 px-4 text-center"},[e("p",[this._v("\n            Teched up by "),e("a",{staticClass:"text-primary-dark",attrs:{rel:"nofollow",target:"__blank",href:"https://twitter.com/kodnificent"}},[this._v("kodnificent")]),this._v(" © 2020 Covid-19 Impact Estimator\n        ")]),this._v(" "),e("p",[e("a",{staticClass:"text-primary-dark",attrs:{rel:"nofollow",target:"__blank",href:"https://github.com/kodnificent/covid-19-estimator-webapp"}},[this._v("source code")])])])}],!1,null,null,null);e.default=i.exports},47:function(t,e,a){"use strict";a.r(e);var s={props:{},mounted:function(){}},r=a(1),i=Object(r.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.default=i.exports},48:function(t,e,a){"use strict";a.r(e);var s={props:{output:{required:!0,type:Object}},mounted:function(){}},r=a(1),i=Object(r.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    "+this._s(this.output.data.region.name)+"\n")])}),[],!1,null,null,null);e.default=i.exports},49:function(t,e,a){"use strict";a.r(e);var s={props:{steps:{required:!0,type:Array},current_step:{required:!0,type:Object}}},r=(a(44),a(1)),i=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ol",{staticClass:"progress-indicator",attrs:{tabindex:"0",role:"progressbar","aria-valuemin":"1","aria-valuemax":"3","aria-valuenow":t.current_step.sn,"aria-valuetext":t.current_step.progress_text,"aria-live":"polite"}},t._l(t.steps,(function(e){return a("li",{key:e.sn,staticClass:"progress-indicator__item",attrs:{"aria-hidden":"true","data-active":e.is_current?"true":"false","data-completed":e.is_completed?"true":"false"}},[a("span",{staticClass:"progress-indicator__icon"}),t._v(" "),a("button",{staticClass:"progress-indicator__text cursor-default",attrs:{type:"button",disabled:!e.is_current}},[t._v(t._s(e.progress_label))])])})),0)}),[],!1,null,"55f9d38d",null);e.default=i.exports},50:function(t,e){},55:function(t,e){},57:function(t,e){},59:function(t,e){}},[[15,1,2]]]);