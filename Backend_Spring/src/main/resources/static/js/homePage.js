Vue.component('home-page', {
    props: {
        msg: String,
        url: String
    },
    // 动态props
    watch: {
        msg: function (newVal) {
            this.judgeDisplay(newVal)
        },
        url: function (newVal) {
            this.get(newVal)
        }
    },
    mounted() {
        this.judgeDisplay(this.msg)
        this.get(this.url)
    },
    data() {
        return {
            display: false,
            content: ""
        }
    },
    methods: {
        judgeDisplay(val) {
            if (val === "home") {
                this.display = true;
            } else {
                this.display = false;
            }
        },
        get(url) {
            console.log(url)
            axios.get(url).then(
                (response) => {
                    this.content = response.data
                },
                (err) => {
                    this.content = err
                }
            );
        },
    },
    template:
        `
<section v-show="display" class="scroll">
    {{content}}
</section>
`
})