<template>
    <div class='tabs' style='margin-top:20px;'>
        <!-- <ul class='list_nav'>
            <li v-for='(item,index) in list' :key='index' :class="{'active':index===sum}" @click='tabs(index)'>{{item.title}}</li>
        </ul> -->  
        <table class="loui-table" lay-skin="nob" lay-size="lg" v-for='(file,index) in list' :key='index' v-if='index===sum'>
            <thead>
                <tr>
                    <th v-for='(files,ind) in file.columns3' :key='ind'>{{files.title}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for='(items,index) in file.data' :key='index'>
                    <td>{{items.Document}}</td>
                    <td>{{items.Item}}</td>
                    <td>{{items.Quantity}}</td>
                    <td>{{items.Unit}}</td>
                    <td>{{items.Create}}</td>
                    <td>{{items.Mateiral}}</td>
                    <td>{{items.Desctription}}</td>
                    <td>{{items.Status}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name:'parties',
        data() {
            return{
                sum:0,
                list:[{
                    title:"Parties Involved",
                },
                {
                    title:"Shipping",
                    columns3: [
                        {
                            title:'Document Number',
                            key:''
                        },
                        {
                            title:'Item',
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
                            title:'Create On',
                            key:''
                        },
                        {
                            title:'Mateiral',
                            key:''
                        },
                        {
                            title:'Mateiral Desctription',
                            key:''
                        },
                        {
                            title:'Status',
                            key:''
                        }
                    ],
                    data: [
                        {
                        Document: 'Document Number',
                        Item: 'item',
                        Quantity: 'quantity',
                        Unit: 'unit',
                        Create: 'create On',
                        Mateiral:'mateiral',
                        Desctription:'mateiral Desctription',
                        Status:'status'
                    }]
                },
                {
                    title:"Billing",
                    columns3: [
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
                ]},
                {
                    title:'Notes'
                },
                {
                    title:'Schedule Lines'
                },
                {
                    title:'Document Flow'
                }]
            }
        },
        methods:{
            tabs(i) {
                this.sum = i;
            },
        }
    }
</script>

<style lang="scss" scoped>
  .loui-icon {
        font-family: loui-icon !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .loui-icon-add-circle:before {
        content: "\e61f";
    }

    .loui-table {
        width: 100%;
        background-color: #fff;
        color: #333;
    }

    .loui-table, .loui-table-view {
        margin: 10px 0;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    .loui-table thead tr, .loui-table-header, .loui-table-hover, .loui-table-mend, .loui-table-patch, .loui-table-tool, .loui-table-total, .loui-table-total tr, .loui-table[lay-even] tr:nth-child(even) {
        background-color: #f7f7f7;
    }

    .loui-table[lay-size=lg] th {
        padding: 14px 30px;
    }
    
    .loui-table[lay-skin=nob] td, .loui-table[lay-skin=nob] th {
        border: none;
    }

    .loui-table td, .loui-table th {
        position: relative;
        padding: 9px 15px;
        min-height: 20px;
        line-height: 20px;
        font-size: 14px;
    }

    .loui-table th {
        text-align: left;
        font-weight: bold;
        color: #959595;
    }

    // .loui-table img {
    //     max-width: 100px;
    // }

    .loui-pointer {
        cursor: pointer;
    }

    .loui-ml5 {
        margin-left: 5px;
    }

    .loui-btn, .loui-edge, .loui-inline, img {
        vertical-align: middle;
    }

    .loui-inline, img {
        display: inline-block;
        vertical-align: middle;
    }

    .loui-table tbody tr:hover {
        background-color: #eee;
    }

    table[lay-size=lg] td {
        padding: 22px 30px;
    }

    .loui-table[lay-skin=nob] td, .loui-table[lay-skin=nob] th {
        border: none;
    }

    .loui-icon-blue {
        color: #465dd4;
    }

    .loui-icon {
        font-family: loui-icon !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .loui-icon-more-vertical:before {
        content: "\e671";
    }

    .loui-table tbody tr {
        background: #fbfbfb;
    }

    .loui-table tbody tr.loui-table-click {
        background: rgba(24, 144, 255, 0.1);
    }

    .loui-table .loui-table-tr-noChecked {
        cursor: not-allowed;
        color: #c5c8ce;
    }

    .list_nav{
       width:100%;
       height:40px;
       display: flex;
       justify-content: space-between;
       margin-bottom:10px;
       li{
           flex:1;
           line-height: 40px;
           background:#E9E9E9;
            // background: #E9E9E9;
           color:#f5f8ff;
           text-align: center;
           margin:0 3px;
           color:#333;
           font-size:18px;
       }
       .active{
           background:#fff;
           color:#465dd4;
           font-size:18px;
       }
   }
</style>

