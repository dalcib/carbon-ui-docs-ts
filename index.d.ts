declare module 'react-stack-nav' {

  export const navigation: (state: any, action: any) => any

  export const attachHistoryModifiers: (arg: any) => any

  export const createOrchestrator: (fragment?: any) => any //React.ComponentClass<any> | React.StatelessComponent<any>

  export const pushState: (stateObj: any, title: string, url: string) => PushStateProps

  export const replaceTop: (stateObj: any, title: string, url: string) => PushStateProps
  
}

declare module 'react-native-ps' {
  const ps: (style: any) => any
  export default ps
}


declare module 'uranium' {
  import * as React from 'react'

  const uranium: (component: React.ComponentClass<any> | React.StatelessComponent<any>) => React.ComponentClass<any> | React.StatelessComponent<any>
  export default uranium

  export const animate: (props: string | string[], from: any, to: any, o?: any) => any
  export const matchMediaMock: () => any
}


declare module 'unindent' {
  const unindent: (code: string, potions: any) => string
  export default unindent
}

declare module 'simple-markdown' {
      export function parserFor(rules: any): any;
      export function reactFor(singleNodeOutputFunction: any): any
      export function ruleOutput(rules: any, key?: any): any;
      export const defaultRules: any
}

type PushStateProps = {
    type: string,
    payload: { stateObj: any }, 
    title: string, 
    url: string 
}


type PlatformOSType = 'ios' | 'android' | 'web'

declare module "*.json" {
    const value: object;
    export default value;
}


