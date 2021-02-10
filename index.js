window.scrollY;
document.scrollingElement.scrollTop;	

const fixedTitleContainer = document.querySelector(".header");
const fixedTitleText = document.getElementById("title");
const fixedTitleContact = document.getElementById("contact");
const sectionSubText = document.getElementById("section-sub-text");


//타이틀 로딩 페이드인
var start_fun;
var op_count=0;
var op_count_section=0;
var set_time;
var set_time1;

var start_type;
var typBool = false;
var typIdx = 0;
var typIndex = 0;
var typLength = $("#section-main-typing").length;
var typContents=document.getElementById("section-main-typing");
var typTxt= $("#section-main-typing").eq(typIndex).text();

var mq1 = window.matchMedia("screen and (max-width:768px");

typEmpty=typTxt.split("");
setInterval(typeFun,100);
$(typContents).empty();
console.log(typContents);
function typeFun(){
        if(typIdx<typTxt.length){
                $("#section-main-typing").append(typTxt[typIdx]);
                typIdx++;
        }
}

// Supports all major browsers
document.documentElement.scrollTop;
document.querySelector('html').scrollTop;
window.addEventListener('scroll', () => {
	let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
	let windowHeight = window.innerHeight; // 스크린 창
	let fullHeight = 1718; //  margin 값은 포함 x

	if(scrollLocation + windowHeight >= fullHeight){
        fixedTitleText.style.color="black";
        fixedTitleContact.style.color="black";
	}else if(scrollLocation + windowHeight < fullHeight){
        fixedTitleText.style.color="white";
        fixedTitleContact.style.color="white";
    }
})

$(document).ready(function(){
        start_fun=setTimeout(pageLoad,600);
        console.log(window.scrollY);
        console.log(window.innerHeight);
        console.log(document.body.clientHeight);
});

function pageLoad(){
        op_count = op_count+0.1;
        op_count_section = op_count_section+0.02;

        fixedTitleText.style.opacity=op_count;
        fixedTitleContact.style.opacity=op_count;
        sectionSubText.style.opacity=op_count_section;
        settime = setTimeout(pageLoad,30);
        if(op_count>1){
                clearTimeout(set_time);
                op_count=1;
        }
        if(op_count_section >1){
                clearTimeout(set_time);
                op_count_section=1;
        }
}

//mediaquer
        