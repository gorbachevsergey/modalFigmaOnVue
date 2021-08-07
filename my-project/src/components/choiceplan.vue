<template>
  <div class="program-selection">
    <div class="selection__header">
      <h2>Выберите вариант для себя</h2>
    </div>
    <div v-for="sub in subscription" :key="subscription" class="subscription__body" >
      <input type="radio" id="subscription-one-time" name="subscription" v-model="sub.isActive">
      <label class="subscription-label" for="subscription-one-time">{{ sub.name }}</label>
      <label class="subscription-label-price price-one-time" for="subscription-one-time">{{ sub.value }}</label>
    </div>
  </div>


</template>




<script>
  export default {
    props:['subscription'],
  }
</script>




<style scoped>
  input[type="radio"] { display: none; }

  input[type="radio"] + label:before{
    content: ' ';
    display: inline-block;
    height: 26px;
    width: 26px;
    border: 1px solid rgba(16, 74, 39, 1);
    border-radius: 50%;
    margin-right: 20px;
    background-size: 80% 80%;
    background-repeat: no-repeat;
    background-position: center center;

  }

  input[type="radio"]:checked + label:before{
    content: ' ';
    background-color: rgba(16, 74, 39, 1);

  }
</style>