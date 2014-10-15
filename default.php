<!DOCTYPE html>
<html>
    <head>
    	<title>Coha's  to do</title>
       <link rel="stylesheet" type="text/css" href="stylesheet.css"/>
        <script src="jquery-1.11.1.js"></script>
        <script type="text/javascript" src="script.js"></script>
       <link rel="stylesheet" href="jquery-ui-1.11.1.custom/jquery-ui.min.css">

       <script src="jquery-ui-1.11.1.custom/jquery-ui.min.js"></script>
     
	</head>
	<body>
		<h2>Coha's to do list </h2>
		<form name="checkListForm"> Zadatak : 
			<input type="text" name="checkListItem"/>
		</form>
		<p >Datum:   <input type="text" id="datepicker"></p>
		<div class="gumb" id="button">Dodaj</div>
		<div class="gumb" id="button2">Ukloni Sve</div>
		<div class="gumb" id="button3">Ukloni odabrano</div>
		<br/>
		<div id="wrapper">
		<div class="list"></div> 
		</div>

       
	</body>
</html>