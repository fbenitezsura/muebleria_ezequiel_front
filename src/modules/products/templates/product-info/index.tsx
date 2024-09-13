import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { Heading, Text } from "@medusajs/ui"
import Link from "next/link"
import React, { useMemo } from "react"
import useProductPrice from "@lib/hooks/use-product-price"
import {
  ProductProvider,
  useProductActions,
} from "@lib/context/product-context";
import ShowNumberFormat from '@modules/common/components/number-format';
import clsx from "clsx"

type ProductInfoProps = {
  product: PricedProduct
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {

  const { updateOptions, addToCart, options, inStock, variant } =
    useProductActions()

  const price = useProductPrice({ id: product.id!, variantId: variant?.id })

  const selectedPrice = useMemo(() => {
    const { variantPrice, cheapestPrice } = price

    return cheapestPrice || null
  }, [price])

  return (
    <div id="product-info">
      <div className="flex flex-col gap-y-4 w-full mx-auto">
        {product.collection && (
          <Link
            href={`/collections/${product.collection.handle}`}
            className="text-medium text-ui-fg-muted hover:text-ui-fg-subtle"
          >
            {product.collection.title}
          </Link>
        )}
        <Heading level="h2" className="text-[38px] leading-10 text-ui-fg-base">
          {product.title}
        </Heading>

        {selectedPrice ? (
          <div className="flex items-center justify-between text-ui-fg-base border-t-2 border-b-2 py-4">
            <span
              className={clsx("text-[32px] font-bold", {
                "text-ui-fg-interactive": selectedPrice.price_type === "sale",
              })}
            >
              <ShowNumberFormat value={selectedPrice.calculated_price} />
            </span>
            <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span className="ml-2">En Stock</span>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        <div>
          <p className="font-bold mb-2">Descripción</p>
          <Text className="text-medium text-ui-fg-subtle text-justify">
            {product.description}
          </Text>
        </div>

      </div>
    </div>
  )
}

export default ProductInfo
