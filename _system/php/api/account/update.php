<?php
    
    # Set database parameters


require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';

    # Retrieve POST parameters
$account_id = $_POST['account_id'];
$account_name = $_POST['account_name'];
$account_email = $_POST['account_email'];
$account_gender = $_POST['account_gender'];
$account_birthdate = $_POST['account_birthdate'];
$account_location = $_POST['account_location'];
$account_contact = $_POST['account_contact'];

    # Check parameters if null
if (true) {


        try {
            # Connect to Database
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            # Perform SQL Query
        $sql = "UPDATE accounts SET account_name='$account_name',account_email='$account_email', account_contact='$account_contact', account_gender='$account_gender', account_location='$account_location', account_birthdate='$account_birthdate' WHERE account_id='$account_id'";
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