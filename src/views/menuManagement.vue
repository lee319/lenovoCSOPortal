<template>
    <div class='layout-desktop'>
        <!-- 搜索 -->
        <div class='loui-search-filed'>
            <Form :model='info'  label-position="right"  inline>
                <div class='loui-search-filed-text'>查询条件</div>
                <FormItem label="销售凭证:" :label-width="120">
                    <Input v-model='info.input' style='width:220px;'></Input>
                </FormItem>
                
                <FormItem  :label-width="50">
                    <Button type="primary" @click='query()'>查询</Button>
                </FormItem>
            </Form>
        </div>  
        <!-- 列表 -->
        <div class='loui-search-filed'>
            <div class='loui-search-filed-text'>查询结果</div>
            <Table :columns="columns" :data="data" style='margin-bottom:20px;'></Table>
        </div>
        <!-- 分页 -->
        <div class="layout-page">
            <Page :total="total" :page-size="pageSize" @on-change="changePage" show-elevator />
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                info: {},
                total:0,
                pageSize:10,
                page:1,
                columns:[
                    {
                        title:'订单',
                        key:'a',
                        width:100
                    },
                    {
                        title:'订单类型',
                        key:'b',
                        width:100
                    },
                    {
                        title:'销售组织',
                        key:'c',
                        width:100
                    },
                    {
                        title:'分销渠道',
                        key:'d',
                        width:90
                    },
                    {
                        title:'产品组',
                        key:'e',
                        width:80
                    },
                    {
                        title:'采购订单编号',
                        key:'f'
                    },
                    {
                        title:'售达方',
                        key:'g'
                    },
                    {
                        title:'送达方',
                        key:'h'
                    },
                    {
                        title:'金额',
                        key:'i'
                    },
                    // {   type: 'selection',
                    //     // title:'状态',
                    //     key:'j',
                    //     width:80
                    // },
                    {
                        title:'优先级',
                        key:'k',
                        width:80
                    },
                    {
                        title: '操作',
                        // align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.CancelPriority(params.row)
                                        }
                                    }
                                }, '取消优先级')
                            ])
                        }
                    }
                ],
                data:[
                    {
                        a:'2238551',
                        b:'ZOR',
                        c:'0101',
                        d:'11',
                        e:'04',
                        f:'A10000000104564',
                        g:'100000001',
                        h:'100007576',
                        i:'59,347.44',
                        // j:'',
                        k:'1'
                    }
                ]
            }
        },
        methods:{
            // 搜索
            query() {
                this.page = 1;
            },
            // 分页
            changePage(page) {
                this.page = page;
            },
            CancelPriority() {
                console.log('cancelPriority');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .layout-desktop {
        height:auto;
    }
    .loui-search-filed {
        display: block;
        padding: 24px 36px 24px 0;
        box-shadow: 0 3px 8px 2px #ecf0f4;
        box-sizing: border-box;
        margin: 0 auto;
    }
    .loui-search-filed .loui-search-filed-text {
        font-size: .8rem;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: 0.5px;
        color: #34495e;
        margin-bottom: 1.5rem;
        padding-left: 36px;
    }
    .layout-page{
        float:right;
        margin-right:20px;
    }
    
</style>