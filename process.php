<?php
// process.php

$errors = array();  // array to hold validation errors
$data = array();        // array to pass back data

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
// validate the variables ========
if (empty($_POST['name']))
  $errors['name'] = 'Name is required.';

if (empty($_POST['email']))
  $errors['email'] = 'email is required.';

if (empty($_POST['message']))
  $errors['message'] = 'Message is required.';

  $email = test_input($_POST["email"]);
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['emailvalid'] = "Invalid email format";
  }
// return a response ==============

// response if there are errors
if ( ! empty($errors)) {

  // if there are items in our errors array, return those errors
  $data['success'] = false;
  $data['errors']  = $errors;
} else {

  // if there are no errors, return a message
  $data['success'] = true;
  $data['message'] = 'I will contact you ASAP!!';

// // the message
// $msg = "thi is a text";
//
// // use wordwrap() if lines are longer than 70 characters
// $msg = wordwrap($msg,70);
//
// // send email
// mail("fox1tech@gmail.com","New Inquiry",$msg);

}

// return all our data to an AJAX call
echo json_encode($data);
