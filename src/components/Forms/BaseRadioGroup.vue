<template>
  <div>
    <component
      v-for="option in options"
      :key="option.value"
      :is="vertical ? 'div' : 'span'"
      :class="{
        horizonal: !vertical
      }"
      >
      <BaseRadio
        :label="option.label"
        :value="option.value"
        :name="name"
        :modelValue="modelValue"
        @update:modelValue="$emit('update:modelValue', $event)"
      />  
    </component>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    modelValue: {
      type: [String, Number],
      required: true
    },
    vertical: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.horizonal {
  margin-right: 20px;
}
</style>