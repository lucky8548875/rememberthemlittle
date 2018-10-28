<?php

# Set database parameters
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';

$account_fb_id = $_POST['account_fb_id'];

if(isset($account_fb_id)){

try {

    # Connect to Database
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    # Perform SQL Query
    $stmt = $conn->prepare('SELECT * FROM accounts WHERE account_fb_id='.$account_fb_id);
    $stmt->execute();

    # Fetch Result
    $result = $stmt->fetch();
    
     # Print Result in JSON Format
    //  echo json_encode((object)[
    //     'success' => true,
    //     'data' => $result
    //  ],JSON_NUMERIC_CHECK);
    if($result){
        echo json_encode((object)[
            'success' => true,
            'data' => "Account already exists, no need for account creation"
        ],JSON_NUMERIC_CHECK);
    }
    else{
        $sql = "INSERT INTO accounts (account_fb_id) VALUES ('$account_fb_id')";
        $stmt = $conn->prepare($sql);
        $stmt->execute();

        echo json_encode((object)[
            'success' => true,
            'data' => "Successfully created account!"
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