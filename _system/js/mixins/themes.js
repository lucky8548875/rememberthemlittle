var ThemeMethods = {
    methods: {
      loadThemes() {
  
        Vue.http.get('/_system/php/api/themes/getAll.php')
          .then(
            response => {
  
              if (response.body.success)
                this.themes = response.body.data;
              else
                console.error(response.body.message);
            },
            response => {
              console.log('fail');
            });
  
      },
    }
  }