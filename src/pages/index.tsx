import HomeForm from "@/components/HomeForm";
import { Meal } from "@/models/app";
import { useState } from "react";
import { dummyMeal } from "@/constants/app";
import Layout from "@/components/common/Layout";

export default function Home() {
  const [customer, setCustomer] = useState<Meal>(dummyMeal);
  const handlePateinDetails = (meal: Meal) => {
    setCustomer(meal);
  };

  return (
    <main>
      <Layout>
        <HomeForm handleCustomerDataSubmission={handlePateinDetails}></HomeForm>
      </Layout>
    </main>
  );
}
