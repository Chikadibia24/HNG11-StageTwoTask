import { useState, useEffect } from "react";
import GetProductData from "./getProductData";

const ProductData = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productsArray = [
      {
        id: 1,
        image:
          "https://res.cloudinary.com/chikadibia/image/upload/v1720282880/imageTV_df1cpl.png",
        title: "UFC 43” Inches 4k UHD Smart TV",
        description:
          "Android Smart TV, is an easier way to the entertainment you love.",
        price: "NGN 100,000",
        buttonText: "Add to cart",
      },
      {
        id: 2,
        image:
          "https://res.cloudinary.com/chikadibia/image/upload/v1720282880/imageTV_df1cpl.png",
        title: "UFC 43” Inches 4k UHD Smart TV",
        description:
          "Android Smart TV, is an easier way to the entertainment you love.",
        price: "NGN 100,000",
        buttonText: "Add to cart",
      },
      {
        id: 3,
        image:
          "https://res.cloudinary.com/chikadibia/image/upload/v1720282880/imageTV_df1cpl.png",
        title: "UFC 43” Inches 4k UHD Smart TV",
        description:
          "Android Smart TV, is an easier way to the entertainment you love.",
        price: "NGN 100,000",
        buttonText: "Add to cart",
      },
      {
        id: 4,
        image:
          "https://res.cloudinary.com/chikadibia/image/upload/v1720282880/imageTV_df1cpl.png",
        title: "UFC 43” Inches 4k UHD Smart TV",
        description:
          "Android Smart TV, is an easier way to the entertainment you love.",
        price: "NGN 100,000",
        buttonText: "Add to cart",
      },
      {
        id: 5,
        image:
          "https://res.cloudinary.com/chikadibia/image/upload/v1720282880/imageTV_df1cpl.png",
        title: "UFC 43” Inches 4k UHD Smart TV",
        description:
          "Android Smart TV, is an easier way to the entertainment you love.",
        price: "NGN 100,000",
        buttonText: "Add to cart",
      },
      {
        id: 6,
        image:
          "https://res.cloudinary.com/chikadibia/image/upload/v1720282880/imageTV_df1cpl.png",
        title: "UFC 43” Inches 4k UHD Smart TV",
        description:
          "Android Smart TV, is an easier way to the entertainment you love.",
        price: "NGN 100,000",
        buttonText: "Add to cart",
      },
    ];

    setTimeout(() => {
      setProducts(productsArray);
      setLoading(false);
    }, 2000);
    console.log(productsArray)

  })




  return (
    <div className="">
      {loading ? (
        <div className="text-[20px]">loading...</div>
      ) : (
        <div className="flex flex-wrap  items-center justify-center gap-[15px] w-[100%]">
          <GetProductData productsData={products} />
        </div>
      )}
    </div>
  );
}

export default ProductData;