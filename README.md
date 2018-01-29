# react-Auth0

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

It is a *Single Page Application* client for the [netcore2-Auth0](https://github.com/andychiare/netcore2-auth0) Web API project. It integrates [Auth0](https://auth0.com/) security services in order to access the book list provided by the associated Web API project.

## Running the project

In order to run the project you need to [register to Auth0 services](https://auth0.com/signup), get the security configuration data and put them into the *Auth0Config.js* file. The [netcore2-Auth0](https://github.com/andychiare/netcore2-auth0) Web API project should be configured and running, too. Then type in a console window the following command to install the project dependencies in the *node.js* environment:

```shell
npm install
```

Then type the following command to run the application:

```shell
npm start
```

The application will open the default browser and redirect to the *Auth0* authentication page. Once you provide a user's valid credentials, you will get access to the book list provided by the [netcore2-Auth0](https://github.com/andychiare/netcore2-auth0) Web API project.