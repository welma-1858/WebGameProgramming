class Restart extends Phaser.Scene {  //遊戲失敗重新挑戰畫面

    constructor() {
        super('Restart');
    }

    init() {
        // Used to prepare data
    }

    preload() {
        this.load.image("gameOver", 'assets/gameover.png'); //遊戲結束畫面
        this.load.audio('audioClick', 'assets/audio/click.mp3'); //滑鼠點擊音效
    }

    create() {
        audioClick = this.sound.add('audioClick'); //滑鼠點擊音效
        //重新開始的圖片
        restartmessage = this.add.image(config.width / 2, config.height / 2, "gameOver");
        restartmessage.setVisible(true);
        restartmessage.setInteractive().on('pointerdown', (pointer, localX, localY, event) => {
            switch (level) {
                case 1:
                    score = 0;
                    break;
                case 2:
                    score = 20;
                    break;
                case 3:
                    score = 50;
            }

            gameOver = false;
            playergod_bool=false;
            audioClick.play();
            this.scene.start('Play');
            this.scene.stop();
        });
    }

    update() {

    }
}