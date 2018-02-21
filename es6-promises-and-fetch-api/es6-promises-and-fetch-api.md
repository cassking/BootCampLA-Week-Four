## Learning Objectives
* Review ES6 Promises and the Fetch API.
* Use the Fetch API in a React component.

## Getting Started
```sh
$ et get es6-promises-and-fetch-api
$ cd es6-promises-and-fetch-api
$ bundle install
$ npm install
```

## ES6 Promises and the Fetch API
As you may recall, we can use the [Javascript Promises API][javascript-promise-api-article] to more easily handle asynchronous programming. This allows us to define callback functions to specify different things that should happen upon a promise being fulfilled or rejected.

One such way of utilizing promises is through the Fetch API. When we reviewed the [Fetch API][es6-fetch-api-article], we discussed how it can be used to fetch data from a backend server to use in a frontend app. In this article, we will be using that functionality in the context of React.

## Example of Fetch in a React component with an Internal API

When using React components for our frontend, we will frequently need to reach out to a server to retrieve or manipulate data which we want to display or change in our app. These servers can be something internal within our app, which we create, or an external data source which we reach out to. First, let's take a look at fetching data from an internal API.

Before we get started, let's get our app up and running. Our repository already has the following `App` component which renders a list of books.

```javascript
// App.js
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  render() {
    let books = this.state.books.map(book => {
      return <li key={book.id}>{book.name}</li>;
    });

    return (
      <div>
        <h1>Books</h1>
        <ul>
          {books}
        </ul>
      </div>
    );
  }
}

export default App;
```

Let's update our `main.js` file, so we render this component to our page.

```javascript
// main.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
```

We will want to start up our frontend by running the following from our root directory:

```sh
npm start
```

We will also need to start up our server in order to both load our home page, as well as access our book data. In a separate tab of your terminal, run the following:

```sh
ruby server.rb
```

If you now navigate to <http://localhost:4567>, you should see the following in the browser:

![ES6 Promises and Fetch API 7][es6-promises-and-fetch-api-7]

We do not see any books because the `books` property value of our `App` component's state is initially an empty array.
However, we can retrieve data from our back-end server via the Fetch API and update our component's state with this data.
We will begin fetching data after our component mounts, and once a successful response is received, then the component will change its state using the data:

```javascript
// App.js
import React, { Component } from 'react';

class App extends Component {
  ...

  componentDidMount() {
    fetch('http://localhost:4567/books.json')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        let nextBooks = body.books;
        this.setState({ books: nextBooks });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
  ...
```
Once we get back a response, we update the `books` property of the component's state with the array of book objects from our response body.

![ES6 Promises and Fetch API 8][es6-promises-and-fetch-api-8]

This example demonstrates how to use the Fetch API in a React component to retrieve initial application data, but you can and should use the Fetch API in event handlers and other React lifecycle methods to save and manipulate your application's data. One such example would be to use a `post` method in Fetch within a `componentWillUnmount` lifecycle method, to save data to your server before a form clears.

## Using an External API

Similar to fetching data from an internal API written into your app, we can also fetch data from an API which is hosted by an external app. For example, if we wanted to display different books, we could reach out to the Goodreads API for data on many assorted books. This API endpoint will serve up a JSON with data in the same way our `books.json` file does, which can be retrieved using the Fetch API.

Most of the more established APIs will require that you register for a key, which works as a secret token to identify where the data request is coming from, and allow the API host some security controls and to track usage of their app. These APIs will also typically provide documentation, although it can sometimes be a bit tricky to navigate! Whenever utilizing an external API, just remember that each API host will provide their data and documentation in different manners, so you will want to take a look at these documents and the data being served up so you can more comfortably navigate through what the API endpoint is providing you with.

It is also important to note that some APIs may not allow for you to Fetch data from their server for security reasons. This is due to the fact that a *cross-origin HTTP request* is being made, which essentially means that our app, on our domain or port, is reaching out for data from an external, different domain or port. Browsers prevent these requests for security purposes, but due to requests from developers, the *Cross-Origin Resource Sharing (CORS) mechanism* was created to allow for these requests to be made. Using this mechanism, each API host can choose to allow for secure cross-domain data transfers. However, if this has not been set up on the server side, you will not be able to Fetch data from those particular APIs.

## Summary
In this article, we have demonstrated how to utilize a back-end server to persist the data in your React application through the use of the Fetch API, as well as briefly reviewed how this would work when reaching out to an external API endpoint. You will note that we used a `.json` file to store the data. While this serves our purposes for this particular app, this is not always ideal! Most of the time, our apps will have multiple users who are possibly using the app at the same time, and we will want the data from all users to be stored with our app. In the upcoming weeks, we will be discussing more scalable and reliable ways to store data, such as databases, which will allow for us to have the extended functionality needed for a variety of apps.

### External Resources
* [Fetch API][mdn-fetch-api]
* [Using Fetch][mdn-using-fetch]
* [HTTP Access Control (CORS)][mdn-cors]

[es6-promises-and-fetch-api-1]: https://s3.amazonaws.com/horizon-production/images/es6-promises-and-fetch-api-1.png
[es6-promises-and-fetch-api-2]: https://s3.amazonaws.com/horizon-production/images/es6-promises-and-fetch-api-2.png
[es6-promises-and-fetch-api-3]: https://s3.amazonaws.com/horizon-production/images/es6-promises-and-fetch-api-3.png
[es6-promises-and-fetch-api-4]: https://s3.amazonaws.com/horizon-production/images/es6-promises-and-fetch-api-4.png
[es6-promises-and-fetch-api-5]: https://s3.amazonaws.com/horizon-production/images/es6-promises-and-fetch-api-5.png
[es6-promises-and-fetch-api-6]: https://s3.amazonaws.com/horizon-production/images/es6-promises-and-fetch-api-6.png
[es6-promises-and-fetch-api-7]: https://s3.amazonaws.com/horizon-production/images/es6-promises-and-fetch-api-7.png
[es6-promises-and-fetch-api-8]: https://s3.amazonaws.com/horizon-production/images/Books-with-fetched-titles.png
[es6-promises-and-fetch-api-repository]: https://github.com/LaunchAcademy/es6-promises-and-fetch-api
[github-fetch]: https://github.com/github/fetch
[mdn-fetch-api]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
[mdn-response]: https://developer.mozilla.org/en-US/docs/Web/API/Response
[mdn-promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[mdn-promise-prototype-then]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
[mdn-promise-prototype-catch]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
[mdn-using-fetch]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
[whatwg-fetch-specification]: https://fetch.spec.whatwg.org/
[javascript-promise-api-article]: https://learn.launchacademy.com/lessons/javascript-promise-api
[es6-fetch-api-article]: https://learn.launchacademy.com/lessons/es6-fetch-api
[mdn-cors]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
