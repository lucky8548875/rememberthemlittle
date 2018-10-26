var BookingMethods = {

    methods: {

        getOpenSlots(booking_date,package_minutes){

            var formData = new FormData();

            formData.append('booking_date',booking_date);
            formData.append('package_minutes',package_minutes);
            console.log(booking_date);
            console.log(package_minutes);
            Vue.http.post('/_system/php/api/bookings/getOpenSlots.php', formData)
        .then(
          response => {

            if (response.body.success)
              this.slots = response.body.data;
            else
              console.error(response.body.message);
          },
          response => {
            console.log('fail');
          });
        },

        addBookingFromCustomer: function (formData) {

          Vue.http.post('/_system/php/api/bookings/add.php', formData)
              .then(

                  // If the server request is successful
                  response => {

                      // If the PHP file has no errors
                      if (response.body.success) {
                          console.log(response.body)
                      }
                      else
                          console.error(response.body.message)

                  },

                  // If the server request is unsuccessful
                  response => {

                      console.error(response);

                  });


      },

    }

}