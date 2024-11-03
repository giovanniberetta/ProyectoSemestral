<?php
$conn = new mysqli("localhost", "root", "", "educacion_calidad");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
