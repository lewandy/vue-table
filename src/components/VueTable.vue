<template>
  <table>
    <tr>
      <th :key="header.name" :class="header.class ?? false" v-for="header of options.headers">{{ header.title }}
      </th>
    </tr>
    <tr :key="row" v-for="row of state">
      <td :key="header.name" v-for="header of options.headers">{{ row[header.name] }}
      </td>
    </tr>
  </table>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { VueTableConfiguration } from "../composables/useTable"

export default defineComponent({
  name: "VueTable",
  props: {
    state: {
      required: true,
    },
    options: {
      type: Object as PropType<VueTableConfiguration>,
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