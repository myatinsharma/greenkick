import {
  patientKeyLabels,
  patientReviewSheetDesignValues,
} from "@/constants/app";
import { Customer } from "../models/app";

type CustomerRxPrintViewProps = {
  patient: Customer;
};

const PateintRxPrintView = ({ patient }: CustomerRxPrintViewProps) => {
  const tdCssClasses = "border-y border-teal-800 px-2 py-1";
  return (
    <div className="px-60 py-6 print:px-2 print:pt-40">
      {patientReviewSheetDesignValues.length > 0 &&
        patientReviewSheetDesignValues.map((item, index) => {
          return (
            <div
              key={index}
              className={`grid grid-cols-${item.props.length} gap-6 mb-6`}
            >
              {Array.from(Array(item.props.length)).map((_, ind) => {
                return (
                  <div className="col-span-1" key={ind}>
                    <label className="block text-sm font-medium text-teal-800">
                      {patientKeyLabels[item.props[ind]]}
                    </label>
                    <h3>{patient[item.props[ind]]?.toString()}</h3>
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};

export default PateintRxPrintView;
