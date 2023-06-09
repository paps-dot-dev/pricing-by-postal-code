import { Box } from '@mui/material'
import ProductOption from './ProductOption'

function ProductCards({ products, category, info, handleSelect }) {
  const handleClick = (data) => {
    const selectedProductData = {
      name: data.name,
      price: data.price,
      maxRentalPeriod: data.maxRentalPeriod,
      includedWeight: data.includedWeight,
      isFranchise: products.isFranchise,
      franchisePercentage: products.franchisePercentage,
      needsPermit: products.needsPermit,
      permitNotes: products.permitNotes,
      permitFee: products.permitFee,
    }
    handleSelect(selectedProductData)
  }
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: 'space-evenly',
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
                available={product.available}
                debris={product.debris}
                includedWeight={product.includedWeight}
                maxRentalPeriod={product.maxRentalPeriod}
                sku={product.sku}
                name={productName}
                length={length}
                width={width}
                height={height}
                isDisabled={product.available ? '1' : '0.5'}
                url={`/quote/${product.city}/${product.category}/${product.sku}`}
                handleClick={handleClick}
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
