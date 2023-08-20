import HomeForm from "@/components/HomeForm";
import { Customer } from "@/models/app";
import { useState } from "react";
import { dummyCustomer } from "@/constants/app";
import Navbar from "@/components/Navbar";
import Layout from "@/components/common/Layout";

export default function Home() {
  const [customer, setCustomer] = useState<Customer>(dummyCustomer);
  const handlePateinDetails = (customer: Customer) => {
    setCustomer(customer);
  };

  return (
    <main>
      <Layout>
        <HomeForm handleCustomerDataSubmission={handlePateinDetails}></HomeForm>
      </Layout>
    </main>
  );
}
