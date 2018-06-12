<template>
    <div class="container">
        <h1 class="title">Bienvenido {{ username }} ({{ useremail }})</h1>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                username: "",
                useremail: "",
            }
        },
        created() {
            this.getUser()
        },
        methods: {
            getUser() {
                axios.get(process.env.apiUrl + '/users/' + this.$store.state.userId)
                    .then(user => {
                        this.username = user.data.name
                        this.useremail = user.data.email
                    }).
                    catch(err => {
                        alertService.error(err.response.data.message)                        
                    })
            }
        }
    }
</script>