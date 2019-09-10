<template>
    <div class="login-vue" :style='bg'>
        <div class="container">
            <p class="title">WELCOME</p>
            <div class="input-c">
                <Input prefix="ios-contact" v-model="account" placeholder="用户名" clearable @on-blur="verifyAccount"/>
                <p class="error">{{accountError}}</p>
            </div>
            <div class="input-c">
                <Input type="password" v-model="pwd" prefix="md-lock" placeholder="密码" clearable @on-blur="verifyPwd"/>
                <p class="error">{{pwdError}}</p>
            </div>
            <Button :loading="isShowLoading" class="submit" type="primary" @click="submit">登录</Button>
            <!-- <span class="account"><span @click="register">注册账号</span> | <span @click="forgetPwd">忘记密码</span></p> -->
        </div>
    </div>
</template>
<script>
export default {
    name: 'login',
    data() {
        return {
            account: 'admin',
            pwd: 'admin',
            accountError: '',
            pwdError: '',
            isShowLoading: false,
            bg: {}
        }
    },
    created() {
        this.bg.backgroundImage = 'url(' + require('../assets/imgs/bg0' + new Date().getDay() + '.jpg') + ')'
    },
    watch: {
        $route: {
            handler: function(route) {
                this.redirect = route.query && route.query.redirect
            },
            immediate: true
        }
    },
    methods: {
        verifyAccount(e) {
            if (this.account !== 'admin') {
                this.accountError = '输入的账号不正确'
            } else {
                this.accountError = ''
            }
        },
        verifyPwd(e) {
            if (this.pwd !== 'admin') {
                this.accountError = '请输入正确的密码'
            } else {
                this.pwdError = ''
            }
        },
        // register() {
        //     console.log('注册账号')
        // },
        // forgetPwd() {
        //     console.log('忘记密码')
        // },
        submit() {
            // let self = this;
            // self.$http.post(this.baseURL + '/login',{account:self.username,pwd:self.pwd}).then(response => {
            //     console.log(response,'res')
            //     if(response.data.code == 200) {
            //         // this.data1 = response.data.data;
            //         console.log(this.data1,'data1')
            //     }  
            // })
            if (this.account === 'admin' && this.pwd === 'admin') {
                this.isShowLoading = true
                // 登陆成功 设置用户信息
                // localStorage.setItem('userImg', 'https://avatars3.githubusercontent.com/u/22117876?s=460&v=4')
                localStorage.setItem('userName', 'lee')
                // 登陆成功 假设这里是后台返回的 token
                localStorage.setItem('token', 'i_am_token')
                //  localStorage.setItem('token', response.data.token)
                this.$router.push({path: this.redirect || '/'})
            } else {
                if (this.account !== 'admin') {
                    this.accountError = '请输入您的账号'
                } 
                if (this.pwd !== 'admin') {
                    this.pwdError = '请输入您的密码'
                } 
            }
        }
        // submit() {
        //     this.$refs['loginForm'].validate(valid => {
        //         if (valid) {
        //         this.$store.dispatch('setLoading', true)
        //         getToken(this.loginForm.username, this.loginForm.password)
        //             .then(response => {
        //             sessionStorage.setItem('currentUser', JSON.stringify({
        //                 id: response.data.userId,
        //                 name: response.data.username
        //             }))
        //             sessionStorage.setItem('token', response.data.token)
        //             sessionStorage.setItem('routers', JSON.stringify(response.data.routers))

        //             // 初始化首页路由
        //             this.initIndexRouter()

        //             let redirect = decodeURIComponent(
        //                 this.$route.query.redirect || "/"
        //             )
        //             this.$router.push(redirect);
        //             this.$store.dispatch('setLoading', false)
        //             })
        //             .catch(error => {
        //             this.$store.dispatch('setLoading', false)
        //             this.$message({
        //                 showClose: true,
        //                 message: error,
        //                 type: 'error'
        //             })
        //             })
        //         }
        //     })
        //     },
        }
    }

</script>

<style>
.login-vue {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background:url('../assets/imgs/bg02.jpg');
}
.login-vue .container {
    background: rgba(255, 255, 255, .5);
    width: 300px;
    text-align: center;
    border-radius: 10px;
    padding: 30px;
}
.login-vue .ivu-input {
    background-color: transparent;
    color: #fff;
    outline: rgb(27, 9, 9);
    border-color: #fff;
}
.login-vue ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color: rgba(255, 255, 255, .8);
}
.login-vue :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: rgba(255, 255, 255, .8);
}
.login-vue ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: rgba(255, 255, 255, .8);
}
.login-vue :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: rgba(255, 255, 255, .8);
}
.login-vue .title {
    font-size: 16px;
    margin-bottom: 20px;
}
.login-vue .input-c {
    margin: auto;
    width: 200px;
}
.login-vue .error {
    color: red;
    text-align: left;
    margin: 5px auto;
    font-size: 12px;
    padding-left: 30px;
    height: 20px;
}
.login-vue .submit {
    width: 200px;
}
.login-vue .account {
    margin-top: 30px;
}
.login-vue .account span {
    cursor: pointer;
}
.login-vue .ivu-icon {
    color: #eee;
}
.login-vue .ivu-icon-ios-close-circle {
    color: #777;
}
</style>


