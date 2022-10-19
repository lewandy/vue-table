export type HeaderOption = {
  width?: number,
  name: string,
  title: string,
  class?: string
}

export type TableUtilities = {
  state: any,
  options: VueTableConfiguration,
  load: Function,
  sort: Function,
  filter: Function
}

// TODO: Define api options type
export type ApiOption = {

}

export type VueTableConfiguration = {
  headers: HeaderOption[],
  api?: ApiOption,
  styleAdapter?: []
}