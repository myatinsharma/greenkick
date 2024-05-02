import React, { useCallback, useEffect, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { getAllEntries, getAllOrders } from "@/services/customer.service";
import { Meal, Order } from "@/models/app";
import { useRouter } from "next/router";
import { entriesGridColumnDefs } from "@/constants/app";
import { GridOptions } from "ag-grid-community";
import "ag-grid-enterprise";
import CustomAgGrid from "../common/CustomAgGrid";

const OrdersList = () => {
  const [rowData, setRowData] = useState<Order[]>([]);

  useEffect(() => {
    getAllOrders().then((data) => {
      setRowData(data);
    });
  }, []);

  return (
    <>
      <div className="ag-theme-alpine" style={{ height: 600, width: 1400 }}>
        <CustomAgGrid<Order>
          rowData={rowData}
          columnDefs={entriesGridColumnDefs}
        />
      </div>
    </>
  );
};

export default OrdersList;
