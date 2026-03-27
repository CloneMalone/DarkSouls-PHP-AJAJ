<?php

// include_once('classes/DB_200.php');

// $db = new DB();
$action = $_REQUEST['action'];
$table = $_REQUEST['table'];

// READ
if ($action == "read") {
    $result = $db->read($table);
    $data = [];
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode($data);
}

// INSERT
if ($action == "insert") {
    $data = $_POST;
    unset($data['action'], $data['table']);
    $db->insert($table, $data);
    echo json_encode(["status" => "inserted"]);
}

// UPDATE
if ($action == "update") {
    $id = $_POST['id'];
    $data = $_POST;
    unset($data['action'], $data['table'], $data['id']);
    $db->update($table, $id, $data);
    echo json_encode(["status" => "updated"]);
}

// DELETE
if ($action == "delete") {
    $id = $_REQUEST['id'];
    $db->delete($table, $id);
    echo json_encode(["status" => "deleted"]);
}

?>
