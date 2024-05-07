import React, { useEffect, useState } from "react";
import { Order, UserAccess } from "../models/app";
import { useForm } from "react-hook-form";
import { testOrder, testAnotherOrder } from "@/constants/app";
import FormSewing from "./common/FormSewing";
import { saveData } from "@/services/customer.service";
import { orderSchema } from "@/constants/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ValidateCode from "./common/ValidateCode";
import { useOrderContext } from "@/contexts";

type HomeFormProps = {
  handleCustomerDataSubmission: (data: Order) => void;
};

const HomeForm = ({ handleCustomerDataSubmission }: HomeFormProps) => {
  const [order, setOrder] = useState<Order>(testAnotherOrder);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormLoaded, setIsFormLoaded] = useState(false);
  const customerQueryForm = React.createRef<HTMLFormElement>();
  const { currentOrder } = useOrderContext();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Order>({
    defaultValues: testOrder,
    values: order,
    resolver: zodResolver(orderSchema),
  });

  useEffect(() => {
    console.log(currentOrder);
    setOrder(currentOrder);
  }, [currentOrder]);

  function handleSave(data: Order) {
    console.log(data);
    if (isValid) {
      setIsSubmitting(true);
      setOrder(data);
      handleCustomerDataSubmission(data);
      saveData(data).then((res) => {
        console.log(data);
        if (res.status === 201) {
          setIsSubmitting(false);
          alert("Customer data saved successfully!");
        }
      });
    }
  }

  return (
    <div className="App">
      <div className="bg-platinum px-32 py-6 max-h-full max-sm:px-0">
        <div className="grid-cols-6 hidden">Tailwind Jugaad (not visible)</div>
        <form onSubmit={handleSubmit(handleSave)} className="w-full">
          <FormSewing
            setIsFormControlsLoaded={setIsFormLoaded}
            defaultValues={order}
            control={control}
            register={register}
          ></FormSewing>
          {errors.customer_name && (
            <p>customer_name{errors.customer_name?.message}</p>
          )}
          {errors.item_category && (
            <p>item category {errors.item_category?.message}</p>
          )}
          {errors.vendor && <p>vendor {errors.vendor?.message}</p>}
          {errors.quantity && <p>quantity {errors.quantity?.message}</p>}
          {errors.purchase_price && (
            <p>cost {errors.purchase_price?.message}</p>
          )}
          {errors.price && <p>price {errors.price?.message}</p>}
          <button
            disabled={isSubmitting}
            type="submit"
            className="btn btn-neutral mt-4"
          >
            {isSubmitting ? "Wait.." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomeForm;
