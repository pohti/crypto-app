import {APIKEY} from '../apiKey'

const baseURL = `https://aa3wd32wri.execute-api.ap-southeast-1.amazonaws.com/dev`

export const getLatestCryptoData = async (currency) => {
    const url = `${baseURL}?currency=${currency}`
    const headers = {
        'x-api-key': APIKEY,
        'Content-Type': 'application/json',
    }

    const response = await fetch(url, { headers })
    const data = await response.json()
    return data
}