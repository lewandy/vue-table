<template>
  <table>
    <thead>
      <tr>
        <th scope="col" :key="header.name" :class="header.class ?? false" v-for="header of options.headers">{{
            header.title
        }}
        </th>
      </tr>
    </thead>
    <tbody>
      <template v-if="!isEmpty">
        <tr :key="row" v-for="row of state">
          <td :key="header.name" v-for="header of options.headers">{{ row[header.name] }}
          </td>
        </tr>
      </template>
      <template v-else>
        <div class="vue-table__no-data-title">
          No data
        </div>
      </template>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import type { VueTableConfiguration } from "../types/types"

export default defineComponent({
  name: "VueTable",
  props: {
    state: {
      type: Object as PropType<Array<any>>,
      required: true,
    },
    options: {
      type: Object as PropType<VueTableConfiguration>,
      required: true
    }
  },
  computed: {
    isEmpty() {
      return !!this.state.length == false
    }
  },
  setup() {
    return {

    }
  }
})
</script>