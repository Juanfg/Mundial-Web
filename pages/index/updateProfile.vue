<template>
    <div class="container">
        <h1 class="title">Actualizar Perfil</h1>
        <div class="row">
            <div class="col-lg-6 col-md-8">
                <ul class="nav nav-pills nav-pills-icons" role="tablist">
                    <li class="nav-item">
                    <a class="nav-link active" href="#changeName" role="tab" data-toggle="tab">
                        <i class="material-icons">person</i> Cambiar Nombre
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#changeEmail" role="tab" data-toggle="tab">
                        <i class="material-icons">email</i> Cambiar Email
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#changePassword" role="tab" data-toggle="tab">
                        <i class="material-icons">security</i> Cambiar Contraseña
                    </a>
                    </li>
                </ul>
                <div class="tab-content tab-space">
                    <div class="tab-pane active" id="changeName">
                        <form>
                            <label class="label-control">Nuevo nombre</label>
                            <input required type="text" v-model="name" class="form-control" placeholder="Nombre...">
                            <button class="btn btn-danger" type="submit" @click.prevent="changeName">Cambiar Nombre</button>
                        </form>
                    </div>
                    <div class="tab-pane" id="changeEmail">
                        <form>
                            <label class="label-control">Nuevo email</label>
                            <input required type="email" v-model="email" class="form-control" placeholder="Email...">
                            <button class="btn btn-danger" type="submit" @click.prevent="changeEmail">Cambiar Email</button>
                        </form>
                    </div>
                    <div class="tab-pane" id="changePassword">
                        <form>
                            <label class="label-control">Nueva contraseña</label>
                            <input required type="password" v-model="password" class="form-control" placeholder="Contraseña...">
                            <button class="btn btn-danger" type="submit" @click.prevent="changePassword">Cambiar Contraseña</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    const alertService = require('~/static/js/alertService.js')

    export default {
        data() {
            return {
                name: "",
                email: "",
                password: "",
            }
        },
        created() {

        },
        methods: {
            changeName() {
                if (this.name != "") {
                    let putData = {
                        name: this.name
                    }
                    this.updateProfile(putData, true)
                }
            },
            changeEmail() {
                if (this.email != "") {
                    let putData = {
                        email: this.email
                    }
                    this.updateProfile(putData, true)
                }
            },
            changePassword() {
                if (this.password != "") {
                    let putData = {
                        password: this.password
                    }
                    this.updateProfile(putData, false)
                }
            },
            updateProfile(data, redirect) {
                let that = this
                alertService.confirm("Estas seguro de hacer este cambio?", function() {
                    axios.put(process.env.apiUrl + '/users/' + that.$store.state.userId, data)
                        .then(user => {
                            if (redirect) {
                                alertService.success("Tus datos fueron cambiados")
                            }
                            else {
                                // We have to logout
                                localStorage.clear()
                                that.$router.go('/')
                            }
                        })
                        .catch(err => {
                            alertService.error(err.response.data.message)
                        })
                })
                
            }
        }
    }
</script>