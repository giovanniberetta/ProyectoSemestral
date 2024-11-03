<?php
header("Access-Control-Allow-Origin: http://localhost:3000"); // Permitir solicitudes solo desde http://localhost:3000
header("Access-Control-Allow-Methods: POST, OPTIONS"); // Permitir los métodos POST y OPTIONS
header("Access-Control-Allow-Headers: Content-Type"); // Permitir el encabezado Content-Type
header("Content-Type: application/json");

include 'db.php'; // Conectar a la base de datos

// Manejo de la solicitud OPTIONS (preflight)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Obtener los datos JSON enviados en la solicitud
$data = json_decode(file_get_contents("php://input"), true);

// Verificar si los datos requeridos están presentes
if (empty($data['email']) || empty($data['password'])) {
    echo json_encode(["success" => false, "message" => "Faltan datos de email o contraseña"]);
    exit();
}

$email = $data['email'];
$password = $data['password'];

// Preparar la consulta para buscar al usuario por email
$sql = "SELECT * FROM usuarios WHERE email = ?";
$stmt = $conn->prepare($sql);

if (!$stmt) {
    echo json_encode(["success" => false, "message" => "Error al preparar la consulta"]);
    exit();
}

$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();

    // Verificar la contraseña (usando password_verify si la contraseña está cifrada)
    if (password_verify($password, $user['password'])) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "message" => "Contraseña incorrecta"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Usuario no encontrado"]);
}

// Cerrar el statement y la conexión
$stmt->close();
$conn->close();
?>
