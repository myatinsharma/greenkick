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
import { ChangeEvent, useRef, useState } from "react";

type InputFieldProps = {
  register: UseFormRegister<Order>;
  name: string;
  control: FormControl;
  valueType?: string;
  autocompleteData?: string[];
};

function InputField({
  name,
  register,
  control,
  valueType,
  autocompleteData,
}: InputFieldProps) {
  const { label, type, placeholder, dropdownOptions } = control;
  const [autocompleteValue, setAutocompleteValue] = useState("");
  const [options, setOptions] = useState<{ value: string }[]>([]);

  const getPanelValue = (searchText: string) =>
    !searchText
      ? []
      : autocompleteData
      ? autocompleteData.map((val) => {
          return { value: val };
        })
      : [];

  const onSelect = (data: string) => {
    setAutocompleteValue(data);
  };

  const onChange = (data: string) => {
    setAutocompleteValue(data);
  };

  function onChg(event: ChangeEvent<HTMLInputElement>): void {
    setAutocompleteValue(event.target.value);
    event.preventDefault();
  }

  return (
    <>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-auburn text-left"
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
          <>
            <AutoComplete
              options={options}
              onSelect={onSelect}
              onSearch={(text) => setOptions(getPanelValue(text))}
              onChange={onChange}
              placeholder={placeholder}
              className="w-full max-w-xs input"
              filterOption={(inputValue, option) =>
                option!.value
                  .toUpperCase()
                  .indexOf(inputValue.toUpperCase()) !== -1
              }
            >
              <input
                {...register(name as InputFieldFormKeys)}
                type="text"
                placeholder={placeholder}
                className="input px-0 w-full focus:outline-none focus:ring-0 focus:border-0"
                onChange={onChg}
                value={autocompleteValue}
              ></input>
            </AutoComplete>
          </>
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
