export type DetailsCardRow = {
  left: string
  right: string
  rightClassName?: string
}

export type DetailsCardProps = {
  title: string
  rows: DetailsCardRow[]
}
