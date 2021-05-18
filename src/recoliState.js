import {atom, selector, useRecoilState} from 'recoil';


export const listStateMain = atom({
    key: 'listStateMain',
    default: [],
  });