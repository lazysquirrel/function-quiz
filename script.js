var Questions =
[
    {
        answers: ["sin(x * y)", "cos(x+y)", "1/ln(x*y))", "2x+5y"],
		alreadyAsked: false
    },
	{
        answers: ["sqrt(x*y)", "cos(x+y)", "1/ln(x*y))", "2x+5y"],
		alreadyAsked: false
    },
	{
        answers: ["(x*x) +2.5*(y*y)-y)*exp(1-((x*x)+(y*y)))* 0.3", "3y", "3z*4y", "cos(x + y * 5)"],
		alreadyAsked: false
	},
	{
        answers: ["1 - (x*x+y*y)", "cos(x+y)", "1/ln(x*y))", "2x+5y"],
		alreadyAsked: false
    },
];

var currentQuiz;

function showQuestion(random)
{
	//TODO random index
   currentQuiz = Questions[random];
   setTimeout(
	function(){
		document.getElementById("35AF-0001-RW").contentWindow.showFunction(random);
	}, 2000
   )

    var idx = [0,1,2,3];
   idx = shuffleArray(idx);
   
   for(var a = 0; a < 4; a++)
   {
	   var i = idx[a];
	   answers.children[a].innerHTML = currentQuiz.answers[i];
   }

}

function startQuiz()
{
	var random = Math.round(Math.random()* 1000) % Questions.length;
	
	if(!Questions[random].alreadyAsked)
	{
		showQuestion(random);
	}
}


function answer(node)
{
	console.log(node.innerHTML);
	
	
	if(node.innerHTML == currentQuiz.answers[0])
	{
		$("#Herold_happy").fadeIn();
	}
	else
	{
		$("#Herold_disappointed").fadeIn();
	}
	
	setTimeout(function(){
		$("#Herold_happy").fadeOut();
		$("#Herold_disappointed").fadeOut();
	}, 1000);
}

function shuffleArray(array) 
{
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
