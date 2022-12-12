import React from 'react';
declare type ElementName = keyof JSX.IntrinsicElements;
export declare function wrapWebComponent<T extends ElementName>(Component: T): React.ForwardRefExoticComponent<React.PropsWithoutRef<Pick<JSX.IntrinsicElements[T], Exclude<keyof JSX.IntrinsicElements[T], "class">>> & React.RefAttributes<JSX.IntrinsicElements[T]>>;
export declare type WebComponentProps<T extends ElementName> = WithoutClass<JSX.IntrinsicElements[T]>;
export declare type ResponsiveStyleValue<T> = T | Array<T | null>;
export declare type WithClass = {
    class?: string;
};
export declare type WithoutClass<T> = Omit<T, 'class'>;
export {};
