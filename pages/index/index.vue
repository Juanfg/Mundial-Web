<template>
    <div class="container-fluid">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Lugar</th>
                    <th>Nombre</th>
                    <th>Puntos</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="person in persons">
                    <td>{{ person.place }}</td>
                    <td>{{ person.name }}</td>
                    <td>{{ person.points }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
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
                this.orderResults()
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
            }
        }
    }
</script>