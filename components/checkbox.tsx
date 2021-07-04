interface CheckboxProps {
  value: string | number;
  name: string;
  checked: boolean;
  onChange: (e) => void;
  label: string;
}

export function Checkbox({
  value,
  name,
  checked,
  onChange,
  label,
}: CheckboxProps): JSX.Element | null {
  return (
    <label className="flex items-center space-x-3 cursor-pointer text-2xl ">
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-full checked:bg-purple-dark blur checked:border-transparent focus:outline-none"
        onChange={onChange}
      />
      <span className="text-purple-dark font-medium">{label}</span>
    </label>
  );
}
