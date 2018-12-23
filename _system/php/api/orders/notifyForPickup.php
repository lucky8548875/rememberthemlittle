<?php

# Set database parameters
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/functions/checkToken.php';

$order_id = $_POST['order_id'];
$account_id = $_POST['account_id'];
$message = "Sample Message";

if(isset($order_id)){

    try{

        # Connect to Database
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                # Perform SQL Query
                $sql = "UPDATE orders SET order_status='READY FOR PICKUP' WHERE order_id='$order_id'";
                $stmt = $conn->prepare($sql);
                $stmt->execute();

                $sql = "INSERT INTO notifications (account_id,notification_message) VALUES('$account_id','$message')";
                $stmt = $conn->prepare($sql);
                $stmt->execute();

        echo json_encode((object)[
            'success' => true
        ]);

    }
    catch (PDOException $e) {

        echo json_encode((object)[
            'success' => false,
            'message' => "Connection failed: " . $e->getMessage()
        ]);

    }

}
else{
    echo json_encode((object)[
        'success' => false,
        'message' => "Values not set"
    ]);
}