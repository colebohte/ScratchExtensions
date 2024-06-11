// This defines the extension object
const extension = {
  // This defines the internal namespace for the extension
  'isBetween': {
    // The block definition for the "isBetween" function
    'block': {
      'opcode': 'isBetween',
      'blockType': Scratch.OpcodeType.REPORTER,
      'arguments': [
        {
          'name': 'NUM',
          'type': Scratch.ArgumentType.NUMBER,
          'defaultValue': 0,
        },
        {
          'name': 'LOW',
          'type': Scratch.ArgumentType.NUMBER,
          'defaultValue': 0,
        },
        {
          'name': 'HIGH',
          'type': Scratch.ArgumentType.NUMBER,
          'defaultValue': 10,
        },
      ],
    },
    // The function that is called when the block is used
    'func': (args, callback) => {
      const num = args.NUM;
      const low = args.LOW;
      const high = args.HIGH;
      const isBetween = num >= low && num <= high;
      callback(isBetween);
    },
  },
};

// Register the extension with Scratch
ScratchExtensions.register(extension);
