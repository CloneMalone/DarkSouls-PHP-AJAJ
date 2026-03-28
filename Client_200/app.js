const API = "../Provider_200/API_200.php";

// ── CHARACTERS ────────────────────────────────────────
function readCharacters() {
    const id = $("#char-id").val();
    $.get(API, { action: "read", table: "characters", id: id || "" }, function(data) {
        $("#output").html(JSON.stringify(data, null, 2));
        refreshAllTables();
        clearAllInputs();
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
        clearAllInputs();
    });
}

function updateCharacter() {
    $.post(API, {
        action:     "update",
        table:      "characters",
        id:         $("#char-id").val(),
        name:       $("#char-name").val(),
        level:      $("#char-level").val(),
        class:      $("#char-class").val(),
        faction_id: $("#char-faction-id").val(),
        weapon_id:  $("#char-weapon-id").val()
    }, function(data) {
        $("#output").html(JSON.stringify(data));
        refreshAllTables();
        clearAllInputs();

    });
}

function deleteCharacter() {
    $.get(API, { action: "delete", table: "characters", id: $("#char-id").val() }, function(data) {
        $("#output").html(JSON.stringify(data));
        refreshAllTables();
        clearAllInputs();
    });
}

// ── FACTIONS ──────────────────────────────────────────
function readFactions() {
    const id = $("#fac-id").val();
    $.get(API, { action: "read", table: "factions", id: id || "" }, function(data) {
        $("#output").html(JSON.stringify(data, null, 2));
        refreshAllTables();
        clearAllInputs();

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
        clearAllInputs();
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
        clearAllInputs();
    });
}

function deleteFaction() {
    $.get(API, { action: "delete", table: "factions", id: $("#fac-id").val() }, function(data) {
        $("#output").html(JSON.stringify(data));
        refreshAllTables();
        clearAllInputs();
    });
}

// ── WEAPONS ───────────────────────────────────────────
function readWeapons() {
    const id = $("#wpn-id").val();
    $.get(API, { action: "read", table: "weapons", id: id || "" }, function(data) {
        $("#output").html(JSON.stringify(data, null, 2));
        refreshAllTables();
        clearAllInputs();

    });
}

function insertWeapon() {
    $.post(API, {
        action:  "insert",
        table:   "weapons",
        name:    $("#wpn-name").val(),
        damage:  $("#wpn-damage").val(),
        scaling: $("#wpn-scaling").val(),
        weight:  $("#wpn-weight").val()
    }, function(data) {
        $("#output").html(JSON.stringify(data));
        refreshAllTables();
        clearAllInputs();
    });
}

function updateWeapon() {
    $.post(API, {
        action:  "update",
        table:   "weapons",
        id:      $("#wpn-id").val(),
        name:    $("#wpn-name").val(),
        damage:  $("#wpn-damage").val(),
        scaling: $("#wpn-scaling").val(),
        weight:  $("#wpn-weight").val()
    }, function(data) {
        $("#output").html(JSON.stringify(data));
        refreshAllTables();
        clearAllInputs();
    });
}

function deleteWeapon() {
    $.get(API, { action: "delete", table: "weapons", id: $("#wpn-id").val() }, function(data) {
        $("#output").html(JSON.stringify(data));
        refreshAllTables();
        clearAllInputs();
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

function clearAllInputs() {
    $("#char-id").val("");
    $("#char-name").val("");
    $("#char-level").val("");
    $("#char-class").val("");
    $("#char-faction-id").val("");
    $("#char-weapon-id").val("");
    $("#fac-id").val("");
    $("#fac-name").val("");
    $("#fac-alignment").val("");
    $("#fac-leader").val("");
    $("#fac-territory").val("");
    $("#wpn-id").val("");
    $("#wpn-name").val("");
    $("#wpn-damage").val("");
    $("#wpn-scaling").val("");
    $("#wpn-weight").val("");
}

$(document).ready(function() { refreshAllTables(); clearAllInputs(); });