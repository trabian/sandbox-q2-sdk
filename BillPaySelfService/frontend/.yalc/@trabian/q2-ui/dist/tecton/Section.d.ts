import React, { FC } from 'react';
import { WithClass } from './utils';
declare type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export declare type SectionProps = Q2SectionProps & DivProps & {
    /**
     * Serves as the header text. Renders into an h2 element.
     */
    label: React.ReactNode;
};
export declare const Section: FC<SectionProps>;
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'q2-section': SectionProps & WithClass;
        }
    }
}
declare type Q2SectionProps = {
    /**
     * Flag for whether or not the section can be collapsed.
     */
    collapsible?: boolean;
    /**
     * Flag for whether or not the section content is expanded. Only applicable for collapsible sections.
     */
    expanded?: boolean;
    onToggle?: (open: boolean) => void;
};
export {};
