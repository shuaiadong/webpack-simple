/**
 * @file {{compName}} module
 * @author {{userName}}
 * @date {{today}} 
 */
import indexPageStore from './IndexPage/store'
export default class RootStore {

    static key = 'rootSore';
    
    constructor() {

    }
    
    indexPageStore = new indexPageStore(this);
}