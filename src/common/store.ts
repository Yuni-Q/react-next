import { action, observable } from 'mobx'

let store: any = null

class Store {
  @observable
  public age:number = 0

  constructor (isServer:boolean) {
    this.age = 0
  }

  @action
  public addAge = () => {
    this.age++
  }
}

export function initStore (isServer: boolean) {
  if (isServer && typeof window === 'undefined') {
    return new Store(isServer)
  } else {
    if (store === null) {
      store = new Store(isServer)
    }
    return store
  }
}
