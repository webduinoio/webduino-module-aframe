// 
Blockly.JavaScript['aframe_new'] = function(block) {
    var code = 'getAFrame("demo-area-01-show")';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};


// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#jtbv8b
Blockly.JavaScript['entity_new'] = function(block) {
    var dropdown_entitytype = block.getFieldValue('entityType');
    var code = 'getEntity("' + dropdown_entitytype + '",{ color: "#EF2D5E" }, { x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1 })';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};


Blockly.JavaScript['aframe_add'] = function(block) {
    var variable_aframe = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('aframe'), Blockly.Variables.NAME_TYPE);
    var value_name = Blockly.JavaScript.valueToCode(block, 'entity', Blockly.JavaScript.ORDER_ATOMIC);
    // aframe.addEntity(entity)
    var code = variable_aframe + '.addEntity(' + value_name + ');\n';
    return code;
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#j9fabj
Blockly.JavaScript['entity_pos'] = function(block) {
    var variable_entity = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('entity'), Blockly.Variables.NAME_TYPE);
    var value_px = Blockly.JavaScript.valueToCode(block, 'px', Blockly.JavaScript.ORDER_ATOMIC);
    var value_py = Blockly.JavaScript.valueToCode(block, 'py', Blockly.JavaScript.ORDER_ATOMIC);
    var value_pz = Blockly.JavaScript.valueToCode(block, 'pz', Blockly.JavaScript.ORDER_ATOMIC);
    var code = variable_entity + '.pos(' + value_px + ',' + value_py + ',' + value_pz + ');\n';
    return code;
};