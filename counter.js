var SCORE = 0;
var TOTAL = 0;

function updateCounter(wasRight)
{
	++TOTAL;
	if(wasRight)++SCORE;
	
	counter_right.innerHTML = SCORE;
	counter_total.innerHTML = TOTAL;
}