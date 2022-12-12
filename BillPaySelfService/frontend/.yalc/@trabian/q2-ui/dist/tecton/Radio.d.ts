import React, { FC } from 'react';
import { WithClass } from './utils';
declare type RadioGroupProps = Q2RadioGroupProps & InputProps;
export declare const RadioGroup: FC<RadioGroupProps>;
declare type RadioProps = Q2RadioProps & InputProps;
export declare const Radio: FC<RadioProps>;
declare type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'q2-radio-group': RadioGroupProps & WithClass;
            'q2-radio': RadioProps & WithClass;
        }
    }
}
declare type Q2RadioGroupProps = {
    /**
     * Text for the fieldset legend describing radio group
     *
     * **Localizable**
     */
    label?: string;
    disabled?: boolean;
    optional?: boolean;
    value?: string;
    name?: string;
};
declare type Q2RadioProps = {
    /**
     * Text for the fieldset legend describing radio group
     *
     * **Localizable**
     */
    label?: string;
    'aria-label'?: string;
    disabled?: boolean;
    value?: string;
};
export {};
