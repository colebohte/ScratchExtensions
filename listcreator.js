(function (Scratch) {
    'use strict';

    class CustomListCreator {
        getInfo() {
            return {
                id: 'customListCreator',
                name: 'Custom List Creator',
                blocks: [
                    {
                        opcode: 'createList',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'create list named [LISTNAME]',
                        arguments: {
                            LISTNAME: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'myList'
                            }
                        }
                    }
                ]
            };
        }

        createList(args, util) {
            const listName = args.LISTNAME;
            const existingList = util.target.lookupVariableByNameAndType(listName, Scratch.VariableType.LIST);
            if (!existingList) {
                util.target.createVariable(listName, Scratch.VariableType.LIST);
            }
        }
    }

    Scratch.extensions.register(new CustomListCreator());
})(Scratch);
