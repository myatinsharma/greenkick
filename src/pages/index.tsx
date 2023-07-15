import HomeForm from "@/components/HomeForm";
import { Patient } from "@/models/app";
import { useState } from "react";
import PateintRxPrintView from "@/components/PateintRxPrintView";
import { dummyPatient } from "@/constants/app";

export default function Home() {
  const [patient, setPatient] = useState<Patient>(dummyPatient);
  const handlePateinDetails = (patient: Patient) => {
    setPatient(patient);
  };

  return (
    <main>
      {patient?.name ? (
        <PateintRxPrintView patient={patient}></PateintRxPrintView>
      ) : (
        <HomeForm handlePatientDataSubmission={handlePateinDetails}></HomeForm>
      )}
    </main>
  );
}
