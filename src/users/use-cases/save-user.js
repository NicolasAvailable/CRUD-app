import { localHostUserToModel } from "../mappers/localhost-user.mapper";
import { usersToLocalHost } from "../mappers/users-to-localhost.mapper";
import {User} from "../models/user";



/**
 * 
 * @param {Like<User>} likeUser 
 */
export const saveUser = async( likeUser ) => {

    const user = new User( likeUser );

    if(!user.firstName || !user.lastName){
        throw new Error('Name & last name are required')
    }

    const saveUser = usersToLocalHost( user );
    let userUpdated;
    
    if( user.id ){
        userUpdated = updateUser(saveUser);
        return;
    } else {
        userUpdated = await createUser( saveUser );
    }

    return localHostUserToModel(userUpdated);
}


/**
 * 
 * @param {like<User>} user 
 */
const createUser = async( user ) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users`;
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const newUser = await res.json();
    console.log({newUser});
    return newUser;
}



/**
 * 
 * @param {like<User>} user 
 */
const updateUser = async( user ) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users/${user.id}`;
    const res = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const updateUser = await res.json();
    console.log({updateUser});
    return updateUser;
}