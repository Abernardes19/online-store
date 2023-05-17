import { createContext } from 'react';
import { IContext } from './context.structure';

const MyContext = createContext({} as IContext);

export default MyContext;