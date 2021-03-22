import { Constants, IState } from './types';

const init: IState = {
  list: []
};
const appReducer = (state: IState = init, action: any): IState => {
  switch (action.type) {
    case Constants.ADD_LIST:
      console.log(action.state)
      return { list: action.list };
    default:
      return state;
  }
}

export default appReducer;