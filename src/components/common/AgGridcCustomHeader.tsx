import React, { ReactNode } from "react";
import Navbar from "../Navbar";
import { IHeaderParams } from "ag-grid-community";

export interface ICustomHeaderParams extends IHeaderParams {
  customHeaderName: string;
}

const AgGridcCustomHeader = ({ customHeaderName, displayName }: ICustomHeaderParams) => {
  return <div>{customHeaderName}</div>;
};

export default AgGridcCustomHeader;
