import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ProductItem from '@/ui/productItem'
import { ProductType, Product } from '@/lib/types'
 
describe('ProductItem', () => {
  it('renders a product name', () => {

    const product: Product =   {
      'index': 0,
      'isSale': false,
      'price': '$49.99',
      'productImage': 'Product_1.jpeg',
      'productName': 'Pure Blonde Crate',
      'type': ProductType.BEER
    }

    render(<ProductItem product={product} />)

    expect(screen.getByText('Pure Blonde Crate')).toBeInTheDocument()
  })
})
