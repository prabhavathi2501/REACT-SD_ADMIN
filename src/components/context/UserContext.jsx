import React,{useState} from 'react' 
export const UserDataContext = React.createContext(null)
function UserContext({children}) {
    const API_URL = 'https://6517e6f8582f58d62d353617.mockapi.io/sd-admin/:endpoint'
    // let [data,setData] = useState([
    //     {
    //       name:"Ajith",
    //       username:"ajith123",
    //       email:"ajith@gmail.com",
    //       mobile:"12345678",
    //       batch:"B100",
    //     },
    //     {
    //       name:"Kumar",
    //       username:"kum2710",
    //       email:"kumar@gmail.com",
    //       mobile:"098765431",
    //       batch:"B101",
    //     },
    //     {
    //         name:"Vijay",
    //         username:"vijay123",
    //         email:"vijay@gmail.com",
    //         mobile:"578492384",
    //         batch:"B50",
    //       },{
    //         name:"prabha",
    //         username:"parbah123",
    //         email:"vijay@gmail.com",
    //         mobile:"578492384",
    //         batch:"B50",
    //       }
    //   ])
  return <UserDataContext.Provider value={{API_URL}}>
    {children}
  </UserDataContext.Provider>
}

export default UserContext