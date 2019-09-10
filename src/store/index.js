import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        // 左侧菜单栏数据
        menuItems: [
            {
                name: 'home', // 要跳转的路由名称，不是路径
                size: 18, // icon大小
                type: 'md-home', // icon类型
                text: 'Home' // 文本内容
            },
            {
                name: 'worklist', //工作列表
                size: 18, 
                type: 'logo-buffer', 
                text: 'Worklist'
            },
            {
                text: 'Order Management',//订单管理
                type: 'ios-paper',
                children: [
                    {
                        type: 'ios-notifications-outline',
                        name: 'orderCreation',
                        text: 'Order Creation'//订单创建
                    },
                    {
                        type: 'md-lock',
                        name: 'memo',
                        text: 'Credit/Debit Memo Creation'//
                    },
                    {
                        type: 'md-pie',
                        name: 'orderRetrun',
                        text: 'Order Retrun'//订单重试
                    },
                    {
                        type: 'ios-grid',
                        name: 'orderCancel',
                        text: 'Order Cancel'//取消订单
                    },
                    {
                        type: 'ios-stats',
                        name: 'orderQuery',
                        text: 'Order Query'//订单查询
                    },
                    {
                        type: 'ios-stats',
                        name: 'orderDetails',
                        text: 'Order Details'//订单明细
                    }
                ]
            },
            {
                size: 18, 
                type: 'ios-paper', 
                text: 'Billing Management',//账单管理
                children:[
                    {
                        type: 'ios-notifications-outline',
                        name: 'billingQuery',
                        text: 'Billing Query'  //账单查询
                    },
                    {
                        type: 'md-person',
                        name: 'invoiceDownload',
                        text: 'Invoice Download'//发票下载
                    }
                ]
            },
            {
                size: 18, 
                type: 'md-trending-up', 
                text: 'Pring Management',//pring管理
                children:[
                    {
                        type: 'ios-notifications-outline',
                        name: 'priceQuery',
                        text: 'Price Query'  //价格查询
                    }
                ]
            },
            {
                size: 18, 
                type: 'ios-notifications-outline', 
                text: 'Catalog Mangement', //目录管理
                children:[
                    {
                        // type: 'ios-notifications-outline',
                        name: 'materialQuery',
                        text: 'Material Query'  //材料查询
                    }
                ]
            },
            {
                size: 18,
                text: 'Config Management',//配置管理
                type: 'ios-paper',
                children: [
                    {
                        size: 18,
                        type: 'ios-person-outline',
                        name: 'userManagement',
                        text: 'UserManagement'//用户管理
                    },
                    {
                        size: 18,
                        type: 'ios-cog-outline',
                        name: 'menuManagement',
                        text: 'MenuManagement'//菜单管理
                    },
                    {
                        size: 18,
                        type:'ios-cog-outline',
                        name: 'roleManagement',
                        text: 'RoleManagement' //角色管理
                    }
                ]
            },
        ],
    },
    mutations: {
        setMenus(state, items) {
            state.menuItems = [...items]
        },
    }
})

export default store