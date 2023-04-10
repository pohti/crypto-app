
const apiKey = process.env.REACT_APP_APIKEY;
const baseURL = `https://aa3wd32wri.execute-api.ap-southeast-1.amazonaws.com/dev`

export const getLatestCryptoData = async () => {
    const start = 1
    const limit = 100
    const sort = 'market_cap'
    const url = baseURL
    const headers = {
        'x-api-key': apiKey,
        // 'Accept': 'application/json',
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    }

    const response = await fetch(url, { headers })
    const data = await response.json()
    return data
}