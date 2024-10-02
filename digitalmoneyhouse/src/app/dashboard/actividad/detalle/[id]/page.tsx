'use client'
import DetailActivity from "@/components/actividad/DetailActivity";
import ArrowRightIcon from "@/components/common/icons/ArrowRight";

const DetailPage = () => {
  return (
    <>
      <div className="flex space-x-2 text-sm w-11/12 md:w-10/12 items-center md:hidden my-2 ">
        <ArrowRightIcon className="#000000" />
        <span className="underline">Tu actividad</span>
      </div>
      <DetailActivity/>
    </>
  );
};

export default DetailPage;