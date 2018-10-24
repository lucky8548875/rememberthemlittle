var PackageMethods = {

    methods: {

        loadPackages() {

            Vue.http.get('/_system/php/api/packages/getAll.php')
                .then(
                    response => {

                        if (response.body.success)
                            this.packages = response.body.data;
                        else
                            console.error(response.body.message);
                    },
                    response => {
                        console.log('fail');
                    });
        },

        addPackage(submitEvent) {

            var elements = submitEvent.target.elements;
            var formData = new FormData();
            formData.append('package_name', elements.package_name.value);
            formData.append('package_description', elements.package_description.value);
            formData.append('category_id', elements.category_id.value);
            formData.append('package_price', elements.package_price.value);
            formData.append('package_minutes', elements.package_minutes.value);
            formData.append('package_themes', elements.package_themes.value);
            formData.append('package_active', elements.package_active.checked ? 1 : 0);
            formData.append('package_addons', JSON.stringify(this.chosen_addons));

            Vue.http.post('/_system/php/api/packages/add.php', formData)
                .then(

                    // If the server request is successful
                    response => {

                        // If the PHP file has no errors
                        if (response.body.success) {
                            this.loadPackages();
                        }
                        else
                            console.error(response.body.message)

                    },

                    // If the server request is unsuccessful
                    response => {

                        console.error(response);

                    });

        },

        updatePackage(package_id, submitEvent) {

            var elements = submitEvent.target.elements;
            var formData = new FormData();
            formData.append('package_id', package_id);
            formData.append('package_name', elements.package_name.value);
            formData.append('package_description', elements.package_description.value);
            formData.append('category_id', elements.category_id.value);
            formData.append('package_price', elements.package_price.value);
            formData.append('package_minutes', elements.package_minutes.value);
            formData.append('package_themes', elements.package_themes.value);
            formData.append('package_active', elements.package_active.checked ? 1 : 0);

            Vue.http.post('/_system/php/api/packages/update.php', formData)
                .then(

                    // If the server request is successful
                    response => {

                        // If the PHP file has no errors
                        if (response.body.success) {
                            this.loadPackages();
                        }
                        else
                            console.error(response.body.message)

                    },

                    // If the server request is unsuccessful
                    response => {

                        console.error(response);

                    });

        },

        deletePackage(package_id) {

            var formData = new FormData();
            formData.append('package_id', package_id);

            Vue.http.post('/_system/php/api/packages/delete.php', formData)
                .then(

                    // If the server request is successful
                    response => {

                        // If the PHP file has no errors
                        if (response.body.success) {
                            this.loadPackages();
                        }
                        else
                            console.error(response.body.message)

                    },

                    // If the server request is unsuccessful
                    response => {

                        console.error(response);

                    });

        },

        filteredPackages(category_id) {

            function checkCategory(package) {
                return package.category_id == category_id;
            }

            return this.packages.filter(checkCategory)
        },

        getPackage(package_id) {

            function checkPackageId(package) {
              return package.package_id == package_id;
            }
      
            return this.packages.find(checkPackageId);
          }
    }
}