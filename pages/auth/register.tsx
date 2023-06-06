import { AuthLayout } from '@/components/layout/AuthLayout'
import { Box, Grid, Typography, TextField, Button } from '@mui/material'
import React from 'react'
import Link from 'next/link';

const RegisterPage = () => {
    return (
        <AuthLayout title="Registro">
            <Box sx={{ width: 350, padding: '10px 20px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h1" component="h1">Crear Cuenta</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Nombre"
                            variant='filled'
                            fullWidth
                        />
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
                        <Button color='secondary' size="large" fullWidth className='circular-btn'>Crear Cuenta</Button>
                    </Grid>
                    <Grid item xs={12} display={'flex'} justifyContent={'end'}>
                        <Link href="/auth/login">
                            Ya tienes una cuenta?
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </AuthLayout>
    )
}

export default RegisterPage