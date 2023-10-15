import React, { useEffect, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { getAllQueryTasks, getCustomers } from "@/services/customer.service";
import { Task } from "@/models/app";
import { useRouter } from "next/router";

const TasksGrid = () => {
  const gridRef = useRef<AgGridReact>(null);
  const [rowData, setRowData] = useState<Task[]>([]);
  //const [columnDefs, setColumnDefs] = useState<ColumnConfig[] | any>([]);

  useEffect(() => {
    let keys: ColumnConfig[] = [];
    getAllQueryTasks().then((data) => {
      if (data.length > 0)
        Object.keys(data[0]).map((key) => {
          keys.push({ headerName: key, field: key });
        });
      //setColumnDefs(keys);
      setRowData(data);
    });
  }, []);

  const [columnDefs, setColumnDefs] = useState([
    { headerName: 'Status', field: 'status' },
    { headerName: 'Title', field: 'title' },
  ]);

  const rowClassRules = {
    "rag-green": "data.status < 5",
    "rag-red": "data.status >= 5",
  };

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

export default TasksGrid;
