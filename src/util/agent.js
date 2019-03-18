const API_ROOT = 'http://localhost:8080';

const responseHandler = res => res.json();

const agent = {
  get: url => fetch(`${API_ROOT}${url}`, {"method": "GET"}).then(responseHandler),
  post: (url, body) => fetch(`${API_ROOT}${url}`, {
    "method": "POST", 
    "headers": {"Content-type": "application/json"}, 
    "body": JSON.stringify(body)
  }).then(responseHandler),
  put: (url, body) => fetch(`${API_ROOT}${url}`, {
    "method": "PUT", 
    "headers": {"Content-type": "application/json"}, 
    "body": JSON.stringify(body)
  }).then(responseHandler),
  del: url => fetch(`${API_ROOT}${url}`, {"method": "DELETE"}).then(responseHandler)
};

export default agent;