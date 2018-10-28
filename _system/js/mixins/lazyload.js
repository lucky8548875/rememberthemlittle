var lazyload = {
    methods: {
        lazyload: function (url) {
            var style = document.createElement('link');
            style.rel = 'stylesheet';
            style.href = url;
            var first = document.getElementsByTagName('link')[0];
            first.parentNode.insertBefore(style, first);
        }
    }
}