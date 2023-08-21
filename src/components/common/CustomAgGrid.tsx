import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { getCustomers } from "@/services/customer.service";
import { Customer } from "@/models/app";

const CustomAgGrid = () => {
  const [rowData, setRowData] = useState<Customer[]>([]);

  // const [rowData] = useState([
  //   { make: "Toyota", model: "Celica", price: 35000 },
  //   { make: "Ford", model: "Mondeo", price: 32000 },
  //   { make: "Porsche", model: "Boxter", price: 72000 },
  // ]);

  const [columnDefs, setColumnDefs] = useState<ColumnConfig[] | any>([]);

  useEffect(() => {
    getCustomers().then((data) => {
      console.log(data);
      setColumnDefs(
        Object.keys(data[0]).map((key) => {
          return { headerName: key, field: key };
        })
      );

      setRowData(data);
    });
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: 600, width: 1400 }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
};

export default CustomAgGrid;
