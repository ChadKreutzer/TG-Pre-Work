const getData = async() => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint', {
      method: 'POST',
      body: JSON.stringify({ id: 200 })
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');
  }
  catch (error) {
    console.log(error);
  }
};

/* looking nearly identical to the get, but that is the point. it makes it really
easy. */