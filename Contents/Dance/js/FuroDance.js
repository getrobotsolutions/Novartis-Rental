var SLEEP_TIME = 2000;
var LinearVelocity = 0.10;
var AngularVelocity = 35.0;
var Second = 2000;


var cnt = 1;
var playTimer;
var MotionCount = 10;

/************************************************************************/
//Dance Play Part
function DanceStart()
{
	window.external.RobotDanceStart(true);
	/*switch(cnt)
	{
		case 1:	
			Play01(); 
			break;
			
		case 2: 
			Play02(); 
			break;
		
		case 3: 
			Play03(); 
			break;
			
		case 4: 
			Play04(); 
			break;
			
		case 5:	
			Play05(); 
			break;
			
		case 6: 
			Play06(); 
			SLEEP_TIME = 2500;
			break;
			
		case 7: 
			Play07(); 
			break;
			
		case 8: 
			Play08(); 
			break;
			
		case 9: 
			Play09(); 
			break;

		case 10: 
			Play10(); 
			break;

	}
*/

	cnt++;
	if(cnt == MotionCount)
	{
		cnt = 1;
		SLEEP_TIME = 2000;
	}

	playTimer = setTimeout("DanceStart();",SLEEP_TIME);
}



/************************************************************************/
//Motion Part
function Play01()
{
	InitPose();
}

function Play02()
{
	SetEmotion("joy");
	SetHeadYaw(45, 50);
	DriveWheelTime(0, -AngularVelocity, Second);
	SetWaistPitch(-20, 50);
}

function Play03()
{
	SetHeadYaw(-45, 50);
	DriveWheelTime(0, AngularVelocity, Second);
	SetWaistPitch(5, 50);
}

function Play04()
{
	SetEmotion("pride");
	SetHeadYaw(45, 50);
	DriveWheelTime(0, AngularVelocity, Second);
	SetWaistPitch(-20, 30);
}

function Play05()
{
	SetHeadYaw(-45, 50);
	SetWaistPitch(5, 50);
	DriveWheelTime(0, -AngularVelocity, Second);
}

function Play06()
{
	SetEmotion("hope");
	SetHeadRoll(-25, 50);
	SetHeadYaw(0, 50);
	SetWaistPitch(-20, 50);
	DriveWheelTime(-LinearVelocity, -AngularVelocity, Second);
}

function Play07()
{
	SetHeadRoll(25, 50);
	SetWaistPitch(5, 50);
	DriveWheelTime(LinearVelocity, AngularVelocity, Second);
}

function Play08()
{
	SetHeadRoll(-25, 50);
	SetWaistPitch(-20, 30);
	DriveWheelTime(-LinearVelocity, AngularVelocity, Second);
}

function Play09()
{
	SetHeadRoll(25, 50);
	DriveWheelTime(LinearVelocity, -AngularVelocity, Second);
}

function Play10()
{
	SetEmotion("joy");
	InitPose();
}




/************************************************************************/
//Stop Playing Part
function DanceStop()
{
	window.external.RobotDanceStart(false);
	clearTimeout(playTimer);
	StopWheel();
	InitPose();

	cnt = 1;
}

