import { Suspense } from 'react'
import Header from '@/ui/header'
import ProductListWithSuspense from '@/ui/productList'
import { fetchProducts } from '@/lib'
import { Product, ProductType } from '@/lib/types'
import { ProductListSkeleton } from '@/ui/skeletons'

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {

  const params = (await searchParams)

  let products: Product[] | undefined
  products = await fetchProducts(params.filter as any)

  // if browser is requesting html it means it's the first page load
  // const headersList = await headers()
  // const accept = headersList.get('accept');
  // if (accept?.includes("text/html")) {
  //   products = await fetchProducts()
  // }

  return (
    <>
      <Header />
      <Suspense fallback={<ProductListSkeleton />}>
        <ProductListWithSuspense products={products} />
      </Suspense>
    </>
  )
}
