<?php

include('includes/dbconnect.php');
include('includes/function.php');


header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');

$name = $Decode_React_APP_Data['name'];
$email = $Decode_React_APP_Data['email'];
$password = $Decode_React_APP_Data['password']; 
$confirmPassword = $Decode_React_APP_Data['confirmPassword'];
$mobile = $Decode_React_APP_Data ['mobile'];
$policycheck = $con->real_escape_string($_POST['policycheck']);
$otp = mt_rand(1111, 9999);



$query = "SELECT * FROM users WHERE email = '$email'";
$query_result = mysqli_query($connect_db, $query);

if (!mysqli_num_rows($query_result))
{
    $Reg_Query = "INSERT INTO users(`name`, `email`,`mobile`, `policy_check`, `password`,`otp`) VALUES ('$name', '$email', '$password','$mobile','$policycheck','$otp')";
    $Reg_Query_Result = mysqli_query($connect_db, $Reg_Query);

    if ($Reg_Query_Result) 
	{
        $Message = "Registered successfully!";
    } else 
	{
        $Message = "Error - Try again";
    }
	
} else 
{
    $Message = "User Already Registered";
}

$response[] = array("Message" => $Message);

echo json_encode($response);
?>