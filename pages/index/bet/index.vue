<template>
    <div class="container">
        <form class="form-inline col-md-12" style="text-align: center;" v-for="bet in bets">
            <img :src="bet.match.team_a.photo_path" width="50" height="50" alt="Foto" class="col-md-1 rounded-circle img-fluid">
            <label align="center" for="teamA" style="text-align: center;"  class="col-sm-2 col-form-label">{{ bet.match.team_a.name }}</label>
            <input type="number" min="0" :disabled="!bet.match.active" style="text-align: center;" class="form-control col-sm-1" id="teamA" v-model="bet.team_a_score"> 
            &nbsp --- &nbsp
            <input type="number" min="0" :disabled="!bet.match.active" style="text-align: center;" class="form-control col-sm-1" id="teamB" v-model="bet.team_b_score">
            <label for="teamB" align="center" class="col-md-2 col-form-label">{{ bet.match.team_b.name }}</label>
            <img align="center" :src="bet.match.team_b.photo_path" width="50" height="50" alt="Foto" class="col-md-1 rounded-circle img-fluid">
            |&nbsp&nbsp
            <div v-if="!bet.match.active">
                <b>Resultado Oficial: </b>[{{ bet.match.team_a_score }} --- {{ bet.match.team_b_score }}]
                &nbsp
                <button class="btn btn-primary btn-sm" @click.prevent="goToMatchBets(bet.match.id)">Pronosticos</button>
            </div>
        </form>        
        <button @click="saveResults()" class="col-md-11 btn btn-success">Salvar</button>
    </div>
</template>

<script>
    import axios from 'axios'
    const alertService = require('~/static/js/alertService.js')

    export default {
        data() {
            return {
                bets: []
            }
        },
        created() {
            this.getMyBets()
        },
        methods: {
            getMyBets() {
                axios.get(process.env.apiUrl + '/betsWithMatches/user/' + this.$store.state.userId, {
                    headers: {
                        "Authorization": this.$store.state.token
                    }
                })
                .then(bets => {
                    this.bets = bets.data
                })
                .catch(err => {
                    alertService.error(err.response.data.message)
                })
            },
            saveResults() {
                let putData = {
                    bets: this.bets
                }

                axios.put(process.env.apiUrl + '/updateAllBets', putData, {
                    headers: {
                        "Authorization": this.$store.state.token
                    }
                })
                .then(() => {
                    console.log(putData)
                    alertService.success("Tus resultados fueron guardados.")
                })
                .catch(err => {
                    alertService.error(err.response.data.message)
                })
            },
            goToMatchBets(matchId) {
                this.$router.push('/bet/' + matchId);                
            }
        }
    }
</script>