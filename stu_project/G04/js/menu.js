//標題畫面
class Menu extends Phaser.Scene {
    constructor() {
        super('Menu');
    }

    init() {
        // Used to prepare data
    }

    preload() {
        this.load.image('background3', 'assets/bg3.png'); //背景
        this.load.image('background2', 'assets/bg2.png'); //背景
        this.load.image('background1', 'assets/bg1.png'); //背景
        this.load.image("startGame", 'assets/start.png');//遊戲開始畫面
        this.load.audio('audioClick', 'assets/audio/click.mp3'); //滑鼠點擊音效
        this.load.audio('audioMenu', 'assets/audio/menu.m4a'); //menu BGM
    }

    create() {
        this.add.image(0, 0, 'background3').setOrigin(0, 0);
        this.add.image(0, 0, 'background2').setOrigin(0, 0);
        this.add.image(0, 0, 'background1').setOrigin(0, 0);
        audioClick = this.sound.add('audioClick'); //滑鼠點擊音效
        audioMenu = this.sound.add('audioMenu'); //menu BGM

        MenuBGM = this.sound.add('audioMenu', {
            volume: .5,
            loop: true
        });
        MenuBGM.play();

        menuMessage = this.add.image(config.width / 2, config.height / 2, "startGame");
        menuMessage.setDepth(30);
        menuMessage.visible = true;
        this.input.once('pointerdown', function () {
            audioClick.play();
            MenuBGMstop();
            this.scene.start('Play');
        }, this);
    }

    update() {
        // Used to update your game. This function runs constantly
    }
}

function MenuBGMstop (){
    MenuBGM.stop();
}