import ProductItem from '@/ui/productItem'

// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

  export function ProductItemSkeleton() {
  return (
    <div 
      className="col-span-full sm:col-span-2 lg:col-span-1 min-h-[320px] overflow-hidden relative bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">Test</h5>
        </a>
      </div>

    </div>
  )
}

export function ProductListSkeleton() {
  return (
    <div className={`${shimmer} relative w-full overflow-hidden md:col-span-4`}>
      <main>
        <div className="mx-auto max-w-6xl">
          <div className="relative z-10 grid gap-1 grid-cols-4">

            {Array.from({ length: 8 }).map((_, index)=> <ProductItemSkeleton key={index} />)}

          </div>
        </div>
      </main>
    </div>
  )
}
