import HomeForm from "@/components/HomeForm";
import { Meal, Order } from "@/models/app";
import { useState } from "react";
import { dummyOrder } from "@/constants/app";
import Layout from "@/components/common/Layout";

export default function Home() {
  const [customer, setCustomer] = useState<Order>(dummyOrder);
  const handlePateinDetails = (order: Order) => {
    setCustomer(order);
  };

  return (
    <main>
      <Layout>
        <HomeForm handleCustomerDataSubmission={handlePateinDetails}></HomeForm>
      </Layout>
    </main>
  );
}
