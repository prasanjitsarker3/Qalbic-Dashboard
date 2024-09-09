/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/features/ProductApi/productApi";
import { Spin, Row, Col, Image, Descriptions } from "antd";

const ViewProduct = () => {
  const { id } = useParams(); // Get product ID from URL parameters
  const { data, isLoading, isError, error } = useGetSingleProductQuery(id); // Fetch product data

  if (isLoading) {
    return <Spin size="large" tip="Loading product..." />; // Show loading spinner while fetching
  }

  if (isError) {
    return (
      //@ts-ignore
      <div>Error: {error?.message || "Failed to fetch product data."}</div>
    ); // Handle fetch errors
  }

  const productData = data?.data; // Destructure product data

  if (!productData) {
    return <div>No product data found.</div>; // Handle case where no data is available
  }

  // Extract product details
  const {
    name,
    price,
    discount,
    description,
    details,
    stock,
    images,
    sizes,
    colors,
    createdAt,
  } = productData;

  return (
    <div className="p-5">
      {/* <h1 className="text-2xl font-bold">Product Details</h1> */}

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={24}>
          <Descriptions title={"Product Images"} bordered>
            <div className="flex flex-wrap justify-center items-center gap-3 ">
              {images?.map((image: any, index: number) => (
                <Image
                  key={index}
                  src={image.img || "https://via.placeholder.com/150"}
                  alt={`Product Image ${index + 1}`}
                  width={200}
                  height={200}
                />
              ))}
            </div>
          </Descriptions>
        </Col>

        {/* Product details section */}
        <Col xs={24} sm={12} md={24}>
          <Descriptions title={name} bordered>
            <Descriptions.Item label="Name">{name}</Descriptions.Item>
            <Descriptions.Item label="Price">${price}</Descriptions.Item>
            <Descriptions.Item label="Description">
              {description}
            </Descriptions.Item>
            <Descriptions.Item label="Stock">{stock}</Descriptions.Item>

            <Descriptions.Item label="Discount">{discount}%</Descriptions.Item>
            <Descriptions.Item label="Details">{details}</Descriptions.Item>
            <Descriptions.Item label="Sizes">
              {sizes.map((size: any) => size.size).join(", ")}
            </Descriptions.Item>
            <Descriptions.Item label="Colors">
              {colors.map((color: any) => color.color).join(", ")}
            </Descriptions.Item>
            <Descriptions.Item label="Created At">
              {new Date(createdAt).toLocaleDateString()}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </div>
  );
};

export default ViewProduct;
