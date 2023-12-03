import React, { useEffect, useRef, useState } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { getCustomerQueryDetails, postTask } from "@/services/customer.service";
import { Customer, Task, User, UserAccess } from "@/models/app";
import { useRouter } from "next/router";
import { mapCustomerFromCustomerQueryAPI } from "@/utils";
import { TaskStatus } from "@/enums";
import { set, useForm } from "react-hook-form";
import { taskSchema } from "@/constants/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "@/components/common/InputField";
import { dummyTask, taskFormControls, testTaskData } from "@/constants/app";
import { getUsers } from "@/services/user.service";
import Layout from "@/components/common/Layout";
import ValidateCode from "@/components/common/ValidateCode";
import TasksGrid from "@/components/tasks/TasksGrid";

const CustomAgGrid = () => {
  const router = useRouter();
  const [customer, setCustomer] = useState<Customer>({} as Customer);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fetchingUsers, setFetchingUsers] = useState(false);
  const [assignedByUserId, setAssignedByUserId] = useState<number>(0);
  const newTaskForm = React.createRef<HTMLFormElement>();

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
    getCustomerQueryDetails(parseInt(router.query.id as string)).then((res) => {
      setCustomer(mapCustomerFromCustomerQueryAPI(res.data[0]));
    });
  }, [router.query]);

  useEffect(() => {
    getUsers().then((res) => {
      taskFormControls.assigned_to_user_id.dropdownOptions = Object.fromEntries(
        res.map((user) => [user.id.toString(), user.fullname])
      );
      setFetchingUsers(true);
    });
  }, []);

  const afterValidationAction = (userAccess: UserAccess) => {
    if (userAccess.access) {
      setAssignedByUserId(userAccess.userId);
      newTaskForm.current?.dispatchEvent(
        new Event("submit", { cancelable: false, bubbles: true })
      );
    }
  };

  function handleSave(data: Task) {
    if (isValid) {
      setIsSubmitting(true);
      data = {
        ...data,
        customer_id: customer.id,
        customer_query_id: customer.queryid!,
        assigned_by_user_id: assignedByUserId,
      };
      postTask(data).then((res) => {
        setIsSubmitting(false);
        if (res.status === 201) {
          alert("Task saved successfully!");
        }
      });
    }
  }

  return (
    <Layout>
      <div className="bg-teal-700 px-32 py-6">
        <div className="m-3">
          {Object.keys(customer || {}).map((key) => (
            <p key={key} className="text-black">
              {key}: {customer[key as keyof Customer]}
              {customer[key as keyof Customer]}
            </p>
          ))}
          {fetchingUsers && (
            <>
              <form
                ref={newTaskForm}
                onSubmit={handleSubmit(handleSave)}
                className="w-full"
              >
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(taskFormControls).map(([key, value], ind) => {
                    if (taskFormControls[key as keyof Task].showInUI === false)
                      return null;
                    return (
                      <div className="col-span-1" key={ind}>
                        {/* <InputField
                          register={register}
                          name={key}
                          control={taskFormControls[key as keyof Task]}
                          valueType={typeof testTaskData[key as keyof Task]}
                        ></InputField> */}
                      </div>
                    );
                  })}
                </div>
                <button type="submit" className="hidden"></button>
              </form>
              <ValidateCode onSubmit={afterValidationAction}></ValidateCode>
              <TasksGrid queryId={customer.queryid!}></TasksGrid>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CustomAgGrid;
