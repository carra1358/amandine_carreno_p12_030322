import { createContext } from 'react';
import useFetch from 'hooks/useFetch';

/**
 * Create context instance that will subscribes to or context provider
 * @param {any} DefaultValue : optional
 * @returns object || null
 */
const UserContext = createContext();

/**
 * Context provider that allows children components to share values
 * @property {Component} children components that will be enclosed in the context provider
 * @property {Object} value built-in prop that accept the value we want to share, in ours case an object "user" filled with our data
 * @returns React component
 */
const UserContextProvider = ({ children }) => {
  let id = '12'; // id of the user in api

  const summary = useFetch(id);
  const performance = useFetch(`${id}/performance`);
  const activity = useFetch(`${id}/activity`);
  const averageSession = useFetch(`${id}/average-sessions`);
  let loading =
    summary.isLoading ||
    activity.isLoading ||
    performance.isLoading ||
    averageSession.isLoading;
  let error =
    summary.hasError ||
    activity.hasError ||
    performance.hasError ||
    averageSession.hasError;

  const user = {
    summary: summary.state,
    performance: performance.state,
    activity: activity.state,
    averageSession: averageSession.state,
    loading: loading,
    error: error,
  };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export { UserContext, UserContextProvider };
