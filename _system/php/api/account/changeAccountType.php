<?php
# Set database parameters
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';

$account_id = $_GET['account_id'];
$account_type = $_GET['account_type'];

if(isset($account_id) && isset($account_type))
{
    try 
    { 
        # Connect to Database
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        # Perform SQL Query
        $stmt = $conn->prepare("UPDATE accounts SET account_type = $account_type WHERE account_id = $account_id");
        $stmt->execute();

        # Fetch Result
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        
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
?>