import { useMMKVObject } from "react-native-mmkv"

import { BaseProvider } from "./BaseProvider"
import { LookupCity } from "../../../Api"

export class ActiveCityProvider extends BaseProvider<LookupCity> {
  readonly key = 'activeCity'

  getValue = (): LookupCity | undefined =>{
    const value = this.mmkv.getString(this.key)
    return value ? JSON.parse(value) : undefined
  }

  setValue = (value?: LookupCity): void =>{
    if (!value) {
      this.mmkv.remove(this.key)
      return
    }
    
    this.mmkv.set(this.key, JSON.stringify(value))
  }

  removeValue(): void {
    this.mmkv.remove(this.key)
  }

  useValue = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useMMKVObject<LookupCity>(this.key, this.mmkv)
  }
}