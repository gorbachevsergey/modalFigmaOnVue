<template>
  <div>
    <div class="choice-program">
      <choicePlan></choicePlan>
      <planOneTime v-if=" this.$store.state.choice[0] === 'Разовые услуги'"></planOneTime>
      <otherPlans  v-else-if=" this.$store.state.choice[0]  === 'Подписка на 1 месяц'"></otherPlans>
    </div>
  </div>
</template>

<script>

import choicePlan from './components/choiceplan.vue'
import planOneTime from './components/planOneTime.vue'
import otherPlans from './components/otherplans.vue'



export default {
  components: {
    choicePlan,
    planOneTime,
    otherPlans
  },
}
</script>

<style>
.choice-program{
  max-width: 1440px;
  height: 693px;
  display: flex;
  margin: auto;

}


</style>
