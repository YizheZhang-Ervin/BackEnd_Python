Vue.component('webgl-game', {
    props: {
        msg: String
    },
    // 动态props
    watch: {
        msg: function (newVal) {
            this.judgeDisplay(newVal)
        },
    },
    mounted() {
        this.judgeDisplay(this.msg)
    },
    data() {
        return {
            display: false,
        }
    },
    methods: {
        judgeDisplay(val) {
            if (val === "webgl") {
                this.display = true;
            } else {
                this.display = false;
            }
        }
    },
    template:
        `
<section v-show="display">
    <iframe class="iframe" name="iframe001" src="/webgl"></iframe>
</section>
`
})