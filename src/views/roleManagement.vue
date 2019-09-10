<template>
    <div>
         <div class="layout-order-search">
            <Form label-position="right" inline>
                <FormItem>
                    <Button type="primary" @click="newRole()">New Role</Button>
                </FormItem>
            </Form>
        </div>
        <!-- 分配 -->
        <div class="layout-distribute-assign">
            <Modal v-model="modalAssign" title="Assign" width='1200'>
                <div slot="footer">
                    <a @click="AssignCancel" class="span">取消</a>
                    <Button @click="AssignOk" type="primary">确定</Button>
                </div>
                <!-- 子表格按钮弹框 -->
                <div class="layout-order-search">
                    <Form label-position="right" inline>
                        <FormItem>
                            <Button type="primary" @click="AssignRole()">Assign Role</Button>
                        </FormItem>
                    </Form>
                </div>
                <!-- 子列表弹框 -->
                <Modal v-model="modalRole" title="Assign" width='600'>
                    <div slot="footer">
                    <a @click="AssignCancel" class="span">取消</a>
                    <Button @click="AssignOk" type="primary">确定</Button>
                </div>
                
                </Modal>
                <div class='loui-list-filed'>
                    <Table :columns="columns2" :data="data2" style='margin-bottom:20px;'></Table>
                </div>
            </Modal>
        </div>
        <!-- 修改 -->
        <div class="layout-distribute-edit">
            <Modal v-model="modalEdit" title="Edit" width='800'>
                <div slot="footer">
                    <a @click="editCancel" class="span">取消</a>
                    <Button @click="editOk" type="primary">确定</Button>
                </div>
                <Form :model="edit" label-position="right" :label-width="170" :rules="ruleValidate" ref="formEdit">
                    <FormItem label="Role Name:" prop='RoleName'>
                        <Input v-model="edit.RoleName" placeholder="Role Name..." style='width:500x;' disabled></Input>
                    </FormItem>
                    <FormItem label="Whether to allow login:">
                        <Select  style="width:500x" aria-placeholder="Time Zone...">
                            <Input suffix="ios-search" placeholder="Enter text" style="width: auto" />
                            <Option value="">Yes</Option>
                            <Option :value="1">No</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="Whether available:">
                        <Select  style="width:500x" aria-placeholder="Whether available...">
                            <Input suffix="ios-search" placeholder="Enter text" style="width: auto" />
                            <Option value="">Yes</Option>
                            <Option :value="1">No</Option>
                        </Select>
                    </FormItem>
                    <FormItem label='Role authorization'>
                        <Tree :data="data3" show-checkbox></Tree>
                    </FormItem>
                    <FormItem label='Org authorization'>
                        <Select  multiple :max-tag-count="2"  style="width:500x">
                            <!-- <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option> -->
                        </Select>
                    </FormItem>
                    <FormItem label="Remarks:">
                        <Input v-model="edit.Remarks" type="textarea" :rows="4" placeholder="Remarks..."  style='width:500x;'></Input>
                    </FormItem>
                </Form>
            </Modal>
        </div>
        <!-- 表格 -->
        <div class='loui-list-filed'>
            <Table :columns="columns1" :data="data1" style='margin-bottom:20px;'></Table>
        </div>
    </div>
</template>

<script>
    var moment = require("moment");
    export default {
        data() {
            return {
                assign:{},//分配
                modalAssign:false,//分配弹框
                edit: {},//修改
                modalEdit:false,//修改弹框
                modalRole:false,//子列表弹框
                //验证
                ruleValidate: {
                    RoleName: [
                        { required: true, message: 'RoleName...', trigger: 'blur' }  
                    ]
                },
                columns1: [
                    {
                        title:'Role Name',
                        key:'name'
                    },
                    {
                        title:'Available',
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
                                            this.Assign(params.row)
                                        }
                                    }
                                },'Assign'),
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
                                h(
                                    "Poptip", {
                                        props: {
                                            confirm: true,
                                            title: "确定要删除吗！",
                                            type: "error",
                                            size: "small",
                                            width: "150",
                                            placement:'bottom'
                                        },
                                        on: {
                                            "on-ok": () => {
                                                this.remove(params.row);
                                            }
                                        }
                                    }, [
                                        h(
                                            "Button", {
                                                props: {
                                                    type: "error",
                                                    size: "small",
                                                }
                                            },
                                            "Remove"
                                        )
                                    ]
                                )

                            ])
                        }
                    }
                ],
                data1:[
                    {
                        name:1
                    }
                ],
                columns2:[
                    {
                        title:'Login name',
                        key:'name'
                    },
                    {
                        title:'User name',
                        key:''
                    },
                    {
                        title:'Telephone',
                        key:''
                    },
                    {
                        title:'Mobile phone',
                        key:''
                    },
                    {
                    title:'Operation',
                    render: (h,params) => {
                        return h('div',[
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
                                        this.Delete(params.index);
                                    }
                                }
                            },[
                                h("Button",{
                                    props:{
                                        type:'error',
                                        size:'small'
                                    }
                                },'Delete')
                            ])
                        ])
                    }
                }
                ],
                data2:[
                    {
                        name:'Admin'
                    }
                ],
                data3: [
                    {
                        title: 'parent 1',
                        expand: true,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1'
                                    },
                                    {
                                        title: 'leaf 1-1-2'
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1'
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1'
                                    },
                                    {
                                        title: 'leaf 1-1-2'
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1'
                                    },
                                    {
                                        title: 'leaf 1-1-2'
                                    }
                                ]
                            },
                        ]
                    }
                ]
            }
        },
        methods: {
            newRole() {
                
            },
            // 分配
            Assign(row) {
                console.log('分配');
                this.assign = row;
                this.id = row.id;
                this.modalAssign = true;
            },
            // 分配确定按钮
            AssignOk() {
                let self = this;
                this.modalAssign = false;
                this.assign = {};
            },
            // 分配取消按钮
            AssignCancel() {
                this.modalAssign = false;
            },
            // 子列表按钮
            AssignRole() {
                this.AssignRole = true;
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

            },
            // 子表格删除
            Delete(index) {
                let selt =this;
            }

        }
    }
</script>

<style lang="scss" scoped>

</style>