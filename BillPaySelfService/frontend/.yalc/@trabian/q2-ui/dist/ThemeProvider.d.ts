import React from 'react';
import { CustomTheme } from '../src/theme';
declare type Props = {
    theme?: Partial<CustomTheme> | ((outerTheme: CustomTheme) => CustomTheme);
    children?: React.ReactNode;
};
declare const ThemeProvider: React.FC<Props>;
export default ThemeProvider;
