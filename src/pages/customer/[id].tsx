import React, { useEffect, useRef, useState } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import {
  getCustomerQueryDetails,
  getCustomers,
} from "@/services/customer.service";
import { Customer } from "@/models/app";
import { useRouter } from "next/router";
import { mapCustomerFromCustomerQueryAPI } from "@/utils";

const CustomAgGrid = () => {
  const router = useRouter();
  const [customer, setCustomer] = useState<Customer>();

  useEffect(() => {
    console.log("rq", router.query);
    getCustomerQueryDetails(parseInt(router.query.id as string)).then((res) => {
      setCustomer(mapCustomerFromCustomerQueryAPI(res.data[0]));
    });
  }, [router.query]);

  return (
    <div className="m-3" style={{ height: 600, width: 1400 }}>
      {Object.keys(customer || {}).map((key) => (
        <p key={key} className="text-black">
          {key}: {customer[key]}
        </p>
      ))}
    </div>
  );
};

export default CustomAgGrid;
