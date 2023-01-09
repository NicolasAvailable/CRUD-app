import { User } from "../models/user";


/**
 * 
 * @param {like<User>} localHostUser 
 * @returns {User}
 */
export const localHostUserToModel = ( localHostUser ) => {

    const {
        id,
        isActive,
        balance,
        avatar,
        first_name,
        last_name,
        gender
    } = localHostUser;

    return new User({
        id,
        isActive,
        balance,
        avatar,
        firstName: first_name,
        lastName: last_name,
        gender
    })
}