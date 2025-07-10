<?php
include 'config.php'; // include your DB connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $patient_id = $_POST['patient_id'];
    $lastname = $_POST['lastname'];
    $firstname = $_POST['firstname'];
    $middlename = $_POST['middlename'];
    $suffix = $_POST['suffix'];
    $birthday = $_POST['birthday'];

    // Build your SQL query (adjust table/column names as needed)
    $sql = "SELECT * FROM patients WHERE 
        patient_id = ? AND 
        lastname = ? AND 
        firstname = ? AND 
        middlename = ? AND 
        suffix = ? AND 
        birthday = ?";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssss", $patient_id, $lastname, $firstname, $middlename, $suffix, $birthday);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // Output data of each row
        while($row = $result->fetch_assoc()) {
            echo "Patient ID: " . $row["patient_id"]. "<br>";
            echo "Name: " . $row["lastname"] . ", " . $row["firstname"] . " " . $row["middlename"] . " " . $row["suffix"] . "<br>";
            // ... display other fields as needed
        }
    } else {
        echo "No patient found.";
    }
    $stmt->close();
    $conn->close();
} else {
    echo "Invalid request.";
}
?>
