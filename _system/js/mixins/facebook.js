var FacebookMixin = {
    data: {

        loginStatus: {
            status: ''
        },

        fbapi_me: {
            picture: {
                data: {
                    url: ''
                }
            },
            first_name: ''
        },
    },

    created: function () {

        window.fbAsyncInit = function () {

            FB.init({
                appId: '736479600033096',
                cookie: true,
                xfbml: true,
                version: 'v3.1'
            });

            FB.AppEvents.logPageView();

            FB.getLoginStatus(function (response) {

                app.statusChangeCallback(response);

                //statusChangeCallback(response);
                // Remove preloader
                //document.querySelector("#preloader").style.display = "none";
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

    methods :{
        statusChangeCallback(response) {
            console.log('status called')
            this.loginStatus = response
          },
        login(){
            FB.login(this.statusChangeCallback, {scope: 'email,public_profile', return_scopes: true});
        },
        logout(){
            FB.logout(this.statusChangeCallback)
        }
    },
    watch: {
        loginStatus: function () {
            FB.api('/me', { fields: ['first_name', 'picture'] }, function (response) {

                app.fbapi_me = response
            });

        }
    }
}