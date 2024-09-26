import { useEffect, useState } from 'react';
import ArrowV from "@/components/common/icons/ArrowV";
import InputRadio from '../common/inputs/InputRadio';
import Button from '../common/buttons/Button';
import clsx from 'clsx';

type FilterProps = {
  onFilterChange: (filter: string | null) => void;
  className: string;
  onClose: () => void;
  currentFilter: string | null;
};

const Filter = ({ onFilterChange, className, onClose, currentFilter}: FilterProps) => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null); // Inicializar con un filtro por defecto
  
  useEffect(() => {
    setSelectedFilter(currentFilter);
  }, [currentFilter]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filter = event.target.value;
    setSelectedFilter(filter);
  };
  const handleClearFilters = () => {
    setSelectedFilter(null);
    onFilterChange(null);
  };

  const handleSubmit = () => {
    onFilterChange(selectedFilter); // Llama a la función para aplicar el filtro
    onClose(); // Cierra el filtro
  };

  return (
    <div className={clsx("flex flex-col items-center md:items-end", className)}>
      <div className="flex items-center justify-between px-4 w-full">
        <div className="flex items-center space-x-3">
          <h2 className="text-base my-2 font-bold">Período</h2>
          <ArrowV width="11" height="7" stroke="#201F22" />
        </div>
        <div>
          <Button title={"Borrar filtros"} className="border-none font-normal text-medium-gray" onClick={handleClearFilters} />
        </div>
      </div>
      <hr className="text-medium-gray opacity-30" />
      <InputRadio label={"Hoy"} onChange={handleFilterChange} value="today" checked={selectedFilter} />
      <InputRadio label={"Ayer"} onChange={handleFilterChange} value="yesterday" checked={selectedFilter} />
      <InputRadio label={"Última semana"} onChange={handleFilterChange} value="lastWeek" checked={selectedFilter} />
      <InputRadio label={"Últimos 15 días"} onChange={handleFilterChange} value="last15days" checked={selectedFilter} />
      <InputRadio label={"Último año"} onChange={handleFilterChange} value="lastYear" checked={selectedFilter} />
      <div className="flex items-center justify-between px-4 py-2 w-full ">
        <Button title={"Otro período"} className="border-none text-medium-gray font-normal" />
        <ArrowV width="11" height="7" stroke="#A6A5A7" className={'transform  '} />
      </div>
      <Button title={'Aplicar'} onClick={handleSubmit} className='w-10/12 md:w-1/2 my-4 py-1 md:mr-4 bg-total-primary border-total-primary' />
    </div>
  );
};

export default Filter;
