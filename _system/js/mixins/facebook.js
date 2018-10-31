var facebookMixin = {

    methods: {

        fbInit: function() {
            window.fbAsyncInit = function () {

                FB.init({
                    appId: '736479600033096',
                    cookie: true,
                    xfbml: true,
                    version: 'v3.1',
                    status: true
                });
    
                FB.AppEvents.logPageView();
    
                // FB.getLoginStatus(function (response) {
                //     app.statusChangeCallback(response);
                // });
    
                // FB.Event.subscribe('auth.login', function (response) {
                //     app.statusChangeCallback(response);
                // })
    
            };
    
            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.1&appId=736479600033096&autoLogAppEvents=1';
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));

        },

        statusChangeCallback(response) {

            console.log('statusChangeCallback() called')
            
            if(response.status == "connected"){

                FB.api('/me', { fields: ['first_name', 'picture', 'name', 'id'] }, function (response) {

                    // Initialize data
                    var display_name = response.first_name;
                    var picture_url = response.picture.data.url;

                    // Sign In
                    Vue.http.get('/_system/php/api/account/facebookSignIn.php?facebook_id='+response.id)
                        .then(
                            response => {

                                if (response.body.success){
                                    
                                    localStorage.display_name = response.body.data.display_name != "" ? response.body.data.display_name : display_name
                                    localStorage.account_id = response.body.data.account_id;
                                    localStorage.token = response.body.data.token;
                                    localStorage.picture_url = picture_url;
                                    app.loadAccountFromCache();

                                }   
                                else
                                    console.error(response)
                            },

                            response => {
                                console.log('fail');
                            });

                });

            }

        },

        facebook_login(){
            FB.login(app.statusChangeCallback, { scope: 'public_profile', return_scopes: true });
        }

    }

}