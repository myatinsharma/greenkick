import React, { useEffect, useRef, useState } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { getCustomers } from "@/services/customer.service";
import { Customer } from "@/models/app";
import { useRouter } from "next/router";

const CustomAgGrid = () => {
  const router = useRouter();
  const [rowData, setRowData] = useState<Customer[]>([]);

  useEffect(() => {
    console.log("rq", router.query);
  }, [router.query]);

  return (
    <div className="m-3" style={{ height: 600, width: 1400 }}>
      
    </div>
  );
};

export default CustomAgGrid;
