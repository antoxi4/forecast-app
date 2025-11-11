export interface WeatherLocation {
  name: string
  region: string
  country: string
  lat: number
  lon: number
  tz_id: string
  localtime_epoch: number
  localtime: string
}

export interface CurrentWeatherData {
  last_updated_epoch: number
  last_updated: string
  temp_c: number
  temp_f: number
  is_day: number
  condition: WeatherCondition
  wind_mph: number
  wind_kph: number
  wind_degree: number
  wind_dir: string
  pressure_mb: number
  pressure_in: number
  precip_mm: number
  precip_in: number
  humidity: number
  cloud: number
  feelslike_c: number
  feelslike_f: number
  windchill_c: number
  windchill_f: number
  heatindex_c: number
  heatindex_f: number
  dewpoint_c: number
  dewpoint_f: number
  vis_km: number
  vis_miles: number
  uv: number
  gust_mph: number
  gust_kph: number
  short_rad: number
  diff_rad: number
  dni: number
  gti: number
}

export enum WeatherConditionCode {
  sunny = 1000,
  partlyCloudy = 1003,
  cloudy = 1006,
  overcast = 1009,
  mist = 1030,
  patchyRainPossible = 1063,
  patchySnowPossible = 1066,
  patchySleetPossible = 1069,
  patchyFreezingDrizzlePossible = 1072,
  thunderyOutbreaksPossible = 1087,
  blowingSnow = 1114,
  blizzard = 1117,
  fog = 1135,
  freezingFog = 1147,
  patchyLightDrizzle = 1150,
  lightDrizzle = 1153,
  freezingDrizzle = 1168,
  heavyFreezingDrizzle = 1171,
  patchyLightRain = 1180,
  lightRain = 1183,
  moderateRainAtTimes = 1186,
  moderateRain = 1189,
  heavyRainAtTimes = 1192,
  heavyRain = 1195,
  lightFreezingRain = 1198,
  moderateOrHeavyFreezingRain = 1201,
  lightSleet = 1204,
  moderateOrHeavySleet = 1207,
  patchyLightSnow = 1210,
  lightSnow = 1213,
  patchyModerateSnow = 1216,
  moderateSnow = 1219,
  patchyHeavySnow = 1222,
  heavySnow = 1225,
  icePellets = 1237,
  lightRainShower = 1240,
  moderateOrHeavyRainShower = 1243,
  torrentialRainShower = 1246,
  lightSleetShowers = 1249,
  moderateOrHeavySleetShowers = 1252,
  lightSnowShowers = 1255,
  moderateOrHeavySnowShowers = 1258,
  lightShowersOfIcePellets = 1261,
  moderateOrHeavyShowersOfIcePellets = 1264,
  patchyLightRainWithThunder = 1273,
  moderateOrHeavyRainWithThunder = 1276,
  patchyLightSnowWithThunder = 1279,
  moderateOrHeavySnowWithThunder = 1282
}

export interface WeatherCondition {
  text: string
  icon: string
  code: WeatherConditionCode
}
