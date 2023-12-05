<?php

// Include database connection file

include('includes/dbconnect.php');
include('includes/function.php');

header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');

if (isset($_POST['email'])) {

    $name = $Decode_React_APP_Data ($_POST['name']);
    $email = $Decode_React_APP_Data ($_POST['email']);
    $password = $Decode_React_APP_Data ($_POST['password']);
    $mobile = $Decode_React_APP_Data ($_POST['mobile']);
    $policycheck = $Decode_React_APP_Data ($_POST['policycheck']);

    $otp = mt_rand(1111, 9999);

    $select = mysqli_query($con, "SELECT email FROM `users` WHERE email  = '$email'")or die(mysqli_error($con));

    if (mysqli_num_rows($select)) {
        browse('Email Already Exists');
    } else {

        $query = "INSERT INTO users (name,email,password,mobile_number,policy_check,otp) VALUES ('$name','$email','$password','$mobile','$policycheck','$otp')";

        $result = $con->query($query);

        if ($result) {
            echo "yes";
        } else {
            echo "no";
        }
    }
}
?>