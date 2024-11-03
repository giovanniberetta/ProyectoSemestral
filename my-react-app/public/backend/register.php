<?php
header("Access-Control-Allow-Origin: http://localhost:3000"); // Permitir solicitudes solo desde http://localhost:3000
header("Access-Control-Allow-Methods: POST, OPTIONS"); // Permitir los métodos POST y OPTIONS
header("Access-Control-Allow-Headers: Content-Type"); // Permitir el encabezado Content-Type
header("Content-Type: application/json");

include 'db.php'; // Conectar a la base de datos

$data = json_decode(file_get_contents("php://input"), true);

if (empty($data['nombre']) || empty($data['email']) || empty($data['password']) || empty($data['rol'])) {
    echo json_encode(["success" => false, "message" => "Faltan datos necesarios"]);
    exit();
}

$nombre = $data['nombre'];
$email = $data['email'];
$password = password_hash($data['password'], PASSWORD_BCRYPT); // Cifrado de la contraseña
$rol = $data['rol'];
$activo = 1; // Usuario activo por defecto

// Insertar el usuario en la base de datos
$sql = "INSERT INTO usuarios (nombre, email, password, rol, activo, fecha_creacion) VALUES (?, ?, ?, ?, ?, NOW())";
$stmt = $conn->prepare($sql);

if (!$stmt) {
    echo json_encode(["success" => false, "message" => "Error al preparar la consulta"]);
    exit();
}

$stmt->bind_param("ssssi", $nombre, $email, $password, $rol, $activo);

if ($stmt->execute()) {
    echo json_encode(["success" => true, "message" => "Usuario registrado exitosamente"]);
} else {
    echo json_encode(["success" => false, "message" => "Error al registrar el usuario"]);
}

$stmt->close();
$conn->close();
?>
