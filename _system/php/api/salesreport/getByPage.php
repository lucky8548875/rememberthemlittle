<?php

# Set database parameters
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/functions/checkAdminToken.php';

//$account_id = 0;$_POST['account_id'];
//$token = 0;$_POST['token'];
$pageNum = 0; //$_POST['pageNum'];
$calendarMode = 'Week'; //$_POST['calendar_mode'];

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
            if(isset($calendarMode)){
                if($calendarMode=="Day"){
                    $stmt = $conn->prepare("SELECT booking_date, SUM(booking_total_price) as bookings_total, account_name FROM bookings b INNER JOIN accounts a ON b.account_id = a.account_id WHERE booking_status='BOOKED' GROUP BY account_name ORDER BY booking_created DESC LIMIT 0, 50");
                }else if($calendarMode=="Week"){
                    $stmt = $conn->prepare("SELECT WEEKOFYEAR(booking_date) as WEEK SUM(booking_total_price) as bookings_total FROM bookings b INNER JOIN accounts a ON b.account_id = a.account_id WHERE booking_status='BOOKED' GROUP BY WEEK ORDER BY booking_created DESC LIMIT 0, 50");
                }else if($calendarMode=="Month"){

                }else if($calendarMode=="Year"){

                }
            }
        }else{
            //calculation of rowstart per page is the result of records_display
            $records_display_startcount = ($pageNum*50)-50;
            $stmt = $conn->prepare("SELECT booking_date, SUM(booking_total_price) as bookings_total, account_name FROM bookings b INNER JOIN accounts a ON b.account_id = a.account_id WHERE booking_status='BOOKED' ORDER BY booking_created DESC LIMIT $record_display_startcount, 50");
        }
    }else{
        $stmt = $conn->prepare("SELECT SUM(booking_total_price) as bookings_total, account_name FROM bookings b INNER JOIN accounts a ON b.account_id = a.account_id WHERE booking_status='BOOKED' GROUP BY account_name ORDER BY booking_created DESC LIMIT 0, 50");
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