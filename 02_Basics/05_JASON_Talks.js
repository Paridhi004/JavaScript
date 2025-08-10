// A JSON API is an API (Application Programming Interface) that uses JSON (JavaScript Object Notation) as the format for exchanging data between a client (like a browser or mobile app) and a server.

// It’s both:

// A general term — meaning any API that sends and receives data in JSON format.

// A specific specification — there’s also a standard called JSON:API (https://jsonapi.org) that defines how you should structure your JSON for consistency.

// 1️⃣ General JSON API
// If someone says "This is a JSON API" in a general sense, they usually mean:
// The API sends responses in JSON.
// You send requests (often HTTP) with JSON in the body.

// Example:

// // GET https://api.example.com/users/1
// {
//   "id": 1,
//   "name": "Paridhi",
//   "role": "Developer"
// }


// 2️⃣ JSON:API Specification
// If they mean the JSON:API standard, it’s a strict format for organizing your JSON:

// a. Reduces the number of requests and payload size.

// b. Ensures consistent key names and structure across different APIs.

// Example (same user in JSON:API format):

// {
//   "data": {
//     "type": "users",
//     "id": "1",
//     "attributes": {
//       "name": "Paridhi",
//       "role": "Developer"
//     }
//   }
// }

// ✅ Key Takeaways

// JSON = data format (like a language for data).
// API = interface for communication between systems.
// JSON API = an API that speaks JSON.
// JSON:API = an official standard for how that JSON should be structured.




// What is an API?
// An API (Application Programming Interface) is like a menu in a restaurant:

// The menu (API) tells you what dishes (functions/data) you can order.

// You don’t go inside the kitchen (server’s code) to cook it yourself.

// You tell the waiter (API request) what you want.

// The kitchen (server) prepares it and the waiter brings it back (API response).



// In tech terms
// An API is a set of rules that allows two programs to communicate.

// Client (like your phone, website, or app) asks for data or actions.

// Server (or another program) processes the request and sends a response.

// This communication often happens over the internet using HTTP (like a website does).

// Example
// You open a weather app:

// Your app sends an API request:

// GET https://api.weather.com/v1/current?city=Delhi
// The weather server processes it.

// The API sends back data (often JSON):

// {
//   "city": "Delhi",
//   "temperature": 32,
//   "condition": "Sunny"
// }
// Your app displays that info — it never needed to know how the weather data was collected.

// Key points:

// 1. APIs hide complexity: you don’t need to know the internal code.

// 2. APIs have endpoints (specific URLs or paths for different tasks).

// 3. They can be used for data retrieval, actions, or even controlling hardware.