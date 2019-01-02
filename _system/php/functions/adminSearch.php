<?php

# Set database parameters
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/functions/checkAdminToken.php';

$query = $_POST['query'];

 if(isset($query)){
try {

    # Connect to Database
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    # Perform SQL Query
    $stmt = $conn->prepare(
        "SELECT account_id, account_name FROM accounts WHERE account_id LIKE \'%$query%\' OR account_name LIKE \'%$query%\'
        UNION
        SELECT b.booking_id, a.account_name, b.subject_name, b.booking_date FROM bookings b INNER JOIN accounts a ON b.account_id = a.account_id WHERE b.booking_id LIKE \'%'$query'%\' OR a.account_name LIKE \'%'$query'%\' OR b.subject_name LIKE \'%'$query'%\'
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
}
?>