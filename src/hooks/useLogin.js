import axios from "axios";
import {useEffect} from "react";

export function useLogin(){
    useEffect(()=>{
        (async function loginHandler(){
            try{
                const {data} = await axios.post("/api/auth/login",{
                    email: "adarshbalika@gmail.com",
                    password: "adarshBalika123"
                })
                localStorage.setItem("encodedToken",data.encodedToken);
            }catch(err){
                console.log(err)
            }
        })();
    },[]);
};