import { motion } from "framer-motion";

interface CheckboxProps {
  value?: string | number;
  name: string;
  checked: boolean;
  onChange?: (e) => void;
  label: string | JSX.Element;
  disabled?: boolean;
}

export function Checkbox({
  value,
  name,
  checked,
  onChange,
  label,
  disabled = false,
}: CheckboxProps): JSX.Element | null {
  return (
    <label className="flex items-center space-x-3 cursor-pointer">
      <motion.input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        className="cursor-pointer form-tick appearance-none h-6 w-6 border-2 border-gray-300 rounded-full checked:bg-purple-dark blur checked:border-transparent focus:outline-none"
        onChange={onChange}
        style={{ height: 30, width: 30 }}
        whileHover={{ scale: disabled ? 1 : 1.2 }}
        whileTap={{ scale: disabled ? 1 : 0.8 }}
        disabled={disabled}
      />
      <span className="text-purple-dark font-medium flex items-center">
        {label}
      </span>
    </label>
  );
}
