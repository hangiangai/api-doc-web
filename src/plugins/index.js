import Table from './table'
import TableItem from './table/table_column'
import Input from './input'
import Popover from './popover'

let Custom = {}

Custom.install = function (Vue) {
    Vue.component(Table.name, Table);
    Vue.component(TableItem.name, TableItem);
    Vue.component(Input.name, Input);
    Vue.component(Popover.name, Popover);
}

export {
    Custom
}