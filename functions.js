// Array of functions to plot and display inside the quiz
var Questions =
    [
        {
            answers: ["` sin(x * y) `", "` cos(x+y) `", "` 1/ln(x*y) `", "` 2x+5y `"],
            func: function (x, y) { return sin(x*y);},
            alreadyAsked: false,
            camera: [3.5, 1.4, -2.3]
        },
        {
            answers: ["` sqrt(x*y) `", "` cos(x+y) `", "` 1/ln(x*y) `", "` 2x+5y `"],
            func: function (x, y) { return Math.sqrt(x*y); },
            alreadyAsked: false,
            camera: null
        },
        {
            answers: ["` x^2 + 2.5y^2 -y * exp(1-(x^2+y^2))* 0.3 `", "` 3y `", "` 3z*4y `", "` cos(x + y * 5) `"],
            func: function (x, y) { return ((x*x) +2.5*(y*y)-y)*Math.exp(1-((x*x)+(y*y)))* 0.3; },
            alreadyAsked: false,
            camera: null
        },
        {
            answers: ["` 1 - (x^2 + y^2) `", "` cos(x+y) `", "` 1/ln(x*y) `", "` 2x+5y `"],
            func: function (x, y) { return 1 - (x*x+y*y); },
            alreadyAsked: false,
            camera: null
        },
        {
            answers: ["` sin(x+y)*cos(y+x) `", "` cos(x+y)*sin(x*y) `", "` sin(x*y)*cos(y*x) `", "` tan(x+y) `"],
            func: function (x, y) { return sin(x+y)*cos(y+x); },
            alreadyAsked: false,
            camera: null
        },
        {
            answers: ["` ln(1/x)*y `", "` cos(x+y)*sin(x*y) `", "` sin(x*y)*cos(y*x) `", "` tan(x+y) `"],
            func: function (x, y) { return Math.log(1/x)*y; },
            alreadyAsked: false,
            camera: null
        }
    ];