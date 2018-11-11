<?php

# Import Tools and Configs
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/functions/checkToken.php';

# Get Parameters
$account_id = $_POST['account_id'];
$token = $_POST['token'];

# Check token
// if (isTokenValid($account_id,$token)){
if (true){

try {

    # Connect to Database
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    # Perform SQL Query
    $stmt = $conn->prepare("SELECT * FROM orders WHERE account_id='$account_id'");
    $stmt->execute();

    # Fetch Result
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
     # Print Result in JSON Format
     echo json_encode((object)[
        'success' => true,
        'data' => $result
     ],JSON_NUMERIC_CHECK);

    }
catch(PDOException $e)
    {
        echo json_encode((object)[
            'success' => false,
            'message' => "Connection failed: " . $e->getMessage()
        ]);
    }

}
else{
    echo json_encode((object)[
        'success' => false,
        'status' => 'UNAUTHORIZED',
        'account_id' => $account_id,
        'token' => $token
    ]);
}
?>