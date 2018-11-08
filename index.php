<!DOCTYPE html>
<html>
<body>
<h1 style="font-size:50px;">What Can JavaScript Do?</h1>
<!--javascript can change HTML content -->

<p id="demo">JavaScript can change HTML content</p>
<button type='button' onclick="document.getElementById('demo').innerHTML='Hello world'">Click Button</button>
<hr>

<!-- javascript can change HTML attributes-->

<button type='button' onclick="document.getElementById('lightOffOn').src='images.jfif'">Turn on Light</button>
<img id='lightOffOn'src="images/images.jfif">
<button type="button" onclick="document.getElementById('lightOffOn').src='download.jfif'">Turn off Light</button>
<hr>

<!-- javascript can change css style-->

<p id='changeCss'>Javascript Dummy Test content</p>
<button type='button' onclick="document.getElementById('changeCss').style.fontSize='35px'">Click Me</button>
<hr>

<!--javascript can hide HTML element-->
<p id="hideElem">javascript Testing dummy content</p>
<button type='button' onclick="document.getElementById('hideElem').style.display='none'">Hide content</button>
<hr>

<!--javascript can show hidden HTML element-->
<p id="showCont" style="display: none;">Javascript Testing dummy content</p>
<button type='button' onclick="document.getElementById('showCont').style.display='block'">Show Content</button>

<!--external javascript-->
<script>
	window.onload=function(){
		var element=document.createElement('script');
	     element.src='js/myscript.js';
	    document.body.append(element);
	}
</script>
</body>
</html>
