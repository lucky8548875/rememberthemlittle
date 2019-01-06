<?php

function isAdminTokenValid($account_id,$token){

<<<<<<< HEAD
    $servername = "localhost:3307";
    $username = "root";
    $password = "usbw";
    $dbname = "rtl_v1";
=======
    // $servername = "localhost:3306";
    // $username = "root";
    // $password = "usbw";
    // $dbname = "rtl_v1";
>>>>>>> c4e1a3c2d3c398394e634d4e394db3d64c93cb56

    $servername = "us-cdbr-iron-east-01.cleardb.net";
    $username = "bdae6583c4d8a6";
    $password = "6db3f997";
    $dbname = "heroku_ec3a65f2f95b293";

    try{

    $http_user_agent = str_replace("/","",str_replace("\\","",$_SERVER['HTTP_USER_AGENT']));

    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $stmt = $conn->prepare("SELECT * FROM tokens INNER JOIN accounts WHERE tokens.account_id='$account_id' AND accounts.account_id='$account_id' AND tokens.token='$token' AND tokens.http_user_agent='$http_user_agent' AND tokens.token_valid=true AND accounts.account_type='ADMIN'");
    $stmt->execute();

    # Fetch Result
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    if(sizeof($result) == 1){
        return true;
    }
    else{
        echo json_encode((object)[
            'success' => false,
            'message' => "Not Authorized",
            'query' => "SELECT * FROM tokens INNER JOIN accounts WHERE tokens.account_id='$account_id' AND accounts.account_id='$account_id' AND tokens.token='$token' AND tokens.http_user_agent='$http_user_agent' AND tokens.token_valid=true AND accounts.account_type='ADMIN'"
        ]);
    }

    }
    catch(PDOException $e){
        echo json_encode((object)[
            'success' => false,
            'message' => "Connection Error: " . $e->getMessage(),
            'query' => "SELECT * FROM tokens INNER JOIN accounts WHERE tokens.account_id='$account_id' AND accounts.account_id='$account_id' AND tokens.token='$token' AND tokens.http_user_agent='$http_user_agent' AND tokens.token_valid=true AND accounts.account_type='ADMIN'",
        ]);
    }

}
