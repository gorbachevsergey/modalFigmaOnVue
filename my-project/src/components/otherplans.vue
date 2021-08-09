<template>
  <div class="program-selection">
    <div v-for="(value,ind) in allSubscriptions" :key="ind"  class="service-selection service-selection__one-time" >
      <h3>{{value.title }}</h3>
      <div v-for ="(element,index) in value.services"  :key="index">
        <div v-if  = "element.type === 'checkbox'" class="one-time__item">
          <div class="item__text">
            <h4>{{element.name}}</h4>
            <p>{{element.text}}</p>
          </div>
          <div class="item__checkbox">
            <input type="checkbox" name="one-time__checkbox" :value="element.value">
            <label> {{ element.value }} </label>
          </div>
        </div>
        <div v-else-if = "element.type === 'radio'" class="one-time__item">
          <div class="item__text">
            <h4>{{element.name}}</h4>
            <p>{{element.text}}</p>
          </div>
          <div class="item__checkbox">
            <input type="radio" name="one-time__checkbox" :value="element.value" @change="active" @abort="notActive">
            <label> {{ element.value }} </label>
            <div class="imgPlus" v-bind:class="{ imgPlusActive: isActive }"  >
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                   width="10pt" height="10pt" viewBox="0 0 1280.000000 1280.000000"
                   preserveAspectRatio="xMidYMid meet">
                <metadata>
                  Created by potrace 1.16, written by Peter Selinger 2001-2019
                </metadata>
                <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                   fill="#104A27" stroke="none">
                  <path d="M5959 11947 c-51 -15 -121 -53 -170 -94 -45 -38 -107 -137 -124 -198
    -20 -73 -25 -565 -25 -2579 l0 -1728 -2182 3 -2183 2 -58 -22 c-105 -41 -189
    -122 -241 -231 l-31 -65 0 -526 0 -525 34 -67 c65 -129 187 -216 329 -237 41
    -6 723 -10 1762 -10 932 0 1887 -3 2122 -7 l428 -6 2 -2141 3 -2141 22 -55
    c33 -80 89 -149 161 -197 105 -71 108 -71 614 -78 486 -7 540 -4 634 39 112
    51 224 197 238 309 9 72 16 1344 16 2840 l0 1427 2153 -2 2152 -3 68 32 c118
    56 210 171 237 300 7 31 10 226 8 538 l-3 490 -32 68 c-56 117 -169 208 -296
    237 -29 6 -579 10 -1574 11 -840 1 -1794 4 -2119 7 l-590 4 0 2151 1 2152 -32
    68 c-42 89 -121 168 -210 210 l-68 32 -500 2 c-374 2 -511 -1 -546 -10z"/>
                </g>
              </svg>
            </div>
          </div>
        </div >
        <div v-else-if = "element.type === 'list'" class="item__text" >
          <ul >
            <li>{{element.name}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>



</template>

<script>
export default {
  data: function (){
    return {
      isActive:false
    }
  },
  props: {
    allSubscriptions: Array,
  },
  methods: {
    active: function (){
      this.isActive = true
    },
    notActive: function (){
      this.isActive = false
    }
  },

}
</script>

<style scoped>

.program-selection{
  width: 720px;
  height: 890px;
  overflow: auto;
  background: #F8F9FA;
}

.service-selection{
  width: 500px;
  margin-left: 92px;
}

.service-selection h3{
  font-family: "Proxima_Nova_Semibold","PT Sans",sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  color: rgba(34, 35, 37, 1);
  margin-top: 50px;

}

.item__text{
  width: 500px;
}
.item__text h4{
  font-family:"Proxima_Nova_Semibold","PT Sans",sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: rgba(34, 35, 37, 1);
  margin-top: 30px;
}

.item__text p{
  font-family: "Proxima_Nova_Semibold","PT Sans",sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  color:rgba(133, 140, 148, 1);
  width: 350px;
  margin-top: 10px;
}

.one-time__item{
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.item__checkbox{
  display: flex;
  align-items: center;
  height: 30px;
  width: 126px;
  justify-content: space-around
}
.item__text li{
  font-family:"Proxima_Nova_Semibold","PT Sans",sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: rgba(34, 35, 37, 1);
  margin-top: 30px;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
}

.item__text ul{
  padding: 0;
}
li:after{
  content: '';
  top: 4px;
  left: 7px;
  width: 7px;
  height: 12px;
  border: 3px solid #104A27;
  border-top: 0;
  border-left: 0;
  -webkit-transform: rotate(35deg);
  transform: rotate(35deg);

}

@supports (-webkit-appearance: none) or (-moz-appearance: none) {
  input[type='checkbox'],input[type='radio'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
    display: inline-block;
    background: white;
    cursor: pointer;
    height: 23px;
    width: 38px;
    vertical-align: middle;
    border: 2px solid #104A27;
    border-radius: 11px;
    -webkit-transition: background .3s, border-color .3s, box-shadow .2s;
    transition: background .3s, border-color .3s, box-shadow .2s;
  }
  input[type='checkbox']:after ,input[type='radio']:after{
    content: '';
    display: block;
    position: absolute;
    top: 2px;
    left: 2px;
    background: #C4C4C4;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-transition: opacity 0.2s, -webkit-transform 0.3s ease;
    transition: transform 0.3s ease, opacity 0.2s, -webkit-transform 0.3s ease;

  }
  input[type='checkbox']:checked, input[type='radio']:checked{
    background: #104A27;

    -webkit-transition: opacity 0.3s, -webkit-transform 0.6s cubic-bezier(.2, .85, .32, 1.2);
    transition: transform 0.6s cubic-bezier(.2, .85, .32, 1.2), opacity 0.3s, -webkit-transform 0.6s cubic-bezier(.2, .85, .32, 1.2);
  }
  input[type='checkbox']:disabled, input[type='radio']:disabled{
    cursor: not-allowed;
    border: 2px solid #BBC1E1;
    opacity: .9;
  }
  input[type='checkbox']:focus, input[type='radio']:focus{
    border: 3px solid #104A27;
  }
  input[type='checkbox']:checked:after , input[type='radio']:checked:after{
   background: white;

    -webkit-transform: translateX(15px);
    transform: translateX(15px);
  }
  input[type='checkbox']:disabled:not(:checked):after, input[type='radio']:disabled:not(:checked):after {
    opacity: .6;
  }
}
.imgPlus{
  opacity: 0;
  position: relative;
  z-index: 200;
  top: 5px;
  left: -58px;
}

.imgPlusActive{
  opacity: 1;
}
</style>