import Image from "next/image";
import { ProductItemProps } from '@/lib/types'

export default function ProductItem(props: ProductItemProps) {

  return (
    <div 
      className="col-span-full sm:col-span-2 lg:col-span-1 min-h-[320px] overflow-hidden relative bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700">

      <a href="#">
        <Image 
          width={750}
          height={750}
          className="p-8 rounded-t-lg" 
          src="/product-placeholder.jpg" 
          alt={`${props.product.productName} product image`} />
      </a>

      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
            {props.product.productName}
          </h5>
        </a>
      </div>

    </div>
  )
}
