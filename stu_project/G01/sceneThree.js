class sceneThree extends Phaser.Scene {
    constructor() {
        super('three')
    }

    preload() {
        this.load.atlas('megaset', 'img/megaset-0.png', 'assets/megaset-0.json');
//------------
        this.load.image("rock", "img/rock.png");
        this.load.image("able", "img/ablelong.png");
        this.load.image("lessrock", "img/lessrock.png");
        this.load.image("lessable", "img/lessable.png");
        this.load.image("strrock", "img/strrock.png");
        this.load.image("strable", "img/strable.png");
        this.load.image("rocklong", "img/strrocklong.png");
        this.load.image("ablelong", "img/strablelong.png");
//------------
        this.load.image('score1', 'img/ball1.png');
        this.load.image('score2', 'img/ball2.png');
        this.load.image('score3', 'img/ball3.png');
        this.load.image('score4', 'img/ball-1.png');
        this.load.image('score5', 'img/time.png')
        this.load.image('score6', 'img/time-5.png');
        this.load.image('score7', 'img/water.png');
        this.load.image('score8', 'img/water-2.png');
        this.load.image('score9','img/defense.png')
        this.load.image('obstacle', "img/gear.png");
        this.load.image('fortball', "img/badball.png");
        this.load.image('fort', "img/fire.png");
        this.load.image("attack", "img/attack.png");
        this.load.image('flame', 'img/flame.png');
        this.load.spritesheet('snake', 'img/player.png', {
            frameWidth: 48,
            frameHeight: 61
        });
//------------
        this.load.audio('background-3', 'music/1.mp3');
        this.load.audio('fortmusic', 'music/砲台聲(短).mp3');
        this.load.audio('wallsmusic', 'music/撞破磚頭.mp3');
        this.load.audio('scoremusic', 'music/吃到球game-bonus_preview.mp3');
        this.load.audio('Attack', 'music/pyo1.mp3');
        this.load.audio('star', 'music/無敵.mp3');
        this.load.audio('badscoremusic', 'music/badball.wav');
    }

    create() {
        attack = this.physics.add.group();
        player = this.physics.add.sprite(720, 400, 'player');
//------------
        bad =this.sound.add('badscoremusic', { volume: 0.3 });
        sound = this.sound.add('background-3', { volume: 0.5 });
        Attackwalls = this.sound.add('wallsmusic', { volume: 1 });
        eatscore = this.sound.add('scoremusic', { volume: 0.3 });
        Attackmusic = this.sound.add('Attack', { volume: 0.1 });
        Fortmusic = this.sound.add('fortmusic', { volume: 0.3 });
        star = this.sound.add('star', { volume: 1 });
        sound.play();
//------------齒輪
        obstacle = this.physics.add.image(230, 640, 'obstacle').setScale(0.1); //左邊
        this.physics.add.overlap(player, obstacle, collectobstacle, null, this);
        this.tweens.add({
            targets: obstacle,
            x: 50,
            rotation: Math.PI * 2,
            ease: 'Sine.easeInOut',
            duration: 1000,
            yoyo: true,
            repeat: -1
        });
        obstacle1 = this.physics.add.image(50, 560, 'obstacle').setScale(0.1);
        this.physics.add.overlap(player, obstacle1, collectobstacle, null, this);
        this.tweens.add({
            targets: obstacle1,
            x: 230,
            rotation: Math.PI * 2,
            ease: 'Sine.easeInOut',
            duration: 2000,
            yoyo: true,
            repeat: -1
        });
        obstacle2 = this.physics.add.image(40, 50, 'obstacle').setScale(0.1); //左邊
        this.physics.add.overlap(player, obstacle2, collectobstacle, null, this);
        this.tweens.add({
            targets: obstacle2,
            y: 750,
            rotation: Math.PI * 2,
            ease: 'Sine.easeInOut',
            duration: 3000,
            yoyo: true,
            repeat: -1
        });
        obstacle3 = this.physics.add.image(1470, 800, 'obstacle').setScale(0.1); //右邊
        this.physics.add.overlap(player, obstacle3, collectobstacle, null, this);
        this.tweens.add({
            targets: obstacle3,
            y: 50,
            rotation: Math.PI * 2,
            ease: 'Sine.easeInOut',
            duration: 3000,
            yoyo: true,
            repeat: -1
        });
        obstacle4 = this.physics.add.image(50, 745, 'obstacle').setScale(0.1);
        this.physics.add.overlap(player, obstacle4, collectobstacle, null, this);
        this.tweens.add({
            targets: obstacle4,
            x: 1460,
            rotation: Math.PI * 2,
            ease: 'Sine.easeInOut',
            duration: 3000,
            yoyo: true,
            repeat: -1
        });
        obstacle5 = this.physics.add.image(1450, 50, 'obstacle').setScale(0.1);
        this.physics.add.overlap(player, obstacle5, collectobstacle, null, this);
        this.tweens.add({
            targets: obstacle5,
            x: 50,
            rotation: Math.PI * 2,
            ease: 'Sine.easeInOut',
            duration: 3000,
            yoyo: true,
            repeat: -1
        });
        obstacle6 = this.physics.add.image(960, 50, 'obstacle').setScale(0.2);
        this.physics.add.overlap(player, obstacle6, collectobstacle, null, this);
        this.tweens.add({
            targets: obstacle6,
            y: 180,
            rotation: Math.PI * 2,
            ease: 'Sine.easeInOut',
            duration: 2000,
            yoyo: true,
            repeat: -1
        });
        obstacle7 = this.physics.add.image(1040, 190, 'obstacle').setScale(0.1);
        this.physics.add.overlap(player, obstacle7, collectobstacle, null, this);
        this.tweens.add({
            targets: obstacle7,
            y: 50,
            rotation: Math.PI * 2,
            ease: 'Sine.easeInOut',
            duration: 2000,
            yoyo: true,
            repeat: -1
        });
        obstacle8 = this.physics.add.image(360, 750, 'obstacle').setScale(0.1);
        this.physics.add.overlap(player, obstacle8, collectobstacle, null, this);
        this.tweens.add({
            targets: obstacle8,
            y: 600,
            rotation: Math.PI * 2,
            ease: 'Sine.easeInOut',
            duration: 2000,
            yoyo: true,
            repeat: -1
        });
        obstacle9 = this.physics.add.image(440, 600, 'obstacle').setScale(0.1);
        this.physics.add.overlap(player, obstacle9, collectobstacle, null, this);
        this.tweens.add({
            targets: obstacle9,
            y: 750,
            rotation: Math.PI * 2,
            ease: 'Sine.easeInOut',
            duration: 2000,
            yoyo: true,
            repeat: -1
        });
        obstacle10 = this.physics.add.image(1300, 750, 'obstacle').setScale(0.2);
        this.physics.add.overlap(player, obstacle10, collectobstacle, null, this);
        this.tweens.add({
            targets: obstacle10,
            y: 640,
            rotation: Math.PI * 2,
            ease: 'Sine.easeInOut',
            duration: 2000,
            yoyo: true,
            repeat: -1
        });
        obstacle11 = this.physics.add.image(1220, 620, 'obstacle').setScale(0.1);
        this.physics.add.overlap(player, obstacle11, collectobstacle, null, this);
        this.tweens.add({
            targets: obstacle11,
            y: 730,
            rotation: Math.PI * 2,
            ease: 'Sine.easeInOut',
            duration: 2000,
            yoyo: true,
            repeat: -1
        });
//------------牆壁
        walls = this.physics.add.group().createMultiple([{
            key: 'ablelong',
            repeat: 0,
            setXY: {
                x: 850,
                y: 400
            }
        }, {
            key: 'ablelong',
            repeat: 0,
            setXY: {
                x: 570,
                y: 395
            }
        },
        {
            key: 'able',
            repeat: 0,
            setXY: {
                x: 710,
                y: 225
            }
        }, {
            key: 'able',
            repeat: 0,
            setXY: {
                x: 710,
                y: 575
            }
        },
        //-------------圍角色
        {
            key: 'lessable',
            repeat: 0,
            setXY: {
                x: 135,
                y: 240
            }
        },
        {
            key: 'strable',
            repeat: 0,
            setXY: {
                x: 275,
                y: 162
            }
        },
         {
            key: 'ablelong',
            repeat: 0,
            setXY: {
                x: 1227,
                y: 344
            }
        },
        {
            key: 'lessable',
            repeat: 0,
            setXY: {
                x: 1370,
                y: 486
            }
        }, {
            key: 'lessable',
            repeat: 0,
            setXY: {
                x: 1370,
                y: 202
            }
        },
    ]);
        disable = this.physics.add.group().createMultiple([{
                key: 'able',
                repeat: 0,
                setXY: {
                    x: 105,
                    y: 0
                }
            }, {
                key: 'able',
                repeat: 0,
                setXY: {
                    x: 460,
                    y: 0
                }
            }, {
                key: 'able',
                repeat: 0,
                setXY: {
                    x: 700,
                    y: 0
                }
            }, {
                key: 'able',
                repeat: 0,
                setXY: {
                    x: 980,
                    y: 0
                }
            }, {
                key: 'able',
                repeat: 0,
                setXY: {
                    x: 1200,
                    y: 0
                }
            }, {
                key: 'able',
                repeat: 0,
                setXY: {
                    x: 1290,
                    y: 0
                }
            }, {
                key: 'able',
                repeat: 0,
                setXY: {
                    x: 105,
                    y: 800
                }
            }, {
                key: 'able',
                repeat: 0,
                setXY: {
                    x: 460,
                    y: 800
                }
            }, {
                key: 'able',
                repeat: 0,
                setXY: {
                    x: 700,
                    y: 800
                }
            }, {
                key: 'able',
                repeat: 0,
                setXY: {
                    x: 980,
                    y: 800
                }
            }, {
                key: 'able',
                repeat: 0,
                setXY: {
                    x: 1200,
                    y: 800
                }
            }, {
                key: 'able',
                repeat: 0,
                setXY: {
                    x: 1290,
                    y: 800
                }
            },
            {
                key: 'ablelong',
                repeat: 0,
                setXY: {
                    x: 0,
                    y: 180
                }
            }, {
                key: 'ablelong',
                repeat: 0,
                setXY: {
                    x: 0,
                    y: 818
                }
            }, {
                key: 'ablelong',
                repeat: 0,
                setXY: {
                    x: 0,
                    y: 530
                }
            },
            {
                key: 'strrock',
                repeat: 0,
                setXY: {
                    x: 1000,
                    y: 100
                }
            }, {
                key: 'strrock',
                repeat: 0,
                setXY: {
                    x: 1260,
                    y: 710
                }
            }, {
                key: 'lessrock',
                repeat: 0,
                setXY: {
                    x: 145,
                    y: 600
                }
            }, {
                key: 'strrock',
                repeat: 0,
                setXY: {
                    x: 400,
                    y: 690
                }
            },
            //----------外圍
            {
                key: 'row',
                repeat: 0,
                setXY: {
                    x: 750,
                    y: 12
                }
            }, {
                key: 'row',
                repeat: 0,
                setXY: {
                    x: 750,
                    y: 782
                }
            }, {
                key: 'col',
                repeat: 0,
                setXY: {
                    x: 2,
                    y: 400
                }
            }, {
                key: 'col',
                repeat: 0,
                setXY: {
                    x: 1506,
                    y: 400
                }
            }
        ]);
//------------動畫
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('player', {
                start: 8,
                end: 11
            }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('player', {
                start: 0,
                end: 3
            }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('player', {
                start: 12,
                end: 15
            }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'turnRight',
            frames: [{ key: 'player', frame: 15 }],
            frameRate: 1
        });
        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('player', {
                start: 4,
                end: 7
            }),
            frameRate: 10,
            repeat: -1
        });
//------------鍵盤控制
        cursors = this.input.keyboard.createCursorKeys();
        this.physics.add.overlap(player, walls, collWall, null, this);
        this.physics.add.overlap(player, disable, collWall, null, this);
        this.physics.add.overlap(attack, walls, attackWall, null, this);
        this.physics.add.overlap(attack, disable, atkStaticWall, null, this);
        function collWall() {
            player.setTint(0xff0000);
            player.anims.play('down', false);
            gameOver = true;
            this.physics.pause();
            timedEvent.paused = !timedEvent.paused
        }
        function attackWall(wall, ball) {
            Attackwalls.play();
            ball.destroy();
            wall.destroy();
        }
        function atkStaticWall(wall, ball) {
            ball.destroy();
        }
//------------砲台
        fortball = this.physics.add.group();
        fort = this.physics.add.sprite(60, 740, 'fort').setScale(0.3);
        flame=this.add.sprite(config.width/2,config.height/2,'flame').setVisible(false);
        flameTween=this.tweens.add({
            targets:flame,
            paused:true,
            ease:'Linear',
            alpha:{
                from:1,
                to:0
            },
            duration:200,
            repeat:0
        });
        fort1 = this.physics.add.sprite(1440, 740, 'fort').setScale(-0.3, 0.3);
        flame1=this.add.sprite(config.width/2,config.height/2,'flame').setVisible(false);
        flameTween1=this.tweens.add({
            targets:flame1,
            paused:true,
            ease:'Linear',
            alpha:{
                from:1,
                to:0
            },
            duration:200,
            repeat:0
        });
        fort2 = this.physics.add.sprite(60, 60, 'fort').setScale(0.3, -0.3);
        flame2=this.add.sprite(config.width/2,config.height/2,'flame').setVisible(false);
        flameTween2=this.tweens.add({
            targets:flame2,
            paused:true,
            ease:'Linear',
            alpha:{
                from:1,
                to:0
            },
            duration:200,
            repeat:0
        });
        fort3 = this.physics.add.sprite(1440, 60, 'fort').setScale(-0.3, -0.3);
        flame3=this.add.sprite(config.width/2,config.height/2,'flame').setVisible(false);
        flameTween3=this.tweens.add({
            targets:flame3,
            paused:true,
            ease:'Linear',
            alpha:{
                from:1,
                to:0
            },
            duration:200,
            repeat:0
        });
        this.physics.add.overlap(player, fortball, collectball, null, this);
//-----------學分及道具
        scoreball1 = this.physics.add.group();
        scoreball2 = this.physics.add.group();
        scoreball3 = this.physics.add.group();
        scoreball4 = this.physics.add.group();
        scoreball5 = this.physics.add.group();
        scoreball6 = this.physics.add.group();
        scoreball7 = this.physics.add.group();
        scoreball8 = this.physics.add.group();
        scoreball9 = this.physics.add.group();
        scoreball = this.physics.add.group();
        scoreball[1] = 'score1';
        scoreball[2] = 'score2';
        scoreball[3] = 'score3';
        scoreball[4] = 'score4';
        scoreball[5] = 'score5';
        scoreball[6] = 'score6';
        scoreball[7] = 'score7';
        scoreball[8] = 'score8';
        scoreball[9] = 'score9';
        scoreball1.create(200, 300, scoreball[1]).setScale(0.8, 0.8);
        scoreball2.create(750, 150, scoreball[2]).setScale(0.8, 0.8);
        scoreball3.create(730, 680, scoreball[3]).setScale(0.8, 0.8);
        scoreball3.create(1300, 500, scoreball[3]).setScale(0.8, 0.8);
        scoreball2.create(1100, 500, scoreball[2]).setScale(0.8, 0.8);
        scoreball1.create(1000, 500, scoreball[1]).setScale(0.8, 0.8);
        scoreball3.create(400, 500, scoreball[3]).setScale(0.8, 0.8);
        this.physics.add.overlap(player, scoreball1, collectscoreball1, null, this);
        this.physics.add.overlap(player, scoreball2, collectscoreball2, null, this);
        this.physics.add.overlap(player, scoreball3, collectscoreball3, null, this);
        this.physics.add.overlap(player, scoreball4, collectscoreball4, null, this);
        this.physics.add.overlap(player, scoreball5, collectscoreball5, null, this);
        this.physics.add.overlap(player, scoreball6, collectscoreball6, null, this);
        this.physics.add.overlap(player, scoreball7, collectscoreball7, null, this);
        this.physics.add.overlap(player, scoreball8, collectscoreball8, null, this);
        this.physics.add.overlap(player, scoreball9, collectscoreball9, null, this);
        this.physics.add.overlap(scoreball1, walls, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball1, disable, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball2, walls, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball2, disable, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball3, walls, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball3, disable, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball4, walls, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball4, disable, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball5, walls, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball5, disable, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball6, walls, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball6, disable, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball7, walls, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball7, disable, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball8, walls, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball8, disable, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball9, walls, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball9, disable, scoreballwall1, null, this);

        this.physics.add.overlap(scoreball1, fort, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball1, fort1, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball1, fort2, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball1, fort3, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball2, fort, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball2, fort1, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball2, fort2, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball2, fort3, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball3, fort, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball3, fort1, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball3, fort2, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball3, fort3, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball4, fort, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball4, fort1, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball4, fort2, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball4, fort3, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball5, fort, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball5, fort1, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball5, fort2, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball5, fort3, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball6, fort, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball6, fort1, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball6, fort2, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball6, fort3, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball7, fort, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball7, fort1, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball7, fort2, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball7, fort3, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball8, fort, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball8, fort1, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball8, fort2, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball8, fort3, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball9, fort, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball9, fort1, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball9, fort2, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball9, fort3, scoreballwall1, null, this);
        particles = this.physics.add.group();

        function collectscoreball1(player, scoreball) {
            eatscore.play();
            score += 1;
            scoreText.setText('學分：' + score);
            scoreball.destroy();
            restartball = true;
        }

        function collectscoreball2(player, scoreball) {
            eatscore.play();
            score += 2;
            scoreText.setText('學分：' + score);
            scoreball.destroy();
            restartball = true;
        }

        function collectscoreball3(player, scoreball) {
            eatscore.play();
            score += 3;
            scoreText.setText('學分：' + score);
            scoreball.destroy();
            restartball = true;
        }

        function collectscoreball4(player, scoreball) {
            bad.play();
            score -= 2;
            scoreText.setText('學分：' + score);
            scoreball.destroy();
            restartball = true;
        }

        function collectscoreball5(player, scoreball) {
            eatscore.play();
            this.initialTime += 5;
            timeText.setText('時間：' + formatTime(this.initialTime));
            scoreball.destroy();
            restartball = true;
        }
        function collectscoreball6(player, scoreball) {
            eatscore.play();
            this.initialTime -= 5;
            timeText.setText('時間：' + formatTime(this.initialTime));
            scoreball.destroy();
            restartball = true;
        }

        function collectscoreball7(player, scoreball) {
            if(movedown==true || moveup==true)
            {
                particles.destroy();
                movedown=false;
            }
            particles = this.add.particles('megaset');
            particles.createEmitter({
                    frame: 'yellow_ball',
                    speed: 100,
                    gravity: { x: 0, y: 200 },
                    scale: { start: 0.1, end: 1 },
                    follow: player
                });
            eatscore.play();
            movetime = this.initialTime;
            moveup = true;
            scoreball.destroy();
            restartball = true;
        }
        function collectscoreball8(player, scoreball) {
            if(moveup==true || movedown==true)
            {
                particles.destroy();
                moveup=false;
            }
            particles = this.add.particles('megaset');
            particles.createEmitter({
                    frame: 'blue_ball',
                    speed: 100,
                    gravity: { x: 0, y: 200 },
                    scale: { start: 0.1, end: 1 },
                    follow: player
                });
            eatscore.play();
            movetime = this.initialTime;
            movedown = true;
            scoreball.destroy();
            restartball = true;
        }
        function collectscoreball9(player, scoreball) {
            sound.stop();
            star.play();
            Invincibletime = this.initialTime;
            Invincible=true;
            scoreball.destroy();
            restartball = true;
        }
        function scoreballwall1(player, scoreball) {
            scoreball.destroy();
            restartball = true;
        }
//------------時間
        this.initialTime = 40;
        timedEvent = this.time.addEvent({
            delay: 1000,
            callback: onEvent,
            callbackScope: this,
            loop: true
        });
        timeText = this.add.text(1280, 0, '時間：' + formatTime(this.initialTime), {
            fontSize: '40px',
            fontFamily: 'Times New Roman'
        });
        function formatTime(seconds) {
            let minutes = Math.floor(seconds / 60);
            let partInSeconds = seconds % 60;
            partInSeconds = partInSeconds.toString().padStart(2, '0');
            return `${minutes}:${partInSeconds}`;
        }
        function onEvent() {
            this.initialTime -= 1;
            timeText.setText('時間：' + formatTime(this.initialTime));
            if (this.initialTime <= 0) {
                sound.stop();
                star.stop();
                this.scene.start('gameover', false);
            }
        }
//------------分數版
        scoreText = this.add.text(10, 0, '學分：' + score, {
            fontSize: '40px',
            fill: 'white',
            fontFamily: '微軟正黑體'
        });
        restartText = this.add.text(config.width / 2 - 100, config.height / 2 - 40, '再試一次', {
            fontSize: '40px 微軟正黑體',
            color: 'white',
            stroke: 'red',
            padding: 10,
            backgroundColor: 'black'
        });
        restartText.visible = false;
        restartText.setInteractive().on('pointerdown', (pointer, localX, localY, event) => {
            score = onescore + twoscore;
            Checkpoint = 0;
            movedown = false;
            moveup = false;
            gameOver = false;
            gametime=0;
            nextshot=0;
            star.stop();
            Invincible=false;
            this.scene.restart();
            sound.stop();
        });
        function collectball() {
            if(Invincible==false){
                player.setTint(0xff0000);
                player.anims.play('turn');
                gameOver = true;
                this.physics.pause();
                timedEvent.paused = !timedEvent.paused
            }
        }
        function collectobstacle() {
            player.setTint(0xff0000);
            player.anims.play('turn');
            gameOver = true;
            this.physics.pause();
            timedEvent.paused = !timedEvent.paused
        }
    }

    update() {
//--------------砲台計時
        gametime++;
//--------------死亡
        if (gameOver) {
            restartText.setVisible(true);
            
        } else {
//------------持續移動及射毒偵測
            switch (direction) {
                case 1: //up
                    if (cursors.space.isDown && shoot) { Bullet(0, -200); }
                    break;
                case 2: //right
                    if (cursors.space.isDown && shoot) { Bullet(200, 0); }
                    break;
                case 3: //down
                    if (cursors.space.isDown && shoot) { Bullet(0, 200); }
                    break;
                case 4: //left
                    if (cursors.space.isDown && shoot) { Bullet(-200, 0); }
                    break;
            }
            if (cursors.space.isUp) { shoot = true; }
//------------加速情況下的鍵盤控制playerMove
            if (moveup == true && movedown==false ) {
                            
                if (cursors.left.isDown) {
                    direction = 4;
                    player.x -= 5;
                    player.anims.play('left', true);
                } else if (cursors.right.isDown) {
                    direction = 2;
                    player.x += 5;
                    player.anims.play('right', true);
                } else if (cursors.up.isDown) {
                    direction = 1;
                    player.y -= 5;
                    player.anims.play('up', true);
                } else if (cursors.down.isDown) {
                    direction = 3;
                    player.y += 5;
                    player.anims.play('down', true);
                } else {
                    switch (direction) {
                        case 1: //up
                            player.anims.play('up', false);
                            break;
                        case 2: //right
                            player.anims.play('turnRight', true);
                            break;
                        case 3: //down
                            player.anims.play('down', false);
                            break;
                        case 4: //left
                            player.anims.play('left', false);
                            break;
                    }
                }
                if (this.initialTime == movetime - 10 ||this.initialTime ==0)
                {
                    moveup = false;
                    particles.destroy();
                }
            }
            //------------正常情況下的鍵盤控制playerMove
            if (moveup == false && movedown == false) {
                if (cursors.left.isDown) {                  
                    direction = 4;
                    player.x -= 3;
                    player.anims.play('left', true);
                } else if (cursors.right.isDown) {
                    direction = 2;
                    player.x += 3;
                    player.anims.play('right', true);
                } else if (cursors.up.isDown) {
                    direction = 1;
                    player.y -= 3;
                    player.anims.play('up', true);
                } else if (cursors.down.isDown) {
                    direction = 3;
                    player.y += 3;
                    player.anims.play('down', true);
                } else {
                    switch (direction) {
                        case 1: //up
                            player.anims.play('up', false);
                            break;
                        case 2: //right
                            player.anims.play('turnRight', true);
                            break;
                        case 3: //down
                            player.anims.play('down', false);
                            break;
                        case 4: //left
                            player.anims.play('left', false);
                            break;
                    }
                }
            }
            //------------減速情況下的鍵盤控制playerMove
            if (movedown == true && moveup == false) {
                
                if (cursors.left.isDown) {
                    direction = 4;
                    player.x -= 2;
                    player.anims.play('left', true);
                } else if (cursors.right.isDown) {
                    direction = 2;
                    player.x += 2;
                    player.anims.play('right', true);
                } else if (cursors.up.isDown) {
                    direction = 1;
                    player.y -= 2;
                    player.anims.play('up', true);
                } else if (cursors.down.isDown) {
                    direction = 3;
                    player.y += 2;
                    player.anims.play('down', true);
                } else {
                    switch (direction) {
                        case 1: //up
                            player.anims.play('up', false);
                            break;
                        case 2: //right
                            player.anims.play('turnRight', true);
                            break;
                        case 3: //down
                            player.anims.play('down', false);
                            break;
                        case 4: //left
                            player.anims.play('left', false);
                            break;
                    }
                }
                if (this.initialTime == movetime - 10  ||this.initialTime ==0) {

                    movedown = false;
                    particles.destroy();
                }
            }
//------------砲台
            if (nextshot < gametime && gameOver == false) {
                nextshot = gametime + delay;
                Fortmusic.play();
                fortball.create(fort.x + 60, fort.y - 50, "fortball").setScale(0.1, 0.1).setVelocity(240, -120);
                flame.setPosition(fort.x+80,fort.y-60);
                flame.setAlpha(1);
                flame.setVisible(true);
                flameTween.play();
                this.tweens.add({
                  targets:fort,
                  ease:'Linear',
                  x:fort.x--,
                  y:fort.y++,
                  duration:200,
                  repeat:0
                });
                fortball.create(fort1.x - 60, fort1.y - 50, "fortball").setScale(0.1, 0.1).setVelocity(-170, -120);
                flame1.setPosition(fort1.x-60,fort1.y-80);
                flame1.setAlpha(1);
                flame1.setVisible(true);
                flameTween1.play();
                this.tweens.add({
                  targets:fort1,
                  ease:'Linear',
                  x:fort1.x++,
                  y:fort1.y++,
                  duration:200,
                  repeat:0
                });
                fortball.create(fort2.x + 60, fort2.y + 50, "fortball").setScale(0.1, 0.1).setVelocity(170, 120);
                flame2.setPosition(fort2.x+80,fort2.y+60);
                flame2.setAlpha(1);
                flame2.setVisible(true);
                flameTween2.play();
                this.tweens.add({
                  targets:fort2,
                  ease:'Linear',
                  x:fort2.x--,
                  y:fort2.y--,
                  duration:200,
                  repeat:0
                });
                fortball.create(fort3.x - 60, fort3.y + 50, "fortball").setScale(0.1, 0.1).setVelocity(-240, 120);
                flame3.setPosition(fort3.x-80,fort3.y+60);
                flame3.setAlpha(1);
                flame3.setVisible(true);
                flameTween3.play();
                this.tweens.add({
                  targets:fort3,
                  ease:'Linear',
                  x:fort3.x++,
                  y:fort3.y--,
                  duration:200,
                  repeat:0
                });
            }
//------------
            if (restartball == true) {
                rdn = Phaser.Math.Between(1, 4);
                if (rdn == 1) {
                    positionx = Phaser.Math.Between(100, 1300);
                    positiony = Phaser.Math.Between(150, 700);
                    scoreball1.create(positionx, positiony, scoreball[1]).setScale(0.8, 0.8);
                    restartball = false;
                }
                if (rdn == 2) {
                    positionx = Phaser.Math.Between(100, 1300);
                    positiony = Phaser.Math.Between(150, 700);
                    scoreball2.create(positionx, positiony, scoreball[2]).setScale(0.8, 0.8);
                    restartball = false;
                }
                if (rdn == 3) {
                    positionx = Phaser.Math.Between(100, 1300);
                    positiony = Phaser.Math.Between(150, 700);
                    scoreball3.create(positionx, positiony, scoreball[3]).setScale(0.8, 0.8);
                    restartball = false;
                }
                if (rdn == 4) {
                    positionx = Phaser.Math.Between(100, 1300);
                    positiony = Phaser.Math.Between(150, 700);
                    scoreball4.create(positionx, positiony, scoreball[4]).setScale(0.8, 0.8);
                    restartball = false;
                }
            }
//------------
            if(gametime%700==0 )
            {       
                    rdn = Phaser.Math.Between(5, 9);
                    if (rdn == 5) {
                        positionx = Phaser.Math.Between(600, 800);
                        positiony = Phaser.Math.Between(300, 400);
                        scoreball5.create(positionx, positiony, scoreball[5]).setScale(0.1, 0.1);
                    }
                    if (rdn == 6) {
                        positionx = Phaser.Math.Between(600, 800);
                        positiony = Phaser.Math.Between(300, 400);
                        scoreball6.create(positionx, positiony, scoreball[6]).setScale(0.1, 0.1);
                    }
                    if (rdn == 7) {
                        positionx = Phaser.Math.Between(600, 800);
                        positiony = Phaser.Math.Between(300, 400);
                        scoreball7.create(positionx, positiony, scoreball[7]).setScale(0.5, 0.5);
                    }
                    if (rdn == 8) {
                        positionx = Phaser.Math.Between(600, 800);
                        positiony = Phaser.Math.Between(300, 400);
                        scoreball8.create(positionx, positiony, scoreball[8]).setScale(0.5, 0.5);
                    }
                    if (rdn == 9) {
                        positionx = Phaser.Math.Between(600, 800);
                        positiony = Phaser.Math.Between(300, 400);
                        scoreball9.create(positionx, positiony, scoreball[9]).setScale(0.4, 0.4);
                    }
            }
//------------
            // if(gametime%750==0 ){
            //         positionx = Phaser.Math.Between(100, 1300);
            //         positiony = Phaser.Math.Between(150, 700);
            //         scoreball3.create(positionx, positiony, scoreball[3]).setScale(0.8, 0.8);
                    
            // }
            // if(gametime%800==0 ){
            //     positionx = Phaser.Math.Between(100, 1300);
            //     positiony = Phaser.Math.Between(150, 700);
            //     scoreball5.create(positionx, positiony, scoreball[5]).setScale(0.1, 0.1);
            // }
//------------無敵狀態
            if(Invincible==true)
            {
                player.setTint(0xFFFF00);
                if (this.initialTime == Invincibletime - 10) {
                    Invincible = false;
                    player.clearTint();
                    star.stop();
                    sound.play();
                }
            }
//------------
            function Bullet(x, y) {
                attack.create(player.x, player.y, "attack").setScale(0.3, 0.3).setVelocity(x, y);
                Attackmusic.play();
                shoot = false;
            }
        }
    }
}