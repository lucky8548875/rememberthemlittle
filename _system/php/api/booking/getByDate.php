<?php
# Set database parameters
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/functions/checkAdminToken.php';

#Retrieve POST parameters
$booking_date = $_GET['date'];
if (isset($booking_date))
{
    # Convert to PHP recognized format
    
    try
    {
        # Connect to Database
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        # Perform SQL Query
        $sql = "SELECT * FROM bookings INNER JOIN accounts WHERE bookings.account_id = accounts.account_id AND bookings.booking_date = '$booking_date' AND bookings.booking_status != 'CANCELLED' ORDER BY bookings.booking_time ASC";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        # Fetch Result
        $result = $stmt->fetchAll();

        $cell = array();
        
        foreach ($result as $value){
            $cell[] = ((object)[
                        'booking' => $value,
                        'start' => 't'.str_replace(':','',$value['booking_time']),
                        'package' => json_decode($value['package'],true)['package_minutes'],
                        'end' => 't'.str_replace(':','',date("H:i",strtotime('+'.json_decode($value['package'],true)['package_minutes'].' minutes', strtotime($value['booking_time']))))
                    ]);
        }

        echo json_encode((object)[
            'success' => true,
            'data' => $cell
        ]);
    }
    catch(PDOException $e)
    {
        echo json_encode((object)[
            'success' => false,
            'message' => "Connection failed". $e->getMessage()
        ]);
    }
}
else
{
    echo json_encode((object)[
        'success' => false,
        'message' => "Error"
    ]);
}  
?>
                   