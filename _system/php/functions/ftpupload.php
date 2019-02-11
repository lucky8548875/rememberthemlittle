<?php

$timezone = date_default_timezone_get();
$date = date('m/d/Y h:i:s a', time());
$randomstring = md5($account_id.$date);

$ftp_server = "ftpupload.net";
$ftp_user_name = "epiz_23012444";
$ftp_user_pass = "hiYfa4zbW1K";
$ftp_port = "21";
$destination_file = "/htdocs/images/".$randomstring.$_FILES['image']['name'];

# Source File
$source_file = $_FILES['image']['tmp_name'];

# Establish a Connection
$conn_id = ftp_connect($ftp_server,$ftp_port);

// login with username and password
$login_result = ftp_login($conn_id, $ftp_user_name, $ftp_user_pass); 
// ftp passive cmd
ftp_pasv($conn_id, true);

// check connection
if ((!$conn_id) || (!$login_result)) { 
  echo "FTP connection has failed!";
  echo "Attempted to connect to $ftp_server for user $ftp_user_name"; 
  exit; 
} else {
  


// upload the file
$upload = ftp_put($conn_id, $destination_file, $source_file, FTP_BINARY); 

// check upload status
if (!$upload) { 
  echo json_encode((object)[
    'success' => false,
    'data' => 'Upload Failed'
 ],JSON_NUMERIC_CHECK);
} else {
  echo json_encode((object)[
    'success' => true,
    'data' => 'http://rtlfiles.epizy.com/images/'.$randomstring.$_FILES['image']['name']
 ],JSON_NUMERIC_CHECK);
}

// close the FTP stream 
ftp_close($conn_id);

}