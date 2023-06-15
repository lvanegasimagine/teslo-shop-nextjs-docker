import { AuthLayout } from '@/components/layout/AuthLayout'
import { Box, Grid, Typography, TextField, Button } from '@mui/material'
import React from 'react'
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { validations } from '@/utils';

type FormData = {
    email: string;
    password: string;
};

const LoginPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
    console.log("🚀 ~ file: login.tsx:15 ~ LoginPage ~ errors:", errors)

    const onLoginUser = (data: FormData) => {
        console.log("🚀 ~ file: login.tsx:17 ~ LoginPage ~ data:", data)
    }

    return (
        <AuthLayout title="Ingresar">
            <form onSubmit={handleSubmit(onLoginUser)} autoComplete='off'>
                <Box sx={{ width: 350, padding: '10px 20px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h1" component="h1" >Iniciar Sesion</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="email"
                                label="Correo"
                                variant='filled'
                                fullWidth
                                {...register('email', {
                                    required: 'Este campo es requerido',
                                    validate: validations.isEmail
                                })}
                                error={!!errors.email}
                                helperText={errors.email?.message}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type='password'
                                label="Contraseña"
                                variant='filled'
                                fullWidth
                                {...register('password', {
                                    required: 'Este campo es requerido',
                                    minLength: { value: 6, message: 'Minimo 6 caracteres' }
                                })}
                                error={!!errors.password}
                                helperText={errors.password?.message}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button color='secondary' size="large" fullWidth className='circular-btn' type="submit">Ingresar</Button>
                        </Grid>
                        <Grid item xs={12} display={'flex'} justifyContent={'end'}>
                            <Link href="/auth/register">
                                No tienes Cuenta?
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </AuthLayout>
    )
}

export default LoginPage