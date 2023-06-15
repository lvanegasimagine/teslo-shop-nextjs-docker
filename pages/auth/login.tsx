import React, { useContext, useState } from 'react'
import Link from 'next/link';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { AuthLayout } from '@/components/layout/AuthLayout'
import { Box, Grid, Typography, TextField, Button, Chip } from '@mui/material'
import { validations } from '@/utils';
import { tesloApi } from '@/api';
import { ErrorOutline } from '@mui/icons-material';
import { AuthContext } from '@/context';
import { useRouter } from 'next/router';

type FormData = {
    email: string;
    password: string;
};

const LoginPage = () => {
    const router = useRouter();
    const { loginUser } = useContext(AuthContext);

    const [showError, setShowError] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

    const onLoginUser = async ({ email, password }: FormData) => {
        setShowError(false);

        const isValidLogin = await loginUser(email, password);

        if (!isValidLogin) {
            setShowError(true);
            setTimeout(() => { setShowError(false) }, 3000);
        }

        router.replace('/')
    }

    return (
        <AuthLayout title="Teslo-Shop | Iniciar Sesion">
            <form onSubmit={handleSubmit(onLoginUser)} autoComplete='off'>
                <Box sx={{ width: 350, padding: '10px 20px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h1" component="h1" >Iniciar Sesion</Typography>
                            <Chip label="No reconocemos ese usuario / contraseña" color="error" sx={{ display: showError ? 'flex' : 'none' }} icon={<ErrorOutline />} className='fadeIn' />
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