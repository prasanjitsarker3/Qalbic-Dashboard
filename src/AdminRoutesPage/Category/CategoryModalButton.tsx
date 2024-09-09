import { Button, Form, Input, Modal } from "antd";
import { useState } from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";

const CategoryModalButton = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { control, handleSubmit, reset } = useForm();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("Form data", data);
  };

  const handleCancel = () => {
    setModalOpen(false);
    reset();
    setImagePreview(null);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Button type="primary" onClick={() => setModalOpen(true)}>
        Create Category
      </Button>
      <Modal
        title="Create Category "
        centered
        open={modalOpen}
        onOk={handleSubmit(onSubmit)}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleSubmit(onSubmit)}>
            Submit
          </Button>,
        ]}
      >
        <Form layout="vertical">
          <Form.Item label="Category Name">
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input {...field} placeholder="Enter Category Name..." />
              )}
            />
          </Form.Item>

          <Form.Item>
            <Controller
              name="image"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div className=" w-full">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden w-[400px]"
                    id="fileInput"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      handleImageUpload(e);
                    }}
                  />
                  <label
                    htmlFor="fileInput"
                    className="cursor-pointer w-[300px] px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300"
                  >
                    Select Image
                  </label>

                  {/* Image preview */}
                  {imagePreview && (
                    <div className="mt-4">
                      <img
                        src={imagePreview}
                        alt="Selected Preview"
                        className="w-12 h-12 object-cover rounded"
                      />
                    </div>
                  )}
                </div>
              )}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CategoryModalButton;
