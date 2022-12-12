import React, { FC } from 'react';
import { WithClass } from './utils';
declare type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export declare type TabsContainerProps = Q2TabsContainerProps & DivProps & {
    onChange?: (tabName: string) => void;
};
export declare const TabsContainer: FC<TabsContainerProps>;
export declare type TabProps = Q2TabProps & DivProps;
export declare const Tab: FC<TabProps>;
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'q2-tab-container': TabsContainerProps & WithClass;
            'q2-tab-pane': TabProps & WithClass;
        }
    }
}
declare type Q2TabsContainerProps = {
    /**
     * Corresponds to the value of the selected tab pane.
     */
    value?: string;
    /**
     * Determines the font size of tab controls.
     */
    type?: 'main' | 'section';
    /**
     * Used to establish the relationship between q2-tab-container and its
     * associated tab panes. A unique name will be defined if one is not provided.
     */
    name?: string;
    /**
     * Controls which variables are used to color the tab controls.
     */
    color?: 'alt';
};
declare type Q2TabProps = {
    /**
     * Serves as the pane's value. Should correspond to the q2-tab-container value
     */
    value?: string;
    /**
     * Serves as the text that will be visible in the tab control provided by q2-tab-container
     */
    label?: string;
    /**
     * Creates an explict relationship with its wrapping q2-tab-container and sibling panes.
     */
    name: string;
};
export {};
