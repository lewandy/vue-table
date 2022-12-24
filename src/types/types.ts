export type HeaderOption = {
  width?: number,
  name: string,
  title: string,
  class?: string
}

export type TableUtilities = {
  state: any,
  options: VueTableOptions,
  load: Function,
  sort: Function,
  filter: Function
}

// TODO: Define api options type
export type ApiOption = {

}

export type VueTableOptions = {
  headers: HeaderOption[],
  api?: ApiOption,
  styleAdapter?: []
}