class ToastExtension {
  constructor() {
    // Store notification config
    this.title = 'Hello!';
    this.body = 'This is a toast notification.';
    this.image = '';
  }

  getInfo() {
    return {
      id: 'toastNotification',
      name: 'Toast Notification',
      color1: '#FF8800',
      color2: '#CC6600',
      blocks: [
        {
          opcode: 'requestPermission',
          blockType: Scratch.BlockType.COMMAND,
          text: 'request notification permission'
        },
        {
          opcode: 'setTitle',
          blockType: Scratch.BlockType.COMMAND,
          text: 'set notification title to [TITLE]',
          arguments: {
            TITLE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Hello!'
            }
          }
        },
        {
          opcode: 'setBody',
          blockType: Scratch.BlockType.COMMAND,
          text: 'set notification body to [BODY]',
          arguments: {
            BODY: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'This is a toast notification.'
            }
          }
        },
        {
          opcode: 'setImage',
          blockType: Scratch.BlockType.COMMAND,
          text: 'set notification image to [IMAGE]',
          arguments: {
            IMAGE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://example.com/icon.png'
            }
          }
        },
        {
          opcode: 'sendNotification',
          blockType: Scratch.BlockType.COMMAND,
          text: 'send notification'
        }
      ]
    };
  }

  requestPermission() {
    if (Notification && Notification.requestPermission) {
      Notification.requestPermission().then(result => {
        console.log('Notification permission:', result);
      });
    } else {
      console.warn('Notifications not supported in this browser.');
    }
  }

  setTitle({ TITLE }) {
    this.title = TITLE;
  }

  setBody({ BODY }) {
    this.body = BODY;
  }

  setImage({ IMAGE }) {
    this.image = IMAGE;
  }

  sendNotification() {
    if (Notification.permission === 'granted') {
      new Notification(this.title, {
        body: this.body,
        icon: this.image
      });
    } else {
      console.warn('Notification permission not granted. Run "request notification permission" first.');
    }
  }
}

Scratch.extensions.register(new ToastExtension());
