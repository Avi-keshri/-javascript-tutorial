<!DOCTYPE html>
<html>
<body>
<h1 style="font-size:50px;">Javascript Object Part2</h1>

<p id='demo1'></p>
<p id='demo2'></p>
<p id='demo3'></p>
<p id='demo4'></p>
<p id='demo5'></p>
<p id='demo6'></p>
<p id='demo7'></p>
<p id='demo8'></p>
<p id='demo9'></p>
<p id='demo10'></p>


<!--external javascript-->
<script>
	window.onload=function(){
		var element=document.createElement('script');
	    element.src='js/myarrayscript.js';
	    document.body.append(element);
	}
</script>
</body>
</html>
