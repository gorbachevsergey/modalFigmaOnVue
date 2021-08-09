<template>
  <div>
    <div v-for="(value,ind) in allSubscriptions" :key="ind"  class="service-selection service-selection__one-time" >
      <h3>{{value.title }}</h3>
      <div v-for="(element,index) in value.services" class="one-time__item" :key="index">
        <div class="item__text">
          <h4>{{element.name}}</h4>
          <p>{{element.text}}</p>
        </div>
        <div v-if="element.value" class="item__checkbox">
          <form name="one-time-consultation">
            <input type="checkbox" name="one-time__checkbox" :value="element.value">
            <label class="item-checkbox__label"> {{ element.value }} </label>
          </form>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  props: {
    allSubscriptions: Array,
  }
}
</script>

<style scoped>

</style>