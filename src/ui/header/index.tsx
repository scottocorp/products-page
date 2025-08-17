import Filter from '@/ui/filter'

export default function Header() {

  return (
    <header className="relative bg-white">
      <div className="mx-auto md:flex md:justify-end max-w-6xl mb-1 px-6 py-1 border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <Filter />
      </div>
    </header>
  )
}
