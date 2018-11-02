<?php

# Load Database Parameters
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';

# Get Parameters
$facebook_id = $_GET['facebook_id'];
$facebook_name = $_GET['facebook_name'];

# Declare account_id
$account_id;

if(isset($facebook_id)){

    try {

        # Connect to Database
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        # Perform SQL Query
        $stmt = $conn->prepare('SELECT * FROM accounts WHERE account_fb_id='.$facebook_id);
        $stmt->execute();

        # Fetch Result
        $result = $stmt->fetch();
        
        if($result){
            $account_id = $result['account_id'];
        }
        else{
            $sql = "INSERT INTO accounts (account_fb_id, account_name) VALUES ('$facebook_id','$facebook_name')";
            $stmt = $conn->prepare($sql);
            $stmt->execute();

            $account_id = $conn->lastInsertId();
        }

        if(isset($account_id)){

            $timezone = date_default_timezone_get();
            $date = date('m/d/Y h:i:s a', time());
            $token = md5($account_id.$date);
            $http_user_agent = str_replace("/","",str_replace("\\","",$_SERVER['HTTP_USER_AGENT']));

            // Update facebook name
            $sql = "UPDATE accounts SET account_name='$facebook_name' WHERE account_id='$account_id'";
            $stmt = $conn->prepare($sql);
            $stmt->execute();

            // Create new token
            $sql = "INSERT INTO tokens (account_id,token,http_user_agent,token_valid) VALUES ('$account_id','$token','$http_user_agent',true)";
            $stmt = $conn->prepare($sql);
            $stmt->execute();

            echo json_encode((object)[
                'success' => true,
                'data' => 
                    [
                        'display_name' => $result['account_name'],
                        'account_id' => $account_id,
                        'token' => $token
                    ]
            ],JSON_NUMERIC_CHECK);

        }

    }
catch(PDOException $e)
    {
        echo json_encode((object)[
            'success' => false,
            'message' => "Connection failed: " . $e->getMessage()
        ]);
    }

}
else {
    echo json_encode((object)[
        'success' => false,
        'message' => "Values not set"
    ]);
}
?>