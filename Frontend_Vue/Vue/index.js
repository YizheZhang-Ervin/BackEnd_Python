var app = new Vue({
    el: '#app',
    data() {
        return {
            menuOpen: "1",
            input: "",
            output: "",
            currentNode: "",
            selectOptions: [{
                value: 'js',
                label: 'NodeJS'
            }, {
                value: 'shell',
                label: 'Shell'
            }, {
                value: 'html',
                label: 'HTML'
            }
            ],
            selectValue: 'js',
            displayComponent: "visualization"
        }
    },
    mounted() {
        // title时钟
        setInterval(() => {
            this.checkVisibility();
        }, 1000);
        // 获取地理位置
        this.getGeolocation();
        // 防止f12
        this.attack_kp();
        // 防止鼠标右键
        // this.attack_cm();
        // 鼠标移动
        document.onmousemove = this.mouseMove;
        this.addCell()
    },
    methods: {
        // title时钟，当页面在前台可见时
        checkVisibility: function () {
            let vs = document.visibilityState;
            let date = new Date(Date.now());
            if (vs == "visible") {
                document.title =
                    "NIA7 - " +
                    date.getHours() +
                    ":" +
                    date.getMinutes() +
                    ":" +
                    date.getSeconds();
            }
        },
        // 获取鼠标位置
        mouseMove(ev) {
            ev = ev || window.event;
            var mousePos = this.mouseCoords(ev);
            //获取当前的x,y坐标
            this.mouseX = mousePos.x;
            this.mouseY = mousePos.y;
            // 获取当前位置的元素
            let ele = document.elementFromPoint(this.mouseX, this.mouseY);
            this.currentEle = ele;
        },
        mouseCoords(ev) {
            //鼠标移动的位置
            if (ev.pageX || ev.pageY) {
                return { x: ev.pageX, y: ev.pageY };
            }
            return {
                x: ev.clientX + document.body.scrollLeft - document.body.clientLeft,
                y: ev.clientY + document.body.scrollTop - document.body.clientTop,
            };
        },
        // 地理位置
        getGeolocation() {
            navigator.geolocation.getCurrentPosition(this.sendNotification);
        },
        sendNotification(position) {
            // get geolocation
            let latitude =
                position.coords.latitude > 0
                    ? position.coords.latitude + " N"
                    : position.coords.latitude + " S";
            let longitude =
                position.coords.longitude > 0
                    ? position.coords.longitude + " E"
                    : position.coords.longitude + " W";
            // Notification
            var n = new Notification("你当前所在位置为", {
                body: `${latitude},${longitude}`,
                tag: "backup",
                requireInteraction: false,
                data: {
                    loc: `${latitude},${longitude}`,
                },
            });
            n.onclick = function () {
                n.close();
            };
        },
        // 防止鼠标右键
        attack_cm() {
            document.oncontextmenu = function (e) {
                e.preventDefault();
                alert("prevent right click");
            }
        },
        // 防止f12
        attack_kp() {
            document.addEventListener("keydown", (e) => {
                if (e.key == "F12") {
                    window.event.returnValue = false;
                    alert("prevent F12")
                }
            })
        },
        handleSelect(key, keyPath) {
            // console.log(key, keyPath);
            if (key === "visualization") {
                this.displayComponent = "visualization";
            } else {
                this.displayComponent = "";
            }
        },
        addCell() {
            let center = document.getElementById("center");
            let cell = document.createElement("textarea");
            cell.className = "cell";
            cell.oninput = this.cellChange;
            cell.onfocus = this.cellChange;
            center.appendChild(cell);
        },
        delCell() {
            let center = document.getElementById("center");
            if (center.lastChild.nodeName === "PRE") {
                center.removeChild(center.lastChild);
            }
            center.removeChild(center.lastChild);
        },
        runCommon(url) {
            axios.post(`/api/${url}/`, { key: JSON.stringify(this.input) })
                .then((response) => {
                    if (response.data.error == "error") {
                        console.log("bakend error");
                    } else {
                        let center = document.getElementById("center");
                        this.output = response.data.result;
                        let pre = document.createElement("pre");
                        pre.className = "pre";
                        if (url == "shell") {
                            pre.innerHTML = JSON.parse(this.output);
                        } else {
                            pre.innerHTML = this.output;
                        }
                        // 当前cell后面有节点 且 节点为PRE
                        if (this.currentNode.nextSibling && this.currentNode.nextSibling.nodeName === "PRE") {
                            let oldpre = this.currentNode.nextSibling;
                            center.replaceChild(pre, oldpre);
                            // 当前cell后面无节点
                        } else {
                            this.insterAfter(pre, this.currentNode);
                            this.addCell();
                        }
                    }
                },
                    function (err) {
                        console.log(err.data);
                    }
                );
        },
        runCell() {
            // html处理
            if (this.selectValue == "html") {
                let center = document.getElementById("center");
                let parser = new DOMParser();
                let inputAdjust = "<div id='div001' >" + this.input + "</div>"
                var newDoc = parser.parseFromString(inputAdjust, "text/xml");
                center.replaceChild(newDoc.getElementById("div001"), this.currentNode);
                document.getElementById("div001").removeAttribute("id");
                // js、shell处理
            } else {
                this.runCommon(this.selectValue);
            }

        },
        cellChange(e) {
            this.input = e.target.value;
            this.currentNode = e.target;
            // 自适应大小
            let content = this.input.split("\n");
            this.currentNode.setAttribute("rows", content.length + 1);
        },
        insterAfter(newElement, targetElement) {
            var parent = targetElement.parentNode;
            // 先找父级元素，若目标元素为最后一个元素，直接append到父级末尾
            if (parent.lastChild == targetElement) {
                parent.appendChild(newElement);
            }
            // 如果不是，则利用insertBefore插入到目标元素的下一个元素的前面
            else {
                parent.insertBefore(newElement, targetElement.nextSibling);
            }
        }
    }
});