import { testOrder } from "@/constants/app";
import { Order } from "@/models/app";
import React, { createContext, useContext, useState } from "react";

interface OrderContextValue {
  currentOrder: Order;
}

export const OrderContext = createContext<OrderContextValue | null>(null);

export const OrderContextProvider = (props) => {
  const [currentOrder, setCurrentOrder] = useState<Order>(testOrder);
  return (
    <OrderContext.Provider value={{ currentOrder: testOrder }}>
      {props.children}
    </OrderContext.Provider>
  );
};
