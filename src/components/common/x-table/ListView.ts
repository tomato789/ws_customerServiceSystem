
import { reactive, toRefs } from 'vue';

interface Pagination {
    open: Boolean;
    pageSizes: Array<number>;
}

interface ListQuery {
    page: Number;
    size: Number;
}

interface Operation {
    open: Boolean;
    fixed: Boolean | String;
    width: Number;
}

interface SearchConfig {
    open: Boolean;
    options: Array<Object>;
    showLabel: Boolean;
}


export class ListView {
    data: Array<Object>;
    params: Object;
    loading: Boolean;
    columns: Array<Object>;
    border: Boolean;
    pagination: Pagination;
    listQuery: ListQuery;
    total: Number;
    selection: Boolean;
    height: Number;
    operation: Operation;
    searchConfig: SearchConfig;

    constructor(opt: any) {
        this.data = opt.data ??  [];
        this.total = opt.total ??  0;
        this.height = opt.height || 500;
        this.params = opt.params ??  {};
        this.loading = opt.loading || false;
        this.columns = opt.columns ??  [];
        this.border = opt.border || true;
        this.selection = opt.selection ??  false;
        this.pagination = opt.pagination ??  {};
        this.pagination.open = opt.pagination?.open ?? true;
        this.pagination.pageSizes = opt.pagination?.pageSizes || [10, 20, 50, 100, 200];
        this.listQuery = opt.listQuery ??  {};
        this.listQuery.page = opt.listQuery?.page ??  1;
        this.listQuery.size = opt.listQuery?.size ??  10;
        this.operation = opt.operation ??  [];
        this.operation.open = opt.operation?.open ??  false;
        this.operation.fixed = opt.operation?.fixed ??  false;
        this.operation.width = opt.operation?.width ??  100;
        this.searchConfig = opt.searchConfig ??  {};
        this.searchConfig.open = opt.searchConfig?.open ??  false;
        this.searchConfig.options = opt.searchConfig?.options ??  [];
        this.searchConfig.showLabel = opt.searchConfig?.showLabel ??  true;
    }
}