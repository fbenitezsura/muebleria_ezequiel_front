import {
  ProductProvider,
  useProductActions,
} from "@lib/context/product-context"

import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { Button } from "@medusajs/ui"
import Divider from "@modules/common/components/divider"
import OptionSelect from "@modules/products/components/option-select";

import React, { useMemo } from "react"

type ProductActionsProps = {
  product: PricedProduct
}

const ProductActionsInner: React.FC<ProductActionsProps> = ({ product }) => {
  const { updateOptions, addToCart, options, inStock, variant } =
    useProductActions() 

  return (
    <div className="flex flex-col gap-y-2">
      <div>
        {product.variants.length > 0 && (
          <div className="flex flex-col gap-y-4">
            {(product.options || []).map((option) => {
              return (
                <div key={option.id}>
                  <OptionSelect
                    option={option}
                    current={options[option.id]}
                    updateOption={updateOptions}
                    title={option.title}
                  />
                </div>
              )
            })}
            <Divider />
          </div>
        )}
      </div>
      

      <button
        onClick={addToCart}
        disabled={!inStock || !variant}
        className={`w-full h-10 mt-5 ${!inStock ? 'bg-white border-[#FF813A] border-1 text-[#444]' : 'bg-[#FF813A] text-white'}  rounded-xl `}
      >
        {!inStock
          ? "Sin stock"
          : !variant
          ? "Seleccione una opcion"
          : "Agregar al carrito"}
      </button>
    </div>
  )
}

const ProductActions: React.FC<ProductActionsProps> = ({ product }) => (
  <ProductProvider product={product}>
    <ProductActionsInner product={product} />
  </ProductProvider>
)

export default ProductActions
