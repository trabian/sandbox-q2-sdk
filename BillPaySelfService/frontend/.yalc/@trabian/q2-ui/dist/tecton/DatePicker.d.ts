import React, { FC } from 'react';
import { WithClass } from './utils';
declare type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export declare type DatePickerProps = Q2DatePickerProps & DivProps & {
    id: NonNullable<DivProps['id']>;
};
export declare const DatePicker: FC<DatePickerProps>;
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'q2-calendar': DatePickerProps & WithClass;
        }
    }
}
declare type DaysOfWeek = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
declare type Q2DatePickerProps = {
    /**
     * The selected date.
     */
    value: string;
    /**
     * The visible label for the DatePicker input field.
     */
    label?: string;
    /**
     * A label shown at the top of the popover date picker.
     */
    calendarLabel: string;
    /**
     * Text that appears at the bottom of the popover date picker.
     */
    disclaimer?: string;
    /**
     * Determines the display format of the date field value.
     * Must be a valid Moment.js format.
     */
    displayFormat?: string;
    /**
     * When true, appends "(optional)" to the q2-calendar field label
     * and sets aria-required="false".
     */
    optional?: boolean;
    /**
     * When true, the field is disabled.
     */
    disabled?: boolean;
    /**
     * Text that appears within the q2-calendar field when it is disabled.
     */
    disabledMsg?: string;
    /**
     * When true, the date picker popover aligns to the left edge of the
     * q2-calendar input field. When false, the popover aligns to the right
     * edge of the field.
     */
    leftAlign?: boolean;
    /**
     * Defines valid days of the week. ex: ["monday", "tuseday", "wednesday", "friday"]
     */
    validDaysOfWeek?: DaysOfWeek[];
    /**
     * Disables the selection of Saturdays and Sundays.
     */
    blockWeekends?: boolean;
    /**
     * Defines the first selectable date in the date picker popover.
     * Must be a valid Moment.js date string.
     */
    startDate?: string;
    /**
     * Defines the last selectable date in the date picker popover.
     * Must be a valid Moment.js date string.
     */
    endDate?: string;
    /**
     * Defines an explicit date blacklist.
     * Each entry in this array must be a valid Moment.js date string.
     * Note: When explicit date definition like invalidDates is used,
     * other date validitity methods like daysOfWeekChecksum are overridden.
     */
    invalidDates?: string[];
    /**
     * Defines a date whitelist.
     * Each entry in this array must be a valid Moment.js date string.
     * Note: When explicit date definition like validDates is used,
     * other date validitity methods like daysOfWeekChecksum are overridden.
     */
    validDates?: string[];
    /**
     * Specifies a time of day after which a date is no longer valid.
     * Must be a Moment.js string.
     * Example: element.cutoffTime = '2020-10-15T14:00:00.000-05:00';
     */
    cutOffTime?: string;
    /**
     * When errors array has at least one item,
     * the DatePicker field shows the field validation error styles.
     * Note: While the field will show validation error styles,
     * the the error messages themselves are not displayed.
     */
    errors?: string[];
};
export {};
