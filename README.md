airports
============

`airports` : Airports is a simple tool for getting airport data. It returns the airport name, location, and more.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)

This is a Node Javascript Wrapper for the [Airports Lookup API](https://apiverve.com/marketplace/api/airports)

---

## Installation
	npm install @apiverve/airports [--save]


## Configuration

Before using the airports API client, you have to setup your account and obtain your API Key.  
You can get it by signing up at [https://apiverve.com](https://apiverve.com).

---

## Usage

The general API is documented here: [https://docs.apiverve.com/api/airports](https://docs.apiverve.com/api/airports).  
You can find parameters, example responses, and status codes documented here.

### Setup

    var airportsAPI = require('@apiverve/airports');
	var api = new airportsAPI({
    	api_key: [API_KEY_],
    	secure: [true|default] (Optional, defaults to true)
	});


---


## Perform Request
Using the API client, you can perform requests to the API.

###### Define Query

	var query = {
    	email: 'this.is.a@test.io',
    	catch_all: [0|1] (Optional, defaults to 1)
	};


###### Simple Request (using Callback)

    api.execute(query, function (err, result) {
    	if (err) {
        	return console.log('Check Callback (Error): ' + JSON.stringify(err));
    	}
	    console.log('Check Callback (Result): ' + result.length);
	});

###### Example Response

```
{
  "status": "error",
  "error": "Error getting sample JSON. Try again later",
  "data": null
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](mailto:hello@apiverve.com?subject=airports).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the mailboxlayer website, API, and services is subject to the [APIVerve Terms & Conditions](https://apiverve.com/terms) and all legal documents and agreements.

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2024 Field Chari , APIVerve, and Evlar LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.