import HomeForm from "@/components/HomeForm";
import { Customer } from "@/models/app";
import { useState } from "react";
import PateintRxPrintView from "@/components/PateintRxPrintView";
import { dummyCustomer } from "@/constants/app";

export default function Home() {
  const [patient, setCustomer] = useState<Customer>(dummyCustomer);
  const handlePateinDetails = (patient: Customer) => {
    setCustomer(patient);
  };

  return (
    <main>
      {patient?.name ? (
        <PateintRxPrintView patient={patient}></PateintRxPrintView>
      ) : (
        <HomeForm handleCustomerDataSubmission={handlePateinDetails}></HomeForm>
      )}
    </main>
  );
}
