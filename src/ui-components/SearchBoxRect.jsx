/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
export default function SearchBoxRect(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="366px"
      height="159px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "SearchBoxRect")}
      {...rest}
    >
      <View
        width="366px"
        height="159px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="11px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(35,47,62,1)"
        {...getOverrideProps(overrides, "Rectangle")}
      ></View>
    </View>
  );
}
