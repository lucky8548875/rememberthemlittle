<?php

# Load Database Parameters
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';

# Get Parameters
$facebook_id = $_GET['facebook_id'];
$facebook_name = $_GET['facebook_name'];

# Declare account_id
$account_id;
$account_type;

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
            $account_type = $result['account_type'];
        }
        else{
            $sql = "INSERT INTO accounts (account_fb_id, account_name, account_type) VALUES ('$facebook_id','$facebook_name', 'USER')";
            $stmt = $conn->prepare($sql);
            $stmt->execute();

            $account_id = $conn->lastInsertId();
            $account_type = 'USER';
        }

        if(isset($account_id)){

            // Update facebook name
            $sql = "UPDATE accounts SET account_name='$facebook_name' WHERE account_id='$account_id'";
            $stmt = $conn->prepare($sql);
            $stmt->execute();

            echo json_encode((object)[
                'success' => true,
                'data' => 
                    [
                        'display_name' => $result['account_name'],
                        'account_id' => $account_id,
                        'account_type' => $account_type,
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