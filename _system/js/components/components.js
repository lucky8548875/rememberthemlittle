Vue.component('toggle',{
    data: function (){
        return {
            visible: false
        }
    },
    methods: {
        show() {
            this.visible = true
        },
        hide() {
            this.visible = false
        },
        toggle() {
            this.visible = !this.visible
        }
    }
});

Vue.component('modal', {
    data: function () {
        return {
            visible: false,
            params: null
        }
    },
    methods: {
        show: function (params) {
            this.params = params;
            this.visible = true
        },
        hide: function () {
            this.visible = false
        },
        toggle: function () {
            this.visible = !this.visible
        }
    }
});