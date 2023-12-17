const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const formatMessage = require('format-message');

/**
 * Icon svg to be displayed at the left edge of each extension block, encoded as a data URI.
 * @type {string}
 */
// eslint-disable-next-line max-len
const blockIconURI = '/static/dialog.svg';

const menuIconURI = blockIconURI;

class Scratch3HelloBlocks {
    constructor (runtime) {
        /**
         * The runtime instantiating this block package.
         * @type {Runtime}
         */
        this.runtime = runtime;
    }


    /**
     * The key to load & store a target's pen-related state.
     * @type {string}
     */
    static get STATE_KEY () {
        return 'Scratch.dialogs';
    }

    /**
     * @returns {object} metadata for this extension and its blocks.
     */
    getInfo () {
        return {
            id: 'dialogs',
            name: formatMessage({
                id: 'dialogs.categoryName',
                default: 'Scratch神奇纪元——对话框',
                description: 'Label for the dialogs extension category'
            }),
            menuIconURI: menuIconURI,
            blockIconURI: blockIconURI,
            // showStatusButton: true,
            blocks: [
                {
                    opcode: 'open',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'dialogs.open',
                        default: '弹出警示对话框 [TEXT]',
                        description: 'open something'
                    }),
                    arguments: {
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: formatMessage({
                                id: 'dialogs.defaultTextToOpen',
                                default: '你好',
                                description: 'default text to open.'
                            })
                        }
                    }
                }
            ],
            menus: {}
        };
    }

    open (args, util) {
        const message = args.TEXT;
        alert(message);
    }
}

module.exports = Scratch3HelloBlocks;