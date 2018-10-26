   
        var jokes = new Array( );
        jokes[1]="I saw what you did over there. I’ve got eyes in the back of my head. Just kidding, only two realistically placed robotic eyes";
        jokes[2]="I can’t believe my eyes! Because I am not programmed to process human emotions such as surprise.";
        jokes[3]="What did the sailor turned ophthalmology student say to his professor? Eye, eye, captain.";
        jokes[4]="These jokes keep getting cornea and cornea.";
        jokes[5]="What do you call a deer with no eyes? No-eye-deer.";
        jokes[6]="Why did the phone wear glasses? Because it lost all of its contacts. ";
        /*jokes[7]="Why did the phone wear glasses? Because it lost all of its contacts";
        jokes[8]="I can’t believe my eyes! Because I am not programmed to process human emotions such as surprise.";
        jokes[9]="Did you hear about that guy with ten eyes? Man, I bet he’s seen some stuff.";
        jokes[10]="Did you hear that I had to buy super expensive glasses? Yeah it’s not an eye-deal situation. a.  What do you call it when you have to buy super expensive glasses? Not eye-deal.";
        jokes[11]="Scrabble : it’s all fun and games until someone loses an “I”";
        jokes[12]="What did the sailor turned ophthalmology student say to his professor? Eye, eye, captain.";
        jokes[13]="These jokes keep getting cornea and cornea.";
        jokes[14]="You know your vision’s bad when your visual acuity was measured at 20/70 and you didn’t even see it coming.";
        jokes[15]="If you want to dress as a cyclops for Halloween, you should keep one eye out for an authentic costume design";
        jokes[16]="What do ophthalmologists like to get for Halloween? Eye candy.";
        jokes[17]="Where did the eye doctor keep all his kittens? On Cat-A-Racks!";
        jokes[18]="What do you call a deer with no eyes? No-eye-deer.";
        jokes[19]="Why did the phone wear glasses? Because it lost all of its contacts. ";
        jokes[20]="Why do optometrists live so long? They dilate.  ";*/

        var speak = new Array( );
        speak[0] = "Novartis is seeing opportunity in ophthalmology ";
        speak[1] = "Novartis is committed to finding the right solution for you.";
        speak[2] = "Novartis has pioneered treatments for many retinal diseases.";
        speak[3] = "Read a welcome message from our dean.";
        speak[4] = "Find out what classes you need for your major.";
        speak[5] = "";
        speak[6] = "Say Cheese! ";
        speak[7] = "Smile! You are about to become a robot.";
        speak[8] = "Pick a song and let’s boogie!";

//window.external.ChangeLanguage("en-us");
function FC_ContentsCall(strContentsName, strLanguage)
{
   // alert(strContentsName);
    
    switch (strContentsName)
    {
        case "Welcome":
            PlaySpeech("Hi, I’m Tracey, welcome to the Novartis booth. Please click around on my screen and then speak to my smart human friends in the booth.");
            break;
        case "Home":
            writeCookie("NavigationState", true, 30);
           location.href = "../../maincontents.htm";
            break;
        case "BoothSchedule":
            //PlaySpeech(speak[0]);
            location.href = "Contents/Booth-schedule/index.html";
            break;
        case "BoothMap":
            //PlaySpeech(speak[1]);
            location.href = "Contents/BoothMap/index.html";
            break;
        case "Products":
            //PlaySpeech(speak[2]);
            location.href = "Contents/Products/index.html";
            break;
        

        case "Selfie":
            //PlaySpeech(speak[6]);
            location.href = "Contents/Selfie/index.html";
            break;
        case "Avatar":
            //ssPlaySpeech(speak[7]);
            location.href = "Contents/RobotAvatar/index.htm";
            break;
        case "Dance":
            //PlaySpeech(speak[8]);
            location.href = "Contents/Dance/index.html";
            break;
        case "Config":
            location.href = "Config/Config.htm";
            break;
        default:
            break;
    } // end switch(strContentsName)
} // end FC_ContentsCall



function OnUserApproached()
{
    //PlaySpeech("Hello, welcome to the BWl Airport. Please press a button on my screen to begin.");
}


function ShowPopup(){

// get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    // calculate the values for center alignment
    var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());
    var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2);
    // assign values to the overlay and dialog box
    $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
    $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();
    document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="assets/contact.png"/></div></div>';
}

$(document).ready(function(){

    $('.navigation').hide();
    $('.get-started').click(function(){
        $('.welcome-text, .get-started, footer').hide();
        $('.navigation').show();
        
    });
    if (readCookie("NavigationState")) {
        $('.welcome-text, .get-started, footer').hide();
        $('.navigation').show();
    }
    $('.close-menu').click(function(){
        $('.navigation').hide();
        $('.welcome-text, .get-started, footer').show();
        writeCookie("NavigationState", false, 30);
    });
    

    $('a.btn-ok, #dialog-overlay, #dialog-box').click(function () {
        $('#dialog-overlay, #dialog-box').hide();
        return false;
    });
})


/*setTimeout(function () {
    ShowTime();
    console.log("Time Showed");

    var city = "Fairfield, CT";
    var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='f'";
    var queryURL = "https://query.yahooapis.com/v1/public/yql?q="+ searchtext + "&format=json";

    $.getJSON(queryURL, function (data) {

        var results = data.query.results;
        var firstResult = results.channel.item.condition;
        console.log(firstResult);


        var location = 'Unknown'; // not returned in response
        var temp = firstResult.temp;
        var text = firstResult.text;
        var image =  firstResult.code;
        var loc = 'https://s.yimg.com/zz/combo?a/i/us/we/52/'+image+'.gif' ;

        // $('#temp').append('The temperature is <strong>' + temp + '</strong><sup>°F</sup> Forecast calls for '+text);

        $('#condition').append(text);
        $('#temp').append(temp+ '</strong><sup>°F</sup>');

        $('#image-zoom').attr("src",loc);

        console.log("Weather Showed");
    });



}, 2000);*/



function ShowTime()
{
    var dt = new Date();
    // formatAMPM(dt);
    //document.getElementById("content_air") .innerHTML = formatAMPM(dt) ;
    //document.getElementById("content_date") .innerHTML = formatDate(dt);

}
function formatAMPM(date) {

    var hours = date.getHours();
    var minutes = date.getMinutes();


    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var dayName = days[date.getDay()];

    //dayName = date.toString().split(' ')[0];
    hours = hours <10? '0' +hours : hours;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = dayName + ' ' + hours + ':' + minutes + ' ' + ampm;
    return strTime;
    //alert(strTime);
}

function formatDate(date){

    var m_names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var month = m_names[date.getMonth()];
    var day = date.getDate();
    day = getGetOrdinal(day);

    var output = (month<10 ? '0' : '') + month + ' ' +(day<10 ? '0' : '') + day+', '+ date.getFullYear() ;
    return output;
}

function getGetOrdinal(n) {
    var s=["th","st","nd","rd"],
        v=n%100;
    return n+'<sup>'+(s[(v-20)%10]||s[v]||s[0])+'</sup>';
}

function OnJoystickControlled(strPara){
    var btn_info = strPara.split(',')[4];


    if(btn_info[0] == '1'){
            window.external.ChangeLanguage("en-us");
            SetVolume(1);
            window.external.PlaySpeech("Welcome.  Press the orange button to get started.");//I'm here to assist you, press any button on my screen to begin");
          
    }

    if(btn_info[1] == '1'){
        window.external.ChangeLanguage("en-us");
        SetVolume(1);
        window.external.PlaySpeech("Can I please take your picture?");
        
    }
    if(btn_info[2] == '1'){
        window.external.ChangeLanguage("en-us");
            SetVolume(1);
            window.external.PlaySpeech("Hi, you look nice, please touch the orange button to learn about Novartis product offerings");
    }
    if(btn_info[3] == '1'){
       window.external.ChangeLanguage("en-us");
            SetVolume(1);
            window.external.PlaySpeech("Bye, bye.");
        
    }
}