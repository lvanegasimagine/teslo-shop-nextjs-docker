import React, { useState } from 'react'
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Box, Grid, Typography, TextField, Button, Chip } from '@mui/material'
import { AuthLayout } from '@/components/layout/AuthLayout'
import { validations } from '@/utils';
import { tesloApi } from '@/api';
import axios from 'axios';
import { ErrorOutline } from '@mui/icons-material';

type FormData = {
    name: string;
    email: string;
    password: string;
};

const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
    const [showError, setShowError] = useState(false);

    const onRegisterForm = async ({ name, email, password }: FormData) => {
        setShowError(false);

        try {
            const { data } = await tesloApi.post('/user/register', { name, email, password });
            const { token, user } = data;
            console.log({ token, user });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error?.response?.data?.message);
            }
            setShowError(true)
            setTimeout(() => { setShowError(false) }, 3000);
        }

        //Todo: Navegar a la pantalla que el usuario estaba
    }

    return (
        <AuthLayout title="Registro de Usuario">
            <form onSubmit={handleSubmit(onRegisterForm)} noValidate autoComplete='off'>
                <Box sx={{ width: 350, padding: '10px 20px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h1" component="h1" textAlign={'center'}>Crear Cuenta</Typography>
                            <Chip label="No reconocemos ese usuario / contraseña" color="error" sx={{ display: showError ? 'flex' : 'none' }} icon={<ErrorOutline />} className='fadeIn' />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Nombre Completo"
                                variant='filled'
                                fullWidth
                                {...register('name', {
                                    required: 'Este campo es requerido',
                                    minLength: { value: 2, message: 'Minimo 2 caracteres' }
                                })}
                                error={!!errors.name}
                                helperText={errors.name?.message}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type='email'
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
                            <Button color='secondary' size="large" fullWidth className='circular-btn' type="submit">Crear Cuenta</Button>
                        </Grid>
                        <Grid item xs={12} display={'flex'} justifyContent={'end'}>
                            <Link href="/auth/login">
                                Ya tienes una cuenta?
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </AuthLayout>
    )
}

export default RegisterPage