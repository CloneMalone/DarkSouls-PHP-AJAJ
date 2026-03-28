<?php
include_once("../classes/DB_200.php");
$db = new DB_200();
echo '<!DOCTYPE html>';
echo '<html lang="en">';
echo '<head>';
echo '<meta charset="UTF-8">';
echo '<title>Dark Souls Database Output</title>';
echo '<link rel="stylesheet" href="../../Client_200/styles.css">';
echo '</head>';
echo '<body>';
echo '<div class="container">';
echo '<h2>Dark Souls Database Output</h2>';
echo '<div id="output">';

// ── CHARACTERS ────────────────────────────────────────
echo '<hr>';
echo '<h3>Characters</h3>';
$result = $db->read("characters");
if ($result && $result->num_rows > 0) {
    echo '<table>';
    echo '<thead><tr><th>ID</th><th>Name</th><th>Class</th><th>Level</th><th>Faction ID</th><th>Weapon ID</th></tr></thead>';
    echo '<tbody>';
    while ($row = $result->fetch_assoc()) {
        echo '<tr>';
        echo '<td>' . $row["id"] . '</td>';
        echo '<td>' . $row["name"] . '</td>';
        echo '<td>' . $row["class"] . '</td>';
        echo '<td>' . $row["level"] . '</td>';
        echo '<td>' . $row["faction_id"] . '</td>';
        echo '<td>' . $row["weapon_id"] . '</td>';
        echo '</tr>';
    }
    echo '</tbody></table>';
} else {
    echo "No characters found.<br>";
}

// ── FACTIONS ──────────────────────────────────────────
echo '<hr>';
echo '<h3>Factions</h3>';
$result = $db->read("factions");
if ($result && $result->num_rows > 0) {
    echo '<table>';
    echo '<thead><tr><th>ID</th><th>Name</th><th>Alignment</th><th>Leader</th><th>Territory</th></tr></thead>';
    echo '<tbody>';
    while ($row = $result->fetch_assoc()) {
        echo '<tr>';
        echo '<td>' . $row["id"] . '</td>';
        echo '<td>' . $row["name"] . '</td>';
        echo '<td>' . $row["alignment"] . '</td>';
        echo '<td>' . $row["leader"] . '</td>';
        echo '<td>' . $row["territory"] . '</td>';
        echo '</tr>';
    }
    echo '</tbody></table>';
} else {
    echo "No factions found.<br>";
}

// ── WEAPONS ───────────────────────────────────────────
echo '<hr>';
echo '<h3>Weapons</h3>';
$result = $db->read("weapons");
if ($result && $result->num_rows > 0) {
    echo '<table>';
    echo '<thead><tr><th>ID</th><th>Name</th><th>Damage</th><th>Scaling</th><th>Weight</th></tr></thead>';
    echo '<tbody>';
    while ($row = $result->fetch_assoc()) {
        echo '<tr>';
        echo '<td>' . $row["id"] . '</td>';
        echo '<td>' . $row["name"] . '</td>';
        echo '<td>' . $row["damage"] . '</td>';
        echo '<td>' . $row["scaling"] . '</td>';
        echo '<td>' . $row["weight"] . '</td>';
        echo '</tr>';
    }
    echo '</tbody></table>';
} else {
    echo "No weapons found.<br>";
}

echo '<hr>';
echo '</div>';
echo '</div>';
echo '<script src="../../Client_200/particles.js"></script>';
echo '</body>';
echo '</html>';
?>