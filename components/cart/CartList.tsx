import React, { useContext } from 'react'
import LinkNext from 'next/link';
import { Box, Button, CardActionArea, CardMedia, Grid, Typography } from '@mui/material'
import { ItemCounter } from '../ui';
import { CartContext } from '@/context';
import { ICartProduct } from '@/interfaces';

interface ICartListProps {
    editable?: boolean
}
export const CartList: React.FC<ICartListProps> = ({ editable = false }) => {
    const { cart, updateCartQuantity, removeCartQuantity } = useContext(CartContext);

    const onNewCartQuantityValue = (product: ICartProduct, newQuantityValue: number) => {
        product.quantity = newQuantityValue;
        updateCartQuantity(product);
    }

    return (
        <>
            {cart.map((product) => (
                <Grid container spacing={2} sx={{ mb: 1 }} key={product.slug}>
                    <Grid item xs={3}>
                        <LinkNext href={`/product/${product.slug}`} passHref>
                            <CardActionArea>
                                <CardMedia image={`/products/${product.image}`} component='img' sx={{ borderRadius: '5px' }} />
                            </CardActionArea>
                        </LinkNext>
                    </Grid>
                    <Grid item xs={7}>
                        <Box display={'flex'} flexDirection={'column'}>
                            <Typography variant="body1" color="initial">{product.title}</Typography>
                            <Typography variant="body2" color="initial">Talla <strong>{product.size}</strong></Typography>
                            {
                                editable
                                    ? (<ItemCounter currentValue={product.quantity} maxValue={10} updatedQuantity={(value) => onNewCartQuantityValue(product, value)} />)
                                    : <Typography variant="h5">{product.quantity} {product.quantity > 1 ? 'productos' : 'producto'}</Typography>
                            }
                        </Box>
                    </Grid>
                    <Grid item xs={2} display='flex' flexDirection='column' alignItems='center'>
                        <Typography variant="subtitle1">$ {product.price}</Typography>
                        {editable ? <Button variant='text' color='secondary' onClick={() => removeCartQuantity(product)}>❌</Button> : null}
                    </Grid>
                </Grid>
            ))}
        </>
    )
}
