"use client";
import Filter from "@/components/actividad/Filter";
import Button from "@/components/common/buttons/Button";
import Container from "@/components/common/containers/Container";
import ArrowRightIcon from "@/components/common/icons/ArrowRight";
import FilterIcon from "@/components/common/icons/FilterIcon";
import SearchIcon from "@/components/common/icons/SearchIcon";
import ActivityList from "@/components/home/authenticated/ActivityList";
import { useAccountContext } from "@/context/AccountContextProvider";
import { useUserContext } from "@/context/UserContextProvider";
import clsx from "clsx";
import { useState } from "react";

const ActivityPage = () => {
  const { id } = useAccountContext();
  const { token } = useUserContext();
  const [filter, setFilter] = useState<string | null>(null);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [valueInput, setValueInput] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);

  const handleFilterChange = (newFilter: string | null) => {
    setFilter(newFilter);
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const handleInputSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value);
    if (value === "") {
      setValueInput(null);
      return;
    }
    setValueInput(value);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <>
      <div
        className={clsx({
          "absolute top-0 left-0 z-10 bg-total-black bg-opacity-35 w-full h-full":
            isFilterVisible,
          hidden: !isFilterVisible,
        })}
      />
      <div className="flex space-x-2 text-sm w-11/12 md:w-10/12 items-center md:hidden my-2 ">
        <ArrowRightIcon className="#000000" />
        <span className="underline">Tu actividad</span>
      </div>
      <div className="md:mt-6 w-11/12 md:w-10/12 md:flex md:items-center md:space-x-5 mb-4">
        <div className="w-full flex items-center relative">
          <SearchIcon className="h-min absolute left-2" />
          <input
            onChange={handleInputSearchChange}
            placeholder="Buscar en tu actividad"
            className="p-3 pl-10 w-full border-t border-total-gray border-opacity-15 rounded-lg border-t-1  bg-total-white shadow-lg focus:outline-none"
          />
        </div>
        <div className="hidden md:flex md:p-3 md:bg-total-primary md:rounded-lg ">
          <Button
            title={"Filtrar"}
            className="border-none flex items-center px-4"
            onClick={toggleFilterVisibility}
          >
            <FilterIcon fill="#0AEB8C" className="ml-5" />
          </Button>
        </div>
      </div>
      {isFilterVisible && (
        <Filter
          onFilterChange={handleFilterChange}
          className={
            "absolute z-20 bg-total-white mt-24 w-11/12 md:w-[350px] md:right-12 lg:right-[4.2rem] xl:right-[6.4rem] 2xl:right-[8.3rem] md:top-7"
          }
          onClose={toggleFilterVisibility}
          currentFilter={filter}
        />
      )}
      <Container
        className={
          "border border-total-gray border-opacity-15 rounded-lg border-1 bg-total-white drop-shadow-2xl w-11/12 md:w-10/12 flex flex-col items-center"
        }
      >
        <div className="flex justify-between w-full">
          <h1 className="text-base my-2">Tu actividad</h1>
          <div className="flex md:hidden">
            <Button
              title={"Filtrar"}
              className="border-none flex items-center px-4"
              onClick={toggleFilterVisibility}
            >
              <FilterIcon fill="white" className="ml-2" />
            </Button>
          </div>
        </div>
        <hr className="text-medium-gray opacity-30 mt-2 w-full" />
        <ActivityList
					filter={filter}
					accountId={id}
					token={token}
					valueInputSearch={valueInput}
					page={page}
					onPageChange={handlePageChange} 
					showPagination={true}/>
      </Container>
    </>
  );
};

export default ActivityPage;
