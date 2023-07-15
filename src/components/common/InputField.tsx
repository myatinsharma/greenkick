import { UseFormRegister } from "react-hook-form";
import {
  MedicineTime,
  Patient,
  PatientDataKeys,
  Rx,
  UnionPatientDataKeys,
} from "../../models/app";

type InputFieldProps = {
  register: UseFormRegister<Patient>;
  name: string;
  type?: string;
  label?: string;
  placeholder?: string;
};

const InputField = ({
  name,
  register,
  type,
  label,
  placeholder,
}: InputFieldProps) => {
  return (
    <>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-zinc-300 text-left"
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          {...register(name as PatientDataKeys)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full px-2 py-1"
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input
          {...register(name as PatientDataKeys)}
          type="text"
          placeholder={placeholder}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full px-2 py-1"
        ></input>
      )}
    </>
  );
};

export default InputField;
