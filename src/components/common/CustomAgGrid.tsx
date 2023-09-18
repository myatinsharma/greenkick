import React, { useEffect, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { getCustomers } from "@/services/customer.service";
import { Customer } from "@/models/app";
import { useRouter } from "next/router";

const CustomAgGrid = () => {
  const router = useRouter();
  const gridRef = useRef<AgGridReact>(null);
  const [rowData, setRowData] = useState<Customer[]>([]);
  const [columnDefs, setColumnDefs] = useState<ColumnConfig[] | any>([]);

  useEffect(() => {
    let keys: ColumnConfig[] = [];
    getCustomers().then((data) => {
      if (data.length > 0)
        Object.keys(data[0]).map((key) => {
          keys.push({ headerName: key, field: key });
        });
      setColumnDefs(keys);
      setRowData(data);
    });
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: 600, width: 1400 }}>
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs}
        onRowClicked={(e) => {
          console.log(e.data);
          router.push(`/customer/10`, undefined, { shallow: true });
        }}
      ></AgGridReact>
    </div>
  );
};

export default CustomAgGrid;
