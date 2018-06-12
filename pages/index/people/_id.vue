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
                    <td style="text-align: center;">{{ bet.team_a_name }}</td>
                    <td style="text-align: center;">{{ bet.team_a_score }} --- {{ bet.team_b_score }}</td>
                    <td style="text-align: center;">{{ bet.team_b_name }}</td>
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
                axios.get(process.env.apiUrl + '/bets/user/' + this.$route.params.id, {
                    headers: {
                        "Authorization": this.$store.state.token
                    }
                })
                .then(async bets => {
                    for (let i = 0; i < bets.data.length; i++) {
                        await axios.get(process.env.apiUrl + '/matches/' + bets.data[i].match_id, {
                            headers: {
                                "Authorization": this.$store.state.token
                            }
                        })
                        .then(async match => {
                            bets.data[i].team_a_name = match.data.teamA.name
                            bets.data[i].team_b_name = match.data.teamB.name
                            bets.data[i].team_a_photo = match.data.teamA.photo_path
                            bets.data[i].team_b_photo = match.data.teamB.photo_path
                        });
                    }
                    this.bets = bets.data
                    console.log(bets.data)
                })
                .catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>