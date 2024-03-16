<?php
include("connection.php");
$new=$_POST['new'];
$query=$mysqli->prepare("insert into new(new_text) value(?)");
$query->bind_param('s',$new);
$query->execute();
$query->store_result();
$response['status']='success';
$response['message']='A new has been uploaded';
echo json_encode($response);