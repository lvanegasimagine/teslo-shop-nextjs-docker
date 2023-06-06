import { AuthLayout } from '@/components/layout/AuthLayout'
import { Box, Grid, Typography, TextField, Button } from '@mui/material'
import React from 'react'
import Link from 'next/link';

const LoginPage = () => {
    return (
        <AuthLayout title="Ingresar">
            <Box sx={{ width: 350, padding: '10px 20px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h1" component="h1" >Iniciar Sesion</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Correo"
                            variant='filled'
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Contraseña"
                            variant='filled'
                            fullWidth
                            type='password'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button color='secondary' size="large" fullWidth className='circular-btn'>Ingresar</Button>
                    </Grid>
                    <Grid item xs={12} display={'flex'} justifyContent={'end'}>
                        <Link href="/auth/register">
                            No tienes Cuenta?
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </AuthLayout>
    )
}

export default LoginPage