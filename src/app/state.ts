import { Menu } from './models/menu';
export interface State {
    menu: Menu[];
    [key: string]: any;
}
