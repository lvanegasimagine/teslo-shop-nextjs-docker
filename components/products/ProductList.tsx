import React, { FC } from 'react'
import { Grid } from '@mui/material'
import { IProduct } from '@/interfaces'
import { ProductCard } from './ProductCard'

interface IProductListProps {
    products: IProduct[]
}

export const ProductList: FC<IProductListProps> = ({ products }) => {
    return (
        <Grid container spacing={4}>
            {products.map((product) => (<ProductCard key={product.slug} product={product} />))}
        </Grid>
    )
}
