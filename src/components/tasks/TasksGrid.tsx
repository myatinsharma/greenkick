import React, { useEffect, useMemo, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { getAllQueryTasks } from "@/services/customer.service";
import { Task } from "@/models/app";
import { useRouter } from "next/router";
import { taskProximity } from "@/constants/app";

type TasksGridProps = {
  queryId: number;
};

const TasksGrid = ({ queryId }: TasksGridProps) => {
  const gridRef = useRef<AgGridReact>(null);
  const [rowData, setRowData] = useState<Task[]>([]);

  useEffect(() => {
    if (queryId) {
      getAllQueryTasks(queryId).then((data) => {
        setRowData(data);
      });
    }
  }, [queryId]);

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
      {/* <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={taskGridcolumnDefs}
        rowClassRules={rowClassRules}
      ></AgGridReact> */}
    </div>
  );
};

export default TasksGrid;
