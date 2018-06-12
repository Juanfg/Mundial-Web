<template>
    <div class="container-fluid">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th style="text-align: center;">Lugar</th>
                    <th style="text-align: center;">Nombre</th>
                    <th style="text-align: center;">Puntos</th>
                    <th style="text-align: center;">Pronosticos</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="person in persons">
                    <td style="text-align: center;">{{ person.place }}</td>
                    <td style="text-align: center;">{{ person.name }}</td>
                    <td style="text-align: center;">{{ person.points }}</td>
                    <td style="text-align: center;">
                        <button @click="goToUser(person.id)" class="btn btn-primary btn-round">Pronosticos</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                persons: []
            }
        },
        created() {
            this.getResults()
        },
        methods: {
            getResults() {
                axios.get(process.env.apiUrl + '/users')
                    .then((users) => {
                        this.persons = users.data
                        this.orderResults()                
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            orderResults() {
                let lastResult = -1
                let place = 0
                for (let i = 0; i < this.persons.length; i++) {
                    if (lastResult !== this.persons[i].points) {
                        place++
                    }
                    this.persons[i].place = place
                    lastResult = this.persons[i].points
                }
            },
            goToUser(userId) {
                this.$router.push('/people/' + userId);
            }
        }
    }
</script>