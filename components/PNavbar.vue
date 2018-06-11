<template>
     <nav class="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg" color-on-scroll="10" id="sectionsNav">
        <div class="container">
        <div class="navbar-translate">
            <a class="navbar-brand" href="#">
            Tanda Mundial </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/">
                    <i class="material-icons">bar_chart</i> Stands
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/stand">
                    <i class="material-icons">create</i> Mis pronosticos
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/people">
                    <i class="material-icons">people</i> Participantes
                    </a>
                </li>
                <li class="dropdown nav-item">
                    <a href="javascript:void(0)" class="dropdown-toggle nav-link" data-toggle="dropdown">
                    <i class="material-icons">person</i> Perfil
                    </a>
                    <div class="dropdown-menu dropdown-with-icons">
                    <a href="#" class="dropdown-item">
                        <i class="material-icons">update</i> Actualizar perfil
                    </a>
                    <a href="#" class="dropdown-item">
                        <i class="material-icons">exit_to_app</i> Salir
                    </a>
                    </div>
                </li>
            </ul>
        </div>
        </div>
    </nav>
</template>

<script>
    export default {
    }
</script>