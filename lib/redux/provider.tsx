"use client"
import { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import store from "@/lib/store/store";

type Props = {
  children: ReactNode;
};

export const Providers = ({ children }: Props) => {

  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};
