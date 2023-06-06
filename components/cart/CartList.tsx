import React from 'react'
import LinkNext from 'next/link';
import { initialData } from '@/database/products'
import { Box, Button, CardActionArea, CardMedia, Grid, Typography } from '@mui/material'
import { ItemCounter } from '../ui';

const productsInCart = [
    initialData.products[0],
    initialData.products[2],
    initialData.products[3],
]

interface ICartListProps {
    editable?: boolean
}
export const CartList: React.FC<ICartListProps> = ({ editable = false }) => {
    return (
        <>
            {productsInCart.map((product) => (
                <Grid container spacing={2} sx={{ mb: 1 }} key={product.slug}>
                    <Grid item xs={3}>
                        <LinkNext href="/product/slug" passHref>
                            <CardActionArea>
                                <CardMedia image={`/products/${product.images[0]}`} component='img' sx={{ borderRadius: '5px' }} />
                            </CardActionArea>
                        </LinkNext>
                    </Grid>
                    <Grid item xs={7}>
                        <Box display={'flex'} flexDirection={'column'}>
                            <Typography variant="body1" color="initial">{product.title}</Typography>
                            <Typography variant="body2" color="initial">Talla <strong>M</strong></Typography>
                            {editable ? <ItemCounter /> : <Typography variant="h5">3 Items</Typography>}
                        </Box>
                    </Grid>
                    <Grid item xs={2} display='flex' flexDirection='column' alignItems='center'>
                        <Typography variant="subtitle1">$ {product.price}</Typography>
                        {editable ? <Button variant='text' color='secondary'>❌</Button> : null}
                    </Grid>
                </Grid>
            ))}
        </>
    )
}
