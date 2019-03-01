<?php

# Load Database Parameters
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';

# Get Parameters
$firebase_id = $_GET['firebase_id'];
$phone_number = $_GET['phone_number'];
$facebook_id = $_GET['facebook_id'];
$facebook_name = $_GET['facebook_name'];

# Declare account_id
$account_id;
$account_type;

if(isset($firebase_id)){

    try {

        # Connect to Database
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        # Perform SQL Query
        $stmt = $conn->prepare("SELECT * FROM accounts WHERE firebase_id='$firebase_id'");
        $stmt->execute();

        # Fetch Result
        $result = $stmt->fetch();
        
        if($result){
            $account_id = $result['account_id'];
            $account_type = $result['account_type'];
        }
        else{

            if($facebook_name==null){
                $fnames = ['Tyrak','Kselia','Loma','Olena','Varant','Geria','Marita','Leiea','Emeryn','Evarius'];
                $lnames = ['Nixon','Meyers','Williamson','Clements','Richards','Farmer','Jackson','Hammond','Wallace','West'];
                $index = mt_rand(0,10);
                $index2 = mt_rand(0,10);
                $facebook_name = "$fnames[$index] $lnames[$index2]";
            }

            $sql = "INSERT INTO accounts (firebase_id, account_fb_id, account_contact, account_name, account_type) VALUES ('$firebase_id','$facebook_id','$phone_number','$facebook_name', 'USER')";
            $stmt = $conn->prepare($sql);
            $stmt->execute();

            $account_id = $conn->lastInsertId();
            $account_type = 'USER';
        }

        if(isset($account_id)){

            echo json_encode((object)[
                'success' => true,
                'data' => 
                    [
                        'display_name' => $result['account_name'],
                        'account_id' => $account_id,
                        'account_type' => $account_type,
                    ],
                'sql' => "INSERT INTO accounts (firebase_id, account_fb_id, account_contact, account_name, account_type) VALUES ('$firebase_id','$facebook_id','$phone_number','$facebook_name', 'USER')"

            ],JSON_NUMERIC_CHECK);

        }

    }
catch(PDOException $e)
    {
        echo json_encode((object)[
            'success' => false,
            'message' => "Connection failed: " . $e->getMessage(),
            'details' => "INSERT INTO accounts (firebase_id, account_fb_id, account_contact, account_name, account_type) VALUES ('$firebase_id','$facebook_id','$phone_number','$facebook_name', 'USER')"
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