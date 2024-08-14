(function (Scratch) {
    'use strict';

    class FileImporter {
        constructor() {
            this.fileContent = '';
        }

        getInfo() {
            return {
                id: 'fileImporter',
                name: 'File Importer',
                blocks: [
                    {
                        opcode: 'importFile',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'import file into [LIST]',
                        arguments: {
                            LIST: {
                                type: Scratch.ArgumentType.LIST,
                                defaultValue: 'myList'
                            }
                        }
                    },
                    {
                        opcode: 'getFileContent',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'file content',
                        arguments: {}
                    }
                ]
            };
        }

        importFile(args, util) {
            const input = document.createElement('input');
            input.type = 'file';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.fileContent = e.target.result;
                    const content = this.fileContent.split('\n');
                    const list = util.target.lookupVariableByNameAndType(args.LIST, Scratch.VariableType.LIST);
                    if (list) {
                        list.value = content;
                    }
                };
                reader.readAsText(file);
            };
            input.click();
        }

        getFileContent() {
            return this.fileContent;
        }
    }

    Scratch.extensions.register(new FileImporter());
})(Scratch);
