<html>
<head>
<title>Online PHP Script Execution</title>
</head>
<body>
<?php
  // Initialising the two datetime objects
$datetime1 = new DateTime('2021-07-24 04:16:33');
$datetime2 = new DateTime('2018-07-24 04:16:33');
  
// Calling the diff() function on above
// two DateTime objects
$difference = $datetime1->diff($datetime2);
  
// Getting the difference between two
// given DateTime objects
echo $difference->format('%R %a days');
?>
</body>
</html>
