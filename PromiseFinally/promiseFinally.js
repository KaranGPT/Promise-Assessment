// Usage example of Promise.finally
let isLoading = true;

fetch('https://api.example.com/data')
  .then((response) => response.json())
  .catch((error) => console.error('Error:', error))
  .finally(() => {
    isLoading = false; 
  });
