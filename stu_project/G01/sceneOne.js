class sceneOne extends Phaser.Scene {
    constructor() {
        super('one')
    }

    preload() {
//--------------wall
        this.load.image("row", "img/row.png");
        this.load.image("col", "img/col.png");
        this.load.image("rock", "img/rock.png");
        this.load.image("able", "img/ablelong.png");
        this.load.image("lessrock", "img/lessrock.png");
        this.load.image("lessable", "img/lessable.png");
        this.load.image("strrock", "img/strrock.png");
        this.load.image("strable", "img/strable.png");
        this.load.image("rocklong", "img/strrocklong.png");
        this.load.image("ablelong", "img/strablelong.png");
//--------------stage
        this.load.image('score1', 'img/ball1.png');
        this.load.image('score2', 'img/ball2.png');
        this.load.image('score3', 'img/ball3.png');
        this.load.image('score4', 'img/ball-1.png');
        this.load.image('score5', 'img/time.png')
        this.load.image('score6', 'img/time-5.png');
        this.load.image('score7', 'img/water.png');
        this.load.image('score8', 'img/water-2.png');
//--------------player
        this.load.image("attack", "img/attack.png");
        this.load.spritesheet('player', "img/player.png", {
            frameWidth: 48,
            frameHeight: 61
        });
//--------------
        this.load.audio('background-1', 'music/背景音樂.mp3');
        this.load.audio('wallsmusic', 'music/撞破磚頭.mp3');
        this.load.audio('scoremusic', 'music/吃到球game-bonus_preview.mp3');
        this.load.audio('Attack', 'music/pyo1.mp3');
    }

    create() {
//---------音樂
        sound = this.sound.add('background-1', { volume: 0.3 });
        Attackwalls = this.sound.add('wallsmusic', { volume: 1 });
        eatscore = this.sound.add('scoremusic', { volume: 0.3 });
        Attackmusic = this.sound.add('Attack', { volume: 0.1 });
        sound.play();
//----------canAttaclWalls
        walls = this.physics.add.group().createMultiple([{
                key: 'able',
                repeat: 0,
                setXY: {
                    x: 215,
                    y: 85
                }
            }, {
                key: 'able',
                repeat: 0,
                setXY: {
                    x: 215,
                    y: 163
                }
            }, {
                key: 'able',
                repeat: 0,
                setXY: {
                    x: 215,
                    y: 319
                }
            },
            {
                key: 'able',
                repeat: 0,
                setXY: {
                    x: 215,
                    y: 553
                }
            }, {
                key: 'able',
                repeat: 0,
                setXY: {
                    x: 215,
                    y: 631
                }
            },
            {
                key: 'able',
                repeat: 0,
                setXY: {
                    x: 215,
                    y: 709
                }
            }, {
                key: 'able',
                repeat: 0,
                setXY: {
                    x: 576,
                    y: 85
                }
            },
            {
                key: 'able',
                repeat: 0,
                setXY: {
                    x: 576,
                    y: 241
                }
            }, {
                key: 'lessable',
                repeat: 0,
                setXY: {
                    x: 500,
                    y: 319
                }
            }, {
                key: 'lessable',
                repeat: 0,
                setXY: {
                    x: 500,
                    y: 397
                }
            }, {
                key: 'lessable',
                repeat: 0,
                setXY: {
                    x: 500,
                    y: 475
                }
            }, {
                key: 'able',
                repeat: 0,
                setXY: {
                    x: 576,
                    y: 553
                }
            },
            {
                key: 'able',
                repeat: 0,
                setXY: {
                    x: 576,
                    y: 631
                }
            }, {
                key: 'able',
                repeat: 0,
                setXY: {
                    x: 937,
                    y: 163
                }
            }, {
                key: 'able',
                repeat: 0,
                setXY: {
                    x: 937,
                    y: 241
                }
            }, {
                key: 'lessable',
                repeat: 0,
                setXY: {
                    x: 1013,
                    y: 319
                }
            }, {
                key: 'lessable',
                repeat: 0,
                setXY: {
                    x: 1013,
                    y: 397
                }
            }, {
                key: 'lessable',
                repeat: 0,
                setXY: {
                    x: 1013,
                    y: 475
                }
            }, {
                key: 'able',
                repeat: 0,
                setXY: {
                    x: 937,
                    y: 553
                }
            }, {
                key: 'able',
                repeat: 0,
                setXY: {
                    x: 937,
                    y: 709
                }
            },
            {
                key: 'able',
                repeat: 0,
                setXY: {
                    x: 1298,
                    y: 241
                }
            },
            {
                key: 'able',
                repeat: 0,
                setXY: {
                    x: 1298,
                    y: 397
                }
            },
            {
                key: 'able',
                repeat: 0,
                setXY: {
                    x: 1298,
                    y: 475
                }
            },
            {
                key: 'able',
                repeat: 0,
                setXY: {
                    x: 1298,
                    y: 553
                }
            }, {
                key: 'able',
                repeat: 0,
                setXY: {
                    x: 1298,
                    y: 631
                }
            },
            {
                key: 'able',
                repeat: 0,
                setXY: {
                    x: 1298,
                    y: 709
                }
            },
        ]);
//--------------cantAttackWalls
        disable = this.physics.add.group().createMultiple([{
                key: 'rock',
                repeat: 0,
                setXY: {
                    x: 937,
                    y: 85
                }
            },
            {
                key: 'rock',
                repeat: 0,
                setXY: {
                    x: 576,
                    y: 709
                }
            },
            {
                key: 'rock',
                repeat: 0,
                setXY: {
                    x: 1298,
                    y: 319
                }
            },
            {
                key: 'rock',
                repeat: 0,
                setXY: {
                    x: 215,
                    y: 241
                }
            },
            //-----------------外圍
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
        attack = this.physics.add.group();
        player = this.physics.add.sprite(720, 400, 'player');
//------------player動畫
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
            frameRate: 10
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
        function collWall(player, walls) {
            player.setTint(0xff0000);
            player.anims.play('down');
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
//------------學分
        score = 0;
        scoreball1 = this.physics.add.group();
        scoreball3 = this.physics.add.group();
        scoreball2 = this.physics.add.group();
        scoreball4 = this.physics.add.group();
        scoreball5 = this.physics.add.group();
        scoreball6 = this.physics.add.group();
        scoreball7 = this.physics.add.group();
        scoreball8 = this.physics.add.group();
        scoreball = this.physics.add.group();
        scoreball[1] = 'score1';
        scoreball[2] = 'score2';
        scoreball[3] = 'score3';
        scoreball[4] = 'score4';
        scoreball[5] = 'score5';
        scoreball[6] = 'score6';
        scoreball[7] = 'score7';
        scoreball[8] = 'score8';
        rdn = Phaser.Math.Between(1, 3);
        positionx = Phaser.Math.Between(100, 700);
        positiony = Phaser.Math.Between(100, 1000);
        scoreball1.create(220, 400, scoreball[1]).setScale(0.8, 0.8);
        scoreball2.create(580, 170, scoreball[2]).setScale(0.8, 0.8);
        scoreball3.create(950, 640, scoreball[3]).setScale(0.8, 0.8);
        scoreball1.create(1320, 160, scoreball[1]).setScale(0.8, 0.8);

        this.physics.add.overlap(player, scoreball1, collectscoreball1, null, this);
        this.physics.add.overlap(player, scoreball2, collectscoreball2, null, this);
        this.physics.add.overlap(player, scoreball3, collectscoreball3, null, this);
        this.physics.add.overlap(scoreball1, walls, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball1, disable, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball2, walls, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball2, disable, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball3, walls, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball3, disable, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball4, walls, scoreballwall1, null, this);
        this.physics.add.overlap(scoreball4, disable, scoreballwall1, null, this);
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
        function scoreballwall1(player, scoreball) {
            scoreball.destroy();
            restartball = true;
        }
//------------時間
        this.initialTime = 30;
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
            if (this.initialTime == 0) {
                onescore = score;
                direction = 3;
                sound.stop();
                this.scene.start('two', false);
            }
        }
//------------分數版
        scoreText = this.add.text(35, 0, '學分：0', {
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
            score = 0;
            Checkpoint = 0;
            gameOver = false;
            this.scene.restart();
            sound.stop();
        });
    }

    update() {
//-------------死亡
        if (gameOver) {
            restartText.setVisible(true);
        } else {
//------------射毒偵測
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
//------------鍵盤控制playerMove
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
                        player.anims.play('turnRight', false);
                        break;
                    case 3: //down
                        player.anims.play('down', false);
                        break;
                    case 4: //left
                        player.anims.play('left', false);
                        break;
                }
            }
//------------
            if (restartball == true) {
                rdn = Phaser.Math.Between(1, 3);
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
            }
            function Bullet(x, y) {
                attack.create(player.x, player.y, "attack").setScale(0.3, 0.3).setVelocity(x, y);
                Attackmusic.play();
                shoot = false;
            }
        }
    }
}