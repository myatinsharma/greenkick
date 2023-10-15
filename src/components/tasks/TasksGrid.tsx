import React, { useEffect, useMemo, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { getAllQueryTasks, getCustomers } from "@/services/customer.service";
import { Task } from "@/models/app";
import { useRouter } from "next/router";
import { taskProximity } from "@/constants/app";

const TasksGrid = () => {
  const gridRef = useRef<AgGridReact>(null);
  const [rowData, setRowData] = useState<Task[]>([]);
  const [columnDefs, setColumnDefs] = useState<ColumnConfig[] | any>([]);

  useEffect(() => {
    let keys: ColumnConfig[] = [];
    getAllQueryTasks().then((data) => {
      if (data.length > 0)
        Object.keys(data[0]).map((key) => {
          keys.push({ headerName: key, field: key });
        });
      setColumnDefs(keys);
      setRowData(data);
    });
  }, []);

  // const [columnDefs, setColumnDefs] = useState([
  //   { headerName: "Status", field: "status" },
  //   { headerName: "Title", field: "title" },
  // ]);

  // const rowClassRules = {
  //   "rag-green": "data.status < 5",
  //   "rag-red": "data.status >= 5",
  // };

  const rowClassRules = useMemo(() => {
    return {
      "task-date-crossed": (params: any) => {
        var end_date = new Date(params.data.end_date);
        var current_date = new Date();
        return current_date > end_date;
      },
      "task-date-near": (params: any) => {
        let __end_date = new Date(params.data.end_date);
        const end_date = new Date(params.data.end_date);
        const current_date = new Date();
        const proximateDate = new Date(
          __end_date.setDate(__end_date.getDate() - taskProximity)
        );
        console.log("current_date", current_date);
        console.log("end_date", end_date);
        console.log("proximateDate", proximateDate);
        return current_date >= proximateDate && current_date <= end_date;
      },
    };
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: 600, width: 1400 }}>
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs}
        rowClassRules={rowClassRules}
      ></AgGridReact>
    </div>
  );
};

export default TasksGrid;
