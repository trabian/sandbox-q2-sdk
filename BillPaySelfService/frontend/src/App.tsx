/** @jsx jsx */
import { jsx, Label, } from 'theme-ui';
import { FC, useState } from 'react';
import { format } from 'date-fns'
import {
    Button,
    Section,
    Input,
    ThemeProvider,
} from '@trabian/q2-ui';

import { useForm, Controller } from 'react-hook-form';

type AppProps = {};
const encodeFormData = (data: any) => {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
};

interface FormProps {
    loginName: string;
    userId: string;
}

interface FormSubmitProps {
    loginName: string;
    userId: string;
    bpExternalId: string;
    bpSubscriberId: string;
}

interface SearchResponseProps {
    "UserID": string;
    "CustomerID": string;
    "FirstName": string;
    "LastName": string;
    "bpExternalID": string;
    "bpSubscriberID": string;
}
interface SelectedSearchItemsProps {
    "loginName": string;
}

export const App: FC<AppProps> = () => {
    const [selectedSearch, setSelectedSearch] = useState<keyof SelectedSearchItemsProps>("loginName")
    const [searchResponse, setSearchResponse] = useState<SearchResponseProps | null>(null)
    const [success, setSuccess] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)

    const search_table = [
        { name: 'loginName', label: "Q2 Login Name", description: 'Enter a Q2 Login Name and click Search to search for a Q2 User' }
    ]

    const {
        control,
        handleSubmit,
        formState,
        reset,
    } = useForm<FormSubmitProps>({
        mode: 'onBlur', defaultValues: {
            loginName: "", userId: "", bpExternalId: "", bpSubscriberId: ""
        }
    });


    const handleClear = () => {
        setSuccess(null)
        setError(null)
        reset()
        setSearchResponse(null)
    }

    const handleSubmitSearch = handleSubmit(async (submitData: FormProps) => {

        setSuccess(null)
        setError(null)

        const data_login_name = submitData.loginName

        const uri = window.location.href;
        const response = await fetch(uri, {
            method: 'POST',
            body: encodeFormData({
                routing_key: 'search_users',
                login_name: data_login_name,
            }),
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });


        var response_string = await response.json();
        if (!response_string.success) {
            console.error("Failed request")
            setError(response_string.error + " -- " + format(new Date(), "PPpp"))
            return
        }
        setSuccess("Successful search results" + " -- " + format(new Date(), "PPpp"))
        setSearchResponse(response_string)

    })


    const handleSubmitLink = handleSubmit(async (submitData: FormSubmitProps) => {

        setSuccess(null)
        setError(null)

        if (searchResponse == null) {
            setError("Bad search response -- " + format(new Date(), "PPpp"))
            return
        }

        const data_user_id = searchResponse.UserID
        const data_bp_external_id = submitData.bpExternalId
        const data_bp_subscriber_id = submitData.bpSubscriberId

        if (data_bp_external_id == "" || data_bp_external_id == null || data_bp_subscriber_id == "" || data_bp_subscriber_id == null) {
            setError("External ID and Subscriber ID must not be empty -- " + format(new Date(), "PPpp"))
            return
        }

        const uri = window.location.href;
        const response = await fetch(uri, {
            method: 'POST',
            body: encodeFormData({
                routing_key: 'save_or_overwrite_tpd_elements',
                user_id: data_user_id,
                bp_external_id: data_bp_external_id,
                bp_subscriber_id: data_bp_subscriber_id

            }),
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });

        var response_string = await response.json();

        if (response_string.success) {
            setSuccess("The Subscriber ID and External ID for BillPay have been successfully submitted! " + " -- " + format(new Date(), "PPpp"))
            setSearchResponse(null)
            reset()

        } else {
            setError((response_string.error || "Internal Server Error") + " -- " + format(new Date(), "PPpp"))
        }
    })

    const handleSelectSearchField = (name: keyof SelectedSearchItemsProps) => {
        handleClear()
        setSelectedSearch(name)
    }


    return (
        <ThemeProvider>
            <Section label="BillPay to Q2 User Link" >
                <Section label={`Search Q2 User`} style={{ color: "#377cc5" }}>
                    <div className="q2-row">
                        <div sx={{ background: "#f9f7f7", color: '#000', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'start', alignItems: 'start', width: '100%', p: '0px 0px 25px 0px' }}>
                            {search_table.length > 1 ? <div className="q2-row xs-12 sm-3"  >
                                <div sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'end', width: '100%' }}>
                                    <div sx={{ padding: '24px 24px 0px 24px' }}>
                                        <span sx={{ fontSize: '14px', }}>Select a field to search for a Q2 User</span>
                                    </div>
                                    <div sx={{ margin: '5px 20px', width: '90%' }}>

                                        <q2-select value={selectedSearch} style={{ margin: '0px' }}>
                                            {search_table.map((item) =>
                                                <q2-option style={{ background: '#fff' }} onClick={(event) => handleSelectSearchField(item.name)} value={item.name} display={item.label}>{item.label}</q2-option>
                                            )}
                                        </q2-select>

                                    </div>
                                </div>
                            </div>
                                : null}
                            {search_table.filter((item) => item.name === selectedSearch).map((searchItem) => (
                                <div className="q2-row xs-12 sm-12 md-7">
                                    <div sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'end' }}>
                                        <div sx={{ padding: '24px 24px 0px 24px' }}>
                                            <span sx={{ fontSize: '14px', }}>{searchItem.description}</span>
                                        </div>
                                        <div sx={{ margin: '5px 20px', width: '100%' }}>
                                            <div>

                                                <Controller
                                                    name={searchItem.name}
                                                    control={control}
                                                    render={({
                                                        field
                                                    }) => {

                                                        return (
                                                            <Input {...field} ref={field.ref} style={{ margin: '0px' }} />
                                                        )
                                                    }
                                                    }
                                                />
                                            </div>

                                        </div>

                                    </div>
                                    <div sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'flex-end', m: '0px 35px' }} >
                                        <div sx={{ m: '0px 5px', minWidth: '130px' }}
                                        >
                                            <Button
                                                block
                                                color="secondary"
                                                onClick={() => handleClear()}
                                                sx={{ m: ['20px', '10px'], width: '100%' }}
                                            >
                                                Clear
                                            </Button>
                                        </div>
                                        <div sx={{ m: '0px 5px', minWidth: '130px' }}>
                                            <Button
                                                block
                                                color="primary"
                                                onClick={handleSubmitSearch}
                                                disabled={
                                                    formState.isValid === false || formState.isSubmitting === true
                                                }
                                                sx={{ m: ['20px', '10px'], width: '100%' }}
                                            >
                                                Search
                                            </Button>
                                        </div>
                                    </div>
                                </div>)}


                        </div>
                    </div></Section>
                <div >
                    {(success != null && error != null) || success != null && searchResponse != null ?
                        <Section label="Search Results" style={{ color: "#377cc5" }}>
                            <div className="q2-row" className="q2-col xs-4 sm-3 md-3" >

                                <div sx={{ margin: '25px 0px 35px 0px' }}>
                                    <div sx={{ display: 'flex', justifyContent: 'start', alignItems: 'baseline', width: '100%', }}>
                                        <span sx={{ fontWeight: '600', color: '#555', fontSize: '17px', mr: '10px', width: '200px', flex: '0 0 auto', whiteSpace: 'nowrap' }}>Q2 Name:</span>
                                        {searchResponse ? <span sx={{ fontSize: '17px', textAlign: 'left' }}>{searchResponse.LastName + ", " + searchResponse.FirstName}</span> : null}
                                    </div>
                                    <div sx={{ display: 'flex', justifyContent: 'start', alignItems: 'baseline', width: '100%', }}>
                                        <span sx={{ fontWeight: '600', color: '#555', fontSize: '17px', mr: '10px', width: '200px', flex: '0 0 auto', whiteSpace: 'nowrap' }}>Q2 User ID:</span>
                                        {searchResponse ? <span sx={{ fontSize: '17px', textAlign: 'left' }}>{searchResponse.UserID}</span> : null}
                                    </div>
                                    <div sx={{ display: 'flex', justifyContent: 'start', alignItems: 'baseline', width: '100%' }}>
                                        <span sx={{ fontWeight: '600', color: '#555', fontSize: '17px', mr: '10px', width: '200px', flex: '0 0 auto', whiteSpace: 'nowrap' }}>BillPay External ID:</span>
                                        {searchResponse ? <span sx={{ fontSize: '17px', textAlign: 'left' }}>{searchResponse.bpExternalID}</span> : null}
                                    </div>
                                    <div sx={{ display: 'flex', justifyContent: 'start', alignItems: 'baseline', width: '100%' }}>
                                        <span sx={{ fontWeight: '600', color: '#555', fontSize: '17px', mr: '10px', width: '200px', flex: '0 0 auto', whiteSpace: 'nowrap' }}>BillPay Subscriber ID:</span>
                                        {searchResponse ? <span sx={{ fontSize: '17px', textAlign: 'left' }}>{searchResponse.bpSubscriberID}</span> : null}
                                    </div>
                                </div>

                            </div></Section> : null}
                </div>
                {(success != null && error != null) || success != null && searchResponse != null ?
                    <Section label="Link BillPay IDs to Q2 User" style={{ color: "#377cc5" }}>
                        <div sx={{ background: "#f9f7f7", padding: "24px", color: '#000' }}>
                            <div sx={{ margin: '0px 0px 30px 5px' }}>
                                <span sx={{ fontSize: '14px', }}>Fill in the following and submit to link BillPay External ID & BillPay Subscriber ID to Q2 User</span>
                            </div>
                            <div className="q2-row">
                                <div className="q2-col xs-12 sm-6">
                                    <div>
                                        <Label
                                            htmlFor={"bpExternalId"}
                                            sx={{ mb: 0, p: 0 }}
                                        >
                                            BillPay External ID
                                        </Label>
                                        <Controller
                                            name="bpExternalId"
                                            control={control}
                                            render={({
                                                field
                                            }) => {

                                                return (
                                                    <Input {...field} ref={field.ref} style={{ marginTop: '0px' }} />
                                                )
                                            }
                                            }
                                        />
                                    </div>
                                    <div>
                                        <Label
                                            htmlFor={"bpSubscriberId"}
                                            sx={{ mb: 0, p: 0 }}
                                        >
                                            BillPay Subscriber ID
                                        </Label>
                                        <Controller
                                            name="bpSubscriberId"
                                            control={control}
                                            render={({
                                                field
                                            }) => {

                                                return (
                                                    <Input {...field} ref={field.ref} style={{ marginTop: '0px' }} />
                                                )
                                            }
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="q2-row">
                                <div className="q2-col xs-12 sm-2" sx={{ my: ["1rem", "0"] }}>
                                    <Button
                                        block
                                        color="primary"
                                        onClick={handleSubmitLink}
                                        disabled={
                                            (success == null && error == null) || success == null || error != null
                                        }
                                        sx={{ mt: ['20px', '10px'] }}
                                    >
                                        Submit
                                    </Button>
                                </div>

                            </div>
                        </div></Section>
                    : null
                }

                {success && error == null ? <div className="q2-row" >
                    <q2-message type="success" appearance="standard">
                        {success}
                    </q2-message>
                </div> : null}
                {error ? <div className="q2-row" >
                    <span sx={{ fontSize: '17px', margin: '10px 0px 10px 5px', color: "#882222" }}>{error}</span>
                </div> : null}
                <div className="q2-row">
                    <div className="q2-col xs-12 sm-6"></div>
                </div>
            </Section>
        </ThemeProvider>
    );
};
