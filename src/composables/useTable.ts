/**
 * This composable function allows us to create the table configuration.
 */

import { ref } from "vue"

type HeaderOption = {
  width?: number,
  name: string,
  title: string,
  class?: string
}

type ApiOption = {

}

export type VueTableConfiguration = {
  headers: HeaderOption[],
  api?: ApiOption,
  styleAdapter?: []
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