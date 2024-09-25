type InputProps = {
  label: string,
  checked?: boolean,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  value: string // Agrega el atributo value aquí
};

const InputRadio = ({ label, checked, onChange, value }: InputProps) => {
  return (
    <div className="w-full px-4 flex items-center justify-between py-2">
      <label className="text-medium-gray">{label}</label>
      <input
        type="radio"
        name="filter"
        checked={checked}
        onChange={onChange}
        value={value} // Agrega el atributo value aquí
      />
    </div>
  );
};

export default InputRadio;