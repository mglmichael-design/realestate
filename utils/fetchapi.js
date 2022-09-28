import axios from "axios";
export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const {data} = await axios.get((url),{
        headers: {
            'x-rapidapi-key': '624dad1232msh1165334f2e76eebp134b91jsn538bc8e75d10',
            'x-rapidapi-host': 'bayut.p.rapidapi.com'
        }
    })
    return data;
}