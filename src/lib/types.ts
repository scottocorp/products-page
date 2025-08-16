
export interface ProductItemProps {
  product: Product
}

export interface Product {
  index: number
  isSale: boolean
  productImage: string
  productName: string
  type: ProductType
}

export enum ProductType {
  ALL = 'All',
  BEER = 'Beer',
  WINE = 'Wine',
  SPIRITS = 'Spirits',
  CIDER = 'Cider',
}
