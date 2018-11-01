<?php

function isTokenValid($account_id,$token){

    require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';

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
