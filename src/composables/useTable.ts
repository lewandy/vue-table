/**
 * This composable function allows us to create the table configuration.
 */

import { ref } from "vue"
import type { TableUtilities, VueTableConfiguration } from "../types/useTable.types"

export function useTable(options: VueTableConfiguration): TableUtilities {
  const state = ref([])

  const load = (data: any): void => {
    state.value = data
  }

  // TODO: Implement sort functionality
  const sort = (sortBy: string) => {

  }

  // TODO: Implement filter functionality
  const filter = (key: string, value: string | number) => {

  }

  return {
    load,
    sort,
    filter,
    state,
    options,
  }
}