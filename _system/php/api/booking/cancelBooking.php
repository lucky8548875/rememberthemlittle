<?php

# Set database parameters
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/functions/checkAdminToken.php';

# Retrieve POST parameters
$booking_id = $_POST['booking_id'];
$account_id = $_POST['account_id'];
$token = $_POST['token'];

# Check parameters if null
if (isset($booking_id) && isAdminTokenValid($account_id,$token)) {

    try {

        # Connect to Database
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        # Perform SQL Query
        $sql = "UPDATE bookings SET booking_status='CANCELLED' WHERE booking_id='$booking_id'";
        $stmt = $conn->prepare($sql);
        $stmt->execute();

        $notification_message = "Your booking has been cancelled.";

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
    echo 'values not set';
}

