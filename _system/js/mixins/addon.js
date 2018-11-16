var addonMixin = {
  methods: {

    addAddon(addon_type, addon_description, addon_price, addon_max, addon_active) {

      var formData = new FormData();
      formData.append('addon_type', addon_type);
      formData.append('addon_description', addon_description);
      formData.append('addon_max', addon_max)
      formData.append('addon_price', addon_price)
      formData.append('addon_active', addon_active)
      Vue.http.post('/_system/php/api/addon/add.php', formData, {
        headers: {
          'Content-Type' : 'multipart/form-data'
        }
      })
        .then(
          response => {
            if (response.body.success) {
              this.loadAddons();
            }
            else
              console.error(response.body.message)
          },
          response => {
            console.error(response);
          });
    },

    updateAddon(addon_id, addon_type, addon_description, addon_price, addon_max, addon_active) {

      var formData = new FormData();
      formData.append('addon_id', addon_id);
      formData.append('addon_type', addon_type);
      formData.append('addon_description', addon_description);
      formData.append('addon_max', addon_max)
      formData.append('addon_price', addon_price)
      formData.append('addon_active', addon_active)
      console.log(addon_active);
      Vue.http.post('/_system/php/api/addon/update.php', formData, {
        headers: {
          'Content-Type' : 'multipart/form-data'
        }
      })
        .then(
          response => {
            if (response.body.success) {
              console.log(response)
              this.loadAddons();
            }
            else
              console.error(response.body.message)
          },
          response => {
            console.error(response);
          });
    },

    loadAddons() {

      Vue.http.get('/_system/php/api/addon/getAll.php')
        .then(
          response => {

            if (response.body.success)
              this.addons = response.body.data;
            else
              console.error(response.body.message);
          },
          response => {
            console.log('fail');
          });

    },

    loadInclusions(){

      Vue.http.get(`/_system/php/api/addon/getInclusions.php`)
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

    getAddon(addon_id) {

      function checkAddonId(addon) {
        return addon.addon_id == addon_id;
      }

      return this.addons.find(checkAddonId);
    },

    deleteAddon(addon_id){
      var formData = new FormData();
      formData.append('addon_id',addon_id);

      Vue.http.post('/_system/php/api/addon/delete.php',formData)
      .then(
        response => {

          if (response.body.success)
            this.loadAddons();
          else
            console.error(response.body.message);
        },
        response => {
          console.log('fail');
        });

    }
  }
}