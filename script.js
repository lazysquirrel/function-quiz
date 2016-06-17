var currentQuiz;
var madeError = false;

function showQuestion(random) {
    currentQuiz = Questions[random];
    functionFrame.src = functionFrame.src;

    setTimeout(
        function () {
            functionFrame.contentWindow.showFunction(random);
        }, 2000
    );

    var idx = [0, 1, 2, 3];
    idx = shuffleArray(idx);

    for (var a = 0; a < 4; a++) {
        var i = idx[a];
        answers.children[a].innerHTML = currentQuiz.answers[i];
        $(answers.children[a]).data("is_right", i == 0);
    }
}

function startQuiz() {
    functionFrame = document.getElementById("functionFrame");

    madeError = false;
    var random = Math.round(Math.random() * 1000) % Questions.length;

    if (!Questions[random].alreadyAsked) {
        showQuestion(0);
        MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    }
}

function answer(node) {

    if ($(node).data("is_right")) {
        $("#Herold_happy").fadeIn();
        updateCounter(madeError ? 0 : 1);
        startQuiz();
    }
    else {
        madeError = true;
        $("#Herold_disappointed").fadeIn();
    }

    setTimeout(function () {
        $("#Herold_happy").fadeOut();
        $("#Herold_disappointed").fadeOut();
    }, 1000);
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
