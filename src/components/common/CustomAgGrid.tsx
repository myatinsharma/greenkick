import React, { useEffect, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { getCustomers } from "@/services/customer.service";
import { Customer } from "@/models/app";

const CustomAgGrid = () => {
  const gridRef = useRef<AgGridReact>(null);
  const [rowData, setRowData] = useState<Customer[]>([]);

  const [columnDefs, setColumnDefs] = useState<ColumnConfig[] | any>([]);

  useEffect(() => {
    // if (gridRef.current && gridRef.current.api) gridRef.current.api.showLoadingOverlay();
    getCustomers().then((data) => {
      if (data.length > 0)
        setColumnDefs(
          Object.keys(data[0]).map((key) => {
            return { headerName: key, field: key };
          })
        );

      setRowData(data);
      // if (gridRef.current) gridRef.current.api.hideOverlay();
    });
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: 600, width: 1400 }}>
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs}
      ></AgGridReact>
    </div>
  );
};

export default CustomAgGrid;
