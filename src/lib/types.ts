
export interface ProductItemProps {
  product: Product
}

export interface Product {
  index: number
  isSale: boolean
  productImage: string
  productName: string
  type: Filter
}

export enum Filter {
  ALL,
  BEER,
  WINE,
  SPIRITS,
  CIDER,
}
