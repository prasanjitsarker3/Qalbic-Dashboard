import { Button, Input, Space, Table, TableColumnsType } from "antd";
import { useGetAllCategoryQuery } from "../../redux/features/CategoryApi/categoryApi";
import moment from "moment";
import { useEffect, useState } from "react";
import CategoryModalButton from "./CategoryModalButton";

const Category = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [query, setQuery] = useState({ searchTerm: "" });
  useEffect(() => {
    setQuery({ searchTerm: searchText });
  }, [searchText]);

  const { data: categoryData, isFetching } = useGetAllCategoryQuery(query);
  console.log(categoryData);
  if (isFetching) {
    console.log("Loading...");
  }

  const categoryTableData = categoryData?.data?.data?.map(
    ({ id, name, img, createdAt }: any) => ({
      key: id,
      id,
      name,
      img,
      createdAt: moment(new Date(createdAt)).format("MMM Do YY"),
    })
  );

  const columns: TableColumnsType<any> = [
    {
      title: "Category Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Category Image",
      dataIndex: "img",
      key: "img",
      render: (img: string) => (
        <img
          src={img}
          alt="Category"
          style={{ width: "50px", height: "50px", objectFit: "cover" }}
        />
      ),
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Action",
      key: "x",
      render: () => (
        <Space>
          <Button type="primary" danger>
            Delete
          </Button>
        </Space>
      ),
      width: "1%",
    },
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="p-5">
      <div className="flex items-center gap-12">
        <CategoryModalButton />
        <Input
          className="w-48"
          type="text"
          placeholder="Search Category"
          value={searchText}
          onChange={handleSearch}
        />
      </div>
      <div className=" pt-8">
        <Table
          loading={isFetching}
          columns={columns}
          dataSource={categoryTableData}
          pagination={{ defaultPageSize: 5 }}
        />
      </div>
    </div>
  );
};

export default Category;
