import { testOrder } from "@/constants/app";
import { Order } from "@/models/app";
import React, { createContext, useState } from "react";

interface OrderContextValue {
  currentOrder: Order;
  setCurrentOrder: React.Dispatch<React.SetStateAction<Order>>;
}

export const OrderContext = createContext<OrderContextValue>({
  currentOrder: testOrder,
  setCurrentOrder: () => {},
});

export const OrderContextProvider = ({
  ...props
}: {
  children: React.ReactNode;
}) => {
  const [order, setOrder] = useState<Order>(testOrder);
  return (
    <OrderContext.Provider
      value={{ currentOrder: order, setCurrentOrder: setOrder }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};
