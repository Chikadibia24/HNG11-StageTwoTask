import DisplayProductData from "./displayProductData";


const GetProductData = ({ productsData }) => {
  return productsData.map((product) => {
    return <DisplayProductData products={product} key={product.id} />;
  });
};

export default GetProductData;
