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
        // $sql = "SELECT * FROM bookings INNER JOIN accounts WHERE bookings.account_id = accounts.account_id AND bookings.booking_date = '$booking_date' ORDER BY bookings.booking_time ASC";
        $sql = "SELECT * FROM sales INNER JOIN bookings WHERE sales.sales_time = bookings.booking_time AND sales.sales_date = '$sales_date' ORDER BY sales.sales_time ASC";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        # Fetch Result
        $result = $stmt->fetchAll();
        
        $availables = array();

        $now = strtotime("8:00");
        $stop = strtotime("20:00");
        $step = "+30 minutes";

        for($i = 0, $reserved_start = strtotime($result[$i]['sales_time']), $reserved_duration = "+".json_decode($result[$i]['package'])->package_minutes." minutes", $reserved_finish = strtotime($reserved_duration, $reserved_start); $now < $stop; $now = strtotime($step, $now))
        {
            
           
            $time = date("H:i", $now);
            $cell = array();
           
            if($now == $reserved_start)
            {
                $rowspan = json_decode($result[$i]['package'])->package_minutes / 30;
                $cell[] = ((object)[
                    'rowspan' => $rowspan,
                    'data' => json_encode($result[$i])
                ]);
            }
            else if($now >= $reserved_start && $now < $reserved_finish)
            {
                   
            }
            else if($now == $reserved_finish)
            {
                $cell[] = ((object)[
                    'data' => "Open"
                ]);
                $i = $i + 1;
                $reserved_start = strtotime($result[$i]['booking_time']);
                $reserved_duration = "+".json_decode($result[$i]['package'])->package_minutes." minutes";
                $reserved_finish = strtotime($reserved_duration, $reserved_start);
            }
            else
            {
                $cell[] = ((object)[
                    'data' => "Open"
                ]);
            }
            $availables[] = ((object)[
                'time' => $time,
                'cell' => $cell
            ]);
        }
        echo json_encode((object)[
            'success' => true,
            'data' => $availables
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