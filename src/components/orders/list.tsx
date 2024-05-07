import React, { useCallback, useEffect, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { getAllEntries, getAllOrders } from "@/services/customer.service";
import { Meal, Order } from "@/models/app";
import { useRouter } from "next/router";
import { ordersGridColumnDefs } from "@/constants/app";
import { GridOptions } from "ag-grid-community";
import "ag-grid-enterprise";
import CustomAgGrid from "../common/CustomAgGrid";
import { Button, DatePicker, DatePickerProps, Input, Space } from "antd";

const OrdersList = () => {
  const [rowData, setRowData] = useState<Order[]>([]);

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    if (!dateString) {
      setRowData([]);
    } else {
      getAllOrders(dateString).then((data) => {
        setRowData(data);
      });
    }
  };

  return (
    <>
      <Space.Compact className="w-1/3 ml-10">
        <DatePicker onChange={onChange} />
        <Button type="primary" className="btn hover:!bg-auburn">
          Search
        </Button>
      </Space.Compact>
      <div
        className="ag-theme-alpine ml-10"
        style={{ height: 600, width: 1400 }}
      >
        <CustomAgGrid<Order>
          rowData={rowData}
          columnDefs={ordersGridColumnDefs}
        />
      </div>
    </>
  );
};

export default OrdersList;
