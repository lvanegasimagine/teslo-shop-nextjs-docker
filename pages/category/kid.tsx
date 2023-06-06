import { NextPage } from "next";
import { Typography } from "@mui/material";

import { ShopLayout } from "@/components/layout";
import { ProductList } from "@/components/products";
import { useProducts } from "@/hooks";
import { FullScreenLoading } from "@/components/ui";

const KidPage: NextPage = () => {

  const { products, isError, isLoading } = useProducts('/products?gender=kid');

  if (isError) return <div>failed to load</div>
  if (isLoading) return <FullScreenLoading />

  return (
    <ShopLayout title={'Teslo-Shop - Kids'} pageDescription={'Encuentra los mejores productos de Teslo para niños'}>
      <Typography variant="h1" component="h1">Niños</Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>Productos para Niños</Typography>
      <ProductList products={products} />
    </ShopLayout>
  )

};

export default KidPage;