import { useMMKVObject } from "react-native-mmkv"

import { BaseProvider } from "./BaseProvider"
import { StoredCityList } from "../Models"

export class StoredCitiesProvider extends BaseProvider<StoredCityList> {
  readonly key = 'storedCities'

  getValue = (): StoredCityList | undefined =>{
    const value = this.mmkv.getString(this.key)
    
    return value ? JSON.parse(value) : undefined
  }

  setValue = (value: StoredCityList): void =>{
    this.mmkv.set(this.key, JSON.stringify(value))
  }

  removeValue(): void {
    this.mmkv.remove(this.key)
  }

  useValue = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useMMKVObject<StoredCityList>(this.key, this.mmkv)
  }
}