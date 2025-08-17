// @ts-nocheck
'use client'

import { useState } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { ProductType } from '@/lib/types'

export default function TypeFilter() {

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [type, setType] = useState(searchParams.get('filter') ? searchParams.get('filter') : 'ALL')

  const click = (e: any) => {
    setType(e.target.value)
    const newParams = new URLSearchParams()
    newParams.set('filter', e.target.value)
    router.push(`${pathname}?${newParams.toString()}`)
  } 

  return (
    <div className="flex flex-row justify-end">
      <form className="flex flex-row justify-end w-128">
        <label 
          htmlFor="producttype" 
          className="block text-sm font-bold text-gray-900 dark:text-white w-18 flex items-center">
            Filter by:
          </label>
        <select 
          id="producttype" 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={type}
          onChange={click}
        >
          {Object.keys(ProductType).filter(key => isNaN(Number(key))).map((filter: string, index)=> <option key= {index} value={filter}>{ProductType[filter]}</option>)}
        </select>
      </form>
    </div>
  )
}
