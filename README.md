ionic-doorkeeper
================

This is a sample ionic framework app that acts as a client for an API built
using Rails-API protected with Doorkeeper. This app demonstrates how to
make use of `Resource Owner Password Credentials` flow of OAuth2 to exchange
the user's email and password for an `access_token` and `refresh_token`.

This also demonstrates how a static site front end can be separated from the
Rails API and talk to the API without the use of session or cookies, in a
completely stateless way.
