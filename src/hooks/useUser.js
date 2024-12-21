import axios from 'axios';

const useUser = (type) => {

    const Request = async (username, password) => {
        await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/${type? 'login':'signup'}`, null,
            {params: {"username": {username}, "password": {password}}})
    }
    return {Request};

}
export default useUser;