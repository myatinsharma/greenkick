import { UseFormRegister } from "react-hook-form";
import {
  Customer,
  CustomerDataKeys,
  CustomerFormControl,
} from "../../models/app";

type InputFieldProps = {
  register: UseFormRegister<Customer>;
  name: string;
  control: CustomerFormControl;
  valueType?: string;
};

const InputField = ({
  name,
  register,
  control,
  valueType,
}: InputFieldProps) => {
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
          <>
            <select
              {...register(name as CustomerDataKeys, {
                valueAsNumber: valueType === "number" ? true : false,
              })}
              placeholder={placeholder}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full px-2 py-1"
            >
              {Object.entries(dropdownOptions!).map(([value, text]) => (
                <option key={value} value={value}>
                  {text}
                </option>
              ))}
            </select>
            <p>{valueType}</p>
          </>
        )) || (
          <>
            <input
              {...register(name as CustomerDataKeys, {
                valueAsNumber: valueType === "number" ? true : false,
              })}
              type="text"
              placeholder={placeholder}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full px-2 py-1"
            ></input>
            <p>{valueType}</p>
          </>
        )}
    </>
  );
};

export default InputField;
