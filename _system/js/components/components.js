Vue.component('toggle', {
    data: function () {
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

Vue.component('account-button', {
    data: function () {
        return {
            context_visible: false
        }
    },
    template:
        `
    <div>
    <!---------------------- CUSTOM FACEBOOK BUTTON ---------------------->

            <!-- Not Authorized / Not Connected-->
            <a href="#" v-if="$root.account.status=='DISCONNECTED' && $root.facebook.status=='LOADED' && $root.facebook.api_status!='LOADING'" class="color-primary"
                @click="$root.$refs.signin.show()" v-cloak>
                <i class="fab fa-facebook-square"></i><span>Login</span></a>

            <!-- Authorized / Connected -->
            <a href="#" v-else-if="$root.account.status=='CONNECTED' && $root.facebook.api_status!='LOADING'" class="flex align-items-center" @click.prevent="context_visible=true">
                <img class="profile_pic" :src="$root.account.picture_url" style="border-radius: 50%; width: 30px; margin-right: 0.25rem;">
                <i class="fas fa-angle-down"></i>
            </a>

            <!-- For undetermined connection / loading -->
            <a v-else class="outline" disabled style="cursor: default">
                <i class="fas fa-sync fa-spin" style="color: #ddd"></i>
            </a>

            <!-------------- END OF FACEBOOK ACCOUNT BUTTON ------------------>

            <!-- Context Menu -->
            
            <div v-if="context_visible" style="position: fixed" v-cloak>
                <div @click="context_visible=false" style="background-color: rgba(0, 0, 0, 0.2); position: fixed; width: 100%; height: 100vh; left: 0; top: 0;"></div>
                <div class="account_options">
                    <a>
                        <img class="profile_pic" :src="$root.account.picture_url" style="border-radius: 50%; width: 26px; margin-right: 0.5rem">
                        <span>{{$root.account.display_name}}</span>
                    </a>
                    <a v-if="$root.account.account_type='ADMIN'" href="/app/admin/transactions/index.html">
                        <i class="fas fa-toolbox"></i>
                        <span>Admin</span>
                    </a>
                    <a href="/app/bookings">
                        <i class="fas fa-calendar-check"></i>
                        <span>My Bookings</span>
                    </a>
                    <a>
                        <i class="fas fa-cog"></i>
                        <span>Settings</span>
                    </a>
                    <a @click="$root.signOut(); context_visible=false;">
                        <i class="fas fa-sign-out-alt"></i>
                        <span>Sign Out</span>
                    </a>

                </div>
            </div>
    </div>
    `
})

Vue.component('stepper', {

    props: ['steps'],

    data: function () {
        return {

            step: 1
        }
    },

    methods: {

        next: function () {

            if (this.step < this.steps) {
                this.step++;
            }
        },

        previous: function () {
            if (this.step > 1) {
                this.step--;
            }
        }
    }

})

Vue.component('sliding-drawer', {

    methods:{
        show(){
            this.$refs.toggle.show();
        }
    },
    template: `
    
    <toggle v-cloak inline-template  ref="toggle">


            <div>
                <transition name="fade" appear>
                    <div class="blocker" @click="hide()" v-show="visible"></div>
                </transition>

                <transition name="slide-right">
                    <div class="drawer" v-show="visible">

                        <a href="#" :class="{'active':$root.pageCategory=='Dashboard'}">
                            <i class="fas fa-home"></i>
                            <span>Dashboard</span>
                        </a>

                        <div class="subitems">
                            <a href="#" :class="{'active':$root.pageTitle=='Overview'}">Overview</a>
                            <a href="/app/admin/calendar/" :class="{'active':$root.pageTitle=='Calendar'}">Calendar</a>
                        </div>

                        <a href="#" :class="{'active':$root.pageCategory=='Transactions'}">
                            <i class="fas fa-th"></i>
                            <span>Transactions</span>
                        </a>
                        <div class="subitems">
                            <a href="/app/admin/transactions/" :class="{'active':$root.pageTitle=='Bookings'}">Bookings</a>
                            <a href="#"  :class="{'active':$root.pageTitle=='Orders'}">Orders</a>
                        </div>
                        <a href="#" :class="{'active':$root.pageCategory=='Settings'}">
                            <i class="fas fa-cog"></i>
                            <span>Settings</span>
                        </a>
                        <div class="subitems">
                            <a href="/app/admin/transactions/" :class="{'active':$root.pageTitle=='Categories'}">Categories</a>
                            <a href="#" :class="{'active':$root.pageTitle=='Packages'}">Packages</a>
                            <a href="#"  :class="{'active':$root.pageTitle=='Addons'}">Addons</a>
                            <a href="#"  :class="{'active':$root.pageTitle=='Themes'}">Themes</a>
                            </div>
                        <a href="#" :class="{'active':$root.pageCategory=='Reports'}">
                            <i class="fas fa-file"></i>
                            <span>Reports</span>
                        </a>
                    </div>
                </transition>
            </div>

        </toggle>
    
    `
})