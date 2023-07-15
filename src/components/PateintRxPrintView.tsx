import {
  patientKeyLabels,
  patientReviewSheetDesignValues,
} from "@/constants/app";
import { Patient } from "../models/app";

type PatientRxPrintViewProps = {
  patient: Patient;
};

const PateintRxPrintView = ({ patient }: PatientRxPrintViewProps) => {
    const tdCssClasses = "border-y border-teal-800 px-2 py-1";
  return (
    <div className="px-60 py-6 print:px-2 print:pt-40">
      {patientReviewSheetDesignValues.length > 0 &&
        patientReviewSheetDesignValues.map((item, index) => {
          return !item.bList ? (
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
          ) : (
            <div className="grid grid-cols-1 gap-6 mb-6">
              <div className="col-span-1">
                <table className="border-collapse border border-gray-900 w-full">
                  <caption className="caption-top text-left font-semibold text-md mb-2 text-teal-800">Rx</caption>
                  <thead className="font-semibold text-teal-800 text-sm">
                    <tr>
                      <td className={tdCssClasses}>{patientKeyLabels["medicineName"]}</td>
                      <td className={tdCssClasses}>{patientKeyLabels["type"]}</td>
                      <td className={tdCssClasses}>{patientKeyLabels["morning"]}</td>
                      <td className={tdCssClasses}>{patientKeyLabels["afternoon"]}</td>
                      <td className={tdCssClasses}>{patientKeyLabels["evening"]}</td>
                      <td className={tdCssClasses}>{patientKeyLabels["duration"]}</td>
                    </tr>
                  </thead>
                  <tbody>
                    {patient.rx.map((item, index) => {
                      return (
                        <>
                          <tr>
                            <td className={tdCssClasses}>{item.medicineName}</td>
                            <td className={tdCssClasses}>{item.type}</td>
                            <td className={tdCssClasses}>{item.occurancy.morning}</td>
                            <td className={tdCssClasses}>{item.occurancy.afternoon}</td>
                            <td className={tdCssClasses}>{item.occurancy.evening}</td>
                            <td className={tdCssClasses}>{item.duration}</td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default PateintRxPrintView;
