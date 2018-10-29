<?php

# Set database parameters


require_once $_SERVER['DOCUMENT_ROOT'] . '/_system/php/connection/db_connection.php';

# Retrieve POST parameters
$account_id = $_POST['account_id'];
$account_name = $_POST['account_name'];
$account_contact = $_POST['account_contact'];
$account_email = $_POST['account_email'];


# Check parameters if null
if (isset($account_name) && isset($account_contact) && isset($account_email)) {

    try {

        # Connect to Database
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        # Perform SQL Query
        $sql = "UPDATE accounts SET account_name='$account_name', account_contact='$account_contact', account_email='$account_email' WHERE account_id='$account_id'";
        $stmt = $conn->prepare($sql);
        $stmt->execute();

        # Print success
        echo json_encode((object)[
            'success' => true,
        ]);

    } catch (PDOException $e) {

        echo json_encode((object)[
            'success' => false,
            'message' => "Connection failed: " . $e->getMessage() . "UPDATE accounts SET account_name='$account_name', account_contact='$account_contact', account_email='$account_email' WHERE account_id='$account_id'"
        ]);

    }
} else {
    echo json_encode((object)[
        'success' => false,
        'message' => "Connection failed: " . $e->getMessage() . "UPDATE accounts SET account_name='$account_name', account_contact='$account_contact', account_email='$account_email' WHERE account_id='$account_id'"
    ]);
}

