export const taskListView = {
    selection: true,
    pagination: {
        open: true
    },
    operation: {
        open: true
    },
    height: '36vh',
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
        open: true,
        options: [
            {
                label: 'ip类型',
                value: 'name',
                showLabel: false,
                type: 'select',
                dictData: [
                    {
                        label: 'ipv4',
                        value: 'ipv4'
                    },
                    {
                        label: 'ipv6',
                        value: 'ipv6'
                    }
                ]
            },
            {
                label: '账号分组',
                value: 'name1',
                showLabel: false,
                type: 'select',
                dictData: [
                    {
                        label: 'ipv4',
                        value: 'ipv4'
                    },
                    {
                        label: 'ipv6',
                        value: 'ipv6'
                    }
                ]
            },
            {
                label: '账号/昵称/ip',
                value: 'name2',
                showLabel: false,
            },
        ]
    }
}