<?php
#Set database parameters
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/functions/checkAdminToken.php';

try
{
    # Connect to Database
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    # Perform SQL Query
    $stmt = $conn->prepare(
        "SELECT 
            announcement_title, 
            announcement_description, 
            announcement_created, 
            announcement_start, 
            announcement_end 
        FROM announcements
        WHERE announcement_start > CURDATE()
        ORDER BY announcement_created DESC"
    );
    $stmt->execute();

    # Fetch Result
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
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