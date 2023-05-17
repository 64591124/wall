<template>
  <vue-danmaku ref="danmaku" v-model:danmus="danmus" useSlot loop :channels="5">
    <template v-slot:dm="{ index, danmu }">
      <span>{{ index }}{{ danmu.name }}：{{ danmu.text }}</span>
    </template>
  </vue-danmaku>
</template>

<script>
import vueDanmaku from 'vue3-danmaku'

export default {
  setup(props) {

    const danmus = props.carts
    return { danmus }
  },
}
</script>
