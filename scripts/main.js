print("sus")
require("alib");
const lib = require("alib");

Events.on(UnitDestroyEvent, event => {
    if(event.unit.isPlayer()){
        Vars.ui.hudfrag.showToast("You died..... Big Kmock.");
    }
  })
