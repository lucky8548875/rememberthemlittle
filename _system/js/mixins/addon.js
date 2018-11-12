var addonMixin = {
  methods: {
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
    }
  }
}