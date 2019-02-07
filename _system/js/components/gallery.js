var app = new Vue({
    el: '#app',
    data: {
        wScroll: 0,
        scrollPlacing: 0,
        backgroundImage: "/_system/images/backgroundgallery.png",
        images1:['/_system/images/gallery/Picture 1 Display.jpg','/_system/images/gallery/Picture 2 Display.jpg',"/_system/images/gallery/Picture 3 Display.jpg","/_system/images/gallery/Picture 4 Display.jpg","/_system/images/gallery/Picture4.jpg","/_system/images/gallery/Picture3.jpg","/_system/images/gallery/Picture1.jpg","/_system/images/gallery/Picture4.jpg","/_system/images/gallery/Picture3.jpg"],
        images2:["/_system/images/gallery/Picture5.jpg","/_system/images/gallery/Picture6.jpg", "/_system/images/gallery/Picture7.jpg", "/_system/images/gallery/Picture5.jpg", "/_system/images/gallery/Picture5.jpg", "/_system/images/gallery/Picture5.jpg"],
        images3:["/_system/images/gallery/Picture8.jpg","/_system/images/gallery/Picture9.jpg","/_system/images/gallery/Picture10.jpg","/_system/images/gallery/Picture10.jpg"],
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