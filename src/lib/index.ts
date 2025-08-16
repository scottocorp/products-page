import products from '@/data/products.json'
import { ProductType } from '@/lib/types'


const applyFilter = (products: any, productType: ProductType) => {

  const ProductTypeString = ProductType[productType]

  if (ProductTypeString === ProductType.ALL || !productType) {
    return products
  }
  return products.filter((product: any) => product.type === ProductTypeString)
}


export const fetchProducts = async (productType: ProductType) => {

  // Here we can decide whether to fetch data locally, eg: from json, or remotely, from an API, say:

  if (process.env.NEXT_PUBLIC_WORKSPACE && process.env.NEXT_PUBLIC_WORKSPACE === 'production') {
    return applyFilter(fetchRemoteProducts(), productType)
  }
  return applyFilter(fetchLocalProducts(), productType)
}


const fetchLocalProducts = () => {

  // await new Promise((resolve) => setTimeout(resolve, 1000));
  return products
}


const fetchRemoteProducts = async () => {

  // TODO

  let url = 'http://localhost:8000/api'

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }  
  }
}
