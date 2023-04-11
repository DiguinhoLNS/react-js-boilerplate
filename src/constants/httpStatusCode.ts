const httpStatusCode = [
    {
        code: 100,
        message: 'Continue',
        description: 'The server has received the request headers and the client should proceed to send the request body.',
    },
    {
        code: 101,
        message: 'Switching Protocols',
        description: 'The requester has asked the server to switch protocols and the server has agreed to do so.',
    },
    {
        code: 102,
        message: 'Processing',
        description: 'An interim response used to inform the client that the server has accepted the complete request, but has not yet completed it.',
    },
    {
        code: 103,
        message: 'Early Hints',
        description: 'Used to return some response headers before final HTTP message.',
    },
    {
        code: 200,
        message: 'OK',
        description: 'The request has succeeded.',
    },
    {
        code: 201,
        message: 'Created',
        description: 'The request has been fulfilled and resulted in a new resource being created.',
    },
    {
        code: 202,
        message: 'Accepted',
        description: 'The request has been accepted for processing, but the processing has not been completed.',
    },
    {
        code: 203,
        message: 'Non-Authoritative Information',
        description: 'The request has been successfully processed, but is returning information that may be from another source.',
    },
    {
        code: 204,
        message: 'No Content',
        description: 'The request has been successfully processed, but is not returning any content.',
    },
    {
        code: 205,
        message: 'Reset Content',
        description: 'The request has been successfully processed, but is not returning any content.',
    },
    {
        code: 206,
        message: 'Partial Content',
        description: 'The server is delivering only part of the resource due to a range header sent by the client.',
    },
    {
        code: 207,
        message: 'Multi-Status',
        description: 'The message body that follows is an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.',
    },
    {
        code: 208,
        message: 'Already Reported',
        description: 'The members of a DAV binding have already been enumerated in a previous reply to this request, and are not being included again.',
    },
    {
        code: 226,
        message: 'IM Used',
        description: 'The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.',
    },
    {
        code: 300,
        message: 'Multiple Choices',
        description: 'Indicates multiple options for the resource that the client may follow.',
    },
    {
        code: 301,
        message: 'Moved Permanently',
        description: 'This and all future requests should be directed to the given URI.',
    },
    {
        code: 302,
        message: 'Found',
        description: 'This is an example of industry practice contradicting the standard. The HTTP/1.0 specification (RFC 1945) required the client to perform a temporary redirect (the original describing phrase was "Moved Temporarily"), but popular browsers implemented 302 with the functionality of a 303 See Other. Therefore, HTTP/1.1 added status codes 303 and 307 to distinguish between the two behaviours. However, some Web applications and frameworks use the 302 status code as if it were the 303.',
    },
    {
        code: 303,
        message: 'See Other',
        description: 'The response to the request can be found under another URI using a GET method. When received in response to a POST (or PUT/DELETE), the client should presume that the server has received the data and should issue a redirect with a separate GET message.',
    },
    {
        code: 304,
        message: 'Not Modified',
        description: 'Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match. This means that there is no need to retransmit the resource, since the client still has a previously-downloaded copy.',
    },
    {
        code: 305,
        message: 'Use Proxy',
        description: 'The requested resource is only available through a proxy, whose address is provided in the response. ',
    },
    {
        code: 306,
        message: 'Switch Proxy',
        description: 'No longer used. Originally meant "Subsequent requests should use the specified proxy.',
    },
    {
        code: 307,
        message: 'Temporary Redirect',
        description: 'The request should be repeated with another URI, but future requests can still use the original URI. In contrast to how 302 was historically implemented, the request method is not allowed to be changed when reissuing the original request. For example, a POST request should be repeated using another POST request.',
    },
    {
        code: 308,
        message: 'Permanent Redirect',
        description: 'The request, and all future requests should be repeated using another URI. 307 and 308 (as proposed) parallel the behaviours of 302 and 301, but do not allow the HTTP method to change. So, for example, submitting a form to a permanently redirected resource may continue smoothly.',
    },
    {
        code: 400,
        message: 'Bad Request',
        description: 'The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).',
    },
    {
        code: 401,
        message: 'Unauthorized',
        description: 'Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided. The response must include a WWW-Authenticate header field containing a challenge applicable to the requested resource. See Basic access authentication and Digest access authentication.',
    },
    {
        code: 402,
        message: 'Payment Required',
        description: 'Reserved for future use. The original intention was that this code might be used as part of some form of digital cash or micropayment scheme, but that has not happened, and this code is not usually used. YouTube uses this status if a particular IP address has made excessive requests, and requires the person to enter a CAPTCHA.',
    },
    {
        code: 403,
        message: 'Forbidden',
        description: 'The request was a valid request, but the server is refusing to respond to it. Unlike a 401 Unauthorized response, authenticating will make no difference.',
    },
    {
        code: 404,
        message: 'Not Found',
        description: 'The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.',
    },
    {
        code: 405,
        message: 'Method Not Allowed',
        description: 'A request was made of a resource using a request method not supported by that resource; for example, using GET on a form which requires data to be presented via POST, or using PUT on a read-only resource.',
    },
    {
        code: 406,
        message: 'Not Acceptable',
        description: 'The requested resource is only capable of generating content not acceptable according to the Accept headers sent in the request.',
    },
    {
        code: 407,
        message: 'Proxy Authentication Required',
        description: 'The client must first authenticate itself with the proxy.',
    },
    {
        code: 408,
        message: 'Request Timeout',
        description: 'The server timed out waiting for the request. According to HTTP specifications: "The client did not produce a request within the time that the server was prepared to wait. The client MAY repeat the request without modifications at any later time."',
    },
    {
        code: 409,
        message: 'Conflict',
        description: 'Indicates that the request could not be processed because of conflict in the request, such as an edit conflict between multiple simultaneous updates.',
    },
    {
        code: 410,
        message: 'Gone',
        description: 'Indicates that the resource requested is no longer available and will not be available again. This should be used when a resource has been intentionally removed and the resource should be purged. Upon receiving a 410 status code, the client should not request the resource again in the future. Clients such as search engines should remove the resource from their indices. Most use cases do not require clients and search engines to purge the resource, and a "404 Not Found" may be used instead.',
    },
    {
        code: 411,
        message: 'Length Required',
        description: 'The request did not specify the length of its content, which is required by the requested resource.',
    },
    {
        code: 412,
        message: 'Precondition Failed',
        description: 'The server does not meet one of the preconditions that the requester put on the request.',
    },
    {
        code: 413,
        message: 'Payload Too Large',
        description: 'The request is larger than the server is willing or able to process.',
    },
    {
        code: 414,
        message: 'URI Too Long',
        description: 'The URI provided was too long for the server to process.',
    },
    {
        code: 415,
        message: 'Unsupported Media Type',
        description: 'The request entity has a media type which the server or resource does not support. For example, the client uploads an image as image/svg+xml, but the server requires that images use a different format.',
    },
    {
        code: 416,
        message: 'Range Not Satisfiable',
        description: 'The client has asked for a portion of the file (byte serving), but the server cannot supply that portion.',
    },
    {
        code: 417,
        message: 'Expectation Failed',
        description: 'The server cannot meet the requirements of the Expect request-header field.',
    },
    {
        code: 418,
        message: 'I\'m a teapot',
        description: 'This code was defined in 1998 as one of the traditional IETF April Fools\' jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented by actual HTTP servers. The RFC specifies this code should be returned by teapots requested to brew coffee. This HTTP status is used as an Easter egg in some websites, including Google.com.',
    },
    {
        code: 421,
        message: 'Misdirected Request',
        description: 'The request was directed at a server that is not able to produce a response (for example because a connection reuse).',
    },
    {
        code: 422,
        message: 'Unprocessable Entity',
        description: 'The request was well-formed but was unable to be followed due to semantic errors.',
    },
    {
        code: 423,
        message: 'Locked',
        description: 'The resource that is being accessed is locked.',
    },
    {
        code: 424,
        message: 'Failed Dependency',
        description: 'The request failed due to failure of a previous request (e.g., a PROPPATCH).',
    },
    {
        code: 426,
        message: 'Upgrade Required',
        description: 'The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field.',
    },
    {
        code: 428,
        message: 'Precondition Required',
        description: 'The origin server requires the request to be conditional.',
    },
    {
        code: 429,
        message: 'Too Many Requests',
        description: 'The user has sent too many requests in a given amount of time ("rate limiting").',
    },
    {
        code: 431,
        message: 'Request Header Fields Too Large',
        description: 'The server is unwilling to process the request because its header fields are too large.',
    },
    {
        code: 451,
        message: 'Unavailable For Legal Reasons',
        description: 'A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource. The code 451 was chosen as a reference to the novel Fahrenheit 451.',
    },
    {
        code: 500,
        message: 'Internal Server Error',
        description: 'A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.',
    },
    {
        code: 501,
        message: 'Not Implemented',
        description: 'The server either does not recognize the request method, or it lacks the ability to fulfill the request. Usually this implies future availability (e.g., a new feature of a web-service API).',
    },
    {
        code: 502,
        message: 'Bad Gateway',
        description: 'The server was acting as a gateway or proxy and received an invalid response from the upstream server.',
    },
    {
        code: 503,
        message: 'Service Unavailable',
        description: 'The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a temporary state.',
    },
    {
        code: 504,
        message: 'Gateway Timeout',
        description: 'The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.',
    },
    {
        code: 505,
        message: 'HTTP Version Not Supported',
        description: 'The server does not support the HTTP protocol version used in the request.',
    },
    {
        code: 506,
        message: 'Variant Also Negotiates',
        description: 'Transparent content negotiation for the request results in a circular reference.',
    },
    {
        code: 507,
        message: 'Insufficient Storage',
        description: 'The server is unable to store the representation needed to complete the request.',
    },
    {
        code: 508,
        message: 'Loop Detected',
        description: 'The server detected an infinite loop while processing the request (sent in lieu of 208 Already Reported).',
    },
    {
        code: 510,
        message: 'Not Extended',
        description: 'Further extensions to the request are required for the server to fulfill it.',
    },
    {
        code: 511,
        message: 'Network Authentication Required',
        description: 'The client needs to authenticate to gain network access.',
    },
]

export default httpStatusCode