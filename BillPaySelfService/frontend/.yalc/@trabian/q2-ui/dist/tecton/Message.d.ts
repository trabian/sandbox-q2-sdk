import React, { FC } from 'react';
import { WithClass } from './utils';
declare type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export declare type NotificationProps = Q2MessageProps & DivProps;
export declare const Message: FC<NotificationProps>;
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'q2-message': NotificationProps & WithClass;
        }
    }
}
declare type Q2MessageProps = {
    /**
     * The type of notication to display.
     */
    type?: 'info' | 'success' | 'warning' | 'error';
    /**
     * When true, property 'role' (internal property) is unset and does not
     * immediately announce itself to screen readers
     */
    description?: boolean;
};
export {};
