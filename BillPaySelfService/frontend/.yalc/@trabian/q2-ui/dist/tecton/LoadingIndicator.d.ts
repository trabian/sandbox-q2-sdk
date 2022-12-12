import React, { FC } from 'react';
import { WithClass } from './utils';
declare type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export declare type LoadingIndicatorProps = Q2LoadingIndicatorProps & DivProps & {
    rows?: number;
    columns?: number;
};
export declare const LoadingIndicator: FC<LoadingIndicatorProps>;
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'q2-loading': LoadingIndicatorProps & WithClass;
        }
    }
}
declare type Q2LoadingIndicatorProps = {
    /**
     * The label that will be announced by screen readers when the
     * loading element is reached. Supports text localization.
     */
    ariaLabel?: string;
    /**
     * The category of loading element being used.
     * default "spinner"
     */
    type?: 'spinner' | 'skeleton';
    /**
     * The specific visual presentation of a loading element type.
     * default and only valid value for type "spinner" is "half-circle"
     * This property is only necessary for type "skeleton"
     */
    shape?: 'circle' | 'rectangle' | 'text' | 'table' | 'field' | 'form' | 'detailed-item' | 'label-value';
    /**
     * Visual adjustments available to specific type and shape combinations,
     * written as a hyphen (-) separated string.  Supported values depend on
     * the type and shape selected.
     *
     * Supported values for type="spinner":
     * inline
     *
     * Example supported values for type="skeleton":
     * header
     * center
     * headless
     *
     * Example:
     * element.modifiers = 'header-center'
     */
    modifiers?: string;
    /**
     * Numeric adjustments available for specific type and shape combinations,
     * written as an x-separated string.
     * Supported values for each shape are described in detail in each shape's
     * section above.
     *
     * Examples:
     * element.type = 'skeleton';
     * element.shape = 'table';
     * element.counts = '6x6';
     */
    counts: string;
    /**
     * This property is deprecated in favor having inline present in the modifiers list.
     * Allows q2-loading elements of type='spinner' to display inline with text.
     */
    inline?: boolean;
};
export {};
