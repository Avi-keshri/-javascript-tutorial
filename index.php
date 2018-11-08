<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>
<input type="button" value="submit" onclick="myFunction()">
<p id="demo"></p>
<script>
	window.onload=function(){
    var element=document.createElement('script');
    element.src='myscript.js';
    document.body.append(element);
	};
</script>
</body>
</html>
