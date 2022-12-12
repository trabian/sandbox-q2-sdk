import React, { FC } from 'react';
import { Q2IconProps } from './Icon';
import { WithClass } from './utils';
declare type ButtonProps = Q2ButtonProps & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
declare const Button: FC<ButtonProps>;
export declare type IconButtonProps = Omit<Q2IconProps, 'type'> & Omit<ButtonProps, 'icon'> & {
    icon: Q2IconProps['type'];
};
export declare const IconButton: FC<IconButtonProps>;
export default Button;
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'q2-btn': ButtonProps & WithClass;
        }
    }
}
declare type Q2ButtonProps = {
    color?: 'primary' | 'secondary';
    /**
     * Use the block attribute to create buttons that fill the width of their
     * parent element.
     */
    block?: boolean;
    /**
     * Add the badge attribute to implement a badge-style q2-btn. Badge buttons
     * are useful for quickly changing between filtered views, similar to tabs.
     * Badge buttons are used to change between the "All" and "Selected" views
     * within a multiselect q2-select, for example.
     */
    badge?: boolean;
    /**
     * Add the disabled prop to a Button to show the disabled state. Disabled
     * buttons display at 40% opacity and show the not-allowed cursor when
     * hovered.
     */
    disabled?: boolean;
    /**
     * Use the icon flag and a nested icon to create an icon-only Button.
     */
    icon?: boolean;
};
