import React, { FC } from 'react';
import { Q2IconProps } from './Icon';
import { WithClass } from './utils';
declare type DropdownProps = Q2DropdownProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
declare type DropdownItemProps = Q2DropdownItemProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    onRemove?: () => void;
};
export declare const Dropdown: FC<DropdownProps>;
export declare const DropdownItem: FC<DropdownItemProps>;
export declare const DropdownSeparator: FC;
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'q2-dropdown': DropdownProps & WithClass;
            'q2-dropdown-item': DropdownItemProps & WithClass;
        }
    }
}
declare type Q2DropdownProps = {
    /**
     * The type of button used as the menu toggle. (default: "icon")
     */
    type?: 'icon' | 'primary' | 'secondary' | 'neutral';
    /**
     * The icon that will render within the toggle button.
     */
    icon?: Q2IconProps['type'];
    /**
     * The text that appears within the button.
     * This property should not be used if the type is icon.
     * This property supports localization keys.
     */
    label?: string;
    /**
     * Side of the button to align the dropdown to.
     */
    alignment?: 'left' | 'right';
    /**
     * The label that will be announced by screen readers when the
     * toggle button is focused.
     */
    ariaLabel?: string;
    /**
     * When true, the menu cannot be focused or otherwise interacted with.
     */
    disabled?: boolean;
    /**
     * Use popDirection to control the direction the pop up menu extends, either up or down. If no value is passed the component auto detects based on available space below it. The component auto-detection will drop down unless it detects there is not suffiencent height left to do so, in which case it will pop up.
     */
    popDirection?: boolean;
};
declare type Q2DropdownItemProps = {
    /**
     * The text that appears within the dropdown item.
     */
    label?: string;
    /**
     * When true, the item cannot be interacted with and its click event
     * is blocked.
     */
    disabled?: boolean;
    /**
     * When true, an icon button is rendered into the item. Clicking on
     * this button will change the type emitted on the item's click event
     * detail to "remove".
     */
    removable?: boolean;
    /**
     * When true, a line is rendered in the item instead of text
     * Click events fired from these items will not have the click event details
     * provided by other items.
     */
    separator?: boolean;
    /**
     * A static reference value for the item; this value is returned in the
     * click event detail.
     */
    value?: string;
    /**
     * The label that will be announced by screen readers when the
     * toggle button is focused.
     */
    ariaLabel?: string;
};
export {};
