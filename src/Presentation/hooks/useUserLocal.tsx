import React, {useEffect,useState} from 'react'
import { GetUserUseCase } from '../../Domain/useCases/userLocal/GetUser';
import { User } from '../../Domain/entities/User';

//CUSTOM HOOK.

export const useUserLocal = () => {

    //Hooks works with useEffect and useState to return an object or list.

    const [user, setUser] = useState<User>()

    useEffect(()=>{
        getUserSession();
    },[])

    const getUserSession = async() => {
        const user = await GetUserUseCase();
        setUser(user);
    }

    return {user}
}