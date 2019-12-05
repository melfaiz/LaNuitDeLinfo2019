<?php

$username = 'root';
$password = '';
$db = 'Scores';

$conn = new mysqli ('localhost',$username, $password, $db) or die("unable to connect");

$sql="insert into persons (first_name,last_name,email_address) values ('sara','smith','email@email.com')";
$query=mysqli_query($conn,$sql);
if($query)
    echo 'data inserted';
?>