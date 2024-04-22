import { UseFormRegister } from "react-hook-form";
import {
  FormControl,
  InputFieldForm,
  InputFieldFormKeys,
  Meal,
  Order,
  Task,
} from "../../models/app";
import { AutoComplete } from "antd";
import { useState } from "react";

type InputFieldProps = {
  register: UseFormRegister<Order>;
  name: string;
  control: FormControl;
  valueType?: string;
};

function InputField({ name, register, control, valueType }: InputFieldProps) {
  const { label, type, placeholder, dropdownOptions } = control;
  const [value, setValue] = useState("");
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const [anotherOptions, setAnotherOptions] = useState<{ value: string }[]>([]);

  const getPanelValue = (searchText: string) => (!searchText ? [] : []);

  const onSelect = (data: string) => {
    console.log("onSelect", data);
  };

  const onChange = (data: string) => {
    setValue(data);
  };

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
        )) ||
        (type === "number" && (
          <input
            {...register(name as InputFieldFormKeys)}
            type="number"
            placeholder={placeholder}
            className="input input-bordered w-full max-w-xs"
          ></input>
        )) ||
        (type === "autocomplete" && (
          <AutoComplete
            {...register(name as InputFieldFormKeys)}
            value={value}
            options={anotherOptions}
            onSelect={onSelect}
            onSearch={(text) => setAnotherOptions(getPanelValue(text))}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full max-w-xs"
          />
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
