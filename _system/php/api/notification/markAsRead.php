<?php
    
    # Set database parameters


require_once $_SERVER['DOCUMENT_ROOT'] . '/_system/php/connection/db_connection.php';

    # Retrieve POST parameters
$notification_id = $_GET['notification_id'];

    # Check parameters if null
if (isset($notification_id)) {

        try {
            # Connect to Database
            $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            # Perform SQL Query
            $sql = "UPDATE notifications SET isRead='1' WHERE notification_id='$notification_id'";
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