fetch('https://api-to-call.com/endpoint', {
    method: 'POST',
    body: JSON.stringify({ id: '200' })
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => console.log(networkError.message))
  .then(jsonResponse => {
    return jsonResponse;
  });
  
/* putting into practice passing objects. we could probably define the object
elsewhere and pass itin rather than hard coding it. */