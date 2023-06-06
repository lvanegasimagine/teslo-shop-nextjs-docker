import { ShopLayout } from '@/components/layout'
import { ProductSlideshow, SizeSelector } from '@/components/products';
import { ItemCounter } from '@/components/ui';
import { dbProducts } from '@/database';
import { IProduct } from '@/interfaces';
import { Box, Button, Chip, Grid, Typography } from '@mui/material';
import { NextPage, GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import { getProductBySlug, getAllProductSlugs } from '../../database/dbProducts';

interface ISlugProps {
    product: IProduct
}

const ProductPage: NextPage<ISlugProps> = ({ product }) => {

    return (
        <ShopLayout title={product.title} pageDescription={product.description}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={7}>
                    <ProductSlideshow images={product.images} />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Box display='flex' flexDirection='column'>
                        <Typography variant='h1' component='h1'>{product.title}</Typography>
                        <Typography variant='subtitle1' component='h2'>$ {product.price}</Typography>

                        {/* Cantidad */}

                        <Box sx={{ my: 2 }}>
                            <Typography variant='subtitle2'>Cantidad</Typography>
                            <ItemCounter />
                            <SizeSelector selectedSize={product.sizes[1]} sizes={product.sizes} />
                        </Box>

                        {/* Agregar al carrito */}
                        <Button color='secondary' className='circular-btn'>Agregar al carrito</Button>

                        {/* <Chip label="No hay disponibles" color='error' variant='outlined' /> */}

                        {/* Description */}
                        <Box sx={{ mt: 3 }}>
                            <Typography variant='subtitle2'>Descripcion</Typography>
                            <Typography variant='body2'>{product.description}</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//     const { slug = '' } = params as { slug: string };

//     const product = await dbProducts.getProductBySlug(slug);

//     if (!product) return {
//         redirect: {
//             destination: '/',
//             permanent: false
//         }
//     }

//     return {
//         props: {
//             product
//         }
//     }
// }

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
import { } from 'next'

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const productsSlugs = await dbProducts.getAllProductSlugs();


    return {
        paths: productsSlugs.map(({ slug }) => ({
            params: {
                slug
            }
        })),
        fallback: "blocking"
    }
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { slug = '' } = params as { slug: string };

    const product = await dbProducts.getProductBySlug(slug);

    if (!product) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
    return {
        props: {
            product
        }, revalidate: 60 * 60 * 24
    }
}

export default ProductPage