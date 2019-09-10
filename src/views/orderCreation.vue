<template>
    <div class='layout-desktop'>
         <div class='loui-search-filed' style='margin-bottom:20px;padding: 10px 36px 10px 0;'>
            <Button  icon="md-add" type="primary">Download</Button>
            <Button  icon="ios-settings" type="primary">Download</Button>
            <Button  icon="ios-download-outline" type="primary">Download</Button>
         </div>
         <!-- 创建 -->
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
                    <!-- <Input v-model='info.input' style='width:250px;'></Input> -->
                    <Select v-model="info.input" clearable style="width:250px">
                        <Option value="">全部</Option>
                        <Option :value="0">1</Option>
                        <Option :value="1">2</Option>
                    </Select>
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
                    <!-- <Input v-model='info.input' style='width:250px;'></Input> -->
                    <DatePicker type="date" multiple placeholder="Select date" style="width: 250px"></DatePicker>
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
        <!-- 添加 -->
        <div class="layout-distribute-add">
            <div class='loui-search-filed' style='margin:20px 2px;padding: 15px 36px 10px 0;'>
                <Button type="primary" @click="modalAddBtn" style='padding:6px 20px'>Add</Button>
            </div>
            <Modal v-model="modalAdd" title="Add" width='500'>
                <div slot="footer">
                    <a @click="addCancel" class="span">取消</a>
                    <Button @click="addOk" type="primary">确定</Button>
                </div>
                <Form :model="creat" label-position="right" :label-width="120" :rules="ruleValidate" ref="formValidate">
                    <FormItem label="Item:" prop='item'>
                        <Input v-model="creat.item" placeholder="Item..."></Input>
                    </FormItem>
                    <FormItem label="Descritpion:">
                        <Input v-model="creat.item" placeholder="descritpion..."></Input>
                    </FormItem>
                    <FormItem label="Order Quantity:">
                        <Input v-model="creat.item" placeholder="orderQuantity..."></Input>
                    </FormItem>
                    <FormItem label="Sales Uinit:">
                        <Input v-model="creat.item" placeholder="Sales Uinit..."></Input>
                    </FormItem>
                    <FormItem label="high Level Item:">
                        <Input v-model="creat.item" placeholder="high Level Item..."></Input>
                    </FormItem>
                    <FormItem label="Net Price:">
                        <Input v-model="creat.item" placeholder="Net Price..."></Input>
                    </FormItem>
                    <FormItem label="Amount:">
                        <Input v-model="creat.item" placeholder="Amount..."></Input>
                    </FormItem>
                    <!-- <FormItem label="描述:">
                        <Input v-model="creat.name" type="textarea" :rows="4" placeholder="请输入描述..."></Input>
                    <Input v-model='creat.name' type='textarea' :row='4' placeholder='please times home width height edit add'>
                    </FormItem> -->
                </Form>
            </Modal>
        </div>
        <!-- 修改 -->
        <div class="layout-distribute-edit">
            <Modal v-model="modalEdit" title="Edit" width='500'>
                <div slot="footer">
                    <a @click="editCancel" class="span">取消</a>
                    <Button @click="editOk" type="primary">确定</Button>
                </div>
                <Form :model="edit" label-position="right" :label-width="120" :rules="ruleValidate" ref="formEdit">
                    <FormItem label="ID:">
                        <Input v-model="edit.id" placeholder="ID..." style='width:300px;' disabled></Input>
                    </FormItem>
                    <FormItem label="Item:" prop='item'>
                        <Input v-model="edit.item" placeholder="Item..." style='width:300px;'></Input>
                    </FormItem>
                    <FormItem label="Descritpion:">
                        <Input v-model="edit.descritpion" placeholder="Descritpion..." style='width:300px;'></Input>
                    </FormItem>
                    <FormItem label="Order Quantity:">
                        <Input v-model="edit.orderQuantity" placeholder="Order Quantity..." style='width:300px;'></Input>
                    </FormItem>
                    <FormItem label="Sales Uinit:">
                        <Input v-model="edit.salesUinit" placeholder="Sales Uinit..." style='width:300px;'></Input>
                    </FormItem>
                    <FormItem label="high Level Item:">
                        <Input v-model="edit.highLevelItem" placeholder="high Level Item..." style='width:300px;'></Input>
                    </FormItem>
                    <FormItem label="Net Price:">
                        <Input v-model="edit.netPrice" placeholder="Net Price..." style='width:300px;'></Input>
                    </FormItem>
                    <FormItem label="Amount:">
                        <Input v-model="edit.amount" placeholder="Amount..." style='width:300px;'></Input>
                    </FormItem>
                    <!-- <FormItem label="描述:">
                        <Input v-model="edit.name" type="textarea" :rows="4" placeholder="请输入描述..."></Input>
                    </FormItem> -->
                </Form>
            </Modal>
        </div>
        <div style='both:clear;'></div>
        <!-- <div class='loui-search-filed' style='margin-bottom:20px;padding: 10px 36px 10px 0;'>
            <Button  icon="md-add" type="primary">Download</Button>
         </div> -->

        <Table :columns="columns" :data="data" style='margin-bottom:20px;'></Table>
        <div class="layout-user-page">
            <Page :total="total" :page-size="pageSize" @on-change="changePage" show-elevator />
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {
            // 创建
            info:{
                input:''
            },
            // 添加
            creat:{},
            // 修改
            edit:{},
            modalAdd:false,// 添加弹框
            modalEdit:false,//修改弹框
            // 分页
            total:0,
            pageSize:20,
            page:1,
            //验证
                ruleValidate: {
                    item: [
                        { required: true, message: 'item...', trigger: 'blur' }
                    ]
                },
            columns: [
                {
                    type: 'index',
                    width: 70,
                    title: 'Id'
                },
                {
                    title:'Item',
                    key:'item',
                    width:80
                },
                {
                    title:'Descritpion',
                    key:'descritpion',
                    // ellipsis:true//省略号
                },
                {
                    title:'Order Quantity',
                    key:'orderQuantity'
                },
                {
                    title:'Sales Uinit',
                    key:'salesUinit'
                },
                {
                    title:'high Level Item',
                    key:'highLevelItem'
                },
                {
                    title:'Net Price',
                    key:'netPrice'
                },
                {
                    title:'Amount',
                    key:'amount'
                },
                {
                    title:'Operation',
                    render: (h,params) => {
                        return h('div',[
                            h("Button", {
                                props:{
                                    type: 'primary',
                                    size: 'small'
                                },
                                style:{
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.modify(params.row)
                                    }
                                }
                            },'Edit'),
                            h('Poptip', {
                                props: {
                                    confirm: true,
                                    // title:'Are you sure delete this task?',
                                    title:'您确定要删除吗?',
                                    type:'error',
                                    size:'small',
                                    width:'150',
                                    placement:'bottom'
                                },
                                on: {
                                    'on-click': () => {
                                        this.remove(params.index);
                                    }
                                }
                            },[
                                h("Button",{
                                    props:{
                                        type:'error',
                                        size:'small'
                                    }
                                },'Remove')
                            ])
                        ])
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
                
            ]
        }
    },
    methods:{
        // 清除
        clear() {
            alert('Clear')
        },
        // 搜索
        search() {
            alert('Search')
        },
        // 分页
        changePage(page) {
            this.page = page;
        },
        //添加确定按钮
        modalAddBtn() {
            this.modalAdd = true;
            
        },
        // 添加取消
        addCancel() {
            this.info = {};
            this.modalAdd = false;
        },
        // 添加确定
        addOk() {
            let self = this;
            // 表单验证
            var isValid = true;
            self.$refs['formValidate'].validate(valid => {
                if (valid == false) {
                    this.$Message.error('表单输入有误,请检查!')
                    isValid = false;
                }
            })
            if (isValid == false) {
                return
            }
            this.info = {};
            this.modalAdd = false;
            // self.$http.post(this.config.BaseURL + '/staticpromotion/desktop/save', self.info).then(response => {
            //     console.log(response)
            //     if (response.data.code == 200) {
            //         this.getTableList();
            //         this.$Message.success("添加成功!")
            //     }
            // })
        },
        // 修改
        modify (row) {
            console.log(row)
            this.edit = row;
            this.id = row.id;
            this.modalEdit = true;
        },
        // 修改确定按钮
        editOk () {
            let self = this;
            // 表单验证
            var isValid = true;
            self.$refs['formEdit'].validate(valid => {
                if (valid == false) {
                    this.$Message.error('表单输入有误,请检查!');
                    isValid = false;
                }
            })
            if (isValid == false) {
                return
            }
            this.modalEdit = false;
            this.edit = {};
            this.$Message.success('修改成功!')
            //   self.$http.post(this.$config.BaseURL7 + '/media/v2/distribute/modify', self.edit).then(response => {
            //     console.log(response, 'response')
            //     if (response.data.errno == 10000) {
            //       this.modalEdit = false
            //       this.edit = {}
            //       this.getTableList()
            //       this.$Message.success('修改成功！')
            //     }
            //   })
        },
        // 修改取消按钮
        editCancel () {
        //   this.getTableList()
            this.edit = {};
            this.modalEdit = false;
        },
        // 删除    
       remove(index) {
        let self = this;
        // self.$http(this.$config.BaseURL + '/staticpromotion/desktop/delete?id=' + self.data1[index].id).then(response => {
        //     if (response.data.errno == 10000) {
        //         this.$Message.success("删除成功");
        //         this.getTableList();
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
    .span {
        font-size: 14px;
        margin: 15px;
        color: #495060;
        padding-bottom: 20px;
    }
    .layout-user-page {
        float: right;
        margin-top: 10px;
    }
</style>
  