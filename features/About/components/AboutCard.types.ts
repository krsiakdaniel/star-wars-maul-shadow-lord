export type AboutCardRow = {
  left: string
  right: string
  rightClassName?: string
}

export type AboutCardProps = {
  title: string
  rows: AboutCardRow[]
}
