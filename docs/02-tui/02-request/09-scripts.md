---
title: Pre and Post-Request Scripts
---

## Introduction

ATAC supports scripting for both pre-request and post-request processing, allowing you to customize and automate aspects of your HTTP requests. The scripting feature is based on the Boa JavaScript runtime, which runs your scripts in an isolated environment to ensure security. This guide explains how you can leverage this feature to manipulate requests and responses, and outlines the available tools and data structures.

## Script Execution Environment

### Isolated Runtime

The scripts are executed in a basic JavaScript environment ([BOA engine](https://github.com/boa-dev/boa)) that is intentionally limited to minimize potential security risks. The environment does not include many standard JavaScript libraries, but it does provide access to the request and environment data, along with a few utility functions.

### Available Variables

Within your script, you have access to two primary variables:

- **`request`**: A JSON representation of the request before it is sent (when in pre-request script).
- **`response`**: A JSON representation of the response after the request is sent (when in post-request script).
- **`env`**: A JSON representation of the current environment variables.

### Utility Functions

The following utilities are available within the script environment:

- **`console.log(msg)`**: Logs a message to the console output. This output is captured and can be reviewed after the script executes.
- **`pretty_print(data)`**: Prints a formatted version of an object to the console.

Here is how your script is integrated into the runtime environment:

```js
let request = {request_json};
let env = {env_json};

/* Utils */

let console_log_output = "";

globalThis.console = {
  log: (msg) => {
    console_log_output += msg + '\n';
    return msg;
  }
}

function pretty_print(data) {
      console.log(JSON.stringify(data, null, 2));
}

/* Start of the user script */

{user_script}

/* End of the user script */

JSON.stringify([request, env, console_log_output])
```

After executing the script, the modified `request` or `response` and `env` objects, along with any console output, are retrieved and processed back in Rust.

## Data Structures

### Request Object

The `request` object includes the following fields, allowing you to customize various aspects of the HTTP request:

```rust
Request {
    name: String,
    url: String,
    method: String,
    params: Array[KeyValue],
    headers: Array[KeyValue],
    body: "no_body" | String | Array[KeyValue],
    auth: "no_auth" | BasicAuth | BearerToken,
    scripts: RequestScripts,
    settings: RequestSettings,
}
```

- **`name`**: The name of the request.
- **`url`**: The URL to which the request is being sent.
- **`method`**: The HTTP method (GET, POST, etc.).
- **`params`**: Query parameters as an array of key-value pairs.
- **`headers`**: Request headers as an array of key-value pairs.
- **`body`**: The request body, which can be a string, key-value pairs, or `no_body`.
- **`auth`**: The authentication method, which can be `no_auth`, `BasicAuth`, or `BearerToken`.
- **`scripts`**: Any scripts associated with the request.
- **`settings`**: Various request settings, including proxy usage, redirects, cookies, and response formatting.

### KeyValue Structure

Each key-value pair in `params`, `headers`, and `body` is represented as follows:

```rust
KeyValue {
    enabled: bool,
    data: [String, String],
}
```

- **`enabled`**: A boolean indicating whether the key-value pair is active.
- **`data`**: A tuple containing the key and value as strings.

### Response Object

The `response` object provides the following fields:

```rust
Response {
    content: String | Array[u8] | null,
    cookies:  String | null,
    headers: Array[[String, String]]
}
```

- **`content`**: The response body, which can be a string, a byte array, or null.
- **`cookies`**: Cookies received with the response, if any.
- **`headers`**: Response headers as an array of key-value pairs.

### Environment Object

The `env` object is a basic JavaScript object that contains your environment variables as key-value pairs:

```js
{
  "key": "value"
}
```

## Writing Pre and Post-Request Scripts

You can use pre-request scripts to modify the `request` object before it is sent, and post-request scripts to process the `response` after it is received. The scripting environment gives you the flexibility to:

- Modify request parameters dynamically.
- Modify or expand environment variables usage.
- Retrieve data from the received response.

### Example Pre-Request Script

```js
// Add a custom header
request.headers.push({ enabled: true, data: ["X-Custom-Header", "CustomValue"] });

// Log the request URL
console.log("Sending request to: " + request.url);
```

### Example Post-Request Script

```js
// Log the response content
console.log("Response received:");
pretty_print(response.content);

// Check for a specific header
let contentType = response.headers.find(header => header[0] === "content-type");
if (contentType && contentType[1] === "application/json") {
    console.log("The response is in JSON format.");
}
```
