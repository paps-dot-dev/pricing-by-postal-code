import { Box } from '@mui/material'
import ProductOption from './ProductOption'
import { toast } from 'react-toastify'

function ProductCards({ products, category, info }) {
  console.log(products)
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {products.products.map((product) => {
          const matchInfo = info.find((sku) => sku.sku === product.sku)
          console.log(matchInfo)
          const productName = matchInfo ? matchInfo.productName : 'N/A'
          const length = matchInfo ? matchInfo.length : 'N/A'
          const width = matchInfo ? matchInfo.width : 'N/A'
          const height = matchInfo ? matchInfo.height : 'N/A'
          if (product.category === category) {
            return (
              <ProductOption
                price={product.price}
                discountedPrice={product.discountedPrice}
                availability={product.availability}
                debris={product.debris}
                sku={product.sku}
                name={productName}
                length={length}
                width={width}
                height={height}
              />
            )
          } else {
            return
          }
        })}
      </Box>
    </>
  )
}

export default ProductCards
