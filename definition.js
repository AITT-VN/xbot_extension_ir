Blockly.Blocks["xbot_ir_recv"] = {
  init: function () {
    this.jsonInit({
      colour: "#5CA4FB",
      tooltip: "",
      message0: "%2 nút %1 trên remote được nhấn",
      args0: [
        {
          type: "field_dropdown",
          name: "remote",
          options: [
            ["A", "A"],
            ["B", "B"],
            ["C", "C"],
            ["D", "D"],
            ["E", "E"],
            ["F", "F"],
            [
              {
                "src": "static/blocks/block_images/59043.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "UP"
            ],
            [
              {
                "src": "static/blocks/block_images/959159.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "DOWN"
            ],
            [
              {
                "src": "static/blocks/block_images/860774.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "LEFT"
            ],
            [
              {
                "src": "static/blocks/block_images/74474.svg",
                "width": 15,
                "height": 15,
                "alt": "*"
              },
              "RIGHT"
            ],
            ["Setup", "SETUP"],
            ["0", "0"],
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
            ["7", "7"],
            ["8", "8"],
            ["9", "9"],
          ],
        },
        {
          "type": "field_image",
          "src": "https://i.ibb.co/dtYR9mJ/remote.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      output: "Boolean",
      helpUrl: "",
    });
  },
};

Blockly.Blocks["xbot_ir_code"] = {
  init: function () {
    this.jsonInit({
      colour: "#5CA4FB",
      tooltip: "",
      message0: "%1 đọc tín hiệu số thu được",
      args0: [
        {
          "type": "field_image",
          "src": "https://i.ibb.co/dtYR9mJ/remote.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      output: null,
      helpUrl: "",
    });
  },
};

Blockly.Blocks["xbot_ir_raw_code"] = {
  init: function () {
    this.jsonInit({
      colour: "#5CA4FB",
      tooltip: "",
      message0: "%1 đọc tín hiệu thu từ remote",
      args0: [
        {
          "type": "field_image",
          "src": "https://i.ibb.co/dtYR9mJ/remote.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      output: null,
      helpUrl: "",
    });
  },
};

Blockly.Blocks["xbot_ir_clear"] = {
  init: function () {
    this.jsonInit({
      colour: "#5CA4FB",
      tooltip: "",
      message0: "%1 xóa tín hiệu đã thu được",
      args0: [
        {
          "type": "field_image",
          "src": "https://i.ibb.co/dtYR9mJ/remote.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  },
};

Blockly.Blocks["xbot_ir_send"] = {
  init: function () {
    this.jsonInit({
      colour: "#5CA4FB",
      tooltip: "",
      message0: "%3 phát tín hiệu số %1 %2",
      args0: [
        {
          type: "input_value",
          name: "number",
          check: "Number"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_image",
          "src": "https://i.ibb.co/dtYR9mJ/remote.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  },
};

Blockly.Blocks["xbot_ir_send_address"] = {
  init: function () {
    this.jsonInit({
      colour: "#5CA4FB",
      tooltip: "",
      message0: "%4 phát tín hiệu remote địa chỉ %1 giá trị %2 %3",
      args0: [
        {
          type: "input_value",
          name: "address",
        },
        {
          type: "input_value",
          name: "number",
          check: "Number"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_image",
          "src": "https://i.ibb.co/dtYR9mJ/remote.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  },
};

// PYTHON
Blockly.Python["xbot_ir_recv"] = function (block) {
  var remote = block.getFieldValue("remote");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_ir_receiver'] = 'from ir_receiver import *';
  var code = 'ir_rx.get_code() == IR_REMOTE_' + remote;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["xbot_ir_code"] = function (block) {
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_ir_receiver'] = 'from ir_receiver import *';
  var code = 'ir_rx.get_code()' ;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["xbot_ir_raw_code"] = function (block) {
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_ir_receiver'] = 'from ir_receiver import *';
  var code = 'ir_rx.get_raw_code()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["xbot_ir_clear"] = function (block) {
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_ir_receiver'] = 'from ir_receiver import *';
  var code = 'ir_rx.clear_code()\n';
  return code;
};

Blockly.Python["xbot_ir_send"] = function (block) {
  var number = Blockly.Python.valueToCode(block, 'number', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_ir_sender'] = 'from ir_sender import *';
  var code = 'ir_tx.send(' + number + ')\n';
  return code;
};

Blockly.Python["xbot_ir_send_address"] = function (block) {
  var number = Blockly.Python.valueToCode(block, 'number', Blockly.Python.ORDER_ATOMIC);
  var address = Blockly.Python.valueToCode(block, 'address', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_ir_sender'] = 'from ir_sender import *';
  var code = 'ir_tx.send(' + number + ', ' + address + ')\n';
  return code;
};
