import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const { id } = useParams();
  console.log("Checking", id);
  return (
    <div>
      <h1>Product Update Information</h1>
    </div>
  );
};

export default UpdateProduct;
