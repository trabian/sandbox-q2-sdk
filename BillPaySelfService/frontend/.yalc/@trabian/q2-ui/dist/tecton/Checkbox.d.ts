import React, { FC } from 'react';
import { WithClass } from './utils';
export declare const Checkbox: FC<CheckboxProps>;
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'q2-checkbox': CheckboxProps & WithClass;
        }
    }
}
export declare type CheckboxProps = Q2CheckboxProps & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare type Q2CheckboxProps = {
    /**
     * The state of the checkbox. This controls the visual appearance of the
     * element.
     */
    checked?: boolean;
    /**
     * The visual style of the checkbox. This does not need to be defined for a
     * standard checkbox.
     */
    type?: 'toggle' | 'favorite';
    /**
     * The visible label text for the checkbox. Appears to the right of the box
     * for default and favorite checkboxes and appears to the left for toggles.
     * Yielded content will be adjacent to this text.
     *
     * **Localizable**
     */
    label?: string;
    /**
     * The aria-label text for the checkbox. This will not be read if a label is provided.
     */
    'aria-label'?: string;
    /**
     * Use on a parent checkbox (e.g. "Select all") in a checkbox group to
     * indicate that some, but not all, checkboxes in the group are checked.
     *
     * When indeterminate is true, the "indeterminate" selection style is applied.
     * To apply the standard "checked" selection style, checked must be true and
     * indeterminate must be false
     */
    indeterminate?: boolean;
    /**
     * Disables the checkbox and prevents user interaction.
     */
    disabled?: boolean;
    /**
     * A static reference value for the checkbox.
     */
    value?: string;
    /**
     * A static string to establish a symbolic relationship between checkboxes.
     */
    name?: string;
};
export {};
