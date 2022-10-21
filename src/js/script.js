$(".header-btn,.footer-btn,#price-btn").on("click", function() {
    $(".overlay,#consultation").fadeIn("slow");
});
$("#search-btn").on("click", function(e) {
    e.preventDefault();
    $(".overlay,#start-search").fadeIn("slow");
});
$("#tour-btn").on("click", function(e) {
    e.preventDefault();
    $(".overlay,#tour").fadeIn("slow");
});
$(".modal__close").on("click", function() {
    $(".overlay,#consultation,#start-search").fadeOut("slow");
});
$(".button_mini").each(function(i) {
    $(this).on("click", function() {
        $("#order .modal__desc").text($(".catalog-item__subtitle").eq(i).text());
        $(".overlay,#order").fadeIn("slow");
    });
});
//Управление формой с вопросами
let btnNext = $(".quiz-form__btn");
let btnBack = $(".btn-back");
let question = $(".quiz-question");

btnNext.on("click", function() {
    btnNext.addClass("quiz-form__btn-active");
    btnBack.show();
    question.addClass("question-hidden");
    $(".quiz-question-2").removeClass("question-hidden");
});