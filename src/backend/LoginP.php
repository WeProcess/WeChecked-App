<?php

ob_start();
session_start();
require("dbconnect.php");
include ('function.php');

$eu = $_SESSION['user'];
$un = $_SESSION['userName'];
$email = $_GET["email"];
$password = $_GET["password"];
$success = true;
$loggedIn = false;
$error = true;
$maindb = "site_passmain";
$trandb = "carttran";
$listdb = "wishlist";
$itemCommand = array();
$wisListCommand = array();

$login = mysqli_query($conn, "SELECT * FROM `$maindb` WHERE `email` = '$email' and `password` = '$password'") or die(mysqli_error($conn));

if (mysqli_num_rows($login) == 1) {
    $loginDtl = mysqli_fetch_object($login);

    $_SESSION['user'] = $email;
    $_SESSION['userName'] = $loginDtl->user;
    $_SESSION['userId'] = $loginDtl->srno;
    $_SESSION['userMail'] = $loginDtl->email;
    $success = true;
    $loggedIn = true;
    $error = false;

    // /*User Cart Details*/
    // $getUserCartDetails = mysqli_query($conn, "SELECT a.srno, a.item, a.qty AS totqty, a.unit AS totunit, a.rate, b.minqty, b.code, b.title, b.scost, 
    //                                    b.erp, b.image FROM `$trandb` a, `prodmain` b WHERE a.item = b.code AND a.user='$email'")or die(mysqli_error($conn));
    // $countCart = mysqli_query($conn, "SELECT SUM(qty) AS totqty FROM `carttran` WHERE user='$email'")or die(mysqli_error($conn));
    // $counter = mysqli_fetch_object($countCart);
    // $cartQty = $counter->totqty;
    // /*User Wish List Details*/
    // $getUserWishListDetails = mysqli_query($conn, "SELECT a.item, SUM(a.qty) AS totqty, b.code, b.title, b.mrp, b.erp, b.image FROM `$listdb` a,
    //                                       `prodmain` b WHERE a.item = b.code AND a.user='$email' GROUP BY a.item")or die(mysqli_error($conn));
    // $countWishList = mysqli_query($conn, "SELECT SUM(qty) AS totqty FROM `wishlist` WHERE user='$email'")or die(mysqli_error($conn));
    // $countList = mysqli_fetch_object($countWishList);
    // $listQty = $countList->totqty;
    // if (mysqli_num_rows($getUserCartDetails) > 0) {
    //     while ($items = mysqli_fetch_object($getUserCartDetails)) {
    //            $itemCommand[] = $items;
    //     }
    //     header("Content-type: application\json");
    //     $itemArray = $itemCommand;
    //     $_SESSION["user_cart"] = json_encode($itemArray);
    //     $_SESSION["user_cartQty"] = $cartQty;
    //     $cartItems = array();
    //     $cartItems = json_decode($_SESSION["user_cart"], true);
    //     $items = count($cartItems);
    //     $subtotal = 0;
    //     for ($i = 0; $i <= $items; $i++) {
    //         if ($cartItems[$i]["title"]) {
    //             $totalQty   = $cartItems[$i]["totqty"];
    //             $ItemPrice  = $cartItems[$i]["mrp"];
    //             $totalPrice = round(($cartItems[$i]["totunit"] * $ItemPrice) / $cartItems[$i]["minqty"],2);
    //             $subtotal   = ($subtotal + ($totalPrice * $totalQty));
    //         }
    //     }
    // $cartTotal = $subtotal;                   
    //  $_SESSION["cartTotal"]  = $cartTotal;   
    // }
    // if (mysqli_num_rows($getUserWishListDetails) > 0) {
    //     while ($listItems = mysqli_fetch_object($getUserWishListDetails)) {
    //            $wisListCommand[] = $listItems;
    //     }
    //     header("Content-type: application\json");
    //     $listArray = $wisListCommand;
    //     $_SESSION["user_wishList"] = json_encode($listArray);
    //     $_SESSION["user_wishListQty"] = $listQty;
    // }
}
header("Content-type: application\json");
$cartArray = array("success" => $success,
    "isLoggedIn" => $loggedIn,
    "error" => $error,
    "userName" => $loginDtl->user,
    "userMail" => $email,
    "itemsCommand" => $itemCommand,
    "cartQty" => $cartQty,
    "wishListQty" => $listQty,
    "eu" => $eu,
    "un" => $un,
    "cartTotal" => $cartTotal
);
echo json_encode($cartArray);
?>