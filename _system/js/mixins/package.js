var packageMixin = {

    methods: {

        loadPackages() {

            Vue.http.get('/_system/php/api/package/getAll.php')
                .then(
                    response => {

                        if (response.body.success){
                            this.packages = response.body.data;
                        }
                        else
                            console.error(response.body.message);
                    },
                    response => {
                        console.log('fail');
                    });

            Vue.http.get('/_system/php/api/package/getInclusions.php')
                .then(
                    response => {

                        if (response.body.success)
                            this.inclusions = response.body.data;
                        else
                            console.error(response.body.message);
                    },
                    response => {
                        console.log('fail');
                    });
        },

        addPackage(package_name, package_description, category_id, package_price,
            package_minutes, package_themes, package_active, package_inclusions) {

            var formData = new FormData();
            formData.append('package_name', package_name);
            formData.append('package_description', package_description);
            formData.append('category_id', category_id);
            formData.append('package_price', package_price);
            formData.append('package_minutes', package_minutes);
            formData.append('package_themes', package_themes);
            formData.append('package_active', package_active);
            formData.append('package_inclusions', package_inclusions);
            console.log(package_inclusions);
            Vue.http.post('/_system/php/api/package/add.php', formData)
                .then(
                    response => {
                        if (response.body.success) {
                            this.loadPackages();
                        }
                        else
                            console.error(response.body.message)
                    },

                    response => {
                        console.error(response);
                    });
        },

        updatePackage(package_id, package_name, package_description, category_id, package_price,
            package_minutes, package_themes, package_active, package_inclusions) {

            var formData = new FormData();
            formData.append('package_id', package_id);
            formData.append('package_name', package_name);
            formData.append('package_description', package_description);
            formData.append('category_id', category_id);
            formData.append('package_price', package_price);
            formData.append('package_minutes', package_minutes);
            formData.append('package_themes', package_themes);
            formData.append('package_active', package_active);
            formData.append('package_inclusions', package_inclusions);
            console.log(package_inclusions);
            Vue.http.post('/_system/php/api/package/update.php', formData)
                .then(
                    response => {
                        if (response.body.success) {
                            this.loadPackages();
                        }
                        else
                            console.error(response.body.message)
                    },

                    response => {
                        console.error(response);
                    });
        },
        
        deletePackage(package_id) {

            var formData = new FormData();
            formData.append('package_id', package_id);

            Vue.http.post('/_system/php/api/package/delete.php', formData)
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

        getPackage(package_id) {

            function checkPackageId(package) {
                return package.package_id == package_id;
            }

            return this.packages.find(checkPackageId);
        }
    }
}