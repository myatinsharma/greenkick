import { UseFormRegister } from "react-hook-form";
import {
  Customer,
  FormControl,
  InputFieldForm,
  InputFieldFormKeys,
  Task,
} from "../../models/app";

type InputFieldProps<T extends InputFieldForm> = {
  register: UseFormRegister<T>;
  name: string;
  control: FormControl;
  valueType?: string;
};

function InputField<T extends Customer | Task>({
  name,
  register,
  control,
  valueType,
}: InputFieldProps<T>) {
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
          {...register(name as InputFieldFormKeys)}
          className="textarea w-full"
          placeholder={placeholder}
        ></textarea>
      )) ||
        (type === "dropdown" && (
          <select
            {...register(name as InputFieldFormKeys, {
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
        )) ||
        (type === "date" && (
          <input
            {...register(name as InputFieldFormKeys)}
            type="date"
            placeholder={placeholder}
            className="input input-bordered w-full max-w-xs"
          ></input>
        )) || (
          <input
            {...register(name as InputFieldFormKeys, {
              valueAsNumber: valueType === "number" ? true : false,
            })}
            type="text"
            placeholder={placeholder}
            className="input input-bordered w-full max-w-xs"
          ></input>
        )}
    </>
  );
}

export default InputField;
