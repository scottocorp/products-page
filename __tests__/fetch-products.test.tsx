import {describe, expect, test} from '@jest/globals'
import { fetchProducts } from '@/lib'

describe('sum module', () => {
  test('fetches all items', async () => {
    const products = await fetchProducts('ALL' as any, '')
    expect(products.length).toBe(8)
  })
  test('fetches all items of type "Beer"', async () => {
    const products = await fetchProducts('BEER' as any, '')
    expect(products.length).toBe(4)
  })
  test('fetches all items of type "Wine"', async () => {
    const products = await fetchProducts('WINE' as any, '')
    expect(products.length).toBe(2)
  })
  test('fetches all items of type "Cider"', async () => {
    const products = await fetchProducts('CIDER' as any, '')
    expect(products.length).toBe(1)
  })
  test('fetches all items of type "Cider"', async () => {
    const products = await fetchProducts('CIDER' as any, '')
    expect(products.length).toBe(1)
  })
})