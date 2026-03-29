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
        afterMutate("insert", null);
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
        afterMutate("update", $("#char-id").val());
        clearAllInputs();
    });
}

function deleteCharacter() {
    animateDelete("charactersTable", $("#char-id").val(), function(id) {
        $.get(API, { action: "delete", table: "characters", id: id }, function(data) {
            $("#output").html(JSON.stringify(data));
        });
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
        afterMutate("insert", null);
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
        afterMutate("update", $("#fac-id").val());
        clearAllInputs();
    });
}

function deleteFaction() {
    animateDelete("factionsTable", $("#fac-id").val(), function(id) {
        $.get(API, { action: "delete", table: "factions", id: id }, function(data) {
            $("#output").html(JSON.stringify(data));
        });
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
        afterMutate("insert", null);
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
        afterMutate("update", $("#wpn-id").val());
        clearAllInputs();
    });
}

function deleteWeapon() {
    animateDelete("weaponsTable", $("#wpn-id").val(), function(id) {
        $.get(API, { action: "delete", table: "weapons", id: id }, function(data) {
            $("#output").html(JSON.stringify(data));
        });
    });
}

// ── LIVE TABLE HELPERS ────────────────────────────────
function loadTable(tableName, tableId, action, id) {
    $.get(API, { action: "read", table: tableName }, function(data) {
        let rows = "";
        data.forEach(function(row) {
            rows += "<tr>";
            for (let key in row) { rows += `<td>${row[key]}</td>`; }
            rows += "</tr>";
        });
        $(`#${tableId} tbody`).html(rows);

        if (action === "insert") {
            $(`#${tableId} tbody tr:last`).addClass("anim-insert");
        } else if (action === "update" && id) {
            $(`#${tableId} tbody tr`).filter(function() {
                return $(this).find("td:first").text() == id;
            }).addClass("anim-update");
        }
    });
}

function refreshAllTables(action, id) {
    loadTable("characters", "charactersTable", action, id);
    loadTable("factions",   "factionsTable",   action, id);
    loadTable("weapons",    "weaponsTable",     action, id);
}

function clearAllInputs() {
    $("#char-id, #char-name, #char-level, #char-class, #char-faction-id, #char-weapon-id").val("");
    $("#fac-id, #fac-name, #fac-alignment, #fac-leader, #fac-territory").val("");
    $("#wpn-id, #wpn-name, #wpn-damage, #wpn-scaling, #wpn-weight").val("");
}

$(document).ready(function() { refreshAllTables(); clearAllInputs(); });

// ── SOUNDS ────────────────────────────────────────────
const sounds = {
    insert: new Audio("sounds/insert.mp3"),
    update: new Audio("sounds/update.mp3"),
    delete: new Audio("sounds/delete.mp3")
};
function playSound(type) {
    const s = sounds[type];
    s.currentTime = 0;
    s.volume = 0.5;
    s.play();
}

// ── ANIMATION HELPERS ─────────────────────────────────
function scrollToViewer(callback) {
    $("html, body").animate({ scrollTop: $("#liveTableViewer").offset().top }, 600, callback);
}

function afterMutate(action, id) {
    scrollToViewer(function() {
        setTimeout(function() {
            playSound(action);
            refreshAllTables(action, id);
        }, 1000);
    });
}

function animateDelete(tableId, id, apiFn) {
    scrollToViewer(function() {
        setTimeout(function() {
            $(`#${tableId} tbody tr`).filter(function() {
                return $(this).find("td:first").text() == id;
            }).addClass("anim-delete");
            setTimeout(function() {
                apiFn(id);
                playSound("delete");
                refreshAllTables();
                clearAllInputs();
            }, 500);
        }, 1000);
    });
}