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
        $sql = "SELECT * FROM bookings INNER JOIN accounts WHERE bookings.account_id = accounts.account_id AND bookings.booking_date = '$booking_date' ORDER BY bookings.booking_time ASC";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        # Fetch Result
        $result = $stmt->fetchAll();
        
        $availables = array();

        $now = strtotime("8:00");
        $stop = strtotime("20:00");
        $step = "+30 minutes";

        for($i = 0, $reserved_start = strtotime($result[$i]['booking_time']), $reserved_duration = "+".json_decode($result[$i]['package'])->package_minutes." minutes", $reserved_finish = strtotime($reserved_duration, $reserved_start); $now < $stop; $now = strtotime($step, $now))
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

/*
<?php
# Set database parameters
$servername = "localhost";  
$username = "root";
$password = "mysql";

#Retrieve POST parameters
$from_date = "2018-10-20"; #$_POST['from_date'];

if (isset($from_date))
{
    try
    {
        $conn = new PDO("mysql:host=$servername;dbname=rtl_v1", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        //echo $booking_date."<br>";
        $upto_date = date("Y-m-d", strtotime("+6 days", strtotime($from_date)));
        //echo $upto_date;

        # Perform SQL Query
        $sql = "SELECT booking_id, booking_date, booking_time, package FROM bookings WHERE booking_date BETWEEN '$from_date' AND '$upto_date' ORDER BY booking_time ASC, booking_date ASC";
        $stmt = $conn->prepare($sql);
        $stmt->execute();

        # Fetch Result
        $result = $stmt->fetchAll();

        print_r($result);

        echo "<table border=2>";

        $now = strtotime("8:00");
        $stop = strtotime("20:00");
        $step = "+30 minutes";
        $upto_date = strtotime($upto_date);
        $rowspans = array(
            1, 1, 1, 1, 1, 1, 1
        );

        echo "<tr>";
        echo "<td></td>";
        for($day = strtotime($from_date); $day <= $upto_date; $day = strtotime("+1 day", $day))
        {
            echo "<td>".date("D m/d/Y", $day)."</td>";
        }
        echo "</tr>";
        
        for($i = 0, $reserved_start = strtotime($result[$i]['booking_time']), $reserved_duration = json_decode($result[$i]['package'])->package_minutes, $reserved_finish = strtotime("+".$reserved_duration." minutes", $reserved_start), $reserved_date = strtotime($result[$i]['booking_date']); $now < $stop; $now = strtotime($step, $now))
        {
            echo "<tr>";
            
            echo "<td>".date("H:i", $now)."</td>";

            for($j = 0, $day = strtotime($from_date); $day <= $upto_date; $day = strtotime("+1 day", $day), $j++)
            {
                //echo date("H:i", $now)." == ".date("H:i", $reserved_start)." && ".date("m/d/Y", $day)." == ".date("m/d/Y", $reserved_date)." <br>";

                if($now == $reserved_start && $day == $reserved_date)
                {
                    $rowspan = $reserved_duration / 30;
                    $rowspans[$j] = $rowspan;
                    echo "<td rowspan=".$rowspan.">".$result[$i]['booking_id']."</td>";

                    $i = $i + 1;
                    $reserved_start = strtotime($result[$i]['booking_time']);
                    $reserved_duration = json_decode($result[$i]['package'])->package_minutes;
                    $reserved_finish = strtotime("+".$reserved_duration." minutes", $reserved_start);
                    $reserved_date = strtotime($result[$i]['booking_date']);
                }
                else if($rowspans[$j] == 1)
                {
                    echo "<td>Open</td>";
                }
                else
                {
                    $rowspans[$j] = $rowspans[$j] - 1;
                }
            }

            echo "</tr>";
        }

        echo "</table>";
    }
    catch(PDOException $e)
    {
        echo json_encode((object)[
            'success' => false,
            'message' => "Connection failed" . $e->getMessage()
        ]);
    }
}
*/
?>