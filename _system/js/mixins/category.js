var categoryMixin = {

  methods: {

    loadCategories() {

      Vue.http.get('/_system/php/api/category/getAll.php')
        .then(
          response => {

            if (response.body.success)
              this.categories = response.body.data;
            else
              console.error(response.body.message);
          },
          response => {
            console.log('fail');
          });
    },
    addCategory(category_name, category_description, category_image,category_active) {

      var formData = new FormData();
      formData.append('category_name',category_name);
      formData.append('category_description',category_description);
      formData.append('category_image',category_image)
      formData.append('category_active',category_active)
      Vue.http.post('/_system/php/api/category/add.php', formData, {
        headers: {
          'Content-Type' : 'multipart/form-data'
        }
      })
        .then(
          response => {
            if (response.body.success) {
              this.loadCategories();
            }
            else
              console.error(response.body.message)
          },
          response => {
            console.error(response);
          });
    },
    updateCategory(category_id,category_name, category_description, category_image,category_active) {

      var formData = new FormData();
      formData.append('category_id',category_id);
      formData.append('category_name',category_name);
      formData.append('category_description',category_description);
      formData.append('category_image',category_image)
      formData.append('category_active',category_active)
      Vue.http.post('/_system/php/api/category/update.php', formData, {
        headers: {
          'Content-Type' : 'multipart/form-data'
        }
      })
        .then(
          response => {
            if (response.body.success) {
              this.loadCategories();
            }
            else
              console.error(response.body.message)
          },
          response => {
            console.error(response);
          });
    },
    deleteCategory(category_id){
      var formData = new FormData();
      formData.append('category_id',category_id);

      Vue.http.post('/_system/php/api/category/delete.php',formData)
      .then(
        response => {

          if (response.body.success)
            this.loadCategories();
          else
            console.error(response.body.message);
        },
        response => {
          console.log('fail');
        });

    }

  }

}