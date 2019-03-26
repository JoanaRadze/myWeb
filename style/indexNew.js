function changeTab(id) {
    $(".main>div").hide();
    $(id).show();
}

$('.meniu a').click(function () {
    changeTab($(this).attr('href'));
});
///fishing foto
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});