import HomeForm from "@/components/HomeForm";
import { Order } from "@/models/app";
import { useState } from "react";
import { dummyOrder } from "@/constants/app";
import Layout from "@/components/common/Layout";

export default function Home() {
  const [order, setOrder] = useState<Order>(dummyOrder);
  const handlePateinDetails = (order: Order) => {
    setOrder(order);
  };

  return (
    <main className="h-full">
      <Layout>
        <HomeForm handleCustomerDataSubmission={handlePateinDetails}></HomeForm>
      </Layout>
    </main>
  );
}
