<?php

include_once('classes/Character.php');
include_once('classes/Faction.php');
include_once('classes/Weapon.php');

// Need to set header because this API returns JSON and the 
// client expects the response to be of type application/json
header('Content-Type: application/json');

// Include the database class
include_once('classes/DB_200.php');
$db = new DB_200();

$action = $_REQUEST['action'];
$table = $_REQUEST['table'];

// READ
if ($action == "read") {
    $id = !empty($_REQUEST['id']) ? $_REQUEST['id'] : null;
    $result = $db->read($table, $id);
    $data = [];

    while ($row = $result->fetch_assoc()) {
        if ($table === "characters") {
            $obj = new Character($row["id"], $row["name"], $row["class"], $row["level"], $row["faction_id"], $row["weapon_id"]);
        } elseif ($table === "factions") {
            $obj = new Faction($row["id"], $row["name"], $row["alignment"], $row["leader"], $row["territory"]);
        } elseif ($table === "weapons") {
            $obj = new Weapon($row["id"], $row["name"], $row["damage"], $row["scaling"], $row["weight"]);
        }
        $data[] = $obj->toArray();
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
    $data = array_filter($data, function($value) { return $value !== ""; });
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