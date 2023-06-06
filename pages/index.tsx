import { NextPage } from "next";
import { Typography } from "@mui/material";

import { ShopLayout } from "@/components/layout";
import { ProductList } from "@/components/products";
import { useProducts } from "@/hooks";
import { FullScreenLoading } from "@/components/ui";

const HomePage: NextPage = () => {

  const { products, isError, isLoading } = useProducts('/products');

  if (isError) return <div>failed to load</div>
  if (isLoading) return <FullScreenLoading />

  return (
    <ShopLayout title={'TesloShop - Home'} pageDescription={'Encuentra los mejores productos de Teslo aqui'}>
      <Typography variant="h1" component="h1">Tienda</Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>Todos los productos</Typography>
      <ProductList products={products} />
    </ShopLayout>
  )

};

export default HomePage;