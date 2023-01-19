# BillPaySelfService

## Description

Self service Central extension that links Subscriber ID and External ID to a User login using ThirdPartyData and ThirdPartyDataShared. This Subscriber ID and External ID are then used within a CheckFree Bill Pay SSO

## Technicals

`external_id_alias` is the ThirdPartyDataShared element that is used for `External ID`
`subscriber_id_alias` is the ThirdPartyDataShared element that is used for `Subscriber ID`
`tpds_vendor_name` is the vendor name used for ThirdPartyDataShared
`tpd_vendor_name` is the vendor name used for ThirdPartyData
`tpds_vendor_id` corresponds to the tpds_vendor_name
`tpds_vendor_group_id` is the group id for the third party data shared vendor

## Config

`external_id_alias` = "Session.UserName"
`subscriber_id_alias` = "Session.ExternalSubscriberID"
`tpds_vendor_name` = "BillPayment.CheckFreeVariables"
`tpd_vendor_name` = "BillPayment.CheckFreeVariables"
`tpds_vendor_id` = "42"
`tpds_vendor_group_id` = "1"
