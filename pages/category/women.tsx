import { NextPage } from "next";
import { Typography } from "@mui/material";

import { ShopLayout } from "@/components/layout";
import { ProductList } from "@/components/products";
import { useProducts } from "@/hooks";
import { FullScreenLoading } from "@/components/ui";

const WomenPage: NextPage = () => {

  const { products, isError, isLoading } = useProducts('/products?gender=women');

  if (isError) return <div>failed to load</div>
  if (isLoading) return <FullScreenLoading />

  return (
    <ShopLayout title={'Teslo-Shop - Women'} pageDescription={'Encuentra los mejores productos de Teslo para ellas'}>
      <Typography variant="h1" component="h1">Mujeres</Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>Productos para Mujeres</Typography>
      <ProductList products={products} />
    </ShopLayout>
  )

};

export default WomenPage;