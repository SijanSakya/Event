import { useState, useEffect } from 'react';
import { get, post, put, remove } from '../services/ApiService';

const ApiTest = (): JSX.Element => {
  const [response, setResponse] = useState<any>(null);

  
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await get('users');
        setResponse(data);
        console.log(data,"data")
      } catch (error) {
        console.error("error in data");
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>API Response:</h1>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
};

export default ApiTest;
