<template>
    <div>
        <!-- 搜索 -->
        <div class='loui-search-filed'>
            <div class='loui-search-filed-text'>Search Criteria</div>
            <Form  :model='search' label-position="right" inline>
                <FormItem label="Sales Order ID" :label-width="150">
                    <Input v-model='search.salesOrderId' style='width:250px;'></Input>
                </FormItem>
                <FormItem label="Sold-To Party ID" :label-width="150">
                    <Input v-model='search.soldToPartyId' style='width:250px;'></Input>
                </FormItem>
                <FormItem label="External Reference" :label-width="150">
                    <Input v-model='search.externalReference' style='width:250px;'></Input>
                </FormItem>
                <FormItem label="Sales Order Type" :label-width="150">
                    <Input v-model='search.salesOrderType' style='width:250px;'></Input>
                </FormItem>
                <FormItem label="General Status" :label-width="150">
                    <Input v-model='search.generalStatus' style='width:250px;'></Input>
                </FormItem>
            </Form>
            <div class='loui-search-btn'> 
                <button class='loui-search-search' @click='query()'>Search</button>
                <button class='loui-search-clear' @click='clear()'>Clear</button>
            </div>
        </div> 
        <div style='clear:both;'></div> 
        <!-- 表格 -->
        <div class='loui-list-filed'>
            <div class='loui-search-filed-text'>Reault List</div> 
            <Table :columns="columns1" :data="data1" style='margin-bottom:20px;'></Table>
        </div>
       <!-- 分页 -->
        <!-- <div class="layout-order-page">
            <Page :total="total" :current="page" :page-size="pageSize" @on-change="changePage" show-elevator />
        </div> -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                //搜索
                search:{
                    salesOrderId:'',
                    soldToPartyId:'',
                    externalReference:'',
                    salesOrderType:'',
                    generalStatus:'' 
                },
                id:'',
                //分页
                // pageSize: 30,
                // page: 1,
                // total: 0,
                columns1:[
                   {
                       title:'Sales Order ID',
                       key:'salesOrderId'
                   },
                   {
                       title:'Sold-To Party',
                       key:'soldToParty'
                   },
                   {
                       title:'Transaction Type',
                       key:'transactionType'
                   },
                   {
                      title:'Net Value',
                      key:'netValue'
                   },
                   {
                       title:'Currency',
                       key:'currency'
                   },
                   {
                       title:'Customer PO',
                       key:'customerPO'
                   },
                   {
                       title:'Created At',
                       key:'createdAt'
                   },
                   {
                       title:'Operation',
                       render:(h,params) => {
                           return h('div',[
                               h('Button', {
                                   props: {
                                       type:'warning',
                                       suze:'small' 
                                   },
                                   style: {
                                       marginRight:'5px'
                                   },
                                   on: {
                                       click: () => {
                                           this.details(params.row)
                                       }
                                   }
                               },'details')
                           ])
                       }
                   }
               ],
               data1: []
           }
        },
        methods:{
            //列表
            getTableList() {
                let self = this;
                self.$http.post(this.baseURL + '/salesOrder/query',{salesOrderId:self.search.salesOrderId}).then(response => {
                    console.log(response,'res')
                    if(response.data.code == 200) {
                        this.data1 = response.data.data;
                        // console.log(this.data1,'data1')
                    }  
                })
            },
            // 查询
            query() {
                this.page = 1;
                this.getTableList();
            },
            // 清除
            clear() {
                this.search = {};
            },
             //跳转页面
            details(row) {
                //    console.log(row,'details')
                this.$router.push({path:'/orderDetails',query:{id:this.search.salesOrderId}});
            },
            
            // 分页
        //    changePage(page) {
        //         this.page = page;
        //         this.getTableList();
        //     },
        },
        mounted() {
            // this.getTableList();
        } 
    }
</script>

<style lang="scss" scoped>
.ivu-table th,
.ivu-table td {
    height: 40px;
}
.layout-order-page {
    float: right;
    margin-top: 10px;
}
.loui-search-filed {
    display: block;
    padding: 24px 36px 24px 0;
    box-shadow: 0 3px 8px 2px #ecf0f4;
    box-sizing: border-box;
    margin: 0 auto;
}

.loui-search-filed .loui-search-filed-text {
    font-size: 1rem;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: 0.5px;
    color: #34495e;
    margin-bottom: 1.5rem;
    padding-left: 36px;
}
.loui-search-filed .loui-search-content {
    box-sizing: border-box;
    display: block;
    float: left;
    width: 33.33%;
    padding: 0 36px;
    padding-bottom: 1rem;
}

.loui-search-content span {
    font-size: 14px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.29;
    letter-spacing: normal;
    color: #484848;
    margin-bottom: .8rem;
    display: block;
    text-align: left;
}
.loui-search-content select{
    background-color: #f5f8ff;border: none;
    height: 28px;
    width: 100%;
    padding-left: .5rem;
    font-size: .8rem;
    box-sizing: border-box;
}
.loui-search-content input {
    background-color: #f5f8ff;
    border: none;
    height: 28px;
    width: 100%;
    padding-left: .5rem;
    font-size: .8rem;
    box-sizing: border-box;
}

.loui-search-filed .loui-search-btn {
    box-sizing: border-box;
    width: 100%;
    text-align: right;
    padding-right: 36px;
}

.loui-search-filed .loui-search-btn .loui-search-clear {
    color: #2d8cf0;
    background: #fff;
    border: 1px solid #2d8cf0;
}

.loui-search-filed .loui-search-btn button {
    width: 5rem;
    height: 2rem;
    border-radius: 2px;
    cursor: pointer;
}

.loui-search-filed .loui-search-btn .loui-search-search {
    color: #fff;
    background: #2d8cf0;
    border: 1px solid #2d8cf0;
}
.layout-msg-page {
    float: right;
    margin-top: 20px;
}
.loui-list-filed .loui-search-filed-text {
    font-size: 1rem;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: 0.5px;
    color: #34495e;
    margin-bottom: 1rem;
    padding-left: 36px;
    margin-top:2rem;
}
</style>