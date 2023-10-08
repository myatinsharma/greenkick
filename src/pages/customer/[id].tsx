import React, { useEffect, useRef, useState } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { getCustomerQueryDetails, postTask } from "@/services/customer.service";
import { Customer, Task, User } from "@/models/app";
import { useRouter } from "next/router";
import { mapCustomerFromCustomerQueryAPI } from "@/utils";
import { TaskStatus } from "@/enums";
import { set, useForm } from "react-hook-form";
import { taskSchema } from "@/constants/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "@/components/common/InputField";
import { taskFormControls, testTaskData } from "@/constants/app";
import { getUsers } from "@/services/user.service";

const CustomAgGrid = () => {
  const router = useRouter();
  const [customer, setCustomer] = useState<Customer>({} as Customer);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [fetchingUsers, setFetchingUsers] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Task>({
    defaultValues: testTaskData,
    resolver: zodResolver(taskSchema),
  });

  useEffect(() => {
    console.log(router.query);
    getCustomerQueryDetails(parseInt(router.query.id as string)).then((res) => {
      setCustomer(mapCustomerFromCustomerQueryAPI(res.data[0]));
    });
  }, [router.query]);

  useEffect(() => {
    getUsers().then((res) => {
      setFetchingUsers(true);
      setAllUsers(res);
      taskFormControls.assigned_to_user_id.dropdownOptions = Object.fromEntries(
        res.map((user) => [user.fullname, user.id.toString()])
      );
    });
  }, []);

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

  function handleSave(data: Task) {
    if (isValid) {
      setIsSubmitting(true);
      console.log(data);
      postTask(data).then((res) => {
        console.log(res);
        setIsSubmitting(false);
      });
    }
  }

  return (
    <div className="bg-teal-700 px-32 py-6">
      <div className="m-3">
        {Object.keys(customer || {}).map((key) => (
          <p key={key} className="text-black">
            {key}: {customer[key as keyof Customer]}
            {TaskStatus[customer[key as keyof Customer] as TaskStatus]}
          </p>
        ))}
        {fetchingUsers && (
          <form onSubmit={handleSubmit(handleSave)} className="w-full">
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(taskFormControls).map(([key, value], ind) => {
                if (taskFormControls[key as keyof Task].showInUI === false)
                  return null;
                return (
                  <div className="col-span-1" key={ind}>
                    <InputField
                      register={register}
                      name={key}
                      control={taskFormControls[key as keyof Task]}
                      valueType={typeof testTaskData[key as keyof Task]}
                    ></InputField>
                  </div>
                );
              })}
            </div>
            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="btn btn-primary mt-4 ml-4"
            >
              {isSubmitting ? "Adding..." : "Add Task"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CustomAgGrid;
