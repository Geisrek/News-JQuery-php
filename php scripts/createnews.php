<?php
include("connection.php");
$new=$_POST['new'];
$new_title=$_POST['title'];
$query=$mysqli->prepare("insert into new(new_text,new_title) value(?,?)");
$query->bind_param('ss',$new,$new_title);
$query->execute();
$query->store_result();
$response['status']='success';
$response['message']='A new has been uploaded';
echo json_encode($response);