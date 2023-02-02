# First let's set the default settings:
from q2_sdk.core.default_settings import *

# To override any defaults, simply redefine them below.
# Some commonly overridden values are commented out below

INSTALLED_EXTENSIONS = []

# If you make a custom core (q2 create_coreflow), add the path here
# to be discoverable for use with DYNAMIC_CORE_SELECTION
# CUSTOM_CORES = {
#    'CoreName': 'module_path_that_contains_Core_object',
#    'FooCore': 'FooCore.extension'
# }

# Uncomment this line to define your own logging.conf location
# LOGGING_CONF = os.path.abspath('./logging.conf')

# An example of how to add logging filters that will affect every extension
# from q2_sdk.core.q2_logging import filters
# GLOBAL_LOGGING_FILTERS.append(filters.TaxIDFilter)

CORE = None
# CORE CONNECTIVITY
# Core calls are OFF by default. To enable, uncomment the 'CORE =' line below
# If DEBUG is set to True above, Core responses will be mocked
# If DEBUG is set to False above, Core calls will call AdapterPassThru from hq_api
# Replace the line below with a reference to a module that contains a Core instance
#     - This can either be a core that comes with the q2_cores package or one that you write yourself
#     - Example below show how to import the Symitar core

# CORE = 'q2_cores.Symitar'

USE_SCSS = False

COMPANY = "Trabian"
