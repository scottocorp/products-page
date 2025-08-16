import { Suspense } from 'react'
import { Product } from '@/lib/types'
import { fetchProducts } from '@/lib'
import ProductItem from '@/ui/productItem'
import { ProductListSkeleton } from '@/ui/skeletons'

async function ProductListLoader() {

  const products = await fetchProducts()

  return <ProductList products={products} />
}

export function ProductListWithSuspense({
  products,
}: {
  products?: Product[] | undefined
}) {

  if (products) {
    return <ProductList products={products} />
  }

  return (
    <Suspense fallback={<ProductListSkeleton />}>
      <ProductListLoader />
    </Suspense>
  )
}

// This displays a 4-column grid of items (on desktop)
export default function ProductList({
  products, 
}: {
  products: Product[] 
}) {

  return (
    <main>
      <div className="mx-auto max-w-6xl">
        <div className="relative z-10 grid gap-1 grid-cols-4">

          {products.map((product: Product)=> <ProductItem key={product.index} product={product} />)}

        </div>
      </div>
    </main>
  )
}
