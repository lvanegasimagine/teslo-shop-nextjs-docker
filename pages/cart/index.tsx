import { ShopLayout } from '@/components/layout'
import React, { useContext, useEffect } from 'react'
import { Typography, Grid, Card, CardContent, Divider, Box, Button } from '@mui/material';
import { CartList, OrderSummary } from '@/components/cart';
import { NextPage } from 'next';
import { CartContext } from '@/context';
import { useRouter } from 'next/router';

const CartPage: NextPage = () => {

    const { isLoaded, cart } = useContext(CartContext);
    const router = useRouter();

    useEffect(() => {
        if (isLoaded && cart.length === 0) {
            router.replace('/cart/empty')
        }
    }, [isLoaded, cart, router])

    if (!isLoaded || cart.length === 0) {
        return (<></>)
    }

    return (
        <ShopLayout title='Carrito - 3' pageDescription='Carrito de compras de la tienda'>
            <Typography variant="h1" component='h1'>Carrito</Typography>
            <Grid container>
                <Grid item xs={12} md={7}>
                    <CartList editable />
                </Grid>
                <Grid item xs={12} md={5}>
                    <Card className='summary-card'>
                        <CardContent>
                            <Typography variant="h2">Orden</Typography>
                            <Divider sx={{ my: 1 }} />
                            <OrderSummary />
                            <Box sx={{ mt: 3 }}>
                                <Button color="secondary" className='circular-btn' fullWidth>
                                    Checkout
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default CartPage