<?php

# Set database parameters


require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';

# Retrieve POST parameters
$booking_id = $_POST['booking_id'];

# Check parameters if null
if (isset($booking_id)) {

    try {

        # Connect to Database
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        # Perform SQL Query
        $sql = "UPDATE bookings SET booking_status='BOOKED' WHERE booking_id='$booking_id'";
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

