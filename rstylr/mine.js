//------ faq
var headers = document.querySelectorAll(".faq-container header.question");

for (var i = 0; i < headers.length; i++) {
    headers[i].addEventListener("click", openAccordion);
}
function openAccordion(e) {
    for (var i = 0; i < headers.length; i++) {
        var parent = headers[i].parentElement;
        var article = headers[i].nextElementSibling;

        if (this === headers[i] && !parent.classList.contains("open")) {
            parent.classList.add("open");
            article.style.maxHeight = article.scrollHeight + "px";
        } else {
            parent.classList.remove("open");
            article.style.maxHeight = "0px";
        }
    }
}