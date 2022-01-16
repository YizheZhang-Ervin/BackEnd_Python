var app = new Vue({
    el: '#app',
    data() {
        return {
            displayComponent: "home",
            monitorUrl: "/actuator"
        }
    },
    mounted() {

    },
    methods: {
        changeDisplay(displayPage) {
            this.displayComponent = displayPage
        },
        changeURL(url) {
            if (url === "jmx") {
                this.monitorUrl = "/jmx"
            } else if (url === "prometheus") {
                this.monitorUrl = "/actuator/prometheus"
            } else if (url === "actuator") {
                this.monitorUrl = "/actuator"
            }
        },
        get() {
            axios.get(`/api/data`).then(
                (response) => {
                },
                (err) => {
                }
            );
        },
        post(url) {
            axios.post(`/api/data`, { key: JSON.stringify(this.textarea) }).then(
                (response) => {
                },
                (err) => {
                }
            );
        },
    }
});