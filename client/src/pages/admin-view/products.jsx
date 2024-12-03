import React, { Fragment, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import CommonForm from "@/components/common/form";
import { addProductFormElements } from "@/config";
import ImageUpload from "@/components/admin-view/ImageUpload";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewProduct,
  fetchAllProducts,
  editAProduct,
  deleteProduct,
} from "@/store/admin/product-slice";
import { useToast } from "@/hooks/use-toast";
import AdminProductTile from "@/components/admin-view/product-tile";

const initialState = {
  image: null,
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  salePrice: "",
  totalStock: "",
};
const AdminProducts = () => {
  const [openCreateProductsDialog, setOpenCreateProductsDialog] =
    useState(false);

  //For Form Data
  const [formData, setFormData] = useState(initialState);

  //For Image Upload
  const [imageFile, setImageFile] = useState(null);

  //For UploadedImageURL
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  //For Image Upload loading state
  const [imageLoadingState, setImageLoadingState] = useState(false);

  //Current Edited Id
  const [currentEditedId, setCurrentEditedId] = useState(null);

  //Using dispatch is call the AsyncThunk
  const dispatch = useDispatch();
  const { toast } = useToast();

  //Form Submission
  const onSubmit = (event) => {
    event.preventDefault();
    currentEditedId !== null
      ? dispatch(editAProduct({ id: currentEditedId, formData })).then(
          (data) => {
            console.log(data, "edit");
            if (data?.payload?.success) {
              dispatch(fetchAllProducts());
              setOpenCreateProductsDialog(false);
              setFormData(initialState);
              setCurrentEditedId(null);
              toast({
                title: "Product edited successfully",
              });
            } else {
            }
          }
        )
      : dispatch(addNewProduct({ ...formData, image: uploadedImageUrl })).then(
          (data) => {
            console.log(data);
            if (data?.payload?.success) {
              // if data saved successfully, reset the form
              dispatch(fetchAllProducts());
              setOpenCreateProductsDialog(false);
              setImageFile(null);
              setFormData(initialState);
              toast({
                title: "Product added successfully",
              });
              // reset the file upload system
              //close the add new product terminal
              //send a toast of successfu message
            } else {
              //todelete
              setImageFile(null);
              setFormData(initialState);
              //todelete
              toast({
                title: `${data?.payload?.message}`,
              });
            }
          }
        );
  };

  const { productList } = useSelector((state) => state.adminProducts);

  const handleDelete = (getCurrentProductId) => {
    console.log(getCurrentProductId);
    dispatch(deleteProduct(getCurrentProductId)).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchAllProducts());
        toast({
          title: `${data?.payload?.message}`,
        });
      } else {
        toast({
          title: `${data?.payload?.message}`,
        });
      }
    });
  };
  const isFormValid = () => {
    return Object.keys(formData)
      .map((key) => formData[key] !== "")
      .every((item) => item);
  };
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  //CHECK_THIS_WITH_INTERNET
  console.log(productList, uploadedImageUrl, "uploadedImageUrl");

  return (
    <Fragment>
      <div className="mb-5 w-full flex justify-end">
        <Button
          onClick={() => {
            setOpenCreateProductsDialog(true);
          }}
        >
          Add New Product
        </Button>
      </div>
      <div className="grid gap-4 mg:grid-cols-3 lg:grid-cols-4">
        {productList && productList.length > 0
          ? productList.map((productItem) => (
              <AdminProductTile
                key={productItem._id}
                setCurrentEditedId={setCurrentEditedId}
                product={productItem}
                setFormData={setFormData}
                setOpenCreateProductsDialog={setOpenCreateProductsDialog}
                handleDelete={handleDelete}
              />
            ))
          : null}
      </div>
      <Sheet
        open={openCreateProductsDialog}
        onOpenChange={() => {
          setOpenCreateProductsDialog(false);
          setCurrentEditedId(null);
          setFormData(initialState);
        }}
      >
        <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle>
              {currentEditedId !== null ? "Edit Product" : "Add New Product"}{" "}
            </SheetTitle>
          </SheetHeader>
          <ImageUpload
            file={imageFile}
            setFile={setImageFile}
            uploadedImageUrl={uploadedImageUrl}
            setUploadedImageUrl={setUploadedImageUrl}
            imageLoadingState={imageLoadingState}
            setImageLoadingState={setImageLoadingState}
            isEditMode={currentEditedId !== null}
          />
          <div className="py-6">
            <CommonForm
              formControls={addProductFormElements}
              formData={formData}
              setFormData={setFormData}
              buttonText={currentEditedId !== null ? "Edit" : " Add"}
              onSubmit={onSubmit}
              isBtnDisabled={!isFormValid()}
              // imageLoadingState={imageLoadingState}
            />
          </div>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
};

export default AdminProducts;
