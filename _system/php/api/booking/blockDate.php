<?php

# Set database parameters


require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/functions/checkToken.php';


# Retrieve POST parameters
$date =  $_GET['date'];

# Check parameters if null
if (isset($date)) {

    try {

        # Connect to Database
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


        // !Todo : Fix account_id (currently fixed to 1) and booking_total_price
        # Perform SQL Query
        $sql = "INSERT INTO blocked_dates (date) VALUES ('$date')";
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

