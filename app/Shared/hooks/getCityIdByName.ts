export const getCityIdByName = (cityName: string): string => {
  return cityName.toLowerCase().replace(/\s+/g, '-')
}