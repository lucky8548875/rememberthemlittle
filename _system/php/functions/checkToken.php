<?php

function isTokenValid($account_id,$token){

    // $servername = "localhost:3306";
    // $username = "root";
    // $password = "usbw";
    // $dbname = "rtl_v1";

    $servername = "us-cdbr-iron-east-01.cleardb.net";
    $username = "bdae6583c4d8a6";
    $password = "6db3f997";
    $dbname = "heroku_ec3a65f2f95b293";

    try{

    $http_user_agent = str_replace("/","",str_replace("\\","",$_SERVER['HTTP_USER_AGENT']));

    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $stmt = $conn->prepare("SELECT * FROM tokens WHERE account_id='$account_id' AND token='$token' AND http_user_agent='$http_user_agent' AND token_valid=true");
    $stmt->execute();

    # Fetch Result
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return sizeof($result) == 1;

    }
    catch(PDOException $e){
        return false;
    }

}
