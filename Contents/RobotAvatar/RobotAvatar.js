//-----------------------------------------------------
//Redirects to homepage after 1 minute of not interaction
//-----------------------------------------------------

function redirect(){
    window.location.href = "../../maincontents.htm";
}
var initial=setTimeout(redirect,60000);

$(document).click(function(event) {
    clearTimeout( initial );
    initial=setTimeout(redirect,60000);
});
//-----------------------------------------------------
//  To stop warning speech loop
//-----------------------------------------------------


var deletePic="Image/Avatar_delete_none.png";
var deletePicNor="Image/Avatar_delete_nor.png";


function LanguageChange(lang)
{
    if(lang === "english")
    {
        eraseCookie("Spanish");
        writeCookie("CurrentLanguage", "English", 30);
        document.getElementById("btn_english").style.backgroundColor = "white";
        document.getElementById("btn_english").style.color = "#FF6600";
        document.getElementById("btn_spanish").style.backgroundColor = "#FF6600";
        document.getElementById("btn_spanish").style.color = "white";

        document.getElementById("deltext").innerHTML = "If you want to delete the Avatar now press the 'DELETE' button.";
        document.getElementById("delete").innerHTML = "DELETE";
    }
    else if (lang === "spanish")
    {
        eraseCookie("English");
        writeCookie("CurrentLanguage", "Spanish", 30);
        document.getElementById("btn_english").style.backgroundColor = "#FF6600";
        document.getElementById("btn_english").style.color = "white";
        document.getElementById("btn_spanish").style.backgroundColor = "white";
        document.getElementById("btn_spanish").style.color = "#FF6600";

        document.getElementById("deltext").innerHTML = "Si desea eliminar el Avatar ahora, presione el botón 'BORRAR'.";
        document.getElementById("delete").innerHTML = "BORRAR";
    }
}

//   $(document).ready(function(){
//
// 	$('#change-us').click(function(){
// 		writeCookie("lang","english");
// 		$('#change-us').addClass('active');
//         $('#change-ar').removeClass('active');
// 		$('.title').text("Robot Avatar");
// 		$('#shot img').attr("src","Image/avatar_shot_nor.png");
// 		$('.deltext').css({"font-size":"32px", "line-height":"32px"});
// 		$('.deltext').text("If you want to delete the Avatar now press the 'DELETE' button.")
// 		$('#change-ar').css({"background":"white", "color":"#4a32a4"});
// 		$('#change-us').css({"background":"#4a32a4", "color":"white", "padding": "10px 10px", "border-radius": "5px"});
// 		$('#delete').attr('src','Image/Avatar_delete_none.png');
//         deletePic="Image/Avatar_delete_none.png";
//         deletePicNor="Image/Avatar_delete_nor.png";
//         del();
// 	});
// 	//Change to Arabic
// 	$('#change-ar').click(function(){
// 		writeCookie("lang","arabic");
//         $('#change-us').removeClass('active');
//         $('#change-ar').addClass('active');
// 		$('.title').text("الصّورة الرّمزية");
// 		$('.deltext').css({"font-size":"44px", "line-height":"31px"});
// 		$('.deltext').text("إذا كنت ترغب في حذف الصورة الرمزية الآن اضغط على زر '' ديليت ''")
// 		$('#change-us').css({"background":"white", "color":"#4a32a4"});
// 		$('#change-ar').css({"background":"#4a32a4", "color":"white", "padding": "10px 10px", "border-radius": "5px"});
// 		$('#shot img').attr('src','Image/avatar_shot_nor_ar.png');
// 		$('#delete').attr('src','Image/Avatar_delete_none_ar.png');
//         deletePic="Image/Avatar_delete_none_ar.png";
//         deletePicNor="Image/Avatar_delete_nor_ar.png";
//         del();
// 	});
//
//
// });
var refreshIntervalId ;
	function JSMain() {
		refreshIntervalId = setInterval("test()", 33);
		//setTimeout("Init()",3000);
	}

	function Init(){	
		FC_ReadSelectedMovie(readCookie('CurrentMovie'));
	}

	function JSUnload() {
		DeleteRobotFace();
		//HideAdMovie();
	}
	
	function FC_ReadSelectedMovie() {
		var tmpIdx = readCookie("CurrentMovie");
		FC_ChangeAdMovieHtml(tmpIdx);
	}

	function FC_ChangeAdMovieHtml(strIdx) {
		var path;
		if (strIdx == "1")
			path = "../../Movies/main1.avi";
		if (strIdx == "2")
			path = "../../Movies/main2.avi";
		if (strIdx == "3")
			path = "../../Movies/main3.avi";
		if (strIdx == "4")
			path = "../../Movies/main4.avi";
		PlayAdMovie(path, 0, 1200, 1080, 720, true);
	}
	
	function Home() {
		location.href = "../../maincontents.htm";
	}

	function test() {
		var img = GetCaptureImage();
		var canvas = document.getElementById("camImage");
		var ctx = canvas.getContext("2d");
		var image = new Image();

		image.onload = function() {
			ctx.drawImage(this,-300,-75, 1080, 720);
		}
		image.src = "data:image/gif;base64," + img;
	}

	/*function PlayDirection(){
		window.external.SetVolume(1);
    	PlaySpeech('Please look at the camera on the top of the Robot''s head.');
	}*/
	function shot() {
		/*PlayDirection();*/
		/*window.external.SetVolume(1);
    	PlaySpeech('Please look at the camera on the top of the Robot''s head.');*/
		
		document.getElementById('shot').style.display = "block";
		document.getElementById('number').style.display = "";
		document.getElementById('frame').style.display = "";


		setTimeout('Timer1()', 1000);
		setTimeout('Timer2()', 2000);
		setTimeout('Timer3()', 3000);
	}

	function Timer1() {
		
		document.getElementById('number_img').src =  "Image/2_re.png" ;
		
	}
	

	function Timer2() {

		document.getElementById('number_img').src = "Image/1_re.png";
		
	}

	function Timer3() {
		
		document.getElementById('shot').style.display = "block";
		document.getElementById('number').style.display = "none";
		document.getElementById('frame').style.display = "none";
		document.getElementById('number_img').src = "Image/3_re.png";
		document.getElementById('delete').style.backgroundColor = "#0068B3";
        document.getElementById('delete').style.color = "white	";
        document.getElementById('delete').disabled = false;


		GetCaptureImage();
		GetCaptureImageBase64();
		MakeRobotFace();
		SetRobotFace();
        clearInterval(refreshIntervalId);
	}
	
	function del(){
        document.getElementById('delete').style.backgroundColor = "#d4d4d4";
        document.getElementById('delete').style.color = "black";
        document.getElementById('delete').disabled = true;
		document.getElementById('shot').style.display = "";
		DeleteRobotFace();
		JSMain();
	}


	function OnUserApproached() {

	}

	function OnUserDisappeared() {
		//location.href = "../../IdlePage/IdlePage.htm";
	}