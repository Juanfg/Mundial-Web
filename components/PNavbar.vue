<template>
     <nav class="navbar bg-primary navbar-color-on-scroll fixed-top navbar-expand-lg" color-on-scroll="100" id="sectionsNav">
        <div class="container">
        <a class="navbar-brand" href="/">
          Quiniela </a>
        <div class="navbar-translate">
            <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a @click="changeGroupTitle()" class="nav-link" data-placement="bottom" data-toggle="popover" title="Grupos" rel="popover">
                    <i class="material-icons">group_work</i> {{ groupTitle }}
                    </a>
                </li>
                <li class="nav-item" v-if="$store.state.isUserLoggedIn">
                    <a class="nav-link" href="/people">
                    <i class="material-icons">bar_chart</i> Stands
                    </a>
                </li>
                <li class="nav-item" v-if="$store.state.isUserLoggedIn">
                    <a class="nav-link" href="/bet">
                    <i class="material-icons">create</i> Mis pronosticos
                    </a>
                </li>
                <li class="dropdown nav-item" v-if="$store.state.isUserLoggedIn">
                    <a href="javascript:void(0)" class="dropdown-toggle nav-link" data-toggle="dropdown">
                    <i class="material-icons">person</i> Perfil
                    </a>
                    <div class="dropdown-menu dropdown-with-icons">
                    <a href="/updateProfile" class="dropdown-item">
                        <i class="material-icons">update</i> Actualizar perfil
                    </a>
                    <a @click="logout()" class="dropdown-item">
                        <i class="material-icons">exit_to_app</i> Salir</a>
                    </a>
                    </div>
                </li>
                <li class="nav-item" v-else>
                    <a class="nav-link" href="/">
                    <i class="material-icons">verified_user</i> Login
                    </a>
                </li>
            </ul>
        </div>
        </div>
    </nav>
</template>

<style>
.popover{
    max-width: 100%;
}
</style>

<script>
    const groupPopOverVisible = false;
    export default {
        data() {
            return {
                groupTitle: ""
            }
        },
        methods: {
            logout() {
                localStorage.clear()
                this.$router.go('/')
            },
            changeGroupTitle() {
                if (this.groupPopOverVisible) {
                    this.groupTitle = "Mostrar Grupos"
                    this.groupPopOverVisible = false                    
                }
                else {
                    this.groupTitle = "Quitar Grupos"
                    this.groupPopOverVisible = true
                }
            }
        },
        created() {
            $(function () {
                $('[data-toggle="popover"]').popover({
                    html: true,
                    content: function () {
                        return `<img src="http://media.ambito.com/diario/2017/1201/imagenes/not_905207_01_132319.jpg" width="500" heigth="500"/>`;
                    }
                });
            })
            this.groupTitle = "Mostrar Grupos"
        }
    }
</script>