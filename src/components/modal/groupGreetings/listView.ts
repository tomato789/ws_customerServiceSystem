export const taskListView = {
    selection: true,
    pagination: {
        open: true
    },
    operation: {
        open: true
    },
    height: '50vh',
    columns: [
        {
            prop: 'name',
            label: '名称'
        },
        {
            prop: 'status',
            label: '状态'
        },
        {
            prop: 'time',
            label: '日期'
        },
        {
            prop: 'type',
            label: '类型'
        },
        {
            prop: 'desc',
            label: '描述'
        }
    ],
    searchConfig: {
        open: false,
        options: [
            {
                label: '测试搜索',
                value: 'name',
            },
        ]
    }
}