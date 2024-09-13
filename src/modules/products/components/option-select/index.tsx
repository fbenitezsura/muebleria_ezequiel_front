import { onlyUnique } from "@lib/util/only-unique"
import { ProductOption } from "@medusajs/medusa"
import clsx from "clsx"
import React from "react"

type OptionSelectProps = {
  option: ProductOption
  current: string
  updateOption: (option: Record<string, string>) => void
  title: string
}

const OptionSelect: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
}) => {
  const filteredOptions = option.values.map((v) => v.value).filter(onlyUnique)

  // Mapeo de nombres de colores a códigos hexadecimales
  const colorMap: Record<string, string> = {
    chocolate: "#D2691E",
    blanco: "#FFFFFF",
    negro: "#000000",
    // Añade más colores según sea necesario
  }

  return (
    <div className="flex flex-col gap-y-3">
      <span className="text-[24px]">{title}</span>
      <div className="flex flex-wrap gap-2">
        {filteredOptions.map((v) => {
          const isSelected = v === current

          // Obtener el código de color del mapeo
          const colorCode = title.toLowerCase() === "color"
            ? colorMap[v.toLowerCase()] || "#000000" // Color predeterminado si no se encuentra en el mapeo
            : undefined

          return (
            <button
              onClick={() => updateOption({ [option.id]: v })}
              key={v}
              className={clsx(
                "flex items-center justify-center",
                title.toLowerCase() === "color"
                  ? "w-8 h-8 rounded-full border"
                  : "h-10 rounded p-2 flex-1 text-small-regular",
                isSelected
                  ? "ring-2 ring-black"
                  : "hover:shadow-md transition-shadow duration-150"
              )}
              style={
                title.toLowerCase() === "color"
                  ? { backgroundColor: colorCode }
                  : {}
              }
            >
              {title.toLowerCase() === "color" ? "" : v}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default OptionSelect
