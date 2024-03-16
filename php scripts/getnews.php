<?php
include("connection.php");
$query=$mysqli->prepare("select new_text,date from new");
$query->execute();
$query->store_result();
$query->bind_result($new_text,$date);
$news=[];
while($query->fetch()){
$news_item=["new_text"=>$new_text,
"date"=>$date];
$news[]=$news_item;
}
$response["status"]="success";
$response["elements"]=$news;
echo json_encode($response);