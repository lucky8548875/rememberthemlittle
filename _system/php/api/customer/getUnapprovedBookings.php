<?php
#Set database parameters
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/functions/checkAdminToken.php';

try
{
    # Connect to Database
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    # Perform SQL Query
    $stmt = $conn->prepare(
        "SELECT 
            a.account_name, 
            b.booking_date  
        FROM bookings b
        INNER JOIN accounts a 
        ON a.account_id = b.account_id AND b.booking_status IN ('AWAITING_PAYMENT', 'AWAITING_CONFIRMATION') 
        ORDER BY b.booking_date ASC"
    );
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
?>