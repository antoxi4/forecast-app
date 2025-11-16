import { useMemo } from 'react'
import { ImageSourcePropType } from 'react-native'
import { WeatherConditionCode } from '../../Api/models/WeatherModels'

const WEATHER_IMAGES = {
  sunny: require('../../Assets/images/weatherState/Sunny.png'),
  partlyCloudy: require('../../Assets/images/weatherState/Partly Cloudy.png'),
  cloudy: require('../../Assets/images/weatherState/Cloudy.png'),
  rainy: require('../../Assets/images/weatherState/Rainy.png'),
  rainyWithSun: require('../../Assets/images/weatherState/Rainy with Sun.png'),
  lightDrizzle: require('../../Assets/images/weatherState/Light Drizzle.png'),
  snow: require('../../Assets/images/weatherState/Snow.png'),
  snowfall: require('../../Assets/images/weatherState/Snowfall.png'),
  sleet: require('../../Assets/images/weatherState/Sleet.png'),
  thunderstorm: require('../../Assets/images/weatherState/Thunderstorm.png'),
  lightning: require('../../Assets/images/weatherState/Lightning.png'),
  night: require('../../Assets/images/weatherState/night.png'),
} as const

type WeatherImageMap = {
  [key in WeatherConditionCode]?: ImageSourcePropType
}

// Map enum codes to imported images
const weatherImages: WeatherImageMap = {
  // Sunny and Clear
  [ WeatherConditionCode.sunny ]: WEATHER_IMAGES.sunny,
  
  // Cloudy conditions
  [ WeatherConditionCode.partlyCloudy ]: WEATHER_IMAGES.partlyCloudy,
  [ WeatherConditionCode.cloudy ]: WEATHER_IMAGES.cloudy,
  [ WeatherConditionCode.overcast ]: WEATHER_IMAGES.cloudy,
  
  // Rain conditions
  [ WeatherConditionCode.patchyRainPossible ]: WEATHER_IMAGES.rainyWithSun,
  [ WeatherConditionCode.patchyLightRain ]: WEATHER_IMAGES.rainyWithSun,
  [ WeatherConditionCode.lightRain ]: WEATHER_IMAGES.rainy,
  [ WeatherConditionCode.moderateRainAtTimes ]: WEATHER_IMAGES.rainy,
  [ WeatherConditionCode.moderateRain ]: WEATHER_IMAGES.rainy,
  [ WeatherConditionCode.heavyRainAtTimes ]: WEATHER_IMAGES.rainy,
  [ WeatherConditionCode.heavyRain ]: WEATHER_IMAGES.rainy,
  [ WeatherConditionCode.lightRainShower ]: WEATHER_IMAGES.rainyWithSun,
  [ WeatherConditionCode.moderateOrHeavyRainShower ]: WEATHER_IMAGES.rainy,
  [ WeatherConditionCode.torrentialRainShower ]: WEATHER_IMAGES.rainy,
  
  // Drizzle conditions
  [ WeatherConditionCode.patchyLightDrizzle ]: WEATHER_IMAGES.lightDrizzle,
  [ WeatherConditionCode.lightDrizzle ]: WEATHER_IMAGES.lightDrizzle,
  [ WeatherConditionCode.freezingDrizzle ]: WEATHER_IMAGES.lightDrizzle,
  [ WeatherConditionCode.heavyFreezingDrizzle ]: WEATHER_IMAGES.lightDrizzle,
  [ WeatherConditionCode.patchyFreezingDrizzlePossible ]: WEATHER_IMAGES.lightDrizzle,
  
  // Snow conditions
  [ WeatherConditionCode.patchySnowPossible ]: WEATHER_IMAGES.snow,
  [ WeatherConditionCode.patchyLightSnow ]: WEATHER_IMAGES.snow,
  [ WeatherConditionCode.lightSnow ]: WEATHER_IMAGES.snow,
  [ WeatherConditionCode.patchyModerateSnow ]: WEATHER_IMAGES.snow,
  [ WeatherConditionCode.moderateSnow ]: WEATHER_IMAGES.snow,
  [ WeatherConditionCode.patchyHeavySnow ]: WEATHER_IMAGES.snowfall,
  [ WeatherConditionCode.heavySnow ]: WEATHER_IMAGES.snowfall,
  [ WeatherConditionCode.blowingSnow ]: WEATHER_IMAGES.snowfall,
  [ WeatherConditionCode.blizzard ]: WEATHER_IMAGES.snowfall,
  [ WeatherConditionCode.lightSnowShowers ]: WEATHER_IMAGES.snow,
  [ WeatherConditionCode.moderateOrHeavySnowShowers ]: WEATHER_IMAGES.snowfall,
  
  // Sleet conditions
  [ WeatherConditionCode.patchySleetPossible ]: WEATHER_IMAGES.sleet,
  [ WeatherConditionCode.lightSleet ]: WEATHER_IMAGES.sleet,
  [ WeatherConditionCode.moderateOrHeavySleet ]: WEATHER_IMAGES.sleet,
  [ WeatherConditionCode.lightSleetShowers ]: WEATHER_IMAGES.sleet,
  [ WeatherConditionCode.moderateOrHeavySleetShowers ]: WEATHER_IMAGES.sleet,
  [ WeatherConditionCode.icePellets ]: WEATHER_IMAGES.sleet,
  [ WeatherConditionCode.lightShowersOfIcePellets ]: WEATHER_IMAGES.sleet,
  [ WeatherConditionCode.moderateOrHeavyShowersOfIcePellets ]: WEATHER_IMAGES.sleet,
  
  // Freezing rain
  [ WeatherConditionCode.lightFreezingRain ]: WEATHER_IMAGES.sleet,
  [ WeatherConditionCode.moderateOrHeavyFreezingRain ]: WEATHER_IMAGES.sleet,
  
  // Thunder conditions
  [ WeatherConditionCode.thunderyOutbreaksPossible ]: WEATHER_IMAGES.thunderstorm,
  [ WeatherConditionCode.patchyLightRainWithThunder ]: WEATHER_IMAGES.thunderstorm,
  [ WeatherConditionCode.moderateOrHeavyRainWithThunder ]: WEATHER_IMAGES.thunderstorm,
  [ WeatherConditionCode.patchyLightSnowWithThunder ]: WEATHER_IMAGES.lightning,
  [ WeatherConditionCode.moderateOrHeavySnowWithThunder ]: WEATHER_IMAGES.lightning,
  
  // Fog and mist
  [ WeatherConditionCode.mist ]: WEATHER_IMAGES.cloudy,
  [ WeatherConditionCode.fog ]: WEATHER_IMAGES.cloudy,
  [ WeatherConditionCode.freezingFog ]: WEATHER_IMAGES.cloudy,
}

const nightImage = WEATHER_IMAGES.night
const defaultImage = WEATHER_IMAGES.partlyCloudy

export const useGetWeatherConditionImage = (
  conditionCode: WeatherConditionCode,
  isDay: boolean,
): ImageSourcePropType => {
  return useMemo(() => {
    if (!isDay) {
      return nightImage
    }
    
    return weatherImages[ conditionCode ] || defaultImage
  }, [ conditionCode, isDay ])
}