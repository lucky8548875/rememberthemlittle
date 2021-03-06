var accountMixin = {

    data: {
        account: {
            display_name: "",
            account_id: "",
            picture_url: "",
            token: "",
            status: "" //CONNECTED, DISCONNECTED
        }
    },

    created: function () {

        this.loadAccountFromCache();

        if(this.account.status != "DISCONNECTED"){
            this.verifyToken();
        }
        
    },

    methods: {

        loadAccountFromCache: function () {

            if (typeof (Storage) !== "undefined") {

                if (localStorage.display_name != undefined && localStorage.account_id != undefined && localStorage.token != undefined && localStorage.picture_url != undefined) {
                    this.account.display_name = localStorage.display_name;
                    this.account.account_id = parseInt(localStorage.account_id);
                    this.account.picture_url = localStorage.picture_url
                    this.account.token = localStorage.token;
                    this.account.status = "CONNECTED";
                }
                else {
                    this.account.status = "DISCONNECTED";
                }

            } else {
                console.log('Sorry, no web storage support.')
            }

        },

        clearAccountFromCache: function () {
            if (typeof (Storage) !== "undefined") {

                localStorage.removeItem('display_name')
                localStorage.removeItem('account_id')
                localStorage.removeItem('picture_url')
                localStorage.removeItem('token')

                this.account.display_name = "";
                this.account.account_id = "";
                this.account.token = "";
                this.account.picture_url = "";
                this.account.status = "DISCONNECTED";

            } else {
                console.log('Sorry, no web storage support.')
            }
        },

        verifyToken: function () {

            Vue.http.get(`/_system/php/api/account/verifyToken.php?account_id=${this.account.account_id}&token=${this.account.token}`)
                .then(
                    response => {

                        if (response.body.success) {
                            console.log('Valid Token');
                        }
                        else if (response.body.status == "UNAUTHORIZED") {
                            console.log('Unauthorized. Account cache cleaned.')
                            this.clearAccountFromCache();
                        }
                        else
                            console.error(response.body.message);

                    },
                    response => {
                        console.error(response);
                    }
                )
        },

        signOut: function(){
            this.clearAccountFromCache();
        }
    }


}