import { type SmallPlayIconProps } from "./SmallPlayIcon.types"

export const SmallPlayIcon = ({ dark = false }: SmallPlayIconProps) => {
  return (
    <span
      style={{
        display: "block",
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderWidth: "6px 0 6px 11px",
        borderColor: `transparent transparent transparent ${dark ? "var(--c-bg)" : "#fff"}`,
      }}
    />
  )
}
