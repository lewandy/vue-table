/**
 * This composable function allows us to create the table configuration.
 */

import { ref } from "vue"

type Header = {
  width?: number,
  name: string,
  title: string,
  class?: string
}

type VueTableConfiguration = {
  headers: Header[]
}

export function useTable(options: VueTableConfiguration) {
  const state = ref([])

  const load = (data: any): void => {
    state.value = data
  }

  return {
    load,
    state,
    options,
  }
}