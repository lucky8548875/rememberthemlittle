var app = new Vue({
    el: '#app',
    data: {
        wScroll: 0,
        scrollPlacing: 0,
        backgroundImage: "/_system/images/backgroundgallery.png",
        images1:["/_system/images/gallery/firstpage/RTLPIC1_ROSIE_SIX_MONTHS.jpg",
        "/_system/images/gallery/firstpage/RTLPIC2_TERRENCE_KYLER.jpg",
        "/_system/images/gallery/firstpage/RTLPIC3_KIRSTOFF.jpg",
        "/_system/images/gallery/firstpage/RTLPIC3_LORENZ_ROMEO.jpg",
        "/_system/images/gallery/firstpage/RTLPIC4_ZAYLEE_KRISTANE.jpg",
        "/_system/images/gallery/firstpage/RTLPIC5_ZEON_KENJI.jpg",
        "/_system/images/gallery/firstpage/RTLPIC6_GRAERIC_GIFT.jpg",
        "/_system/images/gallery/firstpage/RTLPIC7_YUKITO.jpg",
        "/_system/images/gallery/firstpage/RTLPIC8_PRINS_MARCUS.jpg"],
        images2:["/_system/images/gallery/secondpage/RTLCAT2_PIC1.jpg",
        "/_system/images/gallery/secondpage/RTLCAT2_PIC2.jpg",
        "/_system/images/gallery/secondpage/RTLCAT2_PIC3.jpg",
        "/_system/images/gallery/secondpage/RTLCAT2_PIC4.jpg",
        "/_system/images/gallery/secondpage/RTLCAT2_PIC5.jpg",
        "/_system/images/gallery/secondpage/RTLCAT2_PIC6.jpg",
        "/_system/images/gallery/secondpage/RTLCAT2_PIC7.jpg",
        "/_system/images/gallery/secondpage/RTLCAT2_PIC8.jpg",
        "/_system/images/gallery/secondpage/RTLCAT2_PIC9.jpg"],
        images3:["/_system/images/gallery/thirdpage/RTLCAT3_PIC1_ETHAN_ANDRES.jpg",
        "/_system/images/gallery/thirdpage/RTLCAT3_PIC2.jpg",
        "/_system/images/gallery/thirdpage/RTLCAT3_PIC3.jpg",
        "/_system/images/gallery/thirdpage/RTLCAT3_PIC4.jpg",
        "/_system/images/gallery/thirdpage/RTLCAT3_PIC5.jpg",
        "/_system/images/gallery/thirdpage/RTLCAT3_PIC6.jpg",
        "/_system/images/gallery/thirdpage/RTLCAT3_PIC7.jpg",
        "/_system/images/gallery/thirdpage/RTLCAT3_PIC8.jpg",
        "/_system/images/gallery/thirdpage/RTLCAT4_PIC4.jpg"],
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