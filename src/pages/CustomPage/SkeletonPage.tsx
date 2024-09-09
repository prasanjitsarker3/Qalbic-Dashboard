import { Skeleton } from "antd";

const SkeletonPage = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Skeleton
        className="h-100vh w-full"
        paragraph={{ rows: 6, width: "100%" }}
      />{" "}
    </div>
  );
};

export default SkeletonPage;

export const DuplicateSkeletonPage = () => {
  return (
    <div className=" grid grid-cols-2 gap-5 space-y-4 ">
      <Skeleton.Input size={"large"} className=" w-full" />
      <Skeleton.Input size={"large"} className=" w-full" />
      <Skeleton.Input size={"large"} className=" w-full" />
      <Skeleton.Input size={"large"} className=" w-full" />
      <Skeleton.Input size={"large"} className=" w-full" />
      <Skeleton.Input size={"large"} className=" w-full" />
    </div>
  );
};
export const SkeletonTablePage = () => {
  return (
    <div className="space-y-3 w-full">
      <Skeleton.Input size={"large"} className=" w-full" />
      <Skeleton.Input size={"large"} className=" w-full" />
      <Skeleton.Input size={"large"} className=" w-full" />
      <Skeleton.Input size={"large"} className=" w-full" />
      <Skeleton.Input size={"large"} className=" w-full" />
    </div>
  );
};
