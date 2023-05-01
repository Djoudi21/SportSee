import axios from 'axios';
export default class UserService {
    static getUserInfos = async () => {
        const userId = 18
        const res = await axios.get(`http://localhost:3000/user/${userId}`)
            .then(function (response) {
                return response
            })
            .catch(function (error) {
                console.log(error);
            })
        return res.data.data
    }

    static getUserPerformance = async () => {
        const userId = 18
        const res = await axios.get(`http://localhost:3000/user/${userId}/performance`)
            .then(function (response) {
                return response
            })
            .catch(function (error) {
                console.log(error);
            })
        return res.data.data
    }

    static getUserActivity = async () => {
        const userId = 18
        const res = await axios.get(`http://localhost:3000/user/${userId}/activity`)
            .then(function (response) {
                return response
            })
            .catch(function (error) {
                console.log(error);
            })
        return res.data.data
    }


    static getUserAverageSession = async () => {
        const userId = 18
        const res = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`)
            .then(function (response) {
                return response
            })
            .catch(function (error) {
                console.log(error);
            })
        return res.data.data
    }
}
