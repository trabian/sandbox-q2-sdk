import { FC } from 'react';
declare type AccountOptionProps = {
    id: string;
    name: string;
    maskedAccountNumber: string;
    balance?: number;
    display?: string;
};
export declare const AccountOption: FC<AccountOptionProps>;
export {};
