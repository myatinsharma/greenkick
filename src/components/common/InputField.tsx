import { UseFormRegister } from "react-hook-form";
import {
  Customer,
  CustomerDataKeys,
  FormControl,
  Task,
} from "../../models/app";

type InputFieldProps = {
  register: UseFormRegister<Customer> | UseFormRegister<Task>;
  name: string;
  control: FormControl;
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
          className="textarea w-full"
          placeholder={placeholder}
        ></textarea>
      )) ||
        (type === "dropdown" && (
          <select
            {...register(name as CustomerDataKeys, {
              valueAsNumber: valueType === "number" ? true : false,
            })}
            placeholder={placeholder}
            className="select w-full max-w-xs"
          >
            {Object.entries(dropdownOptions!).map(([value, text]) => (
              <option key={value} value={value}>
                {text}
              </option>
            ))}
          </select>
        )) || (
          <input
            {...register(name as CustomerDataKeys, {
              valueAsNumber: valueType === "number" ? true : false,
            })}
            type="text"
            placeholder={placeholder}
            className="input input-bordered w-full max-w-xs"
          ></input>
        )}
    </>
  );
};

export default InputField;
