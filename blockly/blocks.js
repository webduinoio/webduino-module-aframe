// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#xke6ye
Blockly.Blocks['aframe_new'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.WEBDUINO_AFRAME, "載入 aframe");
        this.setOutput(true);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('https://webduino.io');
    }
};

Blockly.Blocks['aframe_add'] = {
    init: function() {
        this.appendValueInput("entity")
            .setCheck(null)
            .appendField("設定")
            .appendField(new Blockly.FieldVariable("aframe"), "aframe")
            .appendField("增加 3D 物件");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['entity_new'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.WEBDUINO_ENTITY, "建立3D物件")
            .appendField(new Blockly.FieldDropdown([
                ["box", "a-box"],
                ["sphere", "a-sphere"],
                ["cylinder", "a-cylinder"],
                ["plane", "a-plane"]
            ]), "entityType");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Blocks['entity_pos'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("設定")
            .appendField(new Blockly.FieldVariable("entity"), "entity");
        this.appendValueInput("px")
            .setCheck(null)
            .appendField("座標： x");
        this.appendValueInput("py")
            .setCheck(null)
            .appendField("y");
        this.appendValueInput("pz")
            .setCheck(null)
            .appendField("z");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(300);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};