"""
BillPaySelfService Extension
"""
import json
import time
import traceback
from q2_sdk.core.http_handlers.central_handler import Q2CentralRequestHandler
from q2_sdk.hq.db.third_party_data_shared import ThirdPartyDataShared
from q2_sdk.hq.db.third_party_data import ThirdPartyData
from q2_sdk.hq.models.db_config.db_config_list import DbConfigList
from q2_sdk.hq.models.db_config.db_config import DbConfig
from .install.db_plan import DbPlan


class BillPaySelfServiceHandler(Q2CentralRequestHandler):

    DB_PLAN = DbPlan()

    WEDGE_ADDRESS_CONFIGS = DbConfigList(
        [
            DbConfig("external_id_alias", "Session.UserName"),
            DbConfig("subscriber_id_alias", "Session.ExternalSubscriberID"),
            DbConfig("tpds_vendor_name", "BillPayment.CheckFreeVariables"),
            DbConfig("tpd_vendor_name", "BillPayment.CheckFreeVariables"),
            DbConfig("tpds_vendor_id", "42"),
            DbConfig("tpds_vendor_group_id", "1"),
        ]
    )

    CONFIG_FILE_NAME = "BillPaySelfService"  # configuration/BillPaySelfService.py file must exist if REQUIRED_CONFIGURATIONS exist

    def __init__(self, application, request, **kwargs):
        super().__init__(application, request, **kwargs)

    @property
    def router(self):
        """
        Your extension's routing map. To handle a request, a method must be listed here. When a POST request is
        made to this extension with a routing_key value, the extension will route the request to the method linked
        to that key. The methods referenced here are defined below.
        """
        router = super().router
        router.update(
            {
                "default": self.default,
                "save_or_overwrite_tpd_elements": self.save_or_overwrite_tpd_elements,
                "search_users": self.search_users,
            }
        )

        return router

    @property
    def tpds_external_id(self):
        return self.db_config["external_id_alias"]

    @property
    def tpds_subscriber_id(self):
        return self.db_config["subscriber_id_alias"]

    @property
    def tpds_vendor_name(self):
        return self.db_config["tpds_vendor_name"]

    @property
    def tpd_vendor_name(self):
        return self.db_config["tpd_vendor_name"]

    @property
    def tpds_vendor_id(self):
        return self.db_config["tpds_vendor_id"]

    @property
    def tpds_group_id(self):
        return self.db_config["tpds_vendor_group_id"]

    # THIRD PARTY DATA SHARED

    async def create_third_party_data_shared(self, name, user_id, value):
        tpd = ThirdPartyDataShared(self.logger)

        vendor_name = self.tpds_vendor_name

        response = await tpd.create(
            user_id=user_id,
            vendor_name=vendor_name,
            data_name=name,
            data_value=value,
        )
        return response

    async def update_third_party_data_shared(self, name, user_id, value):
        tpd = ThirdPartyDataShared(self.logger)

        vendor_name = self.tpds_vendor_name

        response = await tpd.update(
            user_id=user_id,
            vendor_name=vendor_name,
            data_name=name,
            data_value=value,
        )
        return response

    async def get_third_party_data_shared(self, name, user_id):
        try:
            vendor_id = self.tpds_vendor_id
            group_id = self.tpds_group_id
        except Exception as error:
            traceback.print_exc()
            raise Exception(f"No vendor name set - {error}") from error

        tpd = ThirdPartyDataShared(self.logger)
        tpd_list = await tpd.get(
            user_id=user_id, vendor_id=vendor_id, group_id=group_id
        )

        for tpd in tpd_list:
            if tpd.Name.text == name:
                return tpd.DataValue.pyval

        return None

    async def update_or_initialize_tpds(self, name, user_id, value):
        try:
            existing_data = await self.get_third_party_data_shared(name, user_id)

            if existing_data is not None:
                # update
                self.logger.debug(
                    f"Found existing {name} in ThirdPartyDataShared: {existing_data}"
                )
                update_response = await self.update_third_party_data_shared(
                    name, user_id, value
                )
                return update_response

            # initialize
            create_response = await self.create_third_party_data_shared(
                name, user_id, value
            )
            self.logger.debug(f"Created new {name} in ThirdPartyDataShared: {value}")
            return create_response
        except Exception as error:
            traceback.print_exc()
            raise error

    # END OF THIRD PARTY DATA SHARED

    # THIRD PARTY DATA

    async def create_third_party_data(self, name, user_id, value):
        tpd = ThirdPartyData(self.logger)

        vendor_name = self.tpd_vendor_name

        response = await tpd.create(
            user_id=user_id,
            vendor_name=vendor_name,
            data_name=name,
            data_value=value,
        )
        return response

    async def update_third_party_data(self, name, user_id, value):
        tpd = ThirdPartyData(self.logger)

        vendor_name = self.tpd_vendor_name

        response = await tpd.update(
            user_id=user_id,
            vendor_name=vendor_name,
            data_name=name,
            data_value=value,
        )
        return response

    async def get_third_party_data(self, name, user_id):
        try:
            vendor_name = self.tpd_vendor_name
        except Exception as error:
            traceback.print_exc()
            raise Exception(f"No vendor name set - {error}") from error

        tpd = ThirdPartyData(self.logger)
        tpd_list = await tpd.get(user_id=user_id, vendor_name=vendor_name)

        for tpd in tpd_list:
            if tpd.Name.text == name:
                return tpd.DataValue.pyval

        return None

    async def update_or_initialize_tpd(self, name, user_id, value):
        try:
            existing_data = await self.get_third_party_data(name, user_id)

            if existing_data is not None:
                # update
                self.logger.debug(
                    f"Found existing {name} in ThirdPartyData: {existing_data}"
                )
                update_response = await self.update_third_party_data(
                    name, user_id, value
                )
                return update_response

            # initialize
            create_response = await self.create_third_party_data(name, user_id, value)
            self.logger.debug(f"Created new {name} in ThirdPartyData: {value}")
            return create_response
        except Exception as error:
            traceback.print_exc()
            raise error

    # END OF THIRD PARTY DATA

    async def save_link_to_db(self, name, user_id, new_value=None):

        try:
            await self.update_or_initialize_tpds(
                name=name, user_id=user_id, value=new_value
            )
            self.logger.debug(f"New value in ThirdPartyDataShared is {new_value}")

            await self.update_or_initialize_tpd(
                name=name, user_id=user_id, value=new_value
            )
            self.logger.debug(f"New value in ThirdPartyData is {new_value}")
        except Exception as error:
            traceback.print_exc()
            self.logger.error(
                f"Failed to add or update {name} link in either TPD or TPDS. : {str(error)}"
            )
            return False
        else:
            self.logger.debug(
                f"Successfully added or updated {name} link in both TPD and TPDS"
            )
            return True

    async def default(self):
        template = self.get_template(
            "index.html.jinja2",
            {"base_url": self.base_assets_url, "timestamp": time.time()},
        )
        return template

    async def search_users(self):

        try:
            user_id = self.form_fields.get("user_id")
            if user_id == "":
                user_id = None
        except TypeError:
            return json.dumps({"success": False, "error": "Bad Q2 User ID"})

        try:
            login_name = self.form_fields.get("login_name")
        except TypeError:
            return json.dumps({"success": False, "error": "Bad Q2 Login Name"})

        if login_name is not None and user_id is None:
            # We must get user_id from login_name
            get_user_obj = await self.db.user_logon.get_login_by_name(login_name)
            user_id = (
                getattr(get_user_obj[0], "UserID").text
                if len(get_user_obj) > 0
                else None
            )
        try:
            user_response = await self.db.user.get(user_id=user_id)

            columns = ["UserID", "FirstName", "LastName"]

            line = {}
            if len(user_response) > 0:
                row = user_response[0]
                line = dict(zip(columns, (row.find(column).text for column in columns)))

                # Get Already linked BillPay External ID if exists IN TPDS
                tpds_external_id = await self.get_third_party_data_shared(
                    self.tpds_external_id, line.get("UserID")
                )

                # Get Already linked BillPay External ID if exists IN TPD
                tpd_external_id = await self.get_third_party_data(
                    self.tpds_external_id, line.get("UserID")
                )

                if tpds_external_id is not None and tpd_external_id is not None:
                    self.logger.info("TPDS External ID: %s", tpds_external_id)
                    self.logger.info("TPD External ID: %s", tpd_external_id)
                    if tpds_external_id == tpd_external_id:
                        line["bpExternalID"] = tpds_external_id
                    else:
                        line["bpExternalID"] = ""
                        self.logger.info("Mismatch in data between TPD and TPDS")

                # Get Already linked BillPay Subscriber ID if exists IN TPDS
                tpds_subscriber_id = await self.get_third_party_data_shared(
                    self.tpds_subscriber_id, line.get("UserID")
                )

                # Get Already linked BillPay Subscriber ID if exists IN TPD
                tpd_subscriber_id = await self.get_third_party_data(
                    self.tpds_subscriber_id, line.get("UserID")
                )
                if tpds_subscriber_id is not None and tpd_subscriber_id is not None:
                    self.logger.info("TPDS External ID: %s", tpds_subscriber_id)
                    self.logger.info("TPD External ID: %s", tpd_subscriber_id)
                    if tpds_subscriber_id == tpd_subscriber_id:
                        line["bpSubscriberID"] = tpds_subscriber_id
                    else:
                        line["bpSubscriberID"] = ""
                        self.logger.info("Mismatch in data between TPD and TPDS")

            else:
                return json.dumps({"success": False, "error": "User does not exist"})
        except Exception:
            traceback.print_exc()
            return json.dumps(
                {
                    "success": False,
                    "error": "Failed to get user data. Make sure Login Name is valid",
                }
            )
        else:
            line["success"] = True
            self.logger.info("line %s:", line)
            return json.dumps(line)

    async def save_or_overwrite_tpd_elements(self):

        try:
            user_id = self.form_fields.get("user_id")
            if user_id == "" or user_id is None:
                raise Exception("Invalid Q2 User ID")

            external_id = str(self.form_fields.get("bp_external_id"))
            if external_id is None:
                raise Exception("Invalid BillPay External User Id")

            subscriber_id = str(self.form_fields.get("bp_subscriber_id"))
            if subscriber_id is None:
                raise Exception("Invalid BillPay Subscriber User Id")

        except Exception as error:
            return json.dumps({"success": False, "error": error.args[0]})

        ext_response = await self.save_link_to_db(
            self.tpds_external_id, user_id, external_id
        )
        sub_response = await self.save_link_to_db(
            self.tpds_subscriber_id, user_id, subscriber_id
        )

        return json.dumps({"success": ext_response and sub_response})
