<template>
    <div class="section section-signup page-header" style="background-image: url('https://i0.wp.com/www.soccercleats101.com/wp-content/uploads/2017/12/World-Cup-2018-Ball-Featured.jpg?fit=900%2C510')">
        <div class="container">
            <div class="row">
                <div class="col-md-4 ml-auto mr-auto">
                    <div class="card card-signup">
                        <form class="form" @submit="login()">
                            <div class="card-header card-header-primary text-center">
                                <h4>Log In</h4>
                            </div>
                            <div class="card-body">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="material-icons">email</i>
                                        </span>
                                    </div>
                                    <input type="email" v-model="email" class="form-control" placeholder="Email..." >
                                </div>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="material-icons">lock_outline</i>
                                        </span>
                                    </div>
                                    <input type="password" v-model="password" class="form-control" placeholder="Password...">
                                </div>
                            </div>
                            <div class="card-footer justify-content-center">
                                <button type="submit" class="btn btn-link btn-primary btn-lg">Log In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                email: "",
                password: ""
            }
        },
        methods: {
            login() {
                let postData = {
                    email: this.email,
                    password: this.password
                }
                axios.post(process.env.apiUrl + '/auth/login', postData)
                    .then(user => {
                        this.$store.dispatch('setToken', user.data.token.token)
                        this.$store.dispatch('setUserId', user.data.token.user)
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
        }
    }
</script>