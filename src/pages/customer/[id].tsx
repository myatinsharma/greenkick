import React, { useEffect, useRef, useState } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import {
  getCustomerQueryDetails,
  getCustomers,
  postTask,
} from "@/services/customer.service";
import { Customer, Task } from "@/models/app";
import { useRouter } from "next/router";
import { mapCustomerFromCustomerQueryAPI } from "@/utils";
import { TaskStatus } from "@/enums";

const CustomAgGrid = () => {
  const router = useRouter();
  const [customer, setCustomer] = useState<Customer>({} as Customer);

  useEffect(() => {
    getCustomerQueryDetails(parseInt(router.query.id as string)).then((res) => {
      setCustomer(mapCustomerFromCustomerQueryAPI(res.data[0]));
    });
  }, [router.query]);

  function addNewTask() {
    const task: Task = {
      id: 0,
      customer_id: 1,
      status: TaskStatus["Not Started"],
      description: "New Task",
      appid: 1,
      assigned_by_user_id: 12,
      assigned_to_user_id: 11,
      customer_query_id: 15,
      statuses_json: "{}",
      title: "New Task",
    };

    postTask(task).then((res) => {
      console.log(res);
    });
  }

  return (
    <div className="m-3" style={{ height: 600, width: 1400 }}>
      {Object.keys(customer || {}).map((key) => (
        <p key={key} className="text-black">
          {key}: {customer[key as keyof Customer]}
          {TaskStatus[customer[key as keyof Customer] as TaskStatus]}
        </p>
      ))}
      <button onClick={addNewTask} type="button" className="btn btn-primary btn-xs text-black">
        Add Task
      </button>
    </div>
  );
};

export default CustomAgGrid;
