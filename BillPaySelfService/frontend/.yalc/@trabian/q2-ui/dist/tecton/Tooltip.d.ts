import React from 'react';
declare type PositionOption = 'n' | 'e' | 's' | 'w' | 'ne' | 'nw' | 'se' | 'sw';
declare type TooltipProps = {
    position?: PositionOption;
    label?: string;
    className?: string;
    multiline?: boolean;
};
export declare const Tooltip: React.FC<TooltipProps>;
export {};
