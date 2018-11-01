<?php

function isTokenValid($account_id,$token){

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
    if(sizeof($result) == 1){
        return true;
    }
    else{
        echo json_encode((object)[
            'success' => false,
            'status' => 'UNAUTHORIZED:: Result is not 1 but '.sizeof($result),
            'account_id' => $account_id,
            'token' => $token,
            'query' => "SELECT * FROM tokens WHERE account_id='$account_id' AND token='$token' AND http_user_agent='$http_user_agent' AND token_valid=true"
        ]);
    }

    }
    catch(PDOException $e){
        echo json_encode((object)[
            'success' => false,
            'status' => 'UNAUTHORIZED:: PDO EXCEPTION -> '.$e->getMessage(),
            'account_id' => $account_id,
            'token' => $token,
            'query' => "SELECT * FROM tokens WHERE account_id='$account_id' AND token='$token' AND http_user_agent='$http_user_agent' AND token_valid=true",
            'connection' => "mysql:host=$servername;dbname=$dbname; $username, $password"
        ]);
    }

}
