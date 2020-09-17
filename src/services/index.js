import {
    getBaseDocs,
    getDocUpdated
} from './request'

export default async (filed, date) => {
    let data = null;
    switch (filed) {
        case 'day':
            data = await getBaseDocs(date);
            break
        case 'year':
            data = await getDocUpdated(date);
            break
    }
    return data
}