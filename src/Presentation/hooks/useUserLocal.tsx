import React, {useEffect,useState} from 'react'
import { GetUserLocalUseCase } from '../../Domain/useCases/userLocal/GetUserLocal';
import { User } from '../../Domain/entities/User';

//CUSTOM HOOK.

export const useUserLocal = () => {

    //Hooks works with useEffect and useState to return an object or list.

    const [user, setUser] = useState<User>()

    useEffect(()=>{
        getUserSession();
    },[])

    const getUserSession = async() => {
        const user = await GetUserLocalUseCase();
        setUser(user);
    }

    return {
        user,
        getUserSession
    }
}