import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
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

                        value: 13866,
                        type: 'checkbox'
                    },
                    {
                        name:'Хочу похудеть',

                        value: 5092,
                        type: 'checkbox'
                    },
                    {
                        name:'Вегетарианство',

                        value: 8402,
                        type: 'checkbox'
                    },
                    {
                        name:'Спорт',

                        value: 8934,
                        type: 'checkbox'
                    },
                    {
                        name:'Общая диагностика',

                        value: 8591,
                        type: 'checkbox'
                    },
                    {
                        name:'Нет энергии',

                        value: 14130,
                        type: 'checkbox'
                    }
                ]
            },
            {
                title: 'Взятие крови на дому',
                services: [
                    {
                        name:'Москва в пределах МКАД',
                        value: 1796,
                        type: 'radio',
                    },
                    {
                        name:'до 20 км от МКАД',
                        value: 4490,
                        type: 'radio',
                    },
                    {
                        name:'от 20 до 30 км от МКАД',
                        value: 5986,
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
                                name:'Консультация нутрициолога',
                                type: 'list'
                            },
                            {
                                name: 'Сопровождение онлайн в персональном чате',
                                type: 'list'
                            },
                            {
                                name: 'Рекомендации по выбору продуктов',
                                type: 'list'
                            },
                            {
                                name: 'Анализ вашей продуктовой корзины',
                                type: 'list'
                            },
                            {
                                name: 'Формирование новой продуктовой корзины',
                                type: 'list'
                            },
                            {
                                name: 'Шоппинг-сопровождение (2 часа)',
                                type: 'list'
                            }

                        ]
                    },
                    {
                        title:'Добавить к этому анализы',
                        services:[
                            {
                                name:'Проблемы с ЖКТ',
                                value: 13866,
                                type: 'checkbox'
                            },
                            {
                                name:'Хочу похудеть',
                                value: 5092,
                                type: 'checkbox'
                            },
                            {
                                name:'Вегетарианство',
                                value: 8402,
                                type: 'checkbox'
                            },
                            {
                                name:'Спорт',
                                value: 8934,
                                type: 'checkbox'
                            },
                            {
                                name:'Общая диагностика',
                                value: 8591,
                                type: 'checkbox'
                            },
                            {
                                name:'Нет энергии',
                                value: 14130,
                                type: 'checkbox'
                            }
                        ]
                    },
                    {
                        title: 'Взятие крови на дому',
                        services: [
                            {
                                name:'Москва в пределах МКАД',
                                value: 1796,
                                type: 'radio',
                            },
                            {
                                name:'до 20 км от МКАД',
                                value: 4490,
                                type: 'radio',
                            },
                            {
                                name:'от 20 до 30 км от МКАД',
                                value: 5986,
                                type: "radio",
                            }
                        ]
                    }
                ]
            }
        ],
        choice : '',
        summa : 0,
    },
    getters:{
        choiceSubscription(state){
            return state.choiceSubscription
        },
        choiceOneTime(state){
            return state.oneTime
        },
        choiceOneMonth(state){
            return state.allSubscriptions
        },
        summa(state){
            return state.summa
        }
    },
    mutations:{
        checkSubscription(state,payload){
            state.choice = payload
        },
        updateSumma(state, payload){
            state.summa = payload
        }
    },
    actions:{
        checkSub(context,choice){
            context.commit('checkSubscription', choice)
        },
        AllSumma(context,choice){
            context.commit('updateSumma',choice.reduce(function (sum,current){
                return sum + current
            },0))
        }
    },
})