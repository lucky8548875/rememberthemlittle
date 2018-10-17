<?php

# Set database parameters
$servername = "localhost";
$username = "root";
$password = "mysql";

try {

    # Connect to Database
    $conn = new PDO("mysql:host=$servername;dbname=rtl_v1", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    # Perform SQL Query
    $stmt = $conn->prepare('SELECT * FROM themes');
    $stmt->execute();

    # Fetch Result
    $result = $stmt->fetchAll();
    
     # Print Result in JSON Format
     echo json_encode((object)[
        'success' => true,
        'data' => $result
     ],JSON_NUMERIC_CHECK);

    }
catch(PDOException $e)
    {
        echo json_encode((object)[
            'success' => false,
            'message' => "Connection failed: " . $e->getMessage()
        ]);
    }
?>