const productPricing: Array<any> = [
  {
    id: 1,
    postalCode: 33566,
    city: 'Plant City',
    territory: 'Tampa',
    state: 'Florida',
    stateAbbreviation: 'FL',
    needsPermit: false,
    isFranchise: false,
    products: [
      {
        sku: 'RO10',
        price: 499,
        debris: ['Construction', 'Household', 'Mix', 'Concrete'],
        discountedPrice: 459,
        available: true,
        category: 'Rolloff',
      },
      {
        sku: 'RO20',
        price: 599,
        debris: ['Construction', 'Household', 'Mix', 'Concrete'],
        discountedPrice: 559,
        available: true,
        category: 'Rolloff',
      },
      {
        sku: 'RO30',
        price: 699,
        debris: ['Construction', 'Household', 'Mix'],
        discountedPrice: 659,
        available: false,
        category: 'Rolloff',
      },
    ],
  },
  {
    id: 2,
    postalCode: 33602,
    city: 'Tampa',
    territory: 'Tampa',
    state: 'Florida',
    stateAbbreviation: 'FL',
    needsPermit: true,
    isFranchise: true,
    products: [
      {
        sku: 'RO20',
        price: 499,
        debris: ['Construction', 'Household', 'Mix', 'Concrete'],
        discountedPrice: 459,
        available: true,
        category: 'Rolloff',
      },
      {
        sku: 'RO30',
        price: 599,
        debris: ['Construction', 'Household', 'Mix'],
        discountedPrice: 549,
        available: true,
        category: 'Rolloff',
      },
      {
        sku: 'BIN8',
        price: 299,
        debris: ['Office', 'Food', 'Mix'],
        discountedPrice: 199,
        available: true,
        category: 'Bin',
      },
    ],
  },
]

export default productPricing
