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
    $stmt = $conn->prepare(
        "SELECT 
            a.account_name, 
            SUM(CASE WHEN b.booking_status NOT IN ('AWAITING_PAYMENT', 'CANCELLED') THEN 0 ELSE b.booking_total_price END) as total_expenditure 
        FROM accounts a 
        INNER JOIN bookings b 
        ON a.account_id = b.account_id  
        GROUP BY a.account_id 
        ORDER BY total_expenditure DESC 
        LIMIT 5"
    );
    // $stmt = $conn->prepare("SELECT a.account_name, SUM(b.booking_total_price) as total_expenditure FROM accounts a LEFT JOIN bookings b ON a.account_id = b.account_id WHERE b.booking_status <> 'AWAITING PAYMENT' GROUP BY a.account_id ORDER BY total_expenditure DESC");
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