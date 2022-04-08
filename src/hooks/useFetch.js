import { useState, useEffect } from 'react';
import instance from 'api/get';

/**
 * Custom hook to fetch datas from API and retreive promise informations.
 * @param {string} url
 * @returns {Object}  composed of Object || null && Boolean && Boolean
 */
function useFetch(url) {
  //state variable that will contains our object || null once the promise is resolved
  const [state, setState] = useState(null);
  //state variable that contains Boolean it will be set to false once the promise is fulfilled
  const [isLoading, setIsloading] = useState(true);
  //state variable that  contains Boolean it will be set to true if the promise is rejected
  const [hasError, sethasError] = useState(false);

  // React function that allows our component to be mount,update and unmount.
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await instance.get(url);
        return (
          setState(response.data.data), setIsloading(false), sethasError(false)
        );
      } catch (error) {
        return sethasError(true), setIsloading(false), setState(null);
      }
    };
    fetchUser();
  }, [url]);

  return { state, isLoading, hasError };
}

export default useFetch;
