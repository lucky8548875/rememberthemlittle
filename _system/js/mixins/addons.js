var AddonMethods = {
  methods: {
    loadAddons() {

      Vue.http.get('/_system/php/api/addons/getAll.php')
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

    getAddon(addon_id) {

      function checkAddonId(addon) {
        return addon.addon_id == addon_id;
      }

      return this.addons.find(checkAddonId);
    }
  }
}