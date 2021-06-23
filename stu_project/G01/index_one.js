class index_one extends Phaser.Scene {
    constructor() {
        super('indexOne')
    }
    preload(){
        this.load.image('bg', 'img/bg2.png');
        this.load.image('goto', 'img/Goto.png');                
        this.load.image('title', 'img/title.png');        
        this.load.image('startBtn', 'img/btn.png');
        this.load.image('presBtn', 'img/purple.png');
        this.load.image('startTitle', 'img/start.png');
//---------------        
        this.load.image('regular', 'img/regular.png');
        this.load.image('regular2', 'img/regular2-1.png');
        this.load.image('regular3', 'img/press.png');
        this.load.audio('background','music/開場音樂.mp3');
        this.load.audio('buttonmusic','music/Btn.mp3');
        this.load.audio('pressbutton','music/pressBtn.wav');
    }
    
    create(){
        sound = this.sound.add('background', {volume: 0.3});
        button1=this.sound.add('buttonmusic', {volume: 0.3}); //滑過去
        button2=this.sound.add('pressbutton', {volume: 1.5});
        sound.play();
//---------------
        this.add.sprite(750, 400, 'bg');
        goto = this.add.sprite(750, 210, 'goto').setScale(1.5);
        title = this.add.sprite(750, 350, 'title').setScale(1.5);
        startTitle = this.add.sprite(750, 490, 'startTitle').setScale(0.6);
        startBtn = this.add.sprite(750, 650, 'startBtn').setScale(0.9);
        Re3 = this.add.sprite(750, 400, 'regular').setScale(0.7);
        Re2 = this.add.sprite(769, 389, 'regular2').setScale(0.47);
        Re = this.add.sprite(750, 400, 'regular3').setScale(0.7);
//---------------
        Re.alpha = 0;
        Re2.alpha = 0;
        Re3.alpha = 0;
 //---------------
       startBtn.setInteractive()
        .on('pointerover', () => { 
            button1.play();
        }).on('pointerdown', () => { 
            button2.play();
            title.alpha = 0;
            goto.alpha = 0;
            startTitle.alpha = 0;
            startBtn.alpha = 0;
            Re.alpha = 1;
        }).on('pointerover', () => {
            
        });
//---------------
        Re.setInteractive()
        .on('pointerover', () => { 
            button1.play();
        })
        .on('pointerdown', () => { 
            button2.play();
            Re.alpha = 0;
            Re2.alpha = 1;
        });   
        Re2.setInteractive()
        .on('pointerover', () => { 
            button1.play();
        })
        .on('pointerdown', () => { 
            Re.alpha = 0;
            Re2.alpha = 0;
            Re3.alpha=1;
            button2.play();
        });
        Re3.setInteractive()
        .on('pointerover', () => { 
            button1.play();
        })
        .on('pointerdown', () => { 
            this.scene.start('one',false);
            button2.play();
            sound.stop();
        });
    }
    update(){
        
    }
}

