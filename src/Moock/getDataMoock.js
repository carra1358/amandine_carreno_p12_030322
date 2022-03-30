/**
 * Function that allows to use moocked data from the API(endpoint:localhosst:3000/user/id)
 * @param {*} data imported data from Moock/data
 * @example
 * import { data } from 'Moock/data';
 * import getDataMoock from 'Moock/getDataMoock';
 * 
 * const UserContextProvider = ({ children }) => {
     const user = getDataMoock(data);
   return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
   };
 * 
 * @returns Object
 */
function getDataMoock(data) {
  const dataUser = data.find((data) => data.user.id === 18);

  const moockUser = {
    summary: dataUser.user,
    performance: dataUser.performance,
    activity: dataUser.activity,
    averageSession: dataUser.averageSessions,
  };

  return moockUser;
}

export default getDataMoock;
