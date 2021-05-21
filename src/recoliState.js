import {atom} from 'recoil';


export const listStateMain = atom({
    key: 'listStateMain',
    default: [],
  });

export const fatchData = atom({
    key: 'fatchData',
    default: false,
  });