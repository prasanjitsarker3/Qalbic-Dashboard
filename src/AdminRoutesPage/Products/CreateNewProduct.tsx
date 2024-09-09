import { Form, Input, Button, Row, Col, Upload, Select, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Home } from "lucide-react";
import { useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { useGetAllCategoryQuery } from "../../redux/features/CategoryApi/categoryApi";
import { colorOptions, sizeOptions } from "./ProductConstant";
import { useCreateProductMutation } from "../../redux/features/ProductApi/productApi";

const CreateNewProduct = () => {
  const { control, handleSubmit } = useForm();
  const [fileList, setFileList] = useState<any[]>([]);

  const [createProduct] = useCreateProductMutation();
  const { data: categoryData } = useGetAllCategoryQuery({});
  const filterData = categoryData?.data?.data || [];
  const categoryFilterData = filterData.map((data: any) => ({
    value: data.id,
    label: data.name,
  }));

  const handleUploadChange = ({ fileList }: any) => {
    setFileList(fileList);
  };

  const onSubmit = async (data: FieldValues) => {
    const productData = {
      name: data.name,
      price: Number(data.price),
      discount: Number(data.discount),
      stock: Number(data.stock),
      description: data.description,
      details: data.details,
      categoryId: data.categoryId,
      color: data.color,
      size: data.size,
    };
    console.log("Check", productData);
    console.log("Files", fileList);

    const formData = new FormData();
    formData.append("data", JSON.stringify(productData));

    fileList.forEach((file: any) => {
      if (file.originFileObj) {
        formData.append("file", file.originFileObj);
      } else {
        formData.append("file", file);
      }
    });

    console.log("Form Data", formData);
    try {
      const res = await createProduct(formData).unwrap();
      console.log("Product created successfully:", res);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <div className="p-5">
      <div>
        <h1 className="text-slate-800 text-lg">Create A New Product</h1>
      </div>
      <div>
        <Form
          onFinish={handleSubmit(onSubmit)}
          name="form_item_path"
          layout="vertical"
        >
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={8}>
              <Form.Item name="name" label="Product Name">
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Input {...field} placeholder="Enter product name..." />
                  )}
                />
              </Form.Item>
            </Col>

            <Col xs={24} sm={8}>
              <Form.Item name="size" label="Product Size">
                <Controller
                  name="size"
                  control={control}
                  defaultValue={[]}
                  render={({ field }) => (
                    <Select
                      {...field}
                      mode="multiple"
                      style={{ width: "100%" }}
                      placeholder="Select sizes"
                      options={sizeOptions}
                      onChange={(value) => field.onChange(value)}
                    />
                  )}
                />
              </Form.Item>
            </Col>

            <Col xs={24} sm={8}>
              <Form.Item name="color" label="Product Color">
                <Controller
                  name="color"
                  control={control}
                  defaultValue={[]}
                  render={({ field }) => (
                    <Select
                      {...field}
                      mode="multiple"
                      style={{ width: "100%" }}
                      placeholder="Select colors"
                      options={colorOptions}
                      onChange={(value) => field.onChange(value)}
                      optionLabelProp="label"
                    >
                      {colorOptions.map((option) => (
                        <Select.Option key={option.value} value={option.value}>
                          <Space>
                            <span
                              style={{
                                display: "inline-block",
                                width: "15px",
                                height: "15px",
                                backgroundColor: option.value,
                                border: "1px solid #000",
                                marginRight: "8px",
                              }}
                            />
                            <span style={{ color: option.value }}>
                              {option.label}
                            </span>
                          </Space>
                        </Select.Option>
                      ))}
                    </Select>
                  )}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={8}>
              <Form.Item name="Category" label="Product Category">
                <Controller
                  name="categoryId"
                  control={control}
                  defaultValue={[]}
                  render={({ field }) => (
                    <Select
                      {...field}
                      style={{ width: "100%" }}
                      placeholder="Select Category"
                      options={categoryFilterData}
                      onChange={(value) => field.onChange(value)}
                      optionLabelProp="label"
                    >
                      {categoryFilterData.map((option: any) => (
                        <Select.Option key={option.value} value={option.value}>
                          <Space>
                            <span
                              style={{
                                display: "inline-block",
                                width: "15px",
                                height: "15px",
                                backgroundColor: option.value,
                                border: "1px solid #000",
                                marginRight: "8px",
                              }}
                            />
                            <span style={{ color: option.value }}>
                              {option.label}
                            </span>
                          </Space>
                        </Select.Option>
                      ))}
                    </Select>
                  )}
                />
              </Form.Item>
            </Col>

            <Col xs={24} sm={8}>
              <Form.Item name="price" label="Product Price">
                <Controller
                  name="price"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Input {...field} placeholder="Enter product Price..." />
                  )}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={8}>
              <Form.Item name="discount" label="Product Discount">
                <Controller
                  name="discount"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Input {...field} placeholder="Enter product Discount..." />
                  )}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={8}>
              <Form.Item name="stock" label="Product Stock">
                <Controller
                  name="stock"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Input {...field} placeholder="Enter product Stock..." />
                  )}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={8}>
              <Form.Item name="description" label="Product Description">
                <Controller
                  name="description"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextArea
                      rows={3}
                      {...field}
                      placeholder="Enter product Description..."
                    />
                  )}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={8}>
              <Form.Item name="details" label="Product Details">
                <Controller
                  name="details"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextArea
                      rows={3}
                      {...field}
                      placeholder="Enter product Details..."
                    />
                  )}
                />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12}>
              <Form.Item label="Product Images">
                <Controller
                  name="file"
                  control={control}
                  defaultValue={fileList}
                  render={({ field }) => (
                    <Upload
                      {...field}
                      multiple
                      listType="picture-card"
                      fileList={fileList}
                      onChange={handleUploadChange}
                      beforeUpload={() => false} // Prevent automatic upload
                    >
                      {fileList.length < 5 && (
                        <div>
                          <Upload />
                          <div style={{ marginTop: 8 }}>Upload</div>
                        </div>
                      )}
                    </Upload>
                  )}
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item className=" ">
            <div className=" w-1/2 mx-auto flex justify-center gap-12">
              <Button
                className="w-full flex items-center justify-center gap-3 bg-red-500 text-white"
                htmlType="submit"
              >
                Back Home <Home size={16} />
              </Button>
              <Button className="w-full" type="primary" htmlType="submit">
                Submit
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default CreateNewProduct;
