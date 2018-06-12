<template>
    <div class="container">
        <div class="images">
            <div class="row">
                <div class="col-sm-2" v-for="user in users">
                    <h4>{{ user.name }}</h4>
                    <img @click="goToUser(user.id)" :src="user.photo_path" alt="Foto" class="img-raised rouded img-fluid">
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
                users: []
            }
        },
        created() {
            this.getUsers()
        },
        methods: {
            getUsers() {
                axios.get(process.env.apiUrl + '/users')
                    .then(users => {
                        this.users = users.data
                    })
                    .catch(err => {
                        console.log(err)
                    })
            },
            goToUser(userId) {
                this.$router.push('/people/' + userId)
            }
        }
    }
</script>