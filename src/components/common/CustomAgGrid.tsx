import React, { useCallback, useEffect, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { getAllEntries } from "@/services/customer.service";
import { Meal, Order } from "@/models/app";
import { entriesGridColumnDefs } from "@/constants/app";
import { ColDef, GridOptions } from "ag-grid-community";
import "ag-grid-enterprise";
import router from "next/router";
import { useOrderContext } from "@/contexts";

type CustomAgGridProps<T> = {
  rowData: T[];
  columnDefs: ColDef[];
  onExport?: () => void;
};

function CustomAgGrid<T>({ rowData, columnDefs }: CustomAgGridProps<T>) {
  const { currentOrder } = useOrderContext();
  const gridRef = useRef<AgGridReact>(null);

  const onBtExport = useCallback(() => {
    if (rowData.length === 0) return;
    const params = { fileName: "elegance-sales.xlsx" };
    gridRef.current?.api.exportDataAsExcel(params);
  }, [rowData.length]);

  return (
    <>
      <button
        onClick={onBtExport}
        style={{ marginBottom: "5px", fontWeight: "bold", color: "red" }}
      >
        Export to Excel
      </button>
      <div className="ag-theme-alpine" style={{ height: 600, width: 1400 }}>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          onRowClicked={(e) => {}}
        ></AgGridReact>
      </div>
    </>
  );
}

export default CustomAgGrid;
