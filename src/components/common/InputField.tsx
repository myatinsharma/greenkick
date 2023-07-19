import { UseFormRegister } from "react-hook-form";
import {
  MedicineTime,
  Customer,
  CustomerDataKeys,
  Rx,
  UnionCustomerDataKeys,
  CustomerFormControl,
} from "../../models/app";

type InputFieldProps = {
  register: UseFormRegister<Customer>;
  name: string;
  control: CustomerFormControl;
};

const InputField = ({ name, register, control }: InputFieldProps) => {
  const { label, type, placeholder, dropdownOptions } = control;
  return (
    <>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-zinc-300 text-left"
      >
        {label}
      </label>
      {(type === "textarea" && (
        <textarea
          {...register(name as CustomerDataKeys)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full px-2 py-1"
          placeholder={placeholder}
        ></textarea>
      )) ||
        (type === "dropdown" && (
          <select
            {...register(name as CustomerDataKeys)}
            placeholder={placeholder}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full px-2 py-1"
          >
            {Object.entries(dropdownOptions!).map(([value, text]) => (
              <option key={value} value={value}>
                {text}
              </option>
            ))}
          </select>
        )) || (
          <input
            {...register(name as CustomerDataKeys)}
            type="text"
            placeholder={placeholder}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full px-2 py-1"
          ></input>
        )}
    </>
  );
};

export default InputField;
