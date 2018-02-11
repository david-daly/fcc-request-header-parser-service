# URL Header Parser Microservice

The objective of this service is that a user should be able to retrieve information about the user such as their IP Address, Language and Operating System from their browser.

Here are the specific user stories that should be implemented for this project:

- User Story: The user can get the IP address, language and operating system for my browser.


## Example usage:
`npm install` to install the dependencies.

To start the app locally:
`npm start`

### Example requests
`http://localhost:5001/whoami`

### Example output:
`
{
    "ipaddress": "localhost:5001",
    "language": "en-GB",
    "system": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36"
}
`
