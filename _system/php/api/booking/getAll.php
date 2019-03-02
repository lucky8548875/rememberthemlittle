<?php

# Set database parameters
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/functions/checkAdminToken.php';

//if(isAdminTokenValid($account_id,$token)){
 if(true){
try {

    # Connect to Database
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    # Perform SQL Query
    $stmt = $conn->prepare('SELECT * FROM bookings INNER JOIN accounts ON bookings.account_id = accounts.account_id ORDER BY booking_created DESC');
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
// else{
//     echo json_encode((object)[
//         'success' => false,
//         'message' => "Not Authorized"
//     ]);
// }
?>