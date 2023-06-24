/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, ButtonProps, ImageProps, SelectFieldProps, StepperFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TicketInfoScrollTempOverridesProps = {
    TicketInfoScrollTemp?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    people_group?: PrimitiveOverrideProps<ViewProps>;
    Asignee?: PrimitiveOverrideProps<TextProps>;
    Reporter?: PrimitiveOverrideProps<TextProps>;
    asignee_icon_image?: PrimitiveOverrideProps<ImageProps>;
    asignee_name_text?: PrimitiveOverrideProps<TextProps>;
    Details?: PrimitiveOverrideProps<TextProps>;
    assign_to_me_button?: PrimitiveOverrideProps<ButtonProps>;
    reporter_name_text?: PrimitiveOverrideProps<TextProps>;
    reporter_icon_image?: PrimitiveOverrideProps<ImageProps>;
    "Story points"?: PrimitiveOverrideProps<TextProps>;
    story_point_stepper_field?: PrimitiveOverrideProps<StepperFieldProps>;
    Details_form?: PrimitiveOverrideProps<ViewProps>;
    "Status:"?: PrimitiveOverrideProps<TextProps>;
    "Epic link"?: PrimitiveOverrideProps<TextProps>;
    "Issue type"?: PrimitiveOverrideProps<TextProps>;
    "Priority:"?: PrimitiveOverrideProps<TextProps>;
    issue_type_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    priority_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    issue_type_image?: PrimitiveOverrideProps<ImageProps>;
    priority_image?: PrimitiveOverrideProps<ImageProps>;
    status_badge?: PrimitiveOverrideProps<BadgeProps>;
    status_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    dates_group?: PrimitiveOverrideProps<ViewProps>;
    Created?: PrimitiveOverrideProps<TextProps>;
    Updated?: PrimitiveOverrideProps<TextProps>;
    Resolved?: PrimitiveOverrideProps<TextProps>;
    created_date_text?: PrimitiveOverrideProps<TextProps>;
    updated_date_text?: PrimitiveOverrideProps<TextProps>;
    resolved_date_text?: PrimitiveOverrideProps<TextProps>;
    asignee_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    reporter_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    epic_link_group?: PrimitiveOverrideProps<ViewProps>;
    epic_link_badge?: PrimitiveOverrideProps<BadgeProps>;
    epic_link_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type TicketInfoScrollTempProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TicketInfoScrollTempOverridesProps | undefined | null;
}>;
export default function TicketInfoScrollTemp(props: TicketInfoScrollTempProps): React.ReactElement;
