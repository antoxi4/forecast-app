import { MMKV } from "react-native-mmkv"

export abstract class BaseProvider<T> {
  abstract readonly key: string

  readonly mmkv: MMKV

  constructor(mmkv: MMKV) {
    this.mmkv = mmkv
  }

  abstract getValue(): T | undefined
  abstract setValue(value: T): void 
  abstract removeValue(): void
  abstract useValue(): [T | undefined, (value: T) => void]
}