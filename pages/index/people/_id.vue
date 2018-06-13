<template>
    <div class="container">
        <div class="title">
            <h2>{{ title }}</h2>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th style="text-align: center;">Equipo A</th>
                    <th style="text-align: center;">Marcador</th>
                    <th style="text-align: center;">Equipo B</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="bet in bets" v-if="!bet.match.active">
                    <td style="text-align: center;">{{ bet.match.team_a.name }}</td>
                    <td style="text-align: center;">{{ bet.team_a_score }} --- {{ bet.team_b_score }}</td>
                    <td style="text-align: center;">{{ bet.match.team_b.name }}</td>
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
                title: "",
                bets: []
            }
        },
        created() {
            this.getUser()
            this.getBets()
        },
        methods: {
            getUser() {
                axios.get(process.env.apiUrl + '/users/' + this.$route.params.id)
                    .then(user => {
                        this.title = user.data.name
                    })
                    .catch(err => {
                        console.log(err)
                    })
            },
            getBets() {
                console.log(this.$route.params.id)
                axios.get(process.env.apiUrl + '/betsWithMatches/user/' + this.$route.params.id, {
                    headers: {
                        "Authorization": this.$store.state.token
                    }
                })
                .then(bets => {
                    this.bets = bets.data
                })
                .catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>