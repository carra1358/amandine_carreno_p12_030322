import { createContext } from 'react';
import useFetch from 'hooks/useFetch';

/**
 * Create global context to share data
 *
 * @return Components with props value that contains data fecthed from api
 */

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  let id = '18'; // id of the user in api

  const summary = useFetch(id);
  const performance = useFetch(`${id}/performance`);
  const activity = useFetch(`${id}/activity`);
  const averageSession = useFetch(`${id}/average-sessions`);

  const user = {
    summary: summary,
    performance: performance,
    activity: activity,
    averageSession: averageSession,
  };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export { UserContext, UserContextProvider };
