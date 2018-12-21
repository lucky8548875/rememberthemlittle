<?php

# Set database parameters


require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/functions/checkToken.php';


# Retrieve POST parameters
$package =  $_POST['package'];
$booking_addons = $_POST['booking_addons'];
$booking_themes = $_POST['booking_themes'];
$booking_date = $_POST['booking_date'];
$booking_time = $_POST['booking_time'];
$subject_name = $_POST['subject_name'];
$subject_age = $_POST['subject_age'];
$account_id = $_POST['account_id'];
$token = $_POST['token'];
$payment_method = $_POST['payment_method'];
$booking_total_price = $_POST['booking_total_price'];


# Check parameters if null
if (isset($package) && isset($booking_addons) && isset($booking_themes) && isset($booking_date) && isset($booking_time) && isset($account_id) && isset($payment_method) && isTokenValid($account_id,$token)) {

    try {

        # Connect to Database
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


        // !Todo : Fix account_id (currently fixed to 1) and booking_total_price
        # Perform SQL Query
        $sql = "INSERT INTO bookings (account_id, package, booking_addons, booking_themes, booking_date, booking_time, subject_name, subject_age, payment_method, booking_total_price) VALUES ('$account_id','$package', '$booking_addons', '$booking_themes', '$booking_date', '$booking_time', '$subject_name', '$subject_age','$payment_method','$booking_total_price')";
        $stmt = $conn->prepare($sql);
        $stmt->execute();

    
        $date_today = strtotime('Now');
        $date_tomorrow = strtotime('+1 day', $date_today);


        $notification_message = `
        Thank you for booking your pictorial with us.\n
        Your booking is now reserved for 24 hours. Please secure your payment of Php $booking_total_price at the following banks: etc. until "` . date("m-d-Y H:i",$date_tomorrow).`\n
        \n
        For blocking of the date and time schedule we need a FULL PAYMENT to be DEPOSITED TO ANY BRANCH or BANK TRANSFER / ONLINE\n
        \n
        BPI Acct No. : 2859-1133-65\n
        ISLAND ACCOUNT\n
        BPI Acct Name: Emelyn D.Mayuga\n
        \n
        Val E. Mayuga / Emelyn D. Mayuga\n
        BDO: 001900082320\n
        Branch: SM Dasmarinas\n
        \n
        Deposit is NON-REDUNDABLE in the case of No Show on the pictorial schedule. Re-Schedule will be allowed as long as we are informed a day before or on the day of the schedule.
        \n\n
        To verify the deposit payment please send us a copy of the deposit slip through message in our FACEBOOK page. circumstance, we will adjust the scheduled time based on the availability of the studio on the day of the pictorial.
        \n
        Please be advised to come 30 minutes earlier than your scheduled time. Thanks.
        
        

        $sql = "INSERT INTO notifications (account_id, notification_message) VALUES ('$account_id','$notification_message')";
        $stmt = $conn->prepare($sql);
        $stmt->execute();

        # Print success
        echo json_encode((object)[
            'success' => true
        ]);

    } catch (PDOException $e) {

        echo json_encode((object)[
            'success' => false,
            'message' => "Connection failed: " . $e->getMessage()
        ]);

    }
}
else {
    echo json_encode((object)[
        'success' => false,
        'message' => "Values not set or not authenticated"
    ]);
}

