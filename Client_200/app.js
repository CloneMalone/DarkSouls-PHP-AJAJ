const API = "../Provider_200/API_200.php";

// ── CHARACTERS ────────────────────────────────────────
function readCharacters() {
    $.get(API, { action: "read", table: "characters" }, function(data) {
        $("#output").html(JSON.stringify(data, null, 2));
        refreshAllTables();
    });
}

function insertCharacter() {
    $.post(API, {
        action:     "insert",
        table:      "characters",
        name:       $("#char-name").val(),
        level:      $("#char-level").val(),
        class:      $("#char-class").val(),
        faction_id: $("#char-faction-id").val(),
        weapon_id:  $("#char-weapon-id").val()
    }, function(data) {
        $("#output").html(JSON.stringify(data));
        refreshAllTables();
    });
}

function updateCharacter() {
    $.post(API, {
        action:     "update",
        table:      "characters",
        id:         $("#char-id").val(),
        name:       $("#char-name").val(),
        level:      $("#char-level").val(),
        faction_id: $("#char-faction-id").val(),
        weapon_id:  $("#char-weapon-id").val()
    }, function(data) {
        $("#output").html(JSON.stringify(data));
        refreshAllTables();
    });
}

function deleteCharacter() {
    $.get(API, { action: "delete", table: "characters", id: $("#char-id").val() }, function(data) {
        $("#output").html(JSON.stringify(data));
        refreshAllTables();
    });
}

// ── FACTIONS ──────────────────────────────────────────
function readFactions() {
    $.get(API, { action: "read", table: "factions" }, function(data) {
        $("#output").html(JSON.stringify(data, null, 2));
        refreshAllTables();
    });
}

function insertFaction() {
    $.post(API, {
        action:    "insert",
        table:     "factions",
        name:      $("#fac-name").val(),
        alignment: $("#fac-alignment").val(),
        leader:    $("#fac-leader").val(),
        territory: $("#fac-territory").val()
    }, function(data) {
        $("#output").html(JSON.stringify(data));
        refreshAllTables();
    });
}

function updateFaction() {
    $.post(API, {
        action:    "update",
        table:     "factions",
        id:        $("#fac-id").val(),
        name:      $("#fac-name").val(),
        alignment: $("#fac-alignment").val(),
        leader:    $("#fac-leader").val(),
        territory: $("#fac-territory").val()
    }, function(data) {
        $("#output").html(JSON.stringify(data));
        refreshAllTables();
    });
}

function deleteFaction() {
    $.get(API, { action: "delete", table: "factions", id: $("#fac-id").val() }, function(data) {
        $("#output").html(JSON.stringify(data));
        refreshAllTables();
    });
}

// ── WEAPONS ───────────────────────────────────────────
function readWeapons() {
    $.get(API, { action: "read", table: "weapons" }, function(data) {
        $("#output").html(JSON.stringify(data, null, 2));
        refreshAllTables();
    });
}

function insertWeapon() {
    $.post(API, {
        action:  "insert",
        table:   "weapons",
        name:    $("#wpn-name").val(),
        type:    $("#wpn-type").val(),
        damage:  $("#wpn-damage").val(),
        scaling: $("#wpn-scaling").val()
    }, function(data) {
        $("#output").html(JSON.stringify(data));
        refreshAllTables();
    });
}

function updateWeapon() {
    $.post(API, {
        action:  "update",
        table:   "weapons",
        id:      $("#wpn-id").val(),
        name:    $("#wpn-name").val(),
        type:    $("#wpn-type").val(),
        damage:  $("#wpn-damage").val(),
        scaling: $("#wpn-scaling").val()
    }, function(data) {
        $("#output").html(JSON.stringify(data));
        refreshAllTables();
    });
}

function deleteWeapon() {
    $.get(API, { action: "delete", table: "weapons", id: $("#wpn-id").val() }, function(data) {
        $("#output").html(JSON.stringify(data));
        refreshAllTables();
    });
}

// ── LIVE TABLE HELPERS ────────────────────────────────
function loadTable(tableName, tableId) {
    $.get(API, { action: "read", table: tableName }, function(data) {
        let rows = "";
        data.forEach(function(row) {
            rows += "<tr>";
            for (let key in row) { rows += `<td>${row[key]}</td>`; }
            rows += "</tr>";
        });
        $(`#${tableId} tbody`).html(rows);
    });
}

function refreshAllTables() {
    loadTable("characters", "charactersTable");
    loadTable("factions",   "factionsTable");
    loadTable("weapons",    "weaponsTable");
}

$(document).ready(function() { refreshAllTables(); });