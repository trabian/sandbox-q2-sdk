import * as CSS from 'csstype';
import { ObjectOrArray } from 'styled-system';
import { Theme } from 'theme-ui';
export declare type CustomTheme = Theme & {
    variants: ObjectOrArray<CSS.StandardProperties>;
};
declare const theme: CustomTheme;
export default theme;
