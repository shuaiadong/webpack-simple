/**
 * @file test module
 * @author zhonghuidong
 * @date 2019-06-11
 */
import indexPageStore from "./IndexPage/store";
export default class RootStore {
    static key = "rootSore";

    constructor() {}

    indexPageStore = new indexPageStore(this);
}
