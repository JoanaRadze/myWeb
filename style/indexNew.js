function changeTab(id) {

    $(".allHiden>.main").hide();
    $(id).show();

}

$('.meniu a').click(function (e) {
    e.preventDefault();
    changeTab($(this).attr('href'));
});
///fishing foto