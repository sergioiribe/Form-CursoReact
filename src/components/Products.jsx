import React from 'react'
import { Product } from './Product'
import { list } from 'postcss'

export const Products = () => {

    const getProducts = () => {
        return [
            {
                productName: 'Apple Iphone 13',
                releasedData: '2021-09-24',
                rating: 3,
                numOfReviews: 100,
                description: 'The iPhone 13 and iPhone 13 mini are smartphones designed, developed, and marketed by Apple Inc. They are the fifteenth-generation, lower-priced iPhones, succeeding the iPhone 12 and iPhone 12 mini, respectively. Apple CEO Tim Cook announced the devices alongside the iPhone 13 Pro and iPhone 13 Pro Max on September 14, 2021, with pre-orders for the iPhone 13 and iPhone 13 mini beginning on September 17, 2021, and general availability on September 24, 2021.',
                imageUrl: 'https://picsum.photos/id/1/100/100'
            },
            {
                productName: 'Samsung Galaxy S21',
                releasedData: '2021-01-29',
                rating: 4,
                numOfReviews: 200,
                description: 'The Samsung Galaxy S21 is a series of Android-based smartphones designed, developed, marketed, and manufactured by Samsung Electronics as part of its Galaxy S series. They collectively serve as the successor to the Galaxy S20 series. The S21 series marks the first time Samsung has released a standard model, a "Plus" model, and an "Ultra" model simultaneously.',
                imageUrl: 'https://picsum.photos/id/2/100/100'
            },
            {
                productName: 'Google Pixel 6',
                releasedData: '2021-10-19',
                rating: 5,
                numOfReviews: 300,
                description: 'The Pixel 6 and Pixel 6 Pro are smartphones developed by Google as part of its Pixel line of phones. They were announced on October 19, 2021, and released on October 28, 2021. The Pixel 6 series is the successor to the Pixel 5 and the first to feature Google-designed system-on-chip (SoC) called Google Tensor.',
                imageUrl: 'https://picsum.photos/id/3/100/100'
            },
            {
                productName: 'Samsung Grand Prime',
                releasedData: '2023-12-11',
                rating: 4,
                numOfReviews: 50,
                description: 'The Pixel 6 and Pixel 6 Pro are smartphones developed by Google as part of its Pixel line of phones. They were announced on October 19, 2021, and released on October 28, 2021. The Pixel 6 series is the successor to the Pixel 5 and the first to feature Google-designed system-on-chip (SoC) called Google Tensor.',
                imageUrl: 'https://picsum.photos/id/4/100/100'
            }
        ]
    }

    const products = getProducts()
    
    const listProducts = products.map((product) => 
        <Product key={product.productName} data={product} />
    )

  return (
    <div>
        {/* {listProducts.length > 0 && 
        <ul>{listProducts}</ul>
        }
        {listProducts.length === 0 &&
        <ul>No Products to display</ul>
        } */}
        {listProducts.length > 0 ? <ul>{listProducts}</ul>: <ul>No Products to display</ul> }
    </div>
  )
}
