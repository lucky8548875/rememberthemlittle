Vue.component('index-navigation', {
    template:
        `
    <nav>
            <!-- Button for Menu Drawer -->
            <span>
                <a href="#" @click="$root.$refs.drawer.show()" class="bars">
                    <i class="fas fa-bars"></i>
                    <span>Menu</span>
                </a>
                <h3 class="nav-logo">
                    <i class="fab fa-instagram" style="color: #5252ff"></i>
                    <span>Remember Them Little</span>
                </h3>

            </span>
            <span>
                <div class="links">
                    <a href="#" class="active color-dark">

                        <span>Home</span>
                    </a>
                    <a href="#">

                        <span>Services</span>
                    </a>
                    <a href="#">

                        <span>Gallery</span>
                    </a>
                    <a href="#" class="button outline" style="margin-left: 1rem">
                            <i class="fas fa-phone fa-flip-horizontal"></i>

                        <span>Contact Us</span>
                    </a>
                </div>
                <!-- Button for Login/Account Options -->
                <account-button></account-button>
            </span>
        </nav>
    `
})

Vue.component('index-drawer', {
    methods: {
        show() {
            this.$refs.toggle.show();
        },
    },
    template:
        `
    <toggle inline-template ref="toggle" v-cloak>


            <div>
                <transition name="fade" appear>
                    <div class="blocker" @click="hide()" v-show="visible"></div>
                </transition>

                <transition name="slide-right">
                    <div class="drawer" v-show="visible">
                        <a>
                            <h2>
                                <i class="fab fa-instagram"></i><br>
                                <span>Remember<br>Them Little</span></span>
                            </h2>
                        </a>

                        <a href="#" class="active">
                                <i class="fas fa-home"></i>
                                <span>Home</span>
                            </a>
                            <a href="#">
                                <i class="fas fa-camera"></i>
                                <span>Services</span>
                            </a>
                            <a href="#">
                                <i class="fas fa-th"></i>
                                <span>Gallery</span>
                            </a>
                            <a href="#">
                                <i class="fas fa-phone fa-flip-horizontal"></i>
                                <span>Contact Us</span>
                            </a>
                    </div>
                </transition>
            </div>

        </toggle>
    `
})

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
        },
        goto(url) {
            window.location.href = url
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
                <i class="fab fa-facebook-square"></i><span>Sign In</span></a>

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
                    <a v-if="$root.account.account_type='ADMIN'" href="/app/admin/calendar/index.html">
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

    methods: {
        show() {
            this.$refs.toggle.show();
        },

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
                            <a @mousedown.prevent="goto('/app/admin/overview/')" :class="{'active':$root.pageTitle=='Overview'}">Overview</a>
                            <a @mousedown.prevent="goto('/app/admin/calendar/')" :class="{'active':$root.pageTitle=='Calendar'}">Calendar</a>
                        </div>

                        <a href="#" :class="{'active':$root.pageCategory=='Transactions'}">
                            <i class="fas fa-th"></i>
                            <span>Transactions</span>
                        </a>
                        <div class="subitems">
                            <a @mousedown.prevent="goto('/app/admin/transactions/bookings.html')" :class="{'active':$root.pageTitle=='Bookings'}">Bookings</a>
                            <a @mousedown.prevent="goto('/app/admin/transactions/orders.html')" href="#"  :class="{'active':$root.pageTitle=='Orders'}">Orders</a>
                        </div>
                        <a href="#" :class="{'active':$root.pageCategory=='Settings'}">
                            <i class="fas fa-cog"></i>
                            <span>Settings</span>
                        </a>
                        <div class="subitems">
                            <a @mousedown.prevent="goto('/app/admin/settings/categories.html')" :class="{'active':$root.pageTitle=='Categories'}">Categories</a>
                            <a @mousedown.prevent="goto('/app/admin/settings/packages.html')" :class="{'active':$root.pageTitle=='Packages'}">Packages</a>
                            <a @mousedown.prevent="goto('/app/admin/settings/addons')"  :class="{'active':$root.pageTitle=='Addons'}">Addons</a>
                            <a @mousedown.prevent="goto('/app/admin/settings/Themes')"  :class="{'active':$root.pageTitle=='Themes'}">Themes</a>
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

Vue.component('calendar', {
    mounted() {
        app.selected_date = this.selected_date
    },
    data: function () {
        return {
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            date: new Date().getDate(),
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
        }
    },
    computed: {
        selected_date(){
            return this.year + "-" + (this.month + 1) + "-" + this.date
        },
        my_label() {
            return this.months[this.month] + " " + this.year
        },
        date_array() {

            var date = new Date(this.year, this.month, 1);
            var days = [];
            var temprow = [];

            for (var i = 0; i < date.getDay(); i++) {
                temprow.push({getDate(){return ""}})
            }

            while (date.getMonth() === this.month) {
                temprow.push(new Date(date));
                if (date.getDay() == 6) {
                    days.push(temprow);
                    temprow = [];
                }
                date.setDate(date.getDate() + 1);
            }
            days.push(temprow);

            return days;


        }
    },
    watch:{
        selected_date(){
            app.selected_date = this.selected_date
        }
    },
    methods: {
        nextMonth() {
            if (this.month == 11) {
                this.month = 0
                this.year++
            } else {
                this.month++
            }
        },
        previousMonth() {
            if (this.month == 0) {
                this.month = 11
                this.year--
            } else {
                this.month--
            }
        }
    },
    template:
        `
    <div class="calendar_my">
    <div class="calendar_my_label">
                <i class="fas fa-angle-left" @click="previousMonth"></i>
                <span class="my_label">{{my_label}}</span>
                <i class="fas fa-angle-right" @click="nextMonth"></i>
            </div>
            <table class="schedule_table" cellspacing=0>
                <thead>
                    <tr>
                        <th>S</th>
                        <th>M</th>
                        <th>T</th>
                        <th>W</th>
                        <th>T</th>
                        <th>F</th>
                        <th>S</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row in date_array">
                        <td @click="date = cell.getDate()" v-for="cell in row" :class="{'active':date == cell.getDate()}">
                            {{cell.getDate()}}
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
    `
})

Vue.component('fileupload', {
    data: function() {
      return {
        file: '',
        publishedfile: ''
      }
    },
    watch: {
      file(){
        var file_image = document.querySelector('#fileupload').files[0];
        var formData = new FormData();
        formData.append('file_image', file_image);
        
        Vue.http.post('http://rtl.epizy.com/fileupload.php',formData).then(
            response => {
              this.publishedfile = response.body.filename
            },
            response => {
              this.publishedfile = 'error'
            }
            
          )
      }
    },
    template:
    `
    <span>
    <input type="file" name="file_image" id="fileupload" v-model="file">{{publishedfile}}
    </span>
    `
  })

Vue.component('admin-searchbar', {
    data: function() {
        return {
            query: '',
            matches: '',
            styleSearchBarContainer: {
                display: 'none',
                'background-color': '$color-light',
                color: '$color-gray',
                'border-radius': '2rem',
                'margin-left': '2rem',
                'align-items': 'center'
            },
            styleSearchIcon: {
                color: 'lighten($color-gray,15)',
                'margin-right': '1rem'
            },
            styleSearchBarTextField: {
                'border-radius': '2rem',
                'background-color': 'transparent',
                'border-width': '0px',
                margin: 0,
                padding: '1rem',
                '&': 'hover', 
                '&': 'focus',
                'border-width': '0px'
            },
            styleSearchBarMatchList: {
                position: 'absolute',
                'background-color': 'l#bebebe',
                'list-style-type': 'none'
            },
            styleMatchListGroupAccounts: {
                'list-style-type': 'none'
            },
            styleMatchListGroupBookings: {
                'list-style-type': 'none'
            }
        }
    },
    watch: {
        query: function() {
            Vue.http.get(`/_system/php/functions/adminSearch.php?query=${this.query}`)
                .then(
                    response => {
                        if (response.body.success)
                        {
                            this.matches = response.body.data;
                        }
                        else
                        {
                            console.error(response.body.message);
                        }
                    },
                    response => {
                        console.error(response);
                    }
                );
        }
    },
    template:
    `
    <div class="admin-searchbar-container">
        <input class="admin-searchbar-textfield" type="text" placeholder="Search..." v-model="query" v-bind:style="styleSearchBarTextField">
        <i class="fas fa-search" style="styleSearchIcon"></i>
        <ul class="admin-searchbar-matchlist" v-bind:style="styleSearchBarMatchList">
            <ul class="matchlist-group-accounts" v-show="matches.accounts != null" v-bind:style="styleMatchListGroupAccounts">
            <h3>Accounts</h3>
                <li class="matchlist-item-accounts" v-for="match in matches.accounts">
                    <h4>ID: {{match.account_id}}</h4>
                    {{match.account_name}}
                </li>
            </ul>
            <ul class="matchlist-group-bookings" v-show="matches.bookings != null" v-bind:style="styleMatchListGroupBookings">
            <h3>Bookings</h3>
                <li class="matchlist-item-bookings" v-for="match in matches.bookings">
                    <h4>ID: {{match.booking_id}}</h4>
                    {{match.account_name}}&nbsp:&nbsp{{match.booking_date}}
                </li>
            </ul>
        </ul>
    </div>
    `
})