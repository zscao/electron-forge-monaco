export interface ITestAPI {
  sayHello: () => void,
}

declare global {
  interface Window {
    testAPI: ITestAPI
  }
}