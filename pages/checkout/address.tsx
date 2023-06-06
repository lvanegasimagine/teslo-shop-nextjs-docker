import { ShopLayout } from '@/components/layout'
import { NextPage } from 'next'
import React from 'react'
import { Typography, Grid, TextField, FormControl, InputLabel, Select, MenuItem, Box, Button } from '@mui/material'

const AddressPage: NextPage = () => {
    return (
        <ShopLayout title='Direccion' pageDescription='Confirmar la direccion del destino'>
            <Typography variant="h1" component='h1' sx={{ mb: 2 }}>Dirección</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField label="Nombre" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="Apellido" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="Dirección" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="Direccion 2 (opcional)" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="Codigo Postal" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="Ciudad" variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                        <Select variant='filled' label="pais" value={1}>
                            <MenuItem value={1}>Nicaragua</MenuItem>
                            <MenuItem value={2}>Mexico</MenuItem>
                            <MenuItem value={3}>Costa Rica</MenuItem>
                            <MenuItem value={4}>El Salvador</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField label="Telefono" variant='filled' fullWidth />
                </Grid>
            </Grid>
            <Box sx={{ mt: 5 }} display={'flex'} justifyContent={'center'}>
                <Button className='circular-btn' size='large' color='secondary'> Revisar Pedido</Button>
            </Box>
        </ShopLayout>
    )
}

export default AddressPage