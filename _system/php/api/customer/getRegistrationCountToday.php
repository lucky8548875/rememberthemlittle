<?php
# Set database parameters
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/functions/checkAdminToken.php';

try
{
    # Connect to Database
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    # Perform SQL Query
    // $stmt = $conn->prepare("SELECT DATE(account_created) as date, COUNT(account_id) as count FROM accounts WHERE account_created BETWEEN $start_date AND $end_date GROUP BY date");
    $stmt = $conn->prepare(
        "SELECT 
            CURDATE() as today, 
            COUNT(account_id) as count 
        FROM accounts 
        WHERE account_created = CURDATE()"
    );
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
?>