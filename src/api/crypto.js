import {APIKEY} from '../apiKey'

const baseURL = `https://aa3wd32wri.execute-api.ap-southeast-1.amazonaws.com/dev`

export const getLatestCryptoData = async (currency) => {
    // const start = 1
    // const limit = 100
    // const sort = 'market_cap'
    const url = `${baseURL}?currency=${currency}`
    const headers = {
        'x-api-key': APIKEY,
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    }

    const response = await fetch(url, { headers })
    const data = await response.json()
    return data
}