var app = new Vue({
    el: '#app',
    data: {
        wScroll: 0,
        scrollPlacing: 0,
        backgroundImage: "/_system/images/backgroundgallery.png"
    },
    methods: {
        scrollMoved: function() {
            this.wScroll = (this.$refs.container.scrollLeft)*-0.025;
            console.log(this.wScroll)
        },
        moveLeft: function() {
            this.scrollPlacing-=this.$refs.container.offsetWidth;
            this.$refs.container.scrollTo(this.scrollPlacing,0);
        },
        moveRight: function() {
            this.scrollPlacing+=this.$refs.container.offsetWidth;
            this.$refs.container.scrollTo(this.scrollPlacing,0);
        },
        changeBackground: function(image){
            this.backgroundImage = image;
            console.log(image);
        }
    }
});