<style>
    .layout-order-page {
        float: right;
        margin-top: 20px;
    }

    .ivu-table th,
    .ivu-table td {
        height: 40px;
    }
</style>
<template>
    <div class="layout-order">
        <!-- 搜索 -->
        <div class="layout-order-search">
            <Form :model="search" label-position="left" inline>
                <FormItem label="userID:" :label-width="60">
                    <Input v-model="search.userId" placeholder="..." style="width: 200px;"></Input>
                </FormItem>
                <FormItem label=" orderId:" :label-width="60">
                    <Input v-model="search.orderId" placeholder="..." style="width: 200px;"></Input>
                </FormItem>
                <FormItem label="status:" :label-width="50">
                    <Select v-model="search.status" style="width:200px" placeholder="...">
                        <Option value="">全部</Option>
                        <Option :value="1">未支付</Option>
                        <Option :value="2">已支付</Option>
                    </Select>
                </FormItem>
                <FormItem label="createTime:" :label-width="80">
                    <DatePicker type="datetimerange" placement="bottom-end" placeholder="..."
                        style="width: 200px" v-model="timer"></DatePicker>
                </FormItem>
                <FormItem label="nickname:" :label-width="70">
                    <Input v-model="search.nickname" placeholder="..." style="width: 200px;"></Input>
                </FormItem>
                <FormItem label="goodsName:" :label-width="80">
                    <Input v-model="search.goodsName" placeholder="..." style="width: 200px;"></Input>
                </FormItem>
                <FormItem label="goodsClass:" :label-width="80">
                    <Select v-model="search.goodsClass" style="width:200px" placeholder="...">
                        <Option value="">全部</Option>
                        <Option :value="1">1</Option>
                        <Option :value="2">2</Option>
                    </Select>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="query()">search</Button>
                </FormItem>
                <FormItem :label-width="95">
                    <Button type="success" @click="downloadExcel">导出excel</Button>
                </FormItem>
            </Form> 
        </div>
        <!-- 表格 -->
        <div class="layout-order-table">
            <Table border :columns="columns1" :data="data1"></Table>
        </div>
        <!-- 详情 -->
        <div class='layout-order-info'>
            <Modal v-model="modalInfo" title='订单详情' width="700">
                <Row>
                    <Col span="12">
                    <p>
                        ID:{{details.id}}
                    </p>
                    </Col>
                    <Col span="12">
                    <p>
                        orderId:{{details.orderId}}
                    </p>
                    </Col>
                    <Col span="12">
                    <p>
                        goodsClass:{{details.goodsClass}}
                    </p>
                    </Col>
                    <Col span="12" v-show="true ? details.contentId != '' : details.contentId == ''">
                    <p>
                        contentId:{{details.contentId}}
                    </p>
                    </Col>
                    <Col span="12">
                    <p>
                        goodsName:{{details.goodsName}}
                    </p>
                    </Col>
                    <Col span="12">
                    <p>
                        userId:{{details.userId}}
                    </p>
                    </Col>
                    <Col span="12">
                    <p>
                        nickname:{{details.nickname}}
                    </p>
                    </Col>
                    <Col span="12">
                    <p>
                        orgPrice:{{details.orgPrice}}
                    </p>
                    </Col>
                    <Col span="12">
                    <p>
                        price:{{details.price}}
                    </p>
                    </Col>
                    <Col span="12">
                    <p>
                        createTime:{{details.IscreateTime}}
                    </p>
                    </Col>
                    <Col span="12">
                    <p>
                        Isstatus:{{details.Isstatus}}
                    </p>
                    </Col>
                    <Col span="12">
                    <p>
                        paymentMethod:{{details.paymentMethod}}
                    </p>
                    </Col>
                    <Col span="12">
                    <p>
                        transactionId:{{details.transactionId}}
                    </p>
                    </Col>
                    <Col span="12">
                    <p v-if="details.status !=1">
                        IspayTime:{{details.IspayTime}}
                    </p>
                    </Col>
                    <Col span="12">
                    <p>
                        state:{{details.state}}
                    </p>
                    </Col>
                </Row>
            </Modal>
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
        name:'order',
        data() {
            return {
                //搜索
                search: {
                    userId: '',
                    orderId: '',
                    status: '',
                    createTimeStart: '',
                    createTimeEnd: '',
                    nickname: '',
                    goodsName: '',
                    goodsClass: '',
                },
                timer: [],
                //详情
                modalInfo: false,
                details: {},
                //分页
                pageSize: 30,
                page: 1,
                total: 0,
                columns1: [
                    {
                        title: 'orderId',
                        key: 'orderId',
                        align: 'center'
                    },
                    {
                        title: 'goodsClass',
                        key: 'goodsClass',
                        align: 'center'
                    },
                    {
                        title: 'goodsName',
                        key: 'goodsName',
                        align: 'center'
                    },
                    {
                        title: 'userId',
                        key: 'userId',
                        align: 'center'
                    },
                    {
                        title: 'nickname',
                        key: 'nickname',
                        align: 'center'
                    },
                    {
                        title: 'price',
                        key: 'price',
                        align: 'center'
                    },
                    {
                        title: 'Isstatus',
                        key: 'Isstatus',
                        align: 'center'
                    },
                    {
                        title: 'state',
                        key: 'state',
                        align: 'center'
                    },
                    {
                        title: 'IscreateTime',
                        key: 'IscreateTime',
                        align: 'center'
                    }, 
                    {
                        title: 'operation',
                        align: 'center',
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
                                }, 'details')
                            ])
                        }
                    }
                ],
                data1: [
                    {
                        userId:'123',
                        nickname:'lee'
                    }
                ]
            }
        },
        methods: {
            //列表数据
            getTableList() {
                let self = this;
                //开始时间
                let createTimeStart = moment(self.timer[0]).format("X");
                //结束时间
                let createTimeEnd = moment(self.timer[1]).format("X");

                if (this.search.status == undefined) {
                    this.search.status = ""
                }
                if (isNaN(createTimeStart)) {
                    createTimeStart = ''
                }
                if (isNaN(createTimeEnd)) {
                    createTimeEnd = ''
                }
                // self.$http(this.$config.BaseURL10 + '/order/list?userId=' + self.search.userId + '&orderId=' + self.search.orderId + '&status=' +
                //     self.search.status + '&nickname=' + self.search.nickname + '&goodsName=' + self.search.goodsName + '&goodsClass=' +
                //     self.search.goodsClass + '&page=' + self.page + '&pageSize=' + self.pageSize + '&createTimeStart=' + createTimeStart
                //     + '&createTimeEnd=' + createTimeEnd).then(response => {
                //         console.log(response)
                //         if (response.data.errno == 10000) {
                //             this.data1 = response.data.data.list;
                //             this.total = response.data.data.total;
                //             response.data.data.list.forEach(val => {
                //                 //1、未支付  2、成功  3、失败
                //                 if (val.status == 1) {
                //                     val.Isstatus = '未支付'
                //                 } else if (val.status == 2) {
                //                     val.Isstatus = '已支付'
                //                 } else if (val.status == 3) {
                //                     val.Isstatus = '支付失败'
                //                 };
                //                 // //支付方式  1、微信
                //                 if (val.payment == 1) {
                //                     val.Ispayment = '微信'
                //                 }
                //                 //同步状态：1 未同步，2 同步中，3 完成同步， 4 同步失败
                //                 if (val.iqiyiStatus == 1) {
                //                     val.state = '未同步'
                //                 } else if (val.iqiyiStatus == 2) {
                //                     val.state = '同步中'
                //                 } else if (val.iqiyiStatus == 3) {
                //                     val.state = '完成同步'
                //                 } else if (val.iqiyiStatus == 4) {
                //                     val.state = '同步失败'
                //                 }
                //                 //转换时间
                //                 val.IscreateTime = moment(val.createTime * 1000).format(
                //                     "YYYY-MM-DD HH:mm:ss"
                //                 )
                //             });
                //         }
                //     })

            },
            //分页
            changePage(page) {
                this.page = page;
                this.getTableList()
            },
            //查询
            query() {
                this.page = 1;
                this.getTableList();
            },
            //导出excel
            downloadExcel() {
                let self = this;
                //开始时间
                let createTimeStart = moment(self.timer[0]).format("X");
                //结束时间
                let createTimeEnd = moment(self.timer[1]).format("X");

                if (this.search.status == undefined) {
                    this.search.status = ""
                }
                if (isNaN(createTimeStart)) {
                    createTimeStart = ''
                }
                if (isNaN(createTimeEnd)) {
                    createTimeEnd = ''
                }
                window.open(this.$config.BaseURL10 + '/order/export?userId=' + self.search.userId + '&orderId=' + self.search.orderId
                    + '&search.status=' + self.search.status + '&nickname=' + self.search.nickname + '&search.goodsName=' + self.search.goodsName
                    + '&goodsClass=' + self.search.goodsClass + '&createTimeStart=' + createTimeStart + '&createTimeEnd=' + createTimeEnd, '_blank')
            },
            //详情
            info(row) {
                console.log(row)
                this.details = row;
                this.modalInfo = true;
                //1、未支付  2、成功  3、失败
                if (row.status == 1) {
                    row.Isstatus = '未支付'
                } else if (row.status == 2) {
                    row.Isstatus = '已支付'
                } else if (row.status == 3) {
                    row.Isstatus = '支付失败'
                };
                //转换时间
                row.IscreateTime = moment(row.createTime * 1000).format(
                    "YYYY-MM-DD HH:mm:ss"
                );
                row.IspayTime = moment(row.payTime * 1000).format(
                    "YYYY-MM-DD HH:mm:ss"
                );
                //支付方式
                if (row.payment == 1) {
                    row.paymentMethod = '微信'
                }
                //同步状态：1 未同步，2 同步中，3 完成同步， 4 同步失败
                if (row.iqiyiStatus == 1) {
                    row.state = '未同步'
                } else if (row.iqiyiStatus == 2) {
                    row.state = '同步中'
                } else if (row.iqiyiStatus == 3) {
                    row.state = '完成同步'
                } else if (row.iqiyiStatus == 4) {
                    row.state = '同步失败'
                }
            },
        },
        mounted() {
            this.getTableList();
        }
    }


</script>