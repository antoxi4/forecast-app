import { createMMKV } from "react-native-mmkv"
import { RegisteredProvidersKeys, registerSettingsProviders } from "./Providers"

const STORAGE_ID = "settings_store"

export type SettingsStore = {
  [T in RegisteredProvidersKeys]: InstanceType<typeof registerSettingsProviders[T]>
}
export const getSettingsStore = (): SettingsStore => {
  const mmkv = createMMKV({ id: STORAGE_ID })

  return Object.entries(registerSettingsProviders).reduce((acc, [ key, Provider ]) => {
    
    (acc as any)[ key ] = new Provider(mmkv)

    return acc
  }, {} as SettingsStore)
}