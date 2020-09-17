
function handleParams(params) {
    let result = []
    if (Array.isArray(params)) {
        let paramsLen = params.length;
        for (let index = 0; index < paramsLen; index++) {
            result.push({
                name: params[index][0] || '',
                type: params[index][1] || '',
                explain: params[index][2] || '',
                remark: params[index][3] || '',
                other: params[index][4] || '',
                value: ''
            })
        }
    }
    return result
}

function toDoc(notes) {
    let handleResult = [];
    if (Array.isArray(notes)) {
        let notesLen = notes.length;
        for (let index = 0; index < notesLen; index++) {
            if (notes[index]['Url'] && notes[index]['Method']) {
                notes[index]['Result'] = 'no value';
                notes[index]['Method'] = notes[index]['Method'].toUpperCase();
                if (!notes[index]['Header']) {
                    notes[index]['Header'] = 'multipart/form-data';
                }
                notes[index]['Params'] = handleParams(notes[index]['Params']);
                handleResult.push(notes[index]);
            }
        }
    }
    return handleResult;
}

function formatRequestData(params) {
    let reqData = {};
    let paramsLen = params.length;
    for (let index = 0; index < paramsLen; index++) {
        reqData[params[index].name] = params[index].value;
    }
    return reqData;
}


export {
    handleParams,
    formatRequestData,
    toDoc
}