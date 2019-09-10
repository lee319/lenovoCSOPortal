<template>
    <div>
        <!-- 搜索 -->
        <!-- <div class='loui-search-filed'></div>  -->
        <div class="layout-order-search">
            <Form :model="search" label-position="right" inline>
                <FormItem label="User ID" :label-width="100">
                    <Input v-model='search.salesOrderId' style='width:250px;'></Input>
                </FormItem>
                <FormItem label="Name" :label-width="100">
                    <Input v-model='search.soldToPartyId' style='width:250px;'></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="query()">User</Button>
                </FormItem>
                <FormItem :label-width="10">
                    <Button type="default" @click="newUser()">NewUser</Button>
                </FormItem>
            </Form>
        </div>
        
        <!-- 修改 -->
        <div class="layout-distribute-edit">
            <Modal v-model="modalEdit" title="Edit" width='600'>
                <div slot="footer">
                    <a @click="editCancel" class="span">取消</a>
                    <Button @click="editOk" type="primary">确定</Button>
                </div>
                <Form :model="edit" label-position="right" :label-width="170" :rules="ruleValidate" ref="formEdit">
                    <FormItem label="Login Name:" prop='loginName'>
                        <Input v-model="edit.loginnane" placeholder="User ID..." style='width:300px;' disabled></Input>
                    </FormItem>
                    <FormItem label="Name:" prop='name'>
                        <Input  placeholder="Name..." style='width:300px;'></Input>
                    </FormItem>
                    <FormItem label="Email:" prop='email'>
                        <Input placeholder="Email..." style='width:300px;'></Input>
                    </FormItem>
                    <FormItem label="Phone:">
                        <Input placeholder="Phone..." style='width:300px;'></Input>
                    </FormItem>
                    <FormItem label="Mobile Phone:">
                        <Input placeholder="Mobile Phone..." style='width:300px;'></Input>
                    </FormItem>
                    <FormItem label="Time Zone:">
                        <Select  style="width:300px" aria-placeholder="Time Zone...">
                            <Input suffix="ios-search" placeholder="Enter text" style="width: auto" />
                            <Option value="">Please Select</Option>
                            <Option :value="1">CET-Central Europe</Option>
                            <Option :value="2">CST-Central Standard Time(USA)</Option>
                            <Option :value="1">EST-Eastern Time(Nwe York)</Option>
                            <Option :value="1">UTC+8-BI Time</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="Whether to allow login:">
                        <Select  style="width:300px" aria-placeholder="Time Zone...">
                            <Input suffix="ios-search" placeholder="Enter text" style="width: auto" />
                            <Option value="">Yes</Option>
                            <Option :value="1">No</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="User Role:">
                        <CheckboxGroup>
                            <Checkbox label="Admin"></Checkbox>
                            <Checkbox label="Audit"></Checkbox>
                            <Checkbox label="Business Admin"></Checkbox>
                            <Checkbox label="Business Partner"></Checkbox>
                            <Checkbox label="Finance"></Checkbox>
                        </CheckboxGroup>
                    </FormItem>
                    <FormItem label="Remarks:">
                        <Input v-model="edit.Remarks" type="textarea" :rows="4" placeholder="Remarks..."  style='width:300px;'></Input>
                    </FormItem>
                    <FormItem label='Create Date'>
                        <Time :time="time2" type="datetime" />
                    </FormItem>
                </Form>
            </Modal>
        </div>
        <div style='clear:both'></div>
        <!-- 表格 -->
        <div class='loui-list-filed'>
            <Table :columns="columns1" :data="data1" style='margin-bottom:20px;'></Table>
        </div>
        <!-- 分页 -->
        <div class="layout-order-page">
            <Page :total="total" :current="page" :page-size="pageSize" @on-change="changePage" show-elevator />
        </div>
    </div>
</template>

<script>
 var moment = require("moment");
    export default {
        data() {
            return {
                search: {},//搜索
                edit: {}, //修改
                modalEdit:false,//修改弹框
                // 分页
                total:0,
                pageSize:20,
                page:1,
                //验证
                ruleValidate: {
                    loginName: [
                        { required: true, message: 'loginName...', trigger: 'blur' }  
                    ],
                    Name: [
                        { required: true, message: 'name...', trigger: 'blur' }
                    ],
                    email: [
                        { required: true, message: 'email...', trigger: 'blur'}
                    ]
                },
                // 相对时间
                time2: (new Date()).getTime() - 86400 * 3 * 1000,
                columns1:[
                    {
                       title: 'User ID',
                        key: 'id',
                    },
                    {
                        title:'Name',
                        key:''
                    },
                    {
                        title:'Email',
                        key:''
                    },
                    {
                        title:'Mobile Phone',
                        key:''
                    },
                    {
                        title:'Assigned Roles',
                        key:''
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
                                        title:'您确定要删除吗?',
                                        type:'error',
                                        size:'small',
                                        width:'150',
                                        placement:'top'
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
                data1:[
                    {
                        id:1
                    }
                ]
            }
        },
        methods: {
            query() {
                console.log('search')
            },
            newUser() {
                console.log('newUser')
            },
            // 分页
            changePage(page) {
                this.page = page;
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

            }
        }
    }
</script>

<style lang="scss" scoped>
    .layout-order-page {
        float: right;
        margin-top: 10px;
    }

    .ivu-table th,
    .ivu-table td {
        height: 40px;
    }
</style>