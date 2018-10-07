new Vue({
    el: '#app',
    data: {
        products:[
            {
                id: '01',
                title: 'kunwaring title',
                description: 'kunwari lang',
                price: 0
            }
            ,
            {
                id: '02',
                title: 'kunwaring title',
                description: 'kunwari lang',
                price: 0
            }
            ,
            {
                id: '03',
                title: 'kunwaring title',
                description: 'kunwari lang',
                price: 0
            }
        ]
    },
    methods: {
        loadData(){
            Vue.http.get('/_system/php/index3.php')
            .then(response => {
                echo
            }, response => {

            });
        }
    }
});