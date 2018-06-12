<template>
    <div class="container">
        <form class="form-inline col-md-12" style="text-align: center;" v-for="bet in bets">
            <img :src="bet.team_a_photo" width="50" height="50" alt="Foto" class="col-md-1 rounded-circle img-fluid">
            <label align="center" for="teamA" style="text-align: center;"  class="col-sm-2 col-form-label">{{ bet.team_a_name }}</label>
            <input type="number" :disabled="!bet.match.active" style="text-align: center;" class="form-control col-sm-1" id="teamA" v-model="bet.team_a_score"> 
            &nbsp --- &nbsp
            <input type="number" :disabled="!bet.match.active" style="text-align: center;" class="form-control col-sm-1" id="teamB" v-model="bet.team_b_score">
            <label for="teamB" align="center" class="col-md-2 col-form-label">{{ bet.team_b_name }}</label>
            <img align="center" :src="bet.team_b_photo" width="50" height="50" alt="Foto" class="col-md-1 rounded-circle img-fluid">
            <div v-if="!bet.match.active">
                [{{ bet.match.team_a_score }} --- {{ bet.match.team_b_score }}]
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
                axios.get(process.env.apiUrl + '/bets/user/' + this.$store.state.userId, {
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
                    })
                    .catch(err => {
                        alertService.error(err.response.data.message)
                    })
            },
            async saveResults() {
                for (let i = 0; i < this.bets.length; i++) {
                    let putData = {
                        team_a_score: this.bets[i].team_a_score,
                        team_b_score: this.bets[i].team_b_score
                    }
                    console.log(putData)
                    await axios.put(process.env.apiUrl + '/bets/' + this.bets[i].id, putData, {
                        headers: {
                            "Authorization": this.$store.state.token
                        }
                    })
                    .then(bet => {
                        alertService.success("Tus resultados fueron guardados.")
                    })
                    .catch(err => {
                        alertService.error(err.response.data.message)
                    })
                }
            }
        }
    }
</script>