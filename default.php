<!DOCTYPE html>
    <head>
<html>
    	<title>Coha's  to do</title>
       <link rel="stylesheet" type="text/css" href="stylesheet.css"/>
        <script src="jquery-1.11.1.js"></script>
        <script type="text/javascript" src="script.js"></script>
       <link rel="stylesheet" href="jquery-ui-1.11.1.custom/jquery-ui.min.css">

       <script src="jquery-ui-1.11.1.custom/jquery-ui.min.js"></script>
	   
     
	</head>
	<body>
		<h2>Coha's to do list </h2>
		<form name="checkListForm"> Task : 
			<input type="text" name="checkListItem"/>
		</form>
		<p> Due date:   <input type="text" id="datepicker"></p>
		<div class="gumb" id="button">Add</div>
		<div class="gumb" id="button2">Remove all</div>
		<div class="gumb" id="button3">Remove checked</div>
		<br/>
		<div id="wrapper">
		<div class="list"></div> 
		</div>

       
	</body>
</html>
<form action="/create_post/" method="POST" id="post-form">