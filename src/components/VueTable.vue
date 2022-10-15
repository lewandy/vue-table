<template>
  <div>
    <table>
      <tr>
        <th :key="header.name" v-for="header of options.headers">{{ header.title }}</th>
      </tr>
      <tr :key="row" v-for="row of state">
        <td :key="header.name" v-for="header of options.headers">{{ row[header.name] }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "VueTable",
  props: {
    state: {
      required: true,
    },
    options: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {

    }
  }
})
</script>

<style scoped>

</style>