
const apiKey = process.env.REACT_APP_APIKEY;
const baseURL = `https://aa3wd32wri.execute-api.ap-southeast-1.amazonaws.com/dev`

export const getLatestCryptoData = async (currency) => {
    // const start = 1
    // const limit = 100
    // const sort = 'market_cap'
    const url = `${baseURL}?currency=${currency}`
    const headers = {
        'x-api-key': apiKey,
        // 'Accept': 'application/json',
        'Content-Type': 'application/json',
    }

    const response = await fetch(url, { headers })
    const data = await response.json()
    return data
}