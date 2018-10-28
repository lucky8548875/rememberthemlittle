var FacebookMixin = {
    data: {

        // Account Schema from Database
        account: {},

        loginStatus: {
            status: ''
        },

        fbapi_me: {
            picture: {
                data: {
                    url: ''
                }
            },
            first_name: '',
            name: '',
            id: ''
        },
    },

    created: function () {

        window.fbAsyncInit = function () {

            FB.init({
                appId: '736479600033096',
                cookie: true,
                xfbml: true,
                version: 'v3.1',
                status: true
            });

            FB.AppEvents.logPageView();

            FB.getLoginStatus(function (response) {

                app.statusChangeCallback(response);

            });

            FB.Event.subscribe('auth.login', function (response) {
                app.statusChangeCallback(response);
            })

            FB.Event.subscribe('auth.logout', function (response) {
                app.statusChangeCallback(response);

            });

        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.1&appId=736479600033096&autoLogAppEvents=1';
            fjs.parentNode.insertBefore(js, fjs);

        }(document, 'script', 'facebook-jssdk'));

    },

    methods: {
        statusChangeCallback(response) {
            console.log('status called')
            this.loginStatus = response
        },
        login() {
            FB.login(this.statusChangeCallback, { scope: 'public_profile', return_scopes: true });
        },
        logout() {
            FB.logout(this.statusChangeCallback);
            
        }
    },
    watch: {
        loginStatus: function () {

            if (this.loginStatus.status == "connected") {

                FB.api('/me', { fields: ['first_name', 'picture', 'name', 'id', 'email'] }, function (response) {

                    // Set response data
                    app.fbapi_me = response

                    // Check if user exists
                    var formData = new FormData();
                    formData.append('account_fb_id', response.id);

                    Vue.http.post('/_system/php/api/accounts/addIfNew.php?',formData)
                        .then(
                            response => {

                                if (response.body.success){

                                    console.log(response.body.data);

                                }   
                                else
                                    console.error(response.body.message);
                            },
                            response => {
                                console.log('fail');
                            });

                    // Load Account
                    Vue.http.get('/_system/php/api/accounts/getAccountFromFbid.php?account_fb_id='+response.id)
                        .then(
                            response => {

                                if (response.body.success){
                                    console.log(response.body.data);
                                    app.account = response.body.data;
                                    
                                }
                                else {
                                    console.error(response.body.message);
                                }
                            },
                            response => {
                                console.log('fail');
                            });

                });
            }
        }
    }
}