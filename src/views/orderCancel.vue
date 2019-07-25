<template>
    <div>
        <!-- <div class='loui-search-filed'>
            <div class='loui-search-filed-text'>Sales Order Details</div>
            <Form  label-position="right"  inline>
                <FormItem label="Type" :label-width="150">
                    <Input style='width:250px;'></Input>
                </FormItem>
                <FormItem label="Order ID" :label-width="150">
                    <Input style='width:250px;'></Input>
                </FormItem>
                <FormItem label="Customer PO" :label-width="150">
                    <Input style='width:250px;'></Input>
                </FormItem>
                <FormItem label="Sold-To Party" :label-width="150">
                    <Input style='width:250px;'></Input>
                </FormItem>
                <FormItem label="Partner Number" :label-width="150">
                    <Input style='width:250px;'></Input>
                </FormItem>
                <FormItem label="Sold-To Party Address" :label-width="150">
                    <Input style='width:250px;'></Input>
                </FormItem>
                <FormItem label="Sales Area" :label-width="150">
                    <Input style='width:250px;'></Input>
                </FormItem>
                <FormItem label="Order Reason" :label-width="150">
                    <Input style='width:250px;'></Input>
                </FormItem>
                <FormItem label="Status" :label-width="150">
                    <Input style='width:250px;'></Input>
                </FormItem>
                <FormItem label="Rejection Status" :label-width="150">
                    <Input style='width:250px;'></Input>
                </FormItem>
                <FormItem label="Credit Status" :label-width="150">
                    <Input style='width:250px;'></Input>
                </FormItem>
                <FormItem label="Posting Date" :label-width="150">
                    <Input style='width:250px;'></Input>
                </FormItem>
                <FormItem label="Request. Deliv. Date" :label-width="150">
                    <Input style='width:250px;'></Input>
                </FormItem>
                <FormItem label="Created At" :label-width="150">
                    <Input style='width:250px;'></Input>
                </FormItem>
                <FormItem label="Net Value" :label-width="150">
                    <Input style='width:250px;'></Input>
                </FormItem>
                <FormItem label="Tax Amount" :label-width="150">
                    <Input style='width:250px;'></Input>
                </FormItem>
                <FormItem label="Gross Value" :label-width="150">
                    <Input style='width:250px;'></Input>
                </FormItem>
            </Form>
            <div class='loui-search-btn'> 
                <button class='loui-search-clear' @click='clear()'>Clear</button>
                <button class='loui-search-search' @click='search()'>Search</button>
            </div>
        </div>   
        <br>
        <Table :columns="columns" :data="data" style='margin-bottom:20px;'></Table> -->
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
            total:0,
            seen:false,
            sum:0,
            columns: [
                {
                    title: 'Item',
                    key: 'Item'
                },
                {
                    title: 'Material',
                    key: 'Material'
                },
                {
                    title: 'Descritpion',
                    key: 'Descritpion'
                },
                {
                    title:'Order Quantity',
                    key:'Order'
                },
                {
                    title:'Sales Uinit',
                    key:'Sales'
                },
                {
                    title:'High Level Item',
                    key:'High'
                },
                {
                    title:'Net Price',
                    key:'Price'
                },
                {
                    title:'Amount',
                    key:'Amount'
                },
                {
                    title: 'operation',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'warning',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.info(params.row)
                                    }
                                }
                            }, 'open')
                        ])
                    }
                }
            ],
            data: [
                {
                    Item: 'item',
                    Material: 'material',
                    Descritpion: 'descritpion',
                    Order: 'order',
                    Sales:'salesUinit',
                    High:'High Level Item',
                    Price:'Net Price',
                    Amount:'amount'
                }
            ],
            columns1: [
                {
                    title: 'Partner Function',
                },
                {
                    title: 'Partner',
                },
                {
                    title: 'Name',
                },
                {
                    title: 'Street',
                },
                {
                    title:'Post Code'
                },
                {
                    title:'City'
                }
            ],
            data1:[],
            columns2: [
                {
                    title:'Document Number',
                    key:'Document'
                },
                {
                    title:'Item',
                    key:'Item'
                },
                {
                    title:'Quantity',
                    key:'Quantity'
                },
                {
                    title:'Unit',
                    key:'Unit'
                },
                {
                    title:'Create On',
                    key:'Create'
                },
                {
                    title:'Mateiral',
                    key:'Mateiral'
                },
                {
                    title:'Mateiral Desctription',
                    key:'Desctription'
                },
                {
                    title:'Status',
                    key:'Status'
                }
            ],
            data2: [
                {
                Document: 'Document Number',
                Item: 'item',
                Quantity: 'quantity',
                Unit: 'unit',
                Create: 'create On',
                Mateiral:'mateiral',
                Desctription:'mateiral Desctription',
                Status:'status'
            }],
            columns3: [
                {
                    title:'Document Number',
                    key:'Document'
                },
                {
                    title:'Item',
                    key:'Item'
                },
                {
                    title:'Quantity',
                    key:'Quantity'
                },
                {
                    title:'Unit',
                    key:'Unit'
                },
                {
                    title:'Reference Vaule',
                    key:'Reference'
                },
                {
                    title:'Create On',
                    key:'Create'
                },
                {
                    title:'Mateiral',
                    key:'Mateiral'
                },
                {
                    title:'Mateiral Desctription',
                    key:'Desctription',
                    width:'180'
                },
                {
                    title:'Status',
                    key:''
                }],
            data3: [
                {
                Document: 'Document Number',
                Item: 'item',
                Quantity: 'quantity',
                Unit: 'unit',
                Reference:'reference',
                Create: 'create On',
                Mateiral:'mateiral',
                Desctription:'mateiral Desctription',
                Status:'status'
            }],
            columns4:[
                {
                    title:'Notes ID',
                    key:'Notes'
                },
                {
                    title:'Language',
                    key:'Language'
                },
                {
                    title:'Comments',
                    key:'Comments'
                }
            ],
            data4:[],
            columns5:[
                {
                    title:'Delivery Date',
                    key:'Delivery'
                },
                {
                    title:'Order Quantity',
                    key:''
                },
                {
                    title:'Confirmed Quantity',
                    key:''
                },
                {
                    title:'Sales Unit',
                    key:''
                },
                {
                    title:'Delivery Block',
                    key:''
                },
                {
                    title:'Delivery Quantity',
                    key:''
                },
                {
                    title:'Schedule Line Catetory',
                    key:''
                },
                {
                    title:'Purchase Requistion',
                    key:''
                },
                {
                    title:'Purchase Item',
                    key:''
                }
            ],
            data5:[],
            columns6:[
                {
                    title:'Document',
                    key:''
                },
                {
                    title:'Quantity',
                    key:''
                },
                {
                    title:'Unit',
                    key:''
                },
                {
                    title:'Reference Value',
                    key:''
                },

                {
                    title:'Currency',
                    key:''
                },
                {
                    title:'Create On',
                    key:''
                },
                {
                    title:'Status',
                    key:''
                }
            ],
            data6:[]
        }
    },
    methods:{
        clear() {
            alert('Clear')
        },
        search() {
            alert('Search')
        },
        
        info(row) {
            console.log(row)
            this.seen=!this.seen;
            // this.seen = true;
            if(this.seen==false){this.$refs.seenmsg.style='display:block'}
            if(this.seen==true){this.$refs.seenmsg.style='diplay:none'}
        },

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
        color: #465dd4;
        background: #fff;
        border: 1px solid #465DD4;
    }

    .loui-search-filed .loui-search-btn button {
        width: 5rem;
        height: 2rem;
        border-radius: 2px;
        cursor: pointer;
    }

    .loui-search-filed .loui-search-btn .loui-search-search {
        color: #fff;
        background: #465dd4;
        border: 1px solid #465DD4;
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
           border:1px solid #465dd4;
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
    

