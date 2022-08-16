import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/core";
import React from "react";

type FocusedStatusBarProps = {
  backgroundColor: string;
};

const FocusedStatusBar = (props: FocusedStatusBarProps) => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatusBar;
