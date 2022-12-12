import React, { FC } from 'react';
import { WithClass } from './utils';
import { Q2IconProps } from './Icon';
export declare type InputProps = {
    errors?: string | string[];
    hints?: string | string[];
} & Q2InputProps & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export declare const Input: FC<InputProps>;
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'q2-input': InputProps & WithClass;
        }
    }
}
declare type Q2InputProps = {
    /**
     * The label that appears above the field.
     * This is announced by screen readers when the field is focused.
     * localizable.
     */
    label?: string;
    /**
     * The value of the input field;
     * typically, this is identical to the current field input.
     * When formatting characters are present, only the unformatted value is used.
     * In q2-input of type "currency":
     * Visible (formatted) input: $1,234.56
     * Unformatted value: 1234.56
     */
    value: string;
    /**
     * Specifies the field's expected input type and
     * provides the optimal keyboard on mobile devices.
     */
    type?: InputType;
    /**
     * Text that appears within the field when it is blurred and empty.
     * localizable
     */
    placeholder?: string;
    /**
     * Indicates the element's intended purpose to assistive technology,
     * according to the WAI-ARIA Roles Model.
     */
    role?: string;
    /**
     * When true, the field cannot be focused or otherwise interacted with.
     */
    disabled?: boolean;
    /**
     * The label that will be announced by screen readers when the field is focused.
     * localizable
     */
    ariaLabel?: string;
    /**
     * Each item in the errors array will appear below the input field when the field is focused.
     * localizable
     */
    errors?: string[];
    /**
     * Each item in the hints array will appear below the input field when the field is focused.
     * localizable
     * The errors array takes precedence above the hints array.
     * If an input field has both hints and errors, only the errors will display.
     * Once all errors are resolved, the hints display next time the field is focused.
     */
    hints?: string[];
    /**
     * When true and the input field has an active validation error,
     * the field shows the error state without displaying associated error messages
     * below the field (from the errors array above).
     */
    hideMessages?: boolean;
    /**
     * Shows an icon within the field, left-aligned.
     */
    iconLeft?: Q2IconProps['type'];
    /**
     * Shows an icon within the field, right-aligned.
     */
    iconRight?: Q2IconProps['type'];
    /**
     * When true, the field's content is not editable, but the field remains focusable.
     */
    readonly?: boolean;
    /**
     * When true, an icon button appears when the field is non-empty.
     * Pressing the button clears all input from the field.
     */
    clearable?: boolean;
    /**
     * Appends "(optional)" to the field label, and
     * sets aria-required on the nested input tag to false.
     */
    optional?: boolean;
    /**
     * Defines the field's expected input format, and automatically masks user input to conform.
     */
    formatModifier?: CurrencyFormatModifier | PhonePostalFormatModifier | NumericFormatModifier | AlphaFormatModifier | DateFormatModifier;
    /**
     * Defines the maximum allowed input length in characters.
     * Formatting characters (e.g. $, ., -, etc) are included in the maxlength count.
     * Make sure you account for them when setting the maxlength value.
     */
    maxLength?: string;
};
declare type InputType = 'text' | 'tel' | 'number' | 'password' | 'search' | 'url' | 'email' | 'currency' | 'percentage' | 'phone' | 'date' | 'numeric' | 'alphanumeric' | 'alpha' | 'postal' | 'ssn';
declare type DateFormatModifier = 'MM/DD/YYYY' | 'M/D/YYYY' | 'MM/DD/YY' | 'M/D/YY' | 'MM/YY' | 'M/YY' | 'DD/MM/YYYY' | 'D/M/YYYY' | 'DD/MM/YY' | 'D/M/YY' | 'MM-DD-YYYY' | 'M-D-YYYY' | 'MM-DD-YY' | 'M-D-YY' | 'MM-YY' | 'M-YY' | 'DD-MM-YYYY' | 'D-M-YYYY' | 'DD-MM-YY' | 'D-M-YY';
declare type AlphaFormatModifier = 'spaced';
declare type NumericFormatModifier = 'delimited' | 'integer' | 'Ndec';
declare type PhonePostalFormatModifier = 'AF' | 'AX' | 'AL' | 'DZ' | 'AS' | 'AD' | 'AO' | 'AI' | 'AQ' | 'AG' | 'AR' | 'AM' | 'AW' | 'AU' | 'AT' | 'AZ' | 'BS' | 'BH' | 'BD' | 'BB' | 'BY' | 'BE' | 'BZ' | 'BJ' | 'BM' | 'BT' | 'BO' | 'BQ' | 'BA' | 'BW' | 'BV' | 'BR' | 'IO' | 'BN' | 'BG' | 'BF' | 'BI' | 'CV' | 'KH' | 'CM' | 'CA' | 'KY' | 'CF' | 'TD' | 'CL' | 'CN' | 'CX' | 'CC' | 'CO' | 'KM' | 'CG' | 'CD' | 'CK' | 'CR' | 'CI' | 'HR' | 'CU' | 'CW' | 'CY' | 'CZ' | 'DK' | 'DJ' | 'DM' | 'DO' | 'EC' | 'EG' | 'SV' | 'GQ' | 'ER' | 'EE' | 'SZ' | 'ET' | 'FK' | 'FO' | 'FJ' | 'FI' | 'FR' | 'GF' | 'PF' | 'TF' | 'GA' | 'GM' | 'GE' | 'DE' | 'GH' | 'GI' | 'GR' | 'GL' | 'GD' | 'GP' | 'GU' | 'GT' | 'GG' | 'GN' | 'GW' | 'GY' | 'HT' | 'HM' | 'VA' | 'HN' | 'HK' | 'HU' | 'IS' | 'IN' | 'ID' | 'IR' | 'IQ' | 'IE' | 'IM' | 'IL' | 'IT' | 'JM' | 'JP' | 'JE' | 'JO' | 'KZ' | 'KE' | 'KI' | 'KP' | 'KR' | 'KW' | 'KG' | 'LA' | 'LV' | 'LB' | 'LS' | 'LR' | 'LY' | 'LI' | 'LT' | 'LU' | 'MO' | 'MG' | 'MW' | 'MY' | 'MV' | 'ML' | 'MT' | 'MH' | 'MQ' | 'MR' | 'MU' | 'YT' | 'MX' | 'FM' | 'MD' | 'MC' | 'MN' | 'ME' | 'MS' | 'MA' | 'MZ' | 'MM' | 'NA' | 'NR' | 'NP' | 'NL' | 'NC' | 'NZ' | 'NI' | 'NE' | 'NG' | 'NU' | 'NF' | 'MK' | 'MP' | 'NO' | 'OM' | 'PK' | 'PW' | 'PS' | 'PA' | 'PG' | 'PY' | 'PE' | 'PH' | 'PN' | 'PL' | 'PT' | 'PR' | 'QA' | 'RE' | 'RO' | 'RU' | 'RW' | 'BL' | 'SH' | 'KN' | 'LC' | 'MF' | 'PM' | 'VC' | 'WS' | 'SM' | 'ST' | 'SA' | 'SN' | 'RS' | 'SC' | 'SL' | 'SG' | 'SX' | 'SK' | 'SI' | 'SB' | 'SO' | 'ZA' | 'GS' | 'SS' | 'ES' | 'LK' | 'SD' | 'SR' | 'SJ' | 'SE' | 'CH' | 'SY' | 'TW' | 'TJ' | 'TZ' | 'TH' | 'TL' | 'TG' | 'TK' | 'TO' | 'TT' | 'TN' | 'TR' | 'TM' | 'TC' | 'TV' | 'UG' | 'UA' | 'AE' | 'GB' | 'US' | 'UM' | 'UY' | 'UZ' | 'VU' | 'VE' | 'VN' | 'VG' | 'VI' | 'WF' | 'EH' | 'YE' | 'ZM' | 'ZW';
declare type CurrencyFormatModifier = 'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BOV' | 'BRL' | 'BSD' | 'BTN' | 'BWP' | 'BYN' | 'BZD' | 'CAD' | 'CDF' | 'CHE' | 'CHF' | 'CHW' | 'CLF' | 'CLP' | 'CNY' | 'COP' | 'COU' | 'CRC' | 'CUC' | 'CUP' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'INR' | 'IQD' | 'IRR' | 'ISK' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KMF' | 'KPW' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MXV' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STN' | 'SVC' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'USN' | 'UYI' | 'UYU' | 'UYW' | 'UZS' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XAG' | 'XAU' | 'XBA' | 'XBB' | 'XBC' | 'XBD' | 'XCD' | 'XDR' | 'XOF' | 'XPD' | 'XPF' | 'XPT' | 'XSU' | 'XTS' | 'XUA' | 'XXX' | 'YER' | 'ZAR' | 'ZMW' | 'ZWL';
export {};
