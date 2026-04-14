import { type PlayIconProps } from "./PlayIcon.types"

export const PlayIcon = ({ dark = false }: PlayIconProps) => {
  return (
    <span
      style={{
        display: "block",
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderWidth: "7px 0 7px 13px",
        borderColor: `transparent transparent transparent ${dark ? "var(--c-bg)" : "#fff"}`,
      }}
    />
  )
}
