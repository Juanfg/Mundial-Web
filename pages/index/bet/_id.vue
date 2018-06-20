<template>
    <div class="container">
        <div class="title">
            <h2>{{ match.teamA.name }} - {{ match.teamB.name }}</h2>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th style="text-align: center;">Usuario</th>
                    <th style="text-align: center;">{{ match.teamA.name }}</th>
                    <th style="text-align: center;">{{ match.teamB.name }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="bet in match.bets" v-if="bet.active">
                    <td style="text-align: center;">{{ bet.user_id }}</td>
                    <td style="text-align: center;">{{ bet.team_a_score }}</td>
                    <td style="text-align: center;">{{ bet.team_b_score }}</td>
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
                match: {
                    teamA: {},
                    teamB: {},
                    bets: []
                }
            }
        },
        created() {
            this.getMatch();
        },
        methods: {
            getMatch() {
                axios.get(process.env.apiUrl + '/matches/' + this.$route.params.id, {
                    headers: {
                        "Authorization": this.$store.state.token
                    }
                })
                    .then(match => {
                        this.match = match.data
                    })
                    .catch(err => {
                        console.log(err)
                    });
            }
        }
    }
</script>