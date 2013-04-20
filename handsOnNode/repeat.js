(function shedule() {
    setTimeout(function() {
        console.log('Hello world !');
        shedule();
    }, 1000);
})();