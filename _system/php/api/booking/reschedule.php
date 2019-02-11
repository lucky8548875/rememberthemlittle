<?php
    
    # Set database parameters


require_once $_SERVER['DOCUMENT_ROOT'] . '/_system/php/connection/db_connection.php';

    # Retrieve POST parameters
$booking_date = $_POST['booking_date'];
$booking_time = $_POST['booking_time'];
$booking_id = $_POST['booking_id'];

    # Check parameters if null
if (isset($booking_date) && isset($booking_time)) {

        try {
            # Connect to Database
            $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            # Perform SQL Query
            $sql = "UPDATE bookings SET booking_date='$booking_date', booking_time='$booking_time' WHERE booking_id='$booking_id'";
            $stmt = $conn->prepare($sql);
            $stmt->execute();

            # Print success
            echo json_encode((object)[
                'success' => true,
                'sql' => $sql
            ]);

        } catch (PDOException $e) {
            echo json_encode((object)[
                'success' => false,
                'message' => "Connection failed: " . $e->getMessage()
            ]);
        }

} else {
    echo json_encode((object)[
        'success' => false,
        'message' => "Values not set"
    ]);
}