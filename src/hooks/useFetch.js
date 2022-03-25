import { useState, useEffect } from 'react';
import instance from 'api/get';

/** Custom hook to fetch data and store then in a variable
 *
 * @param {string} url
 * @returns object
 */

function useFetch(url) {
  const [state, setState] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await instance.get(url);
        return setState(response.data.data);
      } catch (error) {
        ('Ooops');
      }
    };
    fetchUser();
  }, [url]);

  return state;
}

export default useFetch;
