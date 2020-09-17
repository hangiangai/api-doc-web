
function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function getLocalStorage(key) {
    return localStorage.getItem(key);
}

function removeLocalStorage(key) {
    localStorage.removeItem(key);
}

function initStorage() {
    const storage = { history: {}, defaultValues: [] };
    let storageLen = localStorage.length;
    for (let idx = 0; idx < storageLen; idx++) {
        let key = localStorage.key(idx)
        if (key && key.length > 2) {
            switch (key.substr(0, 2)) {
                case "@t":
                    storage.history[key.substring(3)] = JSON.parse(getLocalStorage(key));
                    break;
                case "@c":
                    storage[key.substring(3)] = getLocalStorage(key);
                    break;
                case "@d":
                    storage.defaultValues.push({
                        key: key.substring(3),
                        val: getLocalStorage(key)
                    })
                    break;
                default:
                    break
            }
        }
    }
    return storage;
}

export {
    setLocalStorage,
    getLocalStorage,
    removeLocalStorage,
    initStorage,
}