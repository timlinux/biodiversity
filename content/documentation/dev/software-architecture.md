# Software Architecture Overview

### Python/Django

BIMS is written with Django. It includes few apps to build the user interfaces. Several Python libraries are used
in BIMS to realize its specific functionality.

#### BIMS Apps

* `bims`: BIMS core functionality

    Stores the core functionalities used in the ensemble of the BIMS application

* `td_biblio`: Bibliography

    Manages the bibliography in BIMS

* `scripts`: BIMS scripts

    Series of commands used to automatically manipulate (manage, remove, clean, or add) data in BIMS

* `bims_theme`: BIMS theme

    Manages the BIMS theme, like the logo, the section in landing page, and the menu.

* `mobile`: API for BIMS mobile application

    Stores the functionalities used in the BIMS mobile application

#### BIMS Modules

* Taxonomy
* SASS
* Physico-chemistry
* Water Temperature

#### Libraries

There are multiple Python libraries used in BIMS, like:

* Django REST framework

    BIMS provides Web APIs by using the [django rest framework](https://www.django-rest-framework.org/)

    `bims.api_views`

    `bims.api_urls.py`

* Celery

    BIMS uses [celery](https://docs.celeryq.dev/en/stable/getting-started/introduction.html) for handling background
tasks.

    `bims.tasks`

### JavaScript

BIMS uses several JavaScript libraries to provide specific functionality in the front-end. They are found at
`bims/static/js/libs`

* **Backbone.js**: used in the map filters
* **Highcharts**: used for the charts
* **OpenLayers**: used for the web mapping

### Settings

The Django settings for BIMS can be found in `core.settings`

### Docker/docker-compose

### Testing Framework

`bims/tests`: Tests are used to test separate units of the written code and to determine if the code works as expected.

BIMS uses [factory_boy](https://factoryboy.readthedocs.io/en/stable/) library for test framework.
