<?php
 # Set database parameters
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/functions/checkAdminToken.php';
 $account_id = $_POST['account_id'];
// $pageNum = $_POST['pageNum'];
 //if(isAdminTokenValid($account_id,$token)){
 if(true){
try {
     # Connect to Database
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
     # Perform SQL Query
    // $sql = "INSERT INTO sales (booking_id, sales_date, sales_time, sales_total_price) SELECT booking_id, booking_date, booking_time, booking_total_price FROM bookings WHERE booking_status='BOOKED' AND WHERE NOT EXISTS (SELECT * FROM sales)";
    // $stmt = $conn->prepare($sql);
    // $stmt->execute();
    // $stmt = "";
    // if(isset($pageNum)){
    //     $stmt = $conn->prepare("SELECT booking_date, booking_total_price FROM bookings INNER JOIN accounts ON bookings.account_id = accounts.account_id WHERE booking_status='BOOKED' ORDER BY booking_created DESC LIMIT $pageNum, 10");
    // }else{
        $stmt = $conn->prepare("SELECT count(*) FROM bookings INNER JOIN accounts ON bookings.account_id = accounts.account_id WHERE booking_status='BOOKED' ORDER BY booking_created DESC");
    // }
    $stmt->execute();
    //$res=mysql_query("SELECT booking_date, booking_total_price FROM bookings INNER JOIN accounts ON bookings.account_id = accounts.account_id WHERE booking_status='BOOKED' ORDER BY booking_created DESC");
    $recordcount= $stmt->fetchColumn();
    $pagecount=$recordcount/50;
     # Fetch Result
    $result=ceil($pagecount);
    // $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
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