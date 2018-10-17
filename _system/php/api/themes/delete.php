<?php
 # Set database parameters
$servername = "localhost";
$username = "root";
$password = "mysql";
 # Retrieve POST parameters
$theme_id = $_POST['theme_id'];
 # Check parameters if null
if (isset($theme_id)) {
     try {
         # Connect to Database
        $conn = new PDO("mysql:host=$servername;dbname=rtl_v1", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
         # Perform SQL Query
        $sql = "DELETE FROM themes WHERE theme_id = $theme_id";
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