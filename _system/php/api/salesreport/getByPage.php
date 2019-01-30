<?php

# Set database parameters
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/functions/checkAdminToken.php';

$account_id = 0;$_POST['account_id'];
$token = 0;$_POST['token'];
$pageNum = $_POST['pageNum'];
$calendarMode = $_POST['calendar_mode'];
$searchbar = $_POST['searchbar'];

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
            $records_display_startcount = 0;
        }else{
            //calculation of rowstart per page is the result of records_display
            $records_display_startcount = ($pageNum*50)-50;
            $stmt = $conn->prepare("SELECT booking_date, SUM(booking_total_price) as bookings_total, account_name FROM bookings b INNER JOIN accounts a ON b.account_id = a.account_id WHERE booking_status='BOOKED' ORDER BY booking_created DESC LIMIT $record_display_startcount, 50");
        }
        if(isset($calendarMode)){
            if($calendarMode=="Day"){
                if($searchbar != ''){
                    $stmt = $conn->prepare("SELECT booking_date, SUM(booking_total_price) as bookings_total, account_name FROM bookings b INNER JOIN accounts a ON b.account_id = a.account_id WHERE booking_status='BOOKED' AND account_name='$searchbar' GROUP BY account_name ORDER BY booking_created DESC LIMIT $records_display_startcount, 50");
                }else{
                    $stmt = $conn->prepare("SELECT booking_date, SUM(booking_total_price) as bookings_total, account_name FROM bookings b INNER JOIN accounts a ON b.account_id = a.account_id WHERE booking_status='BOOKED' GROUP BY account_name ORDER BY booking_created DESC LIMIT $records_display_startcount, 50");
                }   
            }else if($calendarMode=="Week"){
                if($searchbar != ''){
                    $stmt = $conn->prepare("SELECT DATE_ADD(booking_date, INTERVAL(1-DAYOFWEEK(booking_date)) DAY) as weekstart, DATE_ADD(booking_date, INTERVAL(7-DAYOFWEEK(booking_date)) DAY) as weekend, SUM(booking_total_price) as bookings_total FROM bookings b INNER JOIN accounts a ON b.account_id = a.account_id WHERE booking_status='BOOKED' AND account_name='$searchbar' GROUP BY WEEK(booking_date) ORDER BY booking_created DESC LIMIT $records_display_startcount, 50");
                }else{
                    $stmt = $conn->prepare("SELECT DATE_ADD(booking_date, INTERVAL(1-DAYOFWEEK(booking_date)) DAY) as weekstart, DATE_ADD(booking_date, INTERVAL(7-DAYOFWEEK(booking_date)) DAY) as weekend, SUM(booking_total_price) as bookings_total FROM bookings b INNER JOIN accounts a ON b.account_id = a.account_id WHERE booking_status='BOOKED' GROUP BY WEEK(booking_date) ORDER BY booking_created DESC LIMIT $records_display_startcount, 50");
                }
            }else if($calendarMode=="Month"){
                if($searchbar != ''){
                    $stmt = $conn->prepare("SELECT DATE_ADD(DATE_ADD(LAST_DAY(booking_date), INTERVAL 1 DAY), INTERVAL - 1 MONTH) as monthstart, LAST_DAY(booking_date) as monthend, SUM(booking_total_price) as bookings_total FROM bookings b INNER JOIN accounts a ON b.account_id = a.account_id WHERE booking_status='BOOKED' AND account_name='$searchbar' GROUP BY extract(month from booking_date) ORDER BY booking_created DESC LIMIT $records_display_startcount, 50");
                }else{
                    $stmt = $conn->prepare("SELECT DATE_ADD(DATE_ADD(LAST_DAY(booking_date), INTERVAL 1 DAY), INTERVAL - 1 MONTH) as monthstart, LAST_DAY(booking_date) as monthend, SUM(booking_total_price) as bookings_total FROM bookings b INNER JOIN accounts a ON b.account_id = a.account_id WHERE booking_status='BOOKED' GROUP BY extract(month from booking_date) ORDER BY booking_created DESC LIMIT $records_display_startcount, 50");
                }
                
            }else if($calendarMode=="Year"){
                if($searchbar != ''){
                    $stmt = $conn->prepare("SELECT YEAR(booking_date) as salesyear, SUM(booking_total_price) as bookings_total FROM bookings b INNER JOIN accounts a ON b.account_id = a.account_id WHERE booking_status='BOOKED' AND account_name='$searchbar' GROUP BY YEAR(booking_date) ORDER BY booking_created DESC LIMIT $records_display_startcount, 50");
                }else{
                    $stmt = $conn->prepare("SELECT YEAR(booking_date) as salesyear, SUM(booking_total_price) as bookings_total FROM bookings b INNER JOIN accounts a ON b.account_id = a.account_id WHERE booking_status='BOOKED' GROUP BY YEAR(booking_date) ORDER BY booking_created DESC LIMIT $records_display_startcount, 50");
                }
                
            }
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