var bookingMixin = {

    data: {
        user_bookings: []
    },

    methods: {

        getUserBookings() {
            console.log(this.account.account_id)
            Vue.http.get(`/_system/php/api/booking/getUserBookings.php?account_id=${this.account.account_id}&token=${this.account.token}`)
                .then(
                    response => {
                        if (response.body.success) {
                            this.user_bookings = response.body.data
                        }
                        else if (response.body.status == "UNAUTHORIZED") {
                            console.log('Unauthorized Request')
                            this.clearAccountFromCache();
                        }
                        else
                            console.error(response.body.message);
                    },
                    response => {
                        console.error(response);
                    });

        },

        getOpenSlots(booking_date, package_minutes) {

            var formData = new FormData();

            formData.append('booking_date', booking_date);
            formData.append('package_minutes', package_minutes);
            console.log(booking_date);
            console.log(package_minutes);
            Vue.http.post('/_system/php/api/booking/getOpenSlots.php', formData)
                .then(
                    response => {

                        if (response.body.success) {
                            this.slots = response.body.data;
                            console.log(response.body);
                        }
                        else
                            console.error(response.body);
                    },
                    response => {
                        console.log('fail');
                    });
        },

        uploadPayment(booking_id, deposit_slip_file) {

            var formData = new FormData();
            formData.append('booking_id', booking_id);
            formData.append('deposit_slip', deposit_slip_file);
            formData.append('account_id', this.account.account_id);
            formData.append('token', this.account.token);
            console.log(this.account.account_id)
            console.log(this.account.token)
  
            Vue.http.post('/_system/php/api/booking/addDepositSlip.php', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            })
              .then(
                response => {
                  if (response.body.success) {
                    console.log(response.body.data);
                    this.getUserBookings();
                  }
                  else
                    console.error(response.body.message);
                },
                response => {
                  console.error(response);
                });
          },
    }

}