<template>
    <div class="program-selection">
      <div class="selection__header">
        <h2>Выберите вариант для себя</h2>
      </div>
      <div v-for="(element,index) in choiceSubscription" :key="index">
        <div v-if="index === check[1]" class="subscription" >
          <div style="display: flex">
            <input type="radio" v-model="check" :value="[element.name,index]" name="subscription" @change="changeCheckbox">
            <label class="subscription-label" >{{element.name}} </label>
          </div>
          <label class="subscription-label-price test">{{summa > element.value ? summa : element.value}}</label>
        </div>
        <div v-else class="subscription" >
          <div style="display: flex">
            <input type="radio" v-model="check" :value="[element.name,index]" name="subscription" @change="changeCheckbox">
            <label class="subscription-label" >{{element.name}} </label>
          </div>
          <label class="subscription-label-price ">{{element.value}}</label>
        </div>
      </div>
      <div class="btn">Оформить</div>
    </div>
</template>




<script>
  import {mapGetters} from 'vuex'
  export default {
    data : function(){
      return {
        check: [],
      }
    },
    methods:{
      changeCheckbox: function (){
        this.$store.dispatch('AllSumma',[0])
        this.$store.dispatch('checkSub',this.check)
      },
    },
    computed: mapGetters(['choiceSubscription','summa']),

  }
</script>




<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap');
@font-face{
  font-family: "Kudryashev Headline Sans";
  src: url('../fonts/Kudryashev_Headline_Sans.otf') format("opentype");
}
@font-face{
  font-family: "Proxima_Nova_Semibold";
  src: url('../fonts/Proxima_Nova_Semibold.ttf') format("ttf")
}


@supports (-webkit-appearance: none) or (-moz-appearance: none) {
  input[type='radio'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
    display: inline-block;
    background: white;
    cursor: pointer;
    height: 26px;
    width: 26px;

    vertical-align: middle;
    border: 1px solid #104A27;
    -webkit-transition: background .3s, border-color .3s, box-shadow .2s;
    transition: background .3s, border-color .3s, box-shadow .2s;
    margin-right: 20px;
  }
  input[type='radio']:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transition: opacity 0.2s, -webkit-transform 0.3s ease;
    transition: opacity 0.2s, -webkit-transform 0.3s ease;
    transition: transform 0.3s ease, opacity 0.2s;
    transition: transform 0.3s ease, opacity 0.2s, -webkit-transform 0.3s ease;
  }
    input[type='radio']:checked {
    background: #104A27;
    -webkit-transition: opacity 0.3s, -webkit-transform 0.6s cubic-bezier(.2, .85, .32, 1.2);
    transition: opacity 0.3s, -webkit-transform 0.6s cubic-bezier(.2, .85, .32, 1.2);
    transition: transform 0.6s cubic-bezier(.2, .85, .32, 1.2), opacity 0.3s;
    transition: transform 0.6s cubic-bezier(.2, .85, .32, 1.2), opacity 0.3s, -webkit-transform 0.6s cubic-bezier(.2, .85, .32, 1.2);
  }
    input[type='radio']:disabled {
    cursor: not-allowed;
    border: 2px solid #BBC1E1;
    opacity: .9;
  }
    input[type='radio']:disabled:checked {
    background: #E1E6F9;
  }
    input[type='radio']:disabled + label {
    cursor: not-allowed;
  }
    input[type='radio']:hover:not(:checked):not(:disabled) {
    border: 2px solid #104A27;
  }
    input[type='radio']:after {
    opacity: 0;
  }
    input[type='radio']:checked:after {
    opacity: 1;
  }

  input[type='radio'] {
    border-radius: 50%;
  }

  input[type='radio']:checked:after {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-transform: rotate(43deg);
    transform: rotate(43deg);
  }
  input[type='radio']:after {
    top: 4px;
    left: 7px;
    width: 7px;
    height: 12px;
    border: 3px solid white;
    border-top: 0;
    border-left: 0;
    -webkit-transform: rotate(20deg);
    transform: rotate(20deg);

  }

}

.program-selection {
  width: 720px;
  height: 890px;
}

.selection__header h2{
  font-family: "Kudryashev Headline Sans", "Roboto", sans-serif;;
  font-size: 38px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  color: #222325;

  margin-top: 60px;
  margin-bottom: 70px;
  margin-left: 120px;
}

.subscription{
  width: 560px;
  height: 110px;
  margin-left: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;

}
.subscription-label{
  font-family: "Proxima_Nova_Semibold","PT Sans",sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;


}

.subscription-label-price{
  font-family: "Proxima_Nova_Semibold","PT Sans",sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;

}
.btn{
  display: flex;
  height: 60px;
  width: 266px;
  border-radius: 8px;
  margin-left: 120px;
  font-family: "Proxima_Nova_Semibold","PT Sans",sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  background-color: rgba(16, 74, 39, 1);
  color: white;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

</style>
