(function (Scratch) {
    'use strict';

    class DayOfYearExtension {
        getInfo() {
            return {
                id: 'dayOfYearExtension',
                name: 'Day of Year Extension',
                blocks: [
                    {
                        opcode: 'getDayOfYear',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'day of the year'
                    }
                ]
            };
        }

        getDayOfYear() {
            const now = new Date();
            const start = new Date(now.getFullYear(), 0, 0);
            const diff = now - start;
            const oneDay = 1000 * 60 * 60 * 24;
            const day = Math.floor(diff / oneDay);
            return day;
        }
    }

    Scratch.extensions.register(new DayOfYearExtension());
})(Scratch);
