import { BaseProvider } from "./BaseProvider"
import { useMMKVString } from "react-native-mmkv"

export class ActiveCityProvider extends BaseProvider<string> {
  readonly key = 'activeCity'

  getValue = (): string | undefined =>{
    return this.mmkv.getString(this.key)
  }

  setValue = (value: string): void =>{
    this.mmkv.set(this.key, value)
  }

  removeValue(): void {
    this.mmkv.remove(this.key)
  }

  useValue = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useMMKVString(this.key, this.mmkv)
  }
}