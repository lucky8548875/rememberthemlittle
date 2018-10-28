<?php

# Set database parameters


require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';


# Retrieve POST parameters
$package_id =  $_POST['package_id'];
$booking_addons = $_POST['booking_addons'];
$booking_themes = $_POST['booking_themes'];
$booking_date = $_POST['booking_date'];
$booking_time = $_POST['booking_time'];
$subject_name = $_POST['subject_name'];
$subject_age = $_POST['subject_age'];
$account_name = $_POST['account_name'];
$booking_payment = $_POST['booking_payment'];
$booking_total_price = $_POST['booking_total_price'];

# Check parameters if null
if (isset($package_id)) {

    try {

        # Connect to Database
        $conn = new PDO("mysql:host=$servername;dbname=rtl_v1", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


        // !Todo : Fix account_id (currently fixed to 1) and booking_total_price
        # Perform SQL Query
        $sql = "INSERT INTO bookings (account_id, package_id, booking_addons, booking_themes, booking_date, booking_time, subject_name, subject_age, booking_payment, booking_total_price) VALUES (1,'$package_id', '$booking_addons', '$booking_themes', '$booking_date', '$booking_time', '$subject_name', '$subject_age','$booking_payment','$booking_total_price')";
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
        'message' => "Values not set"
    ]);
}

