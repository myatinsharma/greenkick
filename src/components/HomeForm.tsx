import React, { useEffect, useState } from "react";
import { Order, UserAccess } from "../models/app";
import { useForm } from "react-hook-form";
import { testOrder } from "@/constants/app";
import FormSewing from "./common/FormSewing";
import { saveData } from "@/services/customer.service";
import { orderSchema } from "@/constants/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ValidateCode from "./common/ValidateCode";
import { boolean } from "zod";

type HomeFormProps = {
  handleCustomerDataSubmission: (data: Order) => void;
};

const HomeForm = ({ handleCustomerDataSubmission }: HomeFormProps) => {
  const [order, setOrder] = useState<Order>(testOrder);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormLoaded, setIsFormLoaded] = useState(false);
  const customerQueryForm = React.createRef<HTMLFormElement>();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Order>({
    defaultValues: testOrder,
    resolver: zodResolver(orderSchema),
  });

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
      <div className="bg-teal-700 px-32 py-6">
        <h3 className="text-white text-3xl font-semibold mb-5 decoration-green-500 underline">
          Elegance IPR
        </h3>
        <div className="grid-cols-6 hidden">Tailwind Jugaad (not visible)</div>
        <form onSubmit={handleSubmit(handleSave)} className="w-full">
          <FormSewing
            setIsFormControlsLoaded={setIsFormLoaded}
            defaultValues={order}
            control={control}
            register={register}
          ></FormSewing>
          {errors.order_date && <p>order_date{errors.order_date?.message}</p>}
          {errors.shipping_date && <p>shipping_date{errors.shipping_date?.message}</p>}
          {errors.payment_date && <p>payment_date{errors.payment_date?.message}</p>}
          {errors.id && <p>id{errors.id?.message}</p>}
          {errors.customer_name && <p>customer_name{errors.customer_name?.message}</p>}
          {errors.item && <p>item{errors.item?.message}</p>}
          {errors.item_category && <p>item_category{errors.item_category?.message}</p>}
          {errors.quantity && <p>quantity{errors.quantity?.message}</p>}
          {errors.vendor && <p>vendor{errors.vendor?.message}</p>}
          {errors.vendor_code_internal && <p>vendor_code_internal{errors.vendor_code_internal?.message}</p>}
          {errors.purchase_price && <p>purchase_price{errors.purchase_price?.message}</p>}
          {errors.price && <p>price{errors.price?.message}</p>}
          {errors.shipping_address && <p>shipping_address{errors.shipping_address?.message}</p>}
          {errors.vendor_payment && <p>vendor_payment{errors.vendor_payment?.message}</p>}
          {errors.customer_payment && <p>customer_payment{errors.customer_payment?.message}</p>}
          {errors.customer_payment_type && <p>customer_payment_type{errors.customer_payment_type?.message}</p>}
          {errors.comment && <p>comment{errors.comment?.message}</p>}
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
