'use client'

import { useState } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { Group, Button, Text, TextInput, Select } from '@mantine/core'
import { decodedSearch } from '@/lib'
import { ProductType } from '@/lib/types'

export default function Filter() {

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [type, setType] = useState(searchParams.get('filter') ? searchParams.get('filter') : 'ALL')
  const [search, setSearch] = useState(decodedSearch(searchParams.get('search') as string))

  const filter = () => {
    const newParams = new URLSearchParams()
    newParams.set('filter', type as string)
    newParams.set('search', encodeURIComponent(search))
    router.push(`${pathname}?${newParams.toString()}`)
  } 

  const options = Object.keys(ProductType).filter(key => isNaN(Number(key)))

  return (
    <div className="md:flex md:justify-end ">
      <Text 
        size="sm"
        fw={700}
        ta="right"
        style={{ flex: 1, margin: '12px 10px 0 0' }}
      >
        Filter by
      </Text>
      <TextInput
        placeholder="Search String"
        value={search}
        onChange={(event) => setSearch(event.currentTarget.value)}
        style={{ flex: 1, margin: '5px 10px 5px 0' }}
      />
      <Select
        data={options}
        value={type}
        onChange={setType}
        style={{ flex: 1, margin: '5px 10px 5px 0' }}
      />          
        <Button 
          onClick={filter}
          style={{ margin: '5px 10px 5px 0' }}
        >
          Filter
        </Button>
    </div>
  )
}
