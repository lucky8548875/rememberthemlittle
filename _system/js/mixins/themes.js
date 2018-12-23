var themeMixin = {
  methods: {
    loadThemes() {

      Vue.http.get('/_system/php/api/theme/getAll.php')
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
    addTheme(theme_description, theme_image, theme_active) {

      var formData = new FormData();
      formData.append('theme_description', theme_description);
      formData.append('theme_image', theme_image)
      Vue.http.post('/_system/php/api/theme/add.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(
          response => {
            if (response.body.success) {
              this.loadThemes();
            }
            else
              console.error(response.body.message)
          },
          response => {
            console.error(response);
          });
    },
    updateTheme(theme_id, theme_description, theme_image){

      var formData = new FormData();
      formData.append('theme_id', theme_id);
      formData.append('theme_description', theme_description);
      formData.append('theme_image', theme_image)
      Vue.http.post('/_system/php/api/theme/update.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(
          response => {
            if (response.body.success) {
              this.loadThemes();
            }
            else
              console.error(response.body.message)
          },
          response => {
            console.error(response);
          });
    },
    deleteTheme(theme_id) {
      var formData = new FormData();
      formData.append('theme_id', theme_id);

      Vue.http.post('/_system/php/api/theme/delete.php', formData)
        .then(
          response => {

            if (response.body.success)
              this.loadThemes();
            else
              console.error(response.body.message);
          },
          response => {
            console.log('fail');
          });

    }
  }
}