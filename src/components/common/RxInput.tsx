import { Patient } from "../../models/app";
import { UseFormRegister } from "react-hook-form";
import { MdAdd } from "react-icons/md";

type RxProps = {
  register: UseFormRegister<Patient>;
  index: number;
  totalRows: number;
  handleAddRowInputClick: () => void;
};

const RxInput = ({
  register,
  index,
  handleAddRowInputClick,
  totalRows,
}: RxProps) => {
  const occuranceMaxQuantity = 4;

  return (
    <div className="grid grid-cols-4 gap-6 mb-6">
      <div className="col-span-1">
        <label
          htmlFor={`rx.${index}.medicineName`}
          className="block mb-2 text-sm font-medium text-zinc-100 text-left"
        >
          Medicine
        </label>
        <input
          {...register(`rx.${index}.medicineName`)}
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full px-2 py-1"
        ></input>
      </div>
      <div className="col-span-1">
        <label
          htmlFor={`rx.${index}.type`}
          className="block mb-2 text-sm font-medium text-zinc-100 text-left"
        >
          Type
        </label>
        <select
          {...register(`rx.${index}.type`)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full px-2 py-1"
        >
          <option value="Tablet">Tablet</option>
          <option value="Syrup">Syrup</option>
          <option value="Injection">Injection</option>
          <option value="Ointment">Ointment</option>
          <option value="Capsule">Capsule</option>
          <option value="Inhaler">Inhaler</option>
          <option value="Drops">Drops</option>
          <option value="Suspension">Suspension</option>
          <option value="Suppository">Suppository</option>
          <option value="Sachet">Sachet</option>
        </select>
      </div>
      <div className="col-span-1">
        <div className="grid grid-cols-3 gap-1 mb-2">
          <div className="col-span-1">
            <label
              htmlFor={`rx.${index}.occurancy.morning`}
              className="block mb-2 text-sm font-medium text-zinc-100 text-left"
            >
              Morning
            </label>
            <select
              {...register(`rx.${index}.occurancy.morning`)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full px-2 py-1"
            >
              {occuranceMaxQuantity > 0 &&
                Array.from(Array(occuranceMaxQuantity)).map((_, index) => {
                  return (
                    <option key={index} value={index}>
                      {index}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="col-span-1">
            <label
              htmlFor={`rx.${index}.occurancy.afternoon`}
              className="block mb-2 text-sm font-medium text-zinc-100 text-left"
            >
              Afternoon
            </label>
            <select
              {...register(`rx.${index}.occurancy.afternoon`)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full px-2 py-1"
            >
              {occuranceMaxQuantity > 0 &&
                Array.from(Array(occuranceMaxQuantity)).map((_, index) => {
                  return (
                    <option key={index} value={index}>
                      {index}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="col-span-1">
            <label
              htmlFor={`rx.${index}.occurancy.evening`}
              className="block mb-2 text-sm font-medium text-zinc-100 text-left"
            >
              Evening
            </label>
            <select
              {...register(`rx.${index}.occurancy.evening`)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full px-2 py-1"
            >
              {occuranceMaxQuantity > 0 &&
                Array.from(Array(occuranceMaxQuantity)).map((_, index) => {
                  return (
                    <option key={index} value={index}>
                      {index}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="grid grid-cols-3 gap-1 mb-2">
          <div className="col-span-2">
            <label
              htmlFor="duration"
              className="block mb-2 text-sm font-medium text-zinc-100 text-left"
            >
              Days
            </label>
            <input
              {...register(`rx.${index}.duration`)}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full px-2 py-1"
            ></input>
          </div>
          <div className="col-span-1">
            {index === totalRows - 1 && (
              <button
                className="text-xl text-zinc-100 bg-teal-600 px-2.5 py-1 mt-7 ml-3 rounded"
                onClick={handleAddRowInputClick}
              >
                <MdAdd />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RxInput;
