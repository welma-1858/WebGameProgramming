function create() {
            //----input----
            cursors = this.input.keyboard.createCursorKeys();
            //----backgound----
            this.add.image(960, 540, 'background');
            //----platforms----
            platform = this.physics.add.staticGroup();
            platform.create(960, 1058, 'platform_01');
            platform.create(1450, 910, 'platform_02');
            platform.create(500, 597, 'platform_03');
            platform.create(170, 460, 'platform_04');
            platform.create(1200, 700, 'platform_05');
            platform.create(1365, 660, 'platform_06');
            platform.create(1295, 645, 'platform_07');
            platform.create(1260, 480, 'platform_08');
            platform.create(1280, 280, 'platform_09');
            platform.create(125, 995, 'platform_10');
            platform.create(1300, 1035, 'platform_11');
            //----ladder----
            ladder = this.physics.add.staticGroup();
            ladder.create(1800, 900, 'ladder_1');
            ladder.create(1310, 1020, 'ladder_2');
            ladder.create(703, 580, 'ladder_3');
            //----item----
            //mask
            mask = this.physics.add.sprite(50, 410, 'mask');
            mask.setCollideWorldBounds(true);
            this.physics.add.collider(mask, platform);
            //deadBody
            deadBody = this.physics.add.sprite(1850, 230, 'deadBody');
            deadBody.setCollideWorldBounds(true);
            this.physics.add.collider(deadBody, platform);
            //----damage----
            //poison
            poison = this.physics.add.sprite(1620, 1000, 'poison');
            poison.setCollideWorldBounds(true);
            //trap
            trap = this.physics.add.sprite(400, 1035, 'trap');
            trap.setCollideWorldBounds(true);
            this.physics.add.collider(trap, platform);
            this.anims.create({
                key: 'null',
                frames: [{ key: 'trap', frame: 0 }],
                frameRate: 20,
            });
            this.anims.create({
                key: 'get',
                frames: this.anims.generateFrameNumbers('trap', { start: 0, end: 2 }),
                frameRate: 30,
                repeat: 0
            });
            //cage
            cage = this.physics.add.sprite(800, 750, 'cage');
            cage.setCollideWorldBounds(true);
            cage.body.allowGravity = false;
            //stab
            stab = this.physics.add.staticSprite(1255, 693, 'stab');
            //arrow
            arrow = this.physics.add.staticSprite(350, 460, 'arrow');
            //stone
            stone = this.physics.add.sprite(100, 800, 'stone');
            stone.setCollideWorldBounds(true);
            this.physics.add.collider(stone, platform);
            


            //-------------------------------------------
            //-------------------------------------------
            //--------------以下設定為共用設定-------------
            //-------------------------------------------
            //-------------------------------------------
            //----player----
            //create setting
            player = this.physics.add.sprite(500, 980, 'player-run-right');
            player.setCollideWorldBounds(true);
            this.physics.add.collider(player, platform);

            //anims setting
            //-FOR NORMAL-
            //stand
            this.anims.create({
                key: 'left',
                frames: [{ key: 'player-run-left', frame: 0 }],
            });
            this.anims.create({
                key: 'right',
                frames: [{ key: 'player-run-right', frame: 0 }],
            });
            //run
            this.anims.create({
                key: 'runLeft',
                frames: this.anims.generateFrameNumbers('player-run-left', { start: 0, end: 4 }),
                frameRate: 10,
                repeat: -1,
            });
            this.anims.create({
                key: 'runRight',
                frames: this.anims.generateFrameNumbers('player-run-right', { start: 0, end: 4 }),
                frameRate: 10,
                repeat: -1,
            });
            //jump
            this.anims.create({
                key: 'jumpLeft',
                frames: this.anims.generateFrameNumbers('player-jump-left', { start: 0, end: 4 }),
                frameRate: 5,
                repeat: 1,
            });
            this.anims.create({
                key: 'jumpRight',
                frames: this.anims.generateFrameNumbers('player-jump-right', { start: 0, end: 4 }),
                frameRate: 5,
                repeat: 1,
            });
            //squat
            this.anims.create({
                key: 'squatLeft',
                frames: [{ key: 'player-squat-down-left', frame: 1 }],
            });
            this.anims.create({
                key: 'squatRight',
                frames: [{ key: 'player-squat-down-right', frame: 1 }],
            });
            //squat -> slide
            this.anims.create({
                key: 'slideLeft',
                frames: this.anims.generateFrameNumbers('player-slide-left', { start: 0, end: 0 }),
                frameRate: 10,
                repeat: 1,
            });
            this.anims.create({
                key: 'slideRight',
                frames: this.anims.generateFrameNumbers('player-slide-right', { start: 0, end: 0 }),
                frameRate: 10,
                repeat: 1,
            });
            //dead
            this.anims.create({
                key: 'deadLeft',
                frames: this.anims.generateFrameNumbers('player-dead-left', { start: 0, end: 3 }),
                frameRate: 5,
                repeat: 0,
            });
            this.anims.create({
                key: 'deadRight',
                frames: this.anims.generateFrameNumbers('player-dead-right', { start: 0, end: 3 }),
                frameRate: 5,
                repeat: 0,
            });




            //----MASK-----
            //stand
            this.anims.create({
                key: 'Mleft',
                frames: [{ key: 'M-player-run-left', frame: 0 }],
            });
            this.anims.create({
                key: 'Mright',
                frames: [{ key: 'M-player-run-right', frame: 0 }],
            });
            //run
            this.anims.create({
                key: 'MrunLeft',
                frames: this.anims.generateFrameNumbers('M-player-run-left', { start: 0, end: 4 }),
                frameRate: 5,
                repeat: 1,
            });
            this.anims.create({
                key: 'MrunRight',
                frames: this.anims.generateFrameNumbers('M-player-run-right', { start: 0, end: 4 }),
                frameRate: 5,
                repeat: 1,
            });
            //jump
            this.anims.create({
                key: 'MjumpLeft',
                frames: this.anims.generateFrameNumbers('M-player-jump-left', { start: 0, end: 4 }),
                frameRate: 5,
                repeat: 1,
            });
            this.anims.create({
                key: 'MjumpRight',
                frames: this.anims.generateFrameNumbers('M-player-jump-right', { start: 0, end: 4 }),
                frameRate: 5,
                repeat: 1,
            });
            //squat
            this.anims.create({
                key: 'MsquatLeft',
                frames: [{ key: 'M-player-squat-down-left', frame: 1 }],
            });
            this.anims.create({
                key: 'MsquatRight',
                frames: [{ key: 'M-player-squat-down-left', frame: 1 }],
            });
            //squat -> slide
            this.anims.create({
                key: 'MslideLeft',
                frames: this.anims.generateFrameNumbers('M-player-slide-left', { start: 0, end: 0 }),
                frameRate: 10,
                repeat: -1,
            });
            this.anims.create({
                key: 'M-slideRight',
                frames: this.anims.generateFrameNumbers('M-player-slide-right', { start: 0, end: 0 }),
                frameRate: 10,
                repeat: -1,
            });
        }
