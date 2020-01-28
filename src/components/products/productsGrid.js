import React from 'react'
import './productsGrid.css'
import { Link } from 'react-router-dom'
import { routesMap } from '~src/router/router';

import ProductGridItem from '~src/components/products/productsGridItem'
import productStore from '~src/store/product'

class ProductsGrid extends React.Component {


    render() {
        return <div className="row mb-2">
            {productStore.products.map((p, i) => {
                return <ProductGridItem key={`product-${p.id}-item`} product={p} />
            })}
        </div>
    }
}

export default ProductsGrid