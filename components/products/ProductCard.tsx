import Link from 'next/link'
import { IProduct } from '@/interfaces'
import { Box, Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material'
import React, { useMemo, useState } from 'react'

interface IProductCardProps {
    product: IProduct
}

export const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const productImage = useMemo(() => {
        return isHovered ? `/products/${product.images[1]}` : `/products/${product.images[0]}`
    }, [isHovered, product.images])

    return (
        <Grid item xs={6} sm={4} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <Card>
                <Link href={`/product/${product.slug}`} prefetch={false} passHref>
                    <CardActionArea >
                        <CardMedia className='fadeIn' component='img' onLoad={() => setIsImageLoaded(true)} image={productImage} alt={product.title} />
                    </CardActionArea>
                </Link>
            </Card>
            <Box sx={{ mt: 1, display: isImageLoaded ? 'block' : 'none' }} className='fadeIn' >
                <Typography fontWeight={700}>{product.title}</Typography>
                <Typography fontWeight={500}>$ {product.price}</Typography>
            </Box>
        </Grid>
    )
}
