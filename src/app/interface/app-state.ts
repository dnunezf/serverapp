// entire state of the app
// ? -> optional

import { DataState } from '../enum/data.state.enum';

export interface AppState<T> {
  dataState: DataState;
  appData?: T; // generic
  error?: string;
}
