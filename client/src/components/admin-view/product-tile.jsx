import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";

const AdminProductTile = ({
  product,
  setCurrentEditedId,
  setFormData,
  setOpenCreateProductsDialog,
  handleDelete,
}) => {
  const handleEdit = () => {
    setOpenCreateProductsDialog(true);
    setCurrentEditedId(product?._id);
    setFormData(product);
  };
  return (
    <Card className="w-full max-w mx-auto">
      <div>
        <div className="relative">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-[300px] object-cover rounded-t-lg"
          />
        </div>
        <CardContent>
          <h2 className="tex-xl font-bold mb-2 mt-2">{product?.title}</h2>
          <div className="flex justify-between items-center mb-2">
            <span
              className={`${product?.salePrice > 0 ? "line-through" : ""}`}
              text-lg
              font-semibold
              text-primary
            >
              ${product?.price}
            </span>
            {product?.salePrice > 0 ? (
              <span className="text-lg font-bold">${product?.salePrice}</span>
            ) : null}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Button onClick={handleEdit}>Edit</Button>
          <Button onClick={() => handleDelete(product?._id)}>Delete</Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default AdminProductTile;
