class over extends Phaser.Scene {
    constructor() {
        super('gameover')
    }
    preload(){
        this.load.image('gameover', 'img/blue.png');
        this.load.image("bg1", "img/over1.png");//畢業
        this.load.image("bg2", "img/over2.png"); 

        this.load.audio('buttonmusic','music/Btn.mp3');
        this.load.audio('pressbutton','music/pressBtn.wav');
        this.load.audio('background','music/開場音樂.mp3');
        this.load.audio('success','music/win.mp3');
        this.load.audio('ussuccess','music/fail.mp3');
    }
    
    create(){
        button1=this.sound.add('buttonmusic', {volume: 0.3});//滑過去
        button2=this.sound.add('pressbutton', {volume: 0.5});
        success=this.sound.add('success', {volume: 1});
        unsuccess=this.sound.add('ussuccess', {volume: 0.5});
//--------------
        if (score < 128) 
        {
            unsuccess.play();
            bg2=this.add.sprite(750, 400, 'bg2');
        }
        else if ( score >= 128) 
        {
            success.play();
            bg1=this.add.sprite(750, 400, 'bg1');
        }
//--------------
        restartText= this.add.text(1360, 530, '重新開始', {
            fontSize: '20px',
            fill: 'red',
            fontFamily: '微軟正黑體'
        });
        restarBtn = this.add.sprite(1400, 600, 'gameover').setScale(0.4).setInteractive()
        .on('pointerover', () => { 
            button1.play();
        })
        .on('pointerdown', () => { 
            sound.stop();
            button2.play();
            this.scene.start('indexOne',false);
            score=0;
            onescore=0;
            twoscore=0;
        });
    }
}

