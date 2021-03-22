import { StateType, ActionType } from 'typesafe-actions';

declare module 'typesafe-actions' {
  export type RootState = StateType<typeof import('./reducer').default>;
}

export interface IState {
  list: []
}
export enum Constants {
  ADD_LIST = 'ADD_LIST'
}