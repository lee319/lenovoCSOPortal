<template>
    <div>
         <div class='loui-search-filed' style='margin-bottom:20px;padding: 10px 36px 10px 0;'>
            <Button  icon="md-add" type="primary">Download</Button>
            <Button  icon="ios-settings" type="primary">Download</Button>
            <Button  icon="ios-download-outline" type="primary">Download</Button>
         </div>
        <div class='loui-search-filed'>
            <div class='loui-search-filed-text'>Sales Order Creation</div>
            <Form :model='info'  label-position="right"  inline>
                <FormItem label="Type" :label-width="150">
                    <Select v-model="info.input" clearable style="width:250px">
                        <Option value="">全部</Option>
                        <Option :value="0">1</Option>
                        <Option :value="1">2</Option>
                    </Select>
                </FormItem>
                <FormItem label="Order ID" :label-width="150">
                    <Input v-model='info.input' style='width:250px;' disabled></Input>
                </FormItem>
                <FormItem label="Customer PO" :label-width="150">
                    <Input v-model='info.input' style='width:250px;'></Input>
                </FormItem>
                <FormItem label="Sold-To Party" :label-width="150">
                    <Input v-model='info.input' style='width:250px;'></Input>
                </FormItem>
                <FormItem label="Partner Number" :label-width="150">
                    <Input v-model='info.input' style='width:250px;'></Input>
                </FormItem>
                <FormItem label="Sold-To Party Address" :label-width="150">
                    <Input v-model='info.input' style='width:250px;' disabled></Input>
                </FormItem>
                <FormItem label="Sales Area" :label-width="150">
                    <Input v-model='info.input' style='width:250px;' disabled></Input>
                </FormItem>
                <FormItem label="Order Reason" :label-width="150">
                    <Input v-model='info.input' style='width:250px;'></Input>
                </FormItem>
                <FormItem label="Status" :label-width="150">
                    <Input v-model='info.input' style='width:250px;' disabled></Input>
                </FormItem>
                <FormItem label="Rejection Status" :label-width="150">
                    <Input v-model='info.input' style='width:250px;' disabled></Input>
                </FormItem>
                <FormItem label="Credit Status" :label-width="150">
                    <Input v-model='info.input' style='width:250px;' disabled></Input>
                </FormItem>
                <FormItem label="Posting Date" :label-width="150">
                    <Input v-model='info.input' style='width:250px;' disabled></Input>
                </FormItem>
                <FormItem label="Request. Deliv. Date" :label-width="150">
                    <Input v-model='info.input' style='width:250px;'></Input>
                </FormItem>
                <FormItem label="Created At" :label-width="150">
                    <Input v-model='info.input' style='width:250px;' disabled></Input>
                </FormItem>
                <FormItem label="Net Value" :label-width="150">
                    <Input v-model='info.input' style='width:250px;' disabled></Input>
                </FormItem>
                <FormItem label="Tax Amount" :label-width="150">
                    <Input v-model='info.input' style='width:250px;' disabled></Input>
                </FormItem>
                <FormItem label="Gross Value" :label-width="150">
                    <Input v-model='info.input' style='width:250px;' disabled></Input>
                </FormItem>
            </Form>
        </div>   
        <div style='both:clear;'></div>
        <!-- <Table :columns="columns1" :data="data1" style='margin-bottom:20px;'></Table> -->
        <Table :columns="columns" :data="data" style='margin-bottom:20px;'></Table>
         <!-- 子列表 -->
        <!-- <div class='layout-order-info' style='width:100%;height:100%;overflow:auto;'>
            <b ref='seenmsg' class='msg_table'></b>
            <div v-if="seen">
                <Tabs type="card">
                    <TabPane label="Parties Involved">
                        <div class='tabs'>
                            <Table :columns="columns1" :data="data1"></Table>  
                        </div>
                    </TabPane>
                    <TabPane label="Shipping">
                        <div class='tabs' style='margin-top:20px;'>
                            <Form  label-position="right"  inline>
                                <FormItem label="Ship-To Party" :label-width="150">
                                    <Input style='width:250px;'></Input>
                                </FormItem>
                                <FormItem label="Ship-To Party Address" :label-width="150">
                                    <Input style='width:250px;'></Input>
                                </FormItem>
                                <FormItem label="Incoterms (Part 1)" :label-width="150">
                                    <Input style='width:250px;'></Input>
                                </FormItem>
                                <FormItem label="Shipping Conditions" :label-width="150">
                                    <Input style='width:250px;'></Input>
                                </FormItem>
                                <FormItem label="Delivery Priority" :label-width="150">
                                    <Input style='width:250px;'></Input>
                                </FormItem>
                                <FormItem label="Complete Delivery" :label-width="150">
                                    <Input style='width:250px;'></Input>
                                </FormItem>
                                <FormItem label="Delivery Status" :label-width="150">
                                    <Input style='width:250px;'></Input>
                                </FormItem>
                                <FormItem label="Delivery Block Status" :label-width="150">
                                    <Input style='width:250px;'></Input>
                                </FormItem>
                            </Form>
                            <Table :columns="columns2" :data="data2"></Table>
                        </div>
                    </TabPane>
                    <TabPane label="Billing">
                        <div class='tabs' style='margin-top:20px;'>
                            <Form  label-position="right"  inline>
                                <FormItem label="Payer" :label-width="150">
                                    <Input style='width:250px;'></Input>
                                </FormItem>
                                <FormItem label="Bill-To Party" :label-width="150">
                                    <Input style='width:250px;'></Input>
                                </FormItem>
                                <FormItem label="Payment Terms" :label-width="150">
                                    <Input style='width:250px;'></Input>
                                </FormItem>
                                <FormItem label="Billing Date" :label-width="150">
                                    <Input style='width:250px;'></Input>
                                </FormItem>
                                <FormItem label="Billing Status" :label-width="150">
                                    <Input style='width:250px;'></Input>
                                </FormItem>
                                <FormItem label="Billing Block Status" :label-width="150">
                                    <Input style='width:250px;'></Input>
                                </FormItem>
                            </Form>
                            <Table :columns="columns3" :data="data3"></Table>
                        </div>
                    </TabPane>
                    <TabPane label="Notes">
                        <div class='tabs'>
                            <Table :columns="columns4" :data="data4"></Table>  
                        </div>
                    </TabPane>
                    <TabPane label="Schedule Lines">
                        <Table :columns="columns5" :data="data5"></Table> 
                    </TabPane>
                    <TabPane label="Document Flow">
                        <Table :columns="columns6" :data="data6"></Table> 
                    </TabPane>
                </Tabs>
            </div>  
        </div> -->
    </div>
</template>

<script>
export default {
    name: 'msg',
    data() {
        return {
            // 添加
            info:{
                input:''
            },
            total:0,
            columns: [
                {
                    title:'Item',
                    key:'item',
                    render:(h,params) => {
                        let item = params.row.item;
                        return h('Input', {
                            props: {
                                value: item
                            },
                            style:{
                                outline:0
                            },
                            on: {
                                'on-change'(event) {
                                    item = event.target.value;
                                },
                                'on-enter': () => {
                                    this.handleSave(params.row);
                                     console.log('回车事件Item',params.row);
                                     this.$emit('input',event.target.value);
                                     console.log('input',event.target.value)
                                }
                            }
                        })
                    }
                },
                {
                    title:'Descritpion',
                    key:'descritpion',
                    // width:310,
                    render: (h,params) => {
                        let descritpion = params.row.descritpion;
                        return h('Input', {
                            props: {
                                value: descritpion
                            },
                            on: {
                                'on-change'(event) {
                                    descritpion = event.target.value;
                                }
                            }
                        })
                    }
                },
                {
                    title:'Order Quantity',
                    key:'orderQuantity',
                    render: (h, params) => {
                        let orderQuantity = params.row.orderQuantity;
                        return h('Input', {
                            props: {
                                value: orderQuantity
                            },
                            on: {
                                'on-change'(event) {
                                    orderQuantity = event.target.value;
                                }
                            }
                        })
                    }
                },
                {
                    title:'Sales Uinit',
                    key:'salesUinit',
                    render: (h, params) => {
                        let salesUinit = params.row.salesUinit;
                        return h('Input', {
                            props: {
                                value: salesUinit
                            },
                            on: {
                                'on-change' (event) {
                                    salesUinit = event.target.value;
                                }
                            }
                        })
                    }
                },
                {
                    title:'high Level Item',
                    key:'highLevelItem',
                    render: (h, params) => {
                        let highLevelItem = params.row.highLevelItem;
                        return h("Input", {
                            props: {
                                value: highLevelItem
                            },
                            on: {
                                'on-change'(event) {
                                    highLevelItem = event.target.value;
                                }
                            }
                        })
                    }
                },
                {
                    title:'Net Price',
                    key:'netPrice',
                    render: (h,params) => {
                        let netPrice = params.row.netPrice;
                        return h('Input', {
                            props: {
                                value: netPrice
                            },
                            on: {
                                'on-change'(event) {
                                    netPrice = event.target.value;
                                }
                            }
                        })
                    }
                },
                {
                    title:'Amount',
                    key:'amount',
                    render: (h,params) => {
                        let amount = params.row.amount;
                        return h('Input', {
                            props: {
                                value: amount
                            },
                            on: {
                                'on-change' (event) {
                                    amount = event.target.value;
                                }
                            }
                        })
                    }
                }
            ],
            data: [
                {
                    item: 10,
                    descritpion: 'Lenovo小新Air15IKBRCI78550U8G25610H',
                    orderQuantity:'',
                    salesUinit:'EA',
                    highLevelItem:'',
                    netPrice:'$100',
                    amount:'$1,000',
                    $isEdit:false
                },
                {
                    item: 20,
                    descritpion: 'NoteBook TP X240 8G 256 W8PD',
                    orderQuantity:'',
                    salesUinit:'EA',
                    highLevelItem:'',
                    netPrice:'$1,000',
                    amount:'$1,000',
                    $isEdit:false
                },
                {
                    item: 30,
                    descritpion: 'NoteBook TP X250 8G 256 W8PD',
                    orderQuantity:'',
                    salesUinit:'EA',
                    highLevelItem:'',
                    netPrice:'$1,000',
                    amount:'$1,000',
                    $isEdit:false
                },
                {
                    item: 40,
                    descritpion: 'NoteBook TP X260 8G 256 W8PD',
                    orderQuantity:'',
                    salesUinit:'EA',
                    highLevelItem:'',
                    netPrice:'$1,000',
                    amount:'$1,000',
                    $isEdit:false
                }
                
            ],
            // columns1: [
            //     {
            //         title: 'Item',
            //         key: 'item',
            //         render: (h,params) => {
            //             if(params.row.$isEdit) {
            //                 return h('input', {
            //                     style:{
            //                         width:'100px'
            //                     },
            //                     domProps: {
            //                         value:params.row.item
            //                     },
            //                     on: {
            //                         input: function (event) {
            //                             params.row.item = event.target.value
            //                         }
            //                     }
            //                 });
            //             } else {
            //                 return h('div', params.row.item);
            //             }
            //         }
            //     },
            //     {
            //         title: 'Material',
            //         key: 'material',
            //         render: (h, params) => {
            //             if (params.row.$isEdit) {
            //                 return h('input', {
            //                     style: {
            //                         width: '100px'
            //                     },
            //                     domProps: {
            //                         value: params.row.material
            //                     },
            //                     on: {
            //                         input: function (event) {
            //                             params.row.material = event.target.value
            //                         }
            //                     }
            //                 });
            //             } else  {
            //                 return h('div', params.row.material);
            //             }
            //         }
            //     },
            //     {
            //         title: 'Descritpion',
            //         key: 'descritpion',
            //         render: (h,params) => {
            //             if(params.row.$isEdit) {
            //                 return h('input', {
            //                     style:{
            //                         width:'100px'
            //                     },
            //                     domProps: {
            //                         value: params.row.description
            //                     },
            //                     on: {
            //                         input: function(event) {
            //                             params.row.description = event.target.value
            //                         }
            //                     }
            //                 })
            //             } else {
            //                 return h('div',params.row.description);
            //             }
            //         }
            //     },
            //     {
            //         title:'Order Quantity',
            //         key:'orderQuantity',
            //         render: (h,params) => {
            //             if(params.row.$isEdit) {
            //                 return h('input', {
            //                     style:{
            //                         width:'100px'
            //                     },
            //                     domProps: {
            //                         value: params.row.orderQuantity
            //                     },
            //                     on: {
            //                         input: function(event) {
            //                             params.row.orderQuantity = event.target.value
            //                         }
            //                     }
            //                 })
            //             } else {
            //                 return h('div',params.row.orderQuantity);
            //             }
            //         }
            //     },
            //     {
            //         title:'Sales Uinit',
            //         key:'salesUinit',
            //         render: (h,params) => {
            //             if(params.row.$isEdit) {
            //                 return h('input', {
            //                     style:{
            //                         width:'100px'
            //                     },
            //                     domProps: {
            //                         value: params.row.salesUinit
            //                     },
            //                     on: {
            //                         input: function(event) {
            //                             params.row.salesUinit = event.target.value
            //                         }
            //                     }
            //                 })
            //             } else {
            //                 return h('div',params.row.salesUinit);
            //             }
            //         }
            //     },
            //     {
            //         title:'High Level Item',
            //         key:'highLevelItem',
            //         render:(h,params) => {
            //             if(params.row.$isEdit) {
            //                 return h('input', {
            //                     style:{
            //                         width:'100px'
            //                     },
            //                     domProps: {
            //                         value: params.row.highLevelItem
            //                     },
            //                     on: {
            //                         input: function(event) {
            //                             params.row.highLevelItem = event.target.value
            //                         }
            //                     }
            //                 })
            //             } else {
            //                 return h('div',params.row.highLevelItem);
            //             }
            //         }
            //     },
            //     {
            //         title:'Net Price',
            //         key:'netPrice',
            //         render:(h,params) => {
            //             if(params.row.$isEdit) {
            //                 return h('input', {
            //                     style:{
            //                         width:'100px'
            //                     },
            //                     domProps: {
            //                         value: params.row.netPrice
            //                     },
            //                     on: {
            //                         input: function(event) {
            //                             params.row.netPrice = event.target.value
            //                         }
            //                     }
            //                 })
            //             } else {
            //                 return h('div',params.row.netPrice);
            //             }
            //         }
            //     },
            //     {
            //         title:'Amount',
            //         key:'amount',
            //         render:(h,params) => {
            //             if(params.row.$isEdit) {
            //                 return h('input', {
            //                     style:{
            //                         width:'100px'
            //                     },
            //                     domProps: {
            //                         value: params.row.amount
            //                     },
            //                     on: {
            //                         input: function(event) {
            //                             params.row.amount = event.target.value
            //                         }
            //                     }
            //                 })
            //             } else {
            //                 return h('div',params.row.amount);
            //             }
            //         }
            //     },
            //     {
            //         title: 'Action',
            //         key: 'action',
            //         render: (h, params) => {
            //             return h('Button', {
            //                 props: {
            //                     type: 'text',
            //                     size: 'small'
            //                 },
            //                 on: {
            //                     click: () => {
            //                         if (params.row.$isEdit) {
            //                             this.handleSave(params.row)
            //                         } else {
            //                             this.handleEdit(params.row)
            //                         }
            //                     }
            //                 }
            //             }, params.row.$isEdit ? '保存' : '编辑');
            //         }
            //     }
            // ],
            // data1: [
            //     {
            //         item: '',
            //         material: '',
            //         descritpion: '',
            //         orderQuantity:'',
            //         salesUinit:'',
            //         highLevelItem:'',
            //         netPrice:'',
            //         Amount:'',
            //         $isEdit: false,
            //     }
            // ]
            // seen:false,
            // sum:0,
        }
    },
    methods:{
        // 编辑表格
        handleEdit (row) {
            this.$set(row, '$isEdit', true)
        }, 
        handleSave (row) {
            this.$set(row, '$isEdit', false)
        },
        // 清除
        clear() {
            alert('Clear')
        },
        // 搜索
        search() {
            alert('Search')
        },
        // change(row) {
        //     this.seen=!this.seen;
        //     if(this.seen==false){this.$refs.seenmsg.style='display:block'}
        //     if(this.seen==true){this.$refs.seenmsg.style='diplay:none'}
        // },
        //添加确定按钮
        addOk() {
            console.log(111)
            let self = this;
            // self.$http.post(this.config.BaseURL + '/staticpromotion/desktop/save', self.info).then(response => {
            //     console.log(response)
            //     if (response.data.code == 200) {
            //         this.info = {};
            //         this.getTableList();
            //         this.$Message.success("添加成功!")
            //     }
            // })
        }
        
    }
}
</script>

<style scoped lang='scss'>
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
        background: #2d8cf0;;
        border: 1px solid #2d8cf0;
    }
    .layout-msg-page {
        float: right;
        margin-top: 20px;
    }
   #msg_nav{
       width:100%;
       height:60px;
       display:flex;
       justify-content: space-between;
        padding-top:5px;
       li{
           flex:1;
           background: #E9E9E9;
           color:#333;
           margin:5px 2px;
           text-align: center;
           line-height: 50px;
           font-size:18px;
       }
       li:hover{
           border:1px solid #2d8cf0;
       }
   }
   .msg_table{
       display:none;
   }
   
    .loui-search-filed .label-search {
        box-sizing: border-box;
        display: block;
        float: left;
        width: 33.33%;
        padding: 0 36px;
        padding-bottom: 1rem;
    }
    .label-search span{
        font-size: 14px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.43;
        letter-spacing: normal;
        color: #484848;
        display: block;
        text-align: left;
    }
    .label-search input{
        width: 60%;
        background-color: #f5f8ff;
        border-radius: 4px;
        background-color: #f5f8ff;
        border: none;
        padding-left: 10px;
        margin-top: 5px;
        padding: 10px 46px 10px 8px;
        height: 32px;
    }
    .label-search select{
        background-color: #f5f8ff;
        border: none;
        height: 32px;
        width: 60%;
        padding-left: .5rem;
        font-size: .8rem;
        box-sizing: border-box;
    }
    
    .label-search-inline span{
        display: inline;
        margin-right: 10px;
    }
    .label-search-inline input{
        width: 60%;
        padding: 10px 0 10px 8px;
    }
    .label-search-inline select{
        width: 60%;
        padding: 10px 0 10px 8px;
    } 
</style>