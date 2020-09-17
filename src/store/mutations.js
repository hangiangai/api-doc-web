import { setLocalStorage, removeLocalStorage } from './../libs/localStorage'

export default {
    //
    setApiCount(state, value) {
        state.apiCount = value
    },
    // 设置接口服务地址
    setServerApi(state, value) {
        state.serverApi = value
        setLocalStorage('@c:serverApi', value);
    },
    // 更新文档
    updateBaseDocs(state, value) {
        state.baseDocs = value
    },
    //
    changeCurrentTestApiInfo(state, value) {
        state.currentTestApiTitle = value.Title;
        state.currentTestApiUrl = value.Url;
        state.currentTestApiMethod = value.Method;
        if (Object.prototype.hasOwnProperty.call(state.testHistory, value.Title)) {
            let { params, result } = state.testHistory[value.Title];
            value.Params.forEach(ele => {
                for (let idx = 0; idx < params.length; idx++) {
                    ele.name == params[idx].name
                        ? ele.value = params[idx].value
                        : ''
                }
            })
            state.currentTestApiParams = value.Params;
            state.currentTestApiResult = result;
        } else {
            state.currentTestApiParams = value.Params;
            state.currentTestApiResult = '';
        }
    },
    //
    changeCurrentTestApiResult(state, data) {
        state.currentTestApiResult = data;
    },
    // 添加历史记录
    addTestHistory(state, data) {
        let storeInfo = {
            params: state.currentTestApiParams,
            result: data,
        };
        setLocalStorage('@t:' + state.currentTestApiTitle, JSON.stringify(storeInfo));
        state.testHistory[state.currentTestApiTitle] = storeInfo;
    },
    // 添加默认填充值
    addDefaultValues(state, value) {
        state.defaultValues.push(value);
        setLocalStorage(`@d:${value.key}`, value.val);
    },
    // 删除默认填充值
    removeDefaultValue(state, value) {
        removeLocalStorage(`@d:${state.defaultValues[value].key}`)
        state.defaultValues.splice(value, 1);
    },
    // 更换主题
    changeTheme(state, theme) {
        state.mainTheme = theme;
        setLocalStorage('@c:theme', theme);
        document.documentElement.style.setProperty(
            "--main-theme",
            theme
        );
    },
    setDataSupplyAddr(state, addr) {
        state.dataSupplyAddr = addr;
        setLocalStorage("@c:dataSupplyAddr", addr);
    },
    // 改变侧边栏状态
    openSideBar(state) {
        state.sidebarState = true;
    },
    closeSideBar(state) {
        state.sidebarState = false;
    }
}