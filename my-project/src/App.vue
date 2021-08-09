<template>


  <div>
    <div class="choice-program">
      <choicePlan :subscription = "choiceSubscription"  @checkRadio="choiceRadio"></choicePlan>
      <planOneTime :oneTime = "oneTime" v-if=" choice === 'Разовые услуги'"></planOneTime>
      <otherPlans :allSubscriptions = "allSubscriptions[0].oneMonth" v-else-if=" choice  === 'Подписка на 1 месяц'" ></otherPlans>
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
  data : function (){
    return{
      choiceSubscription:[
        {
          name: 'Разовые услуги',
          value: 3500,
        },
        {
          name: 'Подписка на 1 месяц',
          value: 9900,
        },
        {
          name: 'Подписка на 3 месяца',
          value: 26700,
        },
        {
          name: 'Подписка на 6 месяцев',
          value: 53400,
        },

      ],
      oneTime:[
        {
          title:'Выберите услугу',
          services:[
            {
              name:'Разовая консультация нутрициолога',
              text:'сбор и анализ индивидуального анамнеза, рекомендации по дополнительной диагностике, помощь в формулировке целей и этапов их достижения, анализ текущего рациона и план изменения, подбор индивидуального списка продуктов питания, советы по приготовлению продуктов и рецептам',
              value: 5000,
              type: 'checkbox'
            },
            {
              name:'Шоппинг-сопровождение',
              text:'интерактивная экскурсия с нутрициологом по магазину Азбука Вкуса (онлайн или оффлайн на выбор) с рекомендациями по выбору продуктов, состравлению индивидуальной корзины питания, чтению этикеток, сочетанию продуктов, сезонности, ингредиентам и ответами на вопросы',
              value: 3500,
              type: 'checkbox'
            },
            {
              name:'Индивидуальный план питания',
              text:'персональный план питания на 4 недели по итогам работы в течение 1 месяца (рацион и рецепты)',
              value: 8000,
              type: 'checkbox'
            }
          ]

        },
        {
          title:'Добавить к этому анализы',
          services:[
            {
              name:'Проблемы с ЖКТ',
              text:'',
              value: '13866',
              type: 'checkbox'
            },
            {
              name:'Хочу похудеть',
              text:'',
              value: '5092',
              type: 'checkbox'
            },
            {
              name:'Вегетарианство',
              text:'',
              value: '8402',
              type: 'checkbox'
            },
            {
              name:'Спорт',
              text:'',
              value: '8934',
              type: 'checkbox'
            },
            {
              name:'Общая диагностика',
              text:'',
              value: '8591',
              type: 'checkbox'
            },
            {
              name:'Нет энергии',
              text:'',
              value: '14130',
              type: 'checkbox'
            }
          ]
        },
        {
          title: 'Взятие крови на дому',
          services: [
            {
              name:'Москва в пределах МКАД',
              text:'',
              value: '1796',
              type: 'radio',
            },
            {
              name:'до 20 км от МКАД',
              text:'',
              value: '4490',
              type: 'radio',
            },
            {
              name:'от 20 до 30 км от МКАД',
              text:'',
              value: '5986',
              type: 'radio',
            }
          ]
        }

      ],
      allSubscriptions: [
          {
            oneMonth:[
              {
                title: 'Сюда входит',
                services:[
                  {
                    name:'Консультация нутрициолога'
                  },
                  {
                    name: 'Сопровождение онлайн в персональном чате'
                  },
                  {
                    name: 'Рекомендации по выбору продуктов'
                  },
                  {
                    name: 'Анализ вашей продуктовой корзины'
                  },
                  {
                    name: 'Формирование новой продуктовой корзины'
                  },
                  {
                    name: 'Шоппинг-сопровождение (2 часа)'
                  }

                ]
              },
              {
                title:'Добавить к этому анализы',
                services:[
                  {
                    name:'Проблемы с ЖКТ',
                    value: '13866',
                  },
                  {
                    name:'Хочу похудеть',
                    value: '5092',
                  },
                  {
                    name:'Вегетарианство',
                    value: '8402',
                  },
                  {
                    name:'Спорт',
                    value: '8934',
                  },
                  {
                    name:'Общая диагностика',
                    value: '8591',
                  },
                  {
                    name:'Нет энергии',
                    value: '14130',
                  }
                ]
              },
              {
                title: 'Взятие крови на дому',
                services: [
                  {
                    name:'Москва в пределах МКАД',
                    value: '1796',
                  },
                  {
                    name:'до 20 км от МКАД',
                    value: '4490',
                  },
                  {
                    name:'от 20 до 30 км от МКАД',
                    value: '5986',
                  }
                ]
              }
            ]
          }
      ],
      choice : '',

    }
  },
  methods: {
    choiceRadio(data){
      this.choice = data
    }
  }
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
