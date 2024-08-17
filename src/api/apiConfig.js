const baseURL = 'http://localhost:8000/data'; // Adjust base URL as needed

const request = async (endpoint, options = {}) => {
  const url = `${baseURL}${endpoint}`;

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export default request;
