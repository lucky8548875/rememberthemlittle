var notificationMixin = {
    methods:{
        getUserNotifications() {
            console.log(this.account.account_id)
            Vue.http.get(`/_system/php/api/notification/getUserNotifications.php?account_id=${this.account.account_id}&token=${this.account.token}`)
                .then(
                    response => {
                        if (response.body.success) {
                            this.notifications = response.body.data
                        }
                        else {
                            console.error(response.body.message);
                        }
                    },
                    response => {
                        console.error(response);
                    });

        },
    }
}