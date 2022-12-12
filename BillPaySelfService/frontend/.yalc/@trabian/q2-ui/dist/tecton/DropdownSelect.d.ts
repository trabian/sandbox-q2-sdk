import React, { FC } from 'react';
import { WithClass } from './utils';
declare type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare type OptionProps = React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
declare type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export declare type DropdownSelectProps = Q2DropdownSelectProps & InputProps & {
    onSearchInput?: (query: string) => void;
};
export declare type DropdownSelectOptionProps = Q2DropdownSelectOptionProps & OptionProps;
export declare type DropdownOptGroupProps = Q2DropdownOptGroupProps & DivProps;
export declare const DropdownSelectOption: FC<DropdownSelectOptionProps>;
export declare const DropdownOptGroup: FC<DropdownOptGroupProps>;
export declare const DropdownSelect: FC<DropdownSelectProps>;
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'q2-select': DropdownSelectProps & WithClass;
            'q2-option': DropdownSelectOptionProps & WithClass;
            'q2-optgroup': DropdownOptGroupProps & WithClass;
        }
    }
}
declare type Q2DropdownSelectProps = {
    label?: string;
    /**
     * The current value for the select and should correspond to the
     * value of a nested option. This property is only relevant for
     * single select implementations. Pre-select options for single
     * selects by defining the value property.
     */
    value?: string;
    /**
     * Each item in this array should correspond to the value of a option.
     * This property is only relevant for multiselect implementations.
     * Pre-select options for multiselects by defining the selectedOptions property.
     */
    selectedOptions?: string[];
    /**
     * Binds to the nested q2-input element. Note that error messages are
     * not available to the user. q2-select uses this property to show an
     * error state and its primary use case is for an unfilled field.
     */
    errors?: string[];
    /**
     * Disables all interaction with the field and leverages the disabled
     * visual style of q2-input.
     */
    disabled?: boolean;
    /**
     * Enables multiselect functionality.
     */
    multiple?: boolean;
    /**
     * Enables search functionality.
     */
    searchable?: boolean;
    /**
     * Enables text wrapping for select options. When false,
     * text truncates and does not wrap.
     */
    multilineOptions?: boolean;
    /**
     * Marks the field as optional by passing this value to the nested q2-input.
     */
    optional?: boolean;
};
declare type Q2DropdownOptGroupProps = {
    /**
     * Serves as the group's header and it is sticky using position:sticky;
     */
    label: string;
    /**
     * Disables all nested options.
     */
    disabled?: boolean;
};
declare type Q2DropdownSelectOptionProps = {
    /**
     * Serves as the option's value. Should correspond to the q2-select value.
     */
    value: string;
    /**
     * The text that is presented in the field if selected; if not set,
     * the value will be used.
     */
    display?: string;
    /**
     * disables option
     */
    disabled?: boolean;
};
export {};
