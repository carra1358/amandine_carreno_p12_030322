import axios from "axios";


export function userRequests (id) {
   
    const urlBase = "http://localhost:3000/user/"
    
   // const userInfoRequest = axios.get(urlBase+id).then(function(data){ console.log(data.data)})
   
   function getUserInfo (){
       return axios.get(urlBase+id)
   }

   function getUserPerformance (){
       return axios.get(urlBase+id+"/performance")
   }

   function getUserActivity (){
    return axios.get(urlBase+id+"/activity")
}
function getUserAverageSession (){
    return axios.get(urlBase+id+"/average-sessions")
}
    
   
 const res = axios.all([getUserInfo(), getUserPerformance(),getUserActivity(),getUserAverageSession()])
    .then(function (results) {
      const summary = results[0].data.data;
      const performance = results[1].data.data;
      const activity = results[2].data.data;
      const averageSession =results[3].data.data;
       
      return  { summary  ,  performance, activity, averageSession}
    })
   
 return res
    
  
    
}

 



