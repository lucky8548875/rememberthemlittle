<?php
# Set database parameters
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/connection/db_connection.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/_system/php/functions/checkAdminToken.php';

#Retrieve POST parameters
$booking_date = "2018-10-20"; #$_POST['booking_date'];
if (isset($booking_date))
{
    # Convert to PHP recognized format
    
    try
    {
        # Connect to Database
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        # Perform SQL Query
        $sql = "SELECT * FROM bookings WHERE booking_date = '$booking_date' ORDER BY booking_time ASC";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        # Fetch Result
        $result = $stmt->fetchAll();
        echo "<table border=2>";

        $now = strtotime("8:00");
        $stop = strtotime("20:00");
        $step = "+30 minutes";

        for($i = 0, $reserved_start = strtotime($result[$i]['booking_time']), $reserved_duration = "+".json_decode($result[$i]['package'])->package_minutes." minutes", $reserved_finish = strtotime($reserved_duration, $reserved_start); $now < $stop; $now = strtotime($step, $now))
        {
            echo "<tr>";
           
            echo "<td>".date("H:i", $now)."</td>";
           
            if($now == $reserved_start)
            {
                $rowspan = json_decode($result[$i]['package'])->package_minutes / 30;
                echo "<td rowspan=$rowspan>".json_decode($result[$i]['package'])->package_minutes."</td>";
            }
            else if($now >= $reserved_start && $now < $reserved_finish)
            {
                   
            }
            else if($now == $reserved_finish)
            {
                echo "<td>Open</td>";
                $i = $i + 1;
                $reserved_start = strtotime($result[$i]['booking_time']);
                $reserved_duration = "+".json_decode($result[$i]['package'])->package_minutes." minutes";
                $reserved_finish = strtotime($reserved_duration, $reserved_start);
            }
            else
            {
                echo "<td>Open</td>";
            }
            echo "</tr>";
        }
        echo "$i</table>";
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