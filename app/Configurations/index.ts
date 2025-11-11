console.log( process.env )
export const ApiConfig =  {
  apiURL: process.env.WEATHER_API_URL as string,
  apiKey: process.env.WEATHER_API_KEY as string,
}