<!DOCTYPE html>
<html>
<body>
<h1 style="font-size:50px;">Javascript Statement</h1>
<!--javascript statements can be grouped together in code blocks -->

<p id='demo'></p>
<p id='demo1'></p>
<button type='button' onclick="myfunction()">Click Me</button>

<!--external javascript-->
<script>
	window.onload=function(){
		var element=document.createElement('script');
	     element.src='js/myscript.js';
	    document.body.append(element);
	}
	function myfunction(){
	document.getElementById('demo').innerHTML='Hello World!';
	document.getElementById('demo1').innerHTML="How Are You!";
}
</script>
</body>
</html>
