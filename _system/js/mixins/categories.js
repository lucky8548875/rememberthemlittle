var CategoryMethods = {

    methods: {

        loadCategories() {

            Vue.http.get('/_system/php/api/categories/getAll.php')
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
          }

    }

}