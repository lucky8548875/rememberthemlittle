var adminMixin = {

  methods: {
    getAllOrders(){
      var formData = new FormData();
      formData.append('account_id', this.account.account_id);
      formData.append('token', this.account.token);
      Vue.http.post('/_system/php/api/orders/getAll.php', formData)
        .then(
          response => {

            if (response.body.success)
              this.orders = response.body.data;
            else
              console.error(response.body);
          },
          response => {
            console.log('fail');
          });
    },
    getAllBookings() {

      var formData = new FormData();
      formData.append('account_id', this.account.account_id);
      formData.append('token', this.account.token);
      Vue.http.post('/_system/php/api/booking/getAll.php', formData)
        .then(
          response => {

            if (response.body.success)
              this.bookings = response.body.data;
            else
              console.error(response.body);
          },
          response => {
            console.log('fail');
          });
    },
    getAllSales() {

      console.log('tinawag kita')

      var formData = new FormData();
      formData.append('account_id', this.account.account_id);
      formData.append('token', this.account.token);
      //formData.append('pageNum', this.pageNum)
      Vue.http.post('/_system/php/api/salesreport/getAll.php', formData)
        .then(
          response => {

            if (response.body.success){
              this.sales = response.body.data;
              console.log('tagumpay')
            }
            else
              console.error("bigo" + response.body);
          },
          response => {
            console.log('fail');
          });
    },
    getPageCount(){
      var formData = new FormData();
      formData.append('account_id', this.account.account_id);
      formData.append('token', this.account.token);
      Vue.http.post('/_system/php/api/salesreport/getPageCount.php', formData)
      .then(
        response => {

          if (response.body.success)
            this.pageCount = response.body.data;
          else
            console.error(response.body);
        },
        response => {
          console.log('fail');
        });
    },
    getPageNumber(pageNum, calendarMode){
      var formData = new FormData();
      formData.append('account_id', this.account.account_id);
      formData.append('token', this.account.token);
      formData.append('pageNum', pageNum);
      formData.append('calendar_mode', calendarMode);
      Vue.http.post('/_system/php/api/salesreport/getByPage.php', formData)
      .then(
        response => {

          if (response.body.success)
            this.sales = response.body.data;
          else
            console.error(response.body);
        },
        response => {
          console.log('fail');
        });
    },
    getCalendarBookingsByDate(date){
      Vue.http.post('/_system/php/api/booking/getByDate.php?date=' + date,)
        .then(
          response => {

            if (response.body.success)
              this.calendarBookingsByDate = response.body.data;
            else
              console.error(response.body);
          },
          response => {
            console.log('fail');
          });
    },
    getSalesReportsByDate(){
      Vue.http.post('/_system/php/api/salesreport/getByDate.php',)
        .then(
          response => {

            if (response.body.success)
              this.salesReportsByDate = response.body.data;
            else
              console.error(response.body);
          },
          response => {
            console.log('fail');
          });
    },
    approveBooking(booking_id) {
      var formData = new FormData();
      formData.append('account_id', this.account.account_id);
      formData.append('token', this.account.token);
      formData.append('booking_id', booking_id);
      Vue.http.post('/_system/php/api/booking/approveBooking.php', formData)
        .then(
          response => {

            if (response.body.success)
              this.getAllBookings();
            else
              console.error(response.body.message);
          },
          response => {
            console.log('fail');
          });

    },
    cancelBooking(booking_id) {
      var formData = new FormData();
      formData.append('account_id', this.account.account_id);
      formData.append('token', this.account.token);
      formData.append('booking_id', booking_id);
      Vue.http.post('/_system/php/api/booking/cancelBooking.php', formData)
        .then(
          response => {

            if (response.body.success)
              this.getAllBookings();
            else
              console.error(response.body.message);
          },
          response => {
            console.log('fail');
          });

    },
    completeBooking(booking_id) {
      var formData = new FormData();
      formData.append('account_id', this.account.account_id);
      formData.append('token', this.account.token);
      formData.append('booking_id', booking_id);
      Vue.http.post('/_system/php/api/booking/completeBooking.php', formData)
        .then(
          response => {

            if (response.body.success)
              this.getAllBookings();
            else
              console.error(response.body.message);
          },
          response => {
            console.log('fail');
          });

    }
  }

}