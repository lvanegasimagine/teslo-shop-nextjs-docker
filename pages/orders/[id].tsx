import { ShopLayout } from '@/components/layout'
import React from 'react'
import { Typography, Grid, Card, CardContent, Divider, Box, Button, Chip } from '@mui/material';
import { CartList, OrderSummary } from '@/components/cart';
import { NextPage } from 'next';
import LinkNext from 'next/link'
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material';

const OrderPage: NextPage = () => {
    return (
        <ShopLayout title='Resumen de la Orden 12212' pageDescription='Resumen de la orden'>
            <Typography variant="h1" component='h1'>Orden: 123654</Typography>
            {/* <Chip sx={{ my: 2}} label="Pendiente de Pago" variant='outlined' color="error" icon={<CreditCardOffOutlined/>}/> */}
            <Chip sx={{ my: 2 }} label="Orden ya fue Pagada" variant='outlined' color="success" icon={<CreditScoreOutlined />} />
            <Grid container>
                <Grid item xs={12} md={7}>
                    <CartList />
                </Grid>
                <Grid item xs={12} md={5}>
                    <Card className='summary-card'>
                        <CardContent>
                            <Typography variant="h2">Resumen (3 Productos)</Typography>
                            <Divider sx={{ my: 1 }} />
                            <Box display={'flex'} justifyContent='space-between'>
                                <Typography variant="subtitle1">Direccion de entrega</Typography>
                                <LinkNext href="/checkout/address" passHref>
                                    Editar
                                </LinkNext>
                            </Box>

                            <Typography variant="body1" color="initial">Luis Vanegas</Typography>
                            <Typography variant="body1" color="initial">Camilo Chamorro</Typography>
                            <Typography variant="body1" color="initial">Managua</Typography>
                            <Typography variant="body1" color="initial">Nicaragua</Typography>
                            <Typography variant="body1" color="initial">+505 23659851</Typography>

                            <Divider sx={{ my: 1 }} />

                            <Box display={'flex'} justifyContent={'end'}>
                                <LinkNext href="/cart" passHref>
                                    Editar
                                </LinkNext>
                            </Box>
                            <OrderSummary />

                            <Box sx={{ mt: 3 }}>
                                <h1>Pagar</h1>
                                <Chip sx={{ my: 2 }} label="Orden ya fue Pagada" variant='outlined' color="success" icon={<CreditScoreOutlined />} />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default OrderPage