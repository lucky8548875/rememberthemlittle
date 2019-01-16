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
            CASE 
                WHEN TIMESTAMPDIFF(YEAR, account_birthdate, CURDATE()) < 18 THEN 'Below 18' 
                WHEN TIMESTAMPDIFF(YEAR, account_birthdate, CURDATE()) BETWEEN 18 AND 30 THEN '18-30' 
                WHEN TIMESTAMPDIFF(YEAR, account_birthdate, CURDATE()) BETWEEN 31 AND 45 THEN '31-45' 
                WHEN TIMESTAMPDIFF(YEAR, account_birthdate, CURDATE()) BETWEEN 46 AND 60 THEN '46-60' 
                ELSE 'Over 60'
            END AS age_range, 
            COUNT(account_id) as count 
        FROM accounts   
        GROUP BY age_range"
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