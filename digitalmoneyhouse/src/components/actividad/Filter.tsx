import { useState } from 'react';
import ArrowV from "@/components/common/icons/ArrowV";
import InputRadio from '../common/inputs/InputRadio';
import Button from '../common/buttons/Button';

type FilterProps = {
  onFilterChange: (filter: string) => void;
};

const Filter = ({ onFilterChange }: FilterProps) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('today'); // Inicializar con un filtro por defecto

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filter = event.target.value;
    setSelectedFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="flex flex-col border-2 w-[350px] h-[430px]">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center space-x-3">
          <h2 className="text-base my-2 font-bold">Período</h2>
          <ArrowV width="11" height="7" stroke="#201F22" />
        </div>
        <div>
          <Button title={"Borrar filtros"} className="border-none font-normal text-medium-gray" onClick={() => { setSelectedFilter(''); onFilterChange(''); }} />
        </div>
      </div>
      <hr className="text-medium-gray opacity-30" />
      <InputRadio label={"Hoy"} checked={selectedFilter === 'today'} onChange={handleFilterChange} value="today" />
      <InputRadio label={"Ayer"} checked={selectedFilter === 'yesterday'} onChange={handleFilterChange} value="yesterday" />
      <InputRadio label={"Última semana"} checked={selectedFilter === 'lastWeek'} onChange={handleFilterChange} value="lastWeek" />
      <InputRadio label={"Últimos 15 días"} checked={selectedFilter === 'last15days'} onChange={handleFilterChange} value="last15days" />
      <InputRadio label={"Último mes"} checked={selectedFilter === 'lastMonth'} onChange={handleFilterChange} value="lastMonth" />
      <InputRadio label={"Último año"} checked={selectedFilter === 'lastYear'} onChange={handleFilterChange} value="lastYear" />
      <div className="flex items-center justify-between px-4 py-2">
        <Button title={"Otro período"} className="border-none text-medium-gray font-normal" />
        <ArrowV width="11" height="7" stroke="#A6A5A7" className={'transform  '} />
      </div>
    </div>
  );
};

export default Filter;
