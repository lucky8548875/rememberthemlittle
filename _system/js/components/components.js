Vue.component('rigid');

Vue.component('account_button',{
    data: function(){
        return {
            context_visible: false
        }
    },
    template:
    `
    <div>
    <!---------------------- CUSTOM FACEBOOK BUTTON ---------------------->

            <!-- Not Authorized / Not Connected-->
            <button v-if="$root.loginStatus.status=='unknown' || $root.loginStatus.status=='not_authorized'" class="outline color-primary"
                @click="$root.login" v-cloak>
                <i class="fab fa-facebook-square"></i><span>Login</span></button>

            <!-- Authorized / Connected -->
            <a v-else-if="$root.loginStatus.status=='connected' || $root.loginStatus.status=='cached'" class="flex align-items-center" @click.prevent="context_visible=true">
                <img class="profile_pic" :src="$root.fbapi_me.picture.data.url" style="border-radius: 50%; width: 26px; margin-right: 0.25rem;">
                <i class="fas fa-angle-down"></i>
            </a>

            <!-- For undetermined connection / loading -->
            <a v-else class="outline" disabled style="cursor: default">
                <i class="fa fa-sync fa-spin" style="color: #ddd"></i>
            </a>

            <!-------------- END OF FACEBOOK ACCOUNT BUTTON ------------------>

            <!-- Context Menu -->
            
            <div v-if="context_visible" style="position: fixed" v-cloak>
                <div @click="context_visible=false" style="background-color: rgba(0, 0, 0, 0.2); position: fixed; width: 100%; height: 100vh; left: 0; top: 0;"></div>
                <div class="account_options">
                    <a>
                        <img class="profile_pic" :src="$root.fbapi_me.picture.data.url" style="border-radius: 50%; width: 26px; margin-right: 0.5rem">
                        <span>{{$root.fbapi_me.first_name}}</span>
                    </a>
                    <a href="/app/dashboard/index.html">
                        <i class="fas fa-calendar-check"></i>
                        <span>My Bookings</span>
                    </a>
                    <a>
                        <i class="fas fa-cog"></i>
                        <span>Settings</span>
                    </a>
                    <a @click.prevent="$root.logout(); context_visible=false">
                        <i class="fas fa-sign-out-alt"></i>
                        <span>Sign Out</span>
                    </a>

                </div>
            </div>
    </div>
    `
})

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