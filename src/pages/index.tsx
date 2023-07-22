import HomeForm from "@/components/HomeForm";
import { Customer } from "@/models/app";
import { useState } from "react";
import { dummyCustomer } from "@/constants/app";

export default function Home() {
  const [customer, setCustomer] = useState<Customer>(dummyCustomer);
  const handlePateinDetails = (customer: Customer) => {
    setCustomer(customer);
  };

  return (
    <main>
      <HomeForm handleCustomerDataSubmission={handlePateinDetails}></HomeForm>
    </main>
  );
}
