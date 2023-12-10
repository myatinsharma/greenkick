import React, { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { getAllUserTasks } from "@/services/customer.service";
import { Task } from "@/models/app";
import { useRouter } from "next/router";
import { taskProximity } from "@/constants/app";

const MyTasks = () => {
  const gridRef = useRef<AgGridReact>(null);
  const [rowData, setRowData] = useState<Task[]>([]);
  const [userCode, setUserCode] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [fetchedTasks, setFetchedTasks] = useState(false);

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

  const handleSubmitUserCode = (event: FormEvent<HTMLFormElement>): void => {
    if (userCode && userEmail) {
      getAllUserTasks(userCode, userEmail).then((data) => {
        setRowData(data);
        setFetchedTasks(true);
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmitUserCode}>
        <input
          type="text"
          placeholder="code here"
          value={userCode}
          onChange={(e) => setUserCode(e.target.value)}
        />
        <input
          type="text"
          placeholder="email here"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
      {fetchedTasks && (
        <div className="ag-theme-alpine" style={{ height: 600, width: 1400 }}>
          {/* <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={taskGridcolumnDefs}
            rowClassRules={rowClassRules}
          ></AgGridReact> */}
        </div>
      )}
    </>
  );
};

export default MyTasks;
