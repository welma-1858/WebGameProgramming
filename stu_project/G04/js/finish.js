class Finish extends Phaser.Scene {  //過關畫面

    constructor() {
        super('Finish');
    }

    init() {
        // Used to prepare data
    }

    preload() {
        this.load.spritesheet('finishGame', 'assets/missionCompleted.png', { frameWidth: 800, frameHeight: 450 });  //結束畫面   
        this.load.audio('audioClick', 'assets/audio/click.mp3'); //滑鼠點擊音效
        this.load.audio('audioCheer', 'assets/audio/cheer.mp3'); //過關音效
    }

    create() {
        audioClick = this.sound.add('audioClick'); //滑鼠點擊音效
        audioCheer = this.sound.add('audioCheer'); //過關音效

        audioCheer.play();

        this.anims.create({
            key: 'finish_change',
            frames: this.anims.generateFrameNumbers('finishGame', { start: 0, end: 1 }),
            frameRate: 3,
            repeat: -1
        });

        finishMessage = this.add.sprite(config.width / 2, config.height / 2, 'player');
        finishMessage.setDepth(30);
        finishMessage.visible = true;
        this.input.once('pointerdown', function () {
            audioClick.play();
            score=0;
            level= 1;
            PlayBGM.stop();
            audioCheer.stop();
            this.scene.start('Menu');
        }, this);
    }

    update() {
        finishMessage.anims.play('finish_change', true);
    }
}