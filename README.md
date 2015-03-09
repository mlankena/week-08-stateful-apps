# Week 08: Stateful Web Applications

## Overview

This week we will explore another server-side technique that is used
in the vast majority of web applications. In particular, we will
investigate server-side templates. In web application development we
are most interested in generating dynamic content for the
browser. Although we can dynamically generate HTML in the server's
route handling routines it is not good practice. Rather, we want to
separate out the non-changing HTML our application produces and the
dynamically generated parts. A server-side template is an HTML file
with "holes" that our route handlers will fill dynamically. The
server-side templates are typically referred to as *views*, which
correspond to the different views of the user interface rendered in
the browser. We will discuss one such templating language called
Embedded JavaScript (EJS) and how it is provided in the Express web
application framework.

In addition, we will be looking at stateful web applications. A
stateful web application is one where the HTTP server *remembers* the
clients that connect to it. This allows the HTTP server to associate
state with a particular client (e.g., user profile data) and use it to
customize its response. Unfortunately, HTTP is a stateless protocol,
making it incapable of identifying clients that connected
previously. To fix this problem HTTP clients and servers use special
tokens called *cookies* that are passed along with each request and
response. Web applications use these cookies to remember which clients
have connected previously and associate important state with those
logical connections. These logical connections are referred to as
*sessions* and they are used as the foundation to form stateful web
applications.

## Readings

* [Use EJS to Template You Node Application]
* [Using Express Middleware] - this will give you an overview of how
  [express.js] middleware is structured and how it can be used.
* [3rd Party Middleware] - this is a list of the 3rd party middleware
  available for [express.js]. You will notice that some, but not all,
  are included automatically when you generate an express
  application. For example, sessions are not provided out of the box.
* [Express Sessions] - this is the middleware API used by [express.js]
  to implement session state.

## Additional Resources

* [The Express Generator]
* [Express API for Rendering a Template]
* [Embedded JavaScript Documentation]
* [Strong Loop Express] and [Hack Sparrow] are blogs that provide lots
  of information about [express.js] and how to use it effectively.

[The Express Generator]: http://expressjs.com/starter/generator.html
[Express API for Rendering a Template]: http://expressjs.com/api.html#res.render
[Embedded JavaScript Documentation]: https://github.com/visionmedia/ejs
[Use EJS to Template You Node Application]: http://scotch.io/tutorials/javascript/use-ejs-to-template-your-node-application
[Express Sessions]: https://github.com/expressjs/session
[Using Express Middleware]: http://expressjs.com/guide/using-middleware.html
[3rd Party Middleware]: http://expressjs.com/resources/middleware.html
[express.js]: http://expressjs.com
[Strong Loop Express]: http://strongloop.com/strongblog/category/express
[Hack Sparrow]: http://www.hacksparrow.com/category/express-js
