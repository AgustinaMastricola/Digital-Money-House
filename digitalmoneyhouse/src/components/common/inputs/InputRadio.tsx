import './InputRadio.css';

type InputProps = {
  label: string,
  checked: string | null,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  value: string 
};

const InputRadio = ({ label, checked, onChange, value }: InputProps) => {
  const isChecked = checked;

  return (
    <div className="w-full px-4">
      <label className="flex items-center justify-between py-2">
        <span className="text-medium-gray">{label}</span>
        <div className="custom-radio">
          <input
            type="radio"
            name="filter"
            checked={isChecked === value ? true : false}
            onChange={onChange}
            value={value} 
          />
          <span className="radio-label"></span>
        </div>
      </label>
    </div>
  );
};

export default InputRadio;