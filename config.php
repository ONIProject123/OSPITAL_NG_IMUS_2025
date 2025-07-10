<?php
$servername = "localhost";
$username = "root"; // default XAMPP user
$password = ""; // no password by default
$database = "onipatients";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
