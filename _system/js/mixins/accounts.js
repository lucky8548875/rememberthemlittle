var AccountMethods = {
    
    methods: {
        updateAccount: function(account_id,account_name,account_contact,account_email){

            var formData = new FormData();
            formData.append('account_id',account_id);
            formData.append('account_name',account_name);
            formData.append('account_contact',account_contact);
            formData.append('account_email',account_email);


            Vue.http.post('/_system/php/api/accounts/update.php', formData)
            .then(

                // If the server request is successful
                response => {

                    // If the PHP file has no errors
                    if (response.body.success) {
                        console.log('Account Updated');
                    }
                    else
                        console.error(response.body.message);

                },

                // If the server request is unsuccessful
                response => {

                    console.error(response);

                });


        }
    }

}