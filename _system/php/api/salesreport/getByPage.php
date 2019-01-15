<?php

# Set database parameters
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/functions/checkAdminToken.php';

$account_id = $_POST['account_id'];
$token = $_POST['token'];
$pageNum = $_POST['pageNum'];

//if(isAdminTokenValid($account_id,$token)){
 if(true){
try {

    # Connect to Database
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    # Perform SQL Query
    if(isset($pageNum)){
        //0 and 1 are in the same page
        if($pageNum == 0 || $pageNum == 1){
            $stmt = $conn->prepare("SELECT booking_date, booking_total_price, account_name FROM bookings INNER JOIN accounts ON bookings.account_id = accounts.account_id WHERE booking_status='BOOKED' ORDER BY booking_created DESC LIMIT 0, 50");
        }else{
            //calculation of rowstart per page is the result of records_display
            $records_display_startcount = ($pageNum*50)-50;
            $stmt = $conn->prepare("SELECT booking_date, booking_total_price, account_name FROM bookings INNER JOIN accounts ON bookings.account_id = accounts.account_id WHERE booking_status='BOOKED' ORDER BY booking_created DESC LIMIT $record_display_startcount, 50");
        }
    }else{
        $stmt = $conn->prepare("SELECT booking_date, booking_total_price, account_name FROM bookings INNER JOIN accounts ON bookings.account_id = accounts.account_id WHERE booking_status='BOOKED' ORDER BY booking_created DESC");
    }
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