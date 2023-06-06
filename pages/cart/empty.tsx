import { ShopLayout } from '@/components/layout'
import { RemoveShoppingCartOutlined } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { NextPage } from 'next'
import Link from 'next/link';

const EmptyPage: NextPage = () => {
    return (
        <ShopLayout title="Carrito de compra vacio" pageDescription='No hay articulos en el carrito de compras'>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height='calc(100vh - 200px)' sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
                <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
                <Box display='flex' flexDirection={'column'} alignItems={'center'}>
                    <Typography>Su carrito esta vacio</Typography>
                    <Link href="/" color='secondary' passHref >
                        Regresar
                    </Link>
                </Box>
            </Box>
        </ShopLayout>
    )
}

export default EmptyPage