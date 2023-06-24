/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TicketshortProps } from "./Ticketshort";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TicketInReviewCollectionOverridesProps = {
    TicketInReviewCollection?: PrimitiveOverrideProps<CollectionProps>;
    Ticketshort?: TicketshortProps;
} & EscapeHatchProps;
export declare type TicketInReviewCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => TicketshortProps;
} & {
    overrides?: TicketInReviewCollectionOverridesProps | undefined | null;
}>;
export default function TicketInReviewCollection(props: TicketInReviewCollectionProps): React.ReactElement;
