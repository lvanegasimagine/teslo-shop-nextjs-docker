import { ShopLayout } from '@/components/layout'
import React from 'react'
import { Typography, Grid, Card, CardContent, Divider, Box, Button } from '@mui/material';
import { CartList, OrderSummary } from '@/components/cart';
import { NextPage } from 'next';
import LinkNext from 'next/link'

const SummaryPage: NextPage = () => {
    return (
        <ShopLayout title='Resumen de Orden' pageDescription='Resumen de la orden'>
            <Typography variant="h1" component='h1'>Resumen de la orden</Typography>
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
                                <Button color="secondary" className='circular-btn' fullWidth>
                                    Confirmar Orden
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default SummaryPage