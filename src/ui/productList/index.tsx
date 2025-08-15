import ProductItem from '@/ui/productItem'

// This displays a 4-column grid of items (on desktop)

export default function ProductList() {
  return (
    <main>
      <div className="mx-auto max-w-6xl">
        <div className="relative z-10 grid gap-1 grid-cols-4">

          {[0,1,2,3,4,5,6,7].map(item => <ProductItem key={item} />)}

        </div>
      </div>
    </main>
  )
}
