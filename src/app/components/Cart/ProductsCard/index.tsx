import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../../ui/card";
import { Button } from "../../ui/button";
import { ProductCartType } from "@/types/products";

const ProductCart = ({
  dataProductCard,
}: {
  dataProductCard: ProductCartType;
}) => {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row justify-between items-center">
        <img src={dataProductCard.images[0]} className="h-36 w-36" />
        <Button className="w-16 p-2 text-xs" onClick={(e) => console.log(e)}>
          Remover
        </Button>
      </CardHeader>
      <CardContent className="mb-2">
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <span>Nome: {dataProductCard.name}</span>
            <p>Descrição: {dataProductCard.description}</p>
            <h4 className="font-bold">{dataProductCard.formattedPrice}</h4>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCart;
