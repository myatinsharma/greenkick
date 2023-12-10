import React, { useCallback, useEffect, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { getAllEntries } from "@/services/customer.service";
import { Meal } from "@/models/app";
import { useRouter } from "next/router";
import { entriesGridColumnDefs } from "@/constants/app";

const CustomAgGrid = () => {
  const router = useRouter();
  const gridRef = useRef<AgGridReact>(null);
  const [rowData, setRowData] = useState<Meal[]>([]);

  useEffect(() => {
    let keys: ColumnConfig[] = [];
    getAllEntries().then((data) => {
      setRowData(data);
    });
  }, []);

  const onBtExport = useCallback(() => {
    const params = { fileName: "test.xlsx" };
    gridRef.current?.api.exportDataAsExcel(params);
  }, []);

  return (
    <>
      {/* <button
        onClick={onBtExport}
        style={{ marginBottom: "5px", fontWeight: "bold" }}
      >
        Export to Excel
      </button> */}
      <div className="ag-theme-alpine" style={{ height: 600, width: 1400 }}>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={entriesGridColumnDefs}
        ></AgGridReact>
      </div>
    </>
  );
};

export default CustomAgGrid;
