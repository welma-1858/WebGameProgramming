class Pause extends Phaser.Scene {  //暫停畫面

    constructor() {
        super('Pause');
    }

    init() {
        // Used to prepare data
    }

    preload() {
        this.load.image("pauseGame", 'assets/pause.png');//遊戲暫停畫面
        this.load.audio('audioClick', 'assets/audio/click.mp3'); //滑鼠點擊音效
    }

    create() {
        audioClick = this.sound.add('audioClick'); //滑鼠點擊音效
        pauseMessage = this.add.image(400, 225, "pauseGame");
        pauseMessage.setDepth(30);
        pauseMessage.visible = true;
        this.input.keyboard.on('keydown-SPACE', function () {
            audioClick.play();
            this.scene.resume('Play');
            this.scene.stop();
        }, this);

    }

    update() {
        // Used to update your game. This function runs constantly
    }
}