import { NextPage, GetServerSideProps } from "next";
import { Box, Typography } from "@mui/material";

import { ShopLayout } from "@/components/layout";
import { ProductList } from "@/components/products";
import { dbProducts } from "@/database";
import { IProduct } from "@/interfaces";

interface SearchPageProps {
    products: IProduct[];
    foundProducts: boolean;
    query: string;
}

const SearchPage: NextPage<SearchPageProps> = ({ products, foundProducts, query }) => {

    return (
        <ShopLayout title={'Buscar Productos'} pageDescription={'Realiza las busqueda de teslo shop aca'}>
            <Typography variant="h1" component="h1">Buscar Productos</Typography>
            {
                foundProducts
                    ? <Typography variant="h2" sx={{ mb: 1 }} textTransform={'capitalize'}> Termino: {query}</Typography> : (
                        <Box display={'flex'} sx={{ mb: 3 }}>
                            <Typography variant="h2" sx={{ mb: 1 }} textTransform={'capitalize'}> No encontramos ningun producto</Typography>
                            <Typography variant="h2" sx={{ ml: 1 }} color='secondary' textTransform={'capitalize'}> {query}</Typography>
                        </Box>
                    )}
            <ProductList products={products} />
        </ShopLayout>
    )
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { query = '' } = params as { query: string };

    if (query.length === 0) return {
        redirect: {
            destination: '/',
            permanent: true
        }
    }

    // * Let por si la busqueda no encontro un producto
    let products = await dbProducts.getProductByTerm(query);

    // TODO: retornar otros productos

    const foundProducts = products.length > 0;

    if (!foundProducts) {
        products = await dbProducts.getAllProduct();
    }


    return {
        props: {
            products,
            foundProducts,
            query
        }
    }
}

export default SearchPage;