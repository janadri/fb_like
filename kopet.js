$(document).ready(function(){
$("#myController").jFlow({
slides: "#slides",
controller: ".jFlowControl", // must be class, use . sign
slideWrapper : "#jFlowSlide", // must be id, use # sign
selectedWrapper: "jFlowSelected", // just pure text, no sign
auto: true, //auto change slide, default true
width: "610px",
height: "235px",
duration: 400,
prev: ".jFlowPrev", // must be class, use . sign
next: ".jFlowNext" // must be class, use . sign
});
});
