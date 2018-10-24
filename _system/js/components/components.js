
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

Vue.component('stepper',{

    props: ['steps'],

    data: function() {
        return {

            step : 1
        }
    },

    methods: {

        next: function(){

            if(this.step < this.steps ){
                this.step++;
            }
        },

        previous: function(){
            if(this.step > 1){
                this.step--;
            }
        }
    }

})