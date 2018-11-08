<!DOCTYPE html>
<html>
<body>
<h1 style="font-size:50px;">Javascript Object</h1>

<p id='demo1'></p>
<p id='demo2'></p>
<p id='demo3'></p>
<p id='demo4'></p>
<p id='demo5'></p>
<p id='demo6'></p>


<!--external javascript-->
<script>
	window.onload=function(){
		var element=document.createElement('script');
	     element.src='js/myobjectscript.js';
	    document.body.append(element);
	}
</script>
</body>
</html>
