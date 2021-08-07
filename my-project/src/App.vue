<template>


  <div>
  <choicePlan :subscription="choiceSubscription" ></choicePlan>

  </div>



</template>

<script>
import choicePlan from './components/choiceplan.vue'

export default {
  name: 'App',
  components: {
    choicePlan
  },
  data : function (){
    return{
      choiceSubscription:[
        {
          name: 'Разовые услуги',
          value: 3500,
          isActive: false,
        },
        {
          name: 'Подписка на 1 месяц',
          value: 9900,
          isActive: false,
        },
        {
          name: 'Подписка на 3 месяца',
          value: 26700,
          isActive: false,
        },
        {
          name: 'Подписка на 6 месяцев',
          value: 53400,
          isActive: false,
        },

      ]
    }
  },
}
</script>

<style>

</style>
