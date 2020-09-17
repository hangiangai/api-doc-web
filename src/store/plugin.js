
import { initStorage } from './../libs/localStorage';
import state from './state';

function initTestHistory(store) {
    const {
        theme,
        serverApi,
        history,
        defaultValues,
        dataSupplyAddr
    } = initStorage();

    // 历史纪录
    state.testHistory = history || {};
    // 默认值
    state.defaultValues = defaultValues;
    // 服务api
    if (serverApi) {
        store.state.serverApi = serverApi;
    }
    // 数据提供地址
    if (dataSupplyAddr) {
        store.state.dataSupplyAddr = dataSupplyAddr;
    }
    // 主题
    if (theme) {
        store.commit('changeTheme', theme);
    }

}

export {
    initTestHistory
}

