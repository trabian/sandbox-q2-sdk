# BillPaySelfService

## Description

Self service Central extension that links Subscriber ID and External ID to a User login using ThirdPartyDataShared. This Subscriber ID and External ID are then used within a CheckFree Bill Pay SSO

## Technicals

`Session.UserName` is the ThirdPartyDataShared element that is used for `External ID`
`Session.ExternalSubscriberID` is the ThirdPartyDataShared element that is used for `Subscriber ID`

## Config

`Session.UserName` = "Session.UserName"
`Session.ExternalSubscriberID` = "Session.ExternalSubscriberID"
`vendor_name` = "BillPayment.CheckFreeVariables"
`vendor_group_id` = "1"
