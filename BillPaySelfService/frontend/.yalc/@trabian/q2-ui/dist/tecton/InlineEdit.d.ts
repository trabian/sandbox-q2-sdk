import React, { FC } from 'react';
import { WithClass } from './utils';
export declare type InlineEditProps = Q2InlineEditProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export declare const InlineEdit: FC<InlineEditProps>;
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'q2-editable-field': InlineEditProps & WithClass;
        }
    }
}
declare type Q2InlineEditProps = {
    /**
     * Serves as the visible text while in the read state and the
     * default value of the input while in the edit state.
     */
    value: string;
    /**
     * The visible descriptor for the element. Serves as the
     * input label while in the edit state and as decorated
     * label for the read state when persistentLabel is true.
     */
    label?: string;
    /**
     * Binds to the aria-label for the input field while in
     * the edit state. This should not be used at the same
     * time as the label.
     */
    ariaLabel?: string;
    /**
     * Controls the edit state of the element.
     */
    editing?: boolean;
    /**
     * Binds to the nested q2-input element.
     */
    type?: string;
    /**
     * Binds to the nested q2-input element.
     * Applicable when type="currency".
     */
    formatModifier?: string;
    /**
     * Binds to the nested q2-input element.
     */
    maxLength?: number;
    /**
     * Binds to the nested q2-input element.
     */
    hints?: string[];
    /**
     * Binds to the nested q2-input element.
     */
    errors?: string[];
    /**
     * Displays the provided label in the read state.
     */
    persistentLabel?: boolean;
};
export {};
