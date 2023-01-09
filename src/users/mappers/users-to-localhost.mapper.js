import { User } from '../models/user';


/**
 * 
 * @param {User} user 
 */
export const usersToLocalHost = ( user ) => {

    const {
        balance,
        avatar,
        firstName,
        gender,
        id,
        isActive,
        lastName
    } = user

    return {
        first_name: firstName,
        last_name: lastName,
        gender,
        avatar,
        balance,
        id,
        isActive
    }
}