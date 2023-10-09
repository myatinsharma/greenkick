import { verifyTaskAccess } from "@/services/customer.service";
import React, { Dispatch, SetStateAction, useState } from "react";

interface Props {
  submitButtonText?: string;
  isSubmittingText?: string;
  onSubmit: (isValid: boolean) => void;
}

const ValidateCode: React.FC<Props> = ({
  submitButtonText,
  isSubmittingText,
  onSubmit,
}) => {
  const [code, setCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit() {
    if (!code) return;
    verifyTaskAccess(code).then((res) => {
      if (res.status === 200) {
        if (res.data.access === true) {
          onSubmit(true);
        } else {
          onSubmit(false);
        }
      }
    });
  }

  return (
    <>
      <input
        type="text"
        placeholder="code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="input input-bordered w-full max-w-xs"
      ></input>
      <button
        type="button"
        disabled={isSubmitting}
        className="btn btn-primary mt-4 ml-4"
        onClick={handleSubmit}
      >
        {isSubmitting
          ? isSubmittingText ?? "Saving..."
          : submitButtonText ?? "Save"}
      </button>
    </>
  );
};

export default ValidateCode;
