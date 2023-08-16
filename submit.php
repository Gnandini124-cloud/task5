<?php

if (isset($_POST['register_btn'])) {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); 
   
    $db_host = 'your_host';
    $db_username = 'your_username';
    $db_password = 'your_password';
    $db_name = 'your_database_name';

   
    $conn = new mysqli($db_host, $db_username, $db_password, $db_name);

   
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    
    $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    
    $conn->close();
}
?>
