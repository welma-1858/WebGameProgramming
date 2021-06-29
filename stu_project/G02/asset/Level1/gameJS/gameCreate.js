function create() {
    //----music----
    let music = this.sound.add('bgMusic');
    music.play();

    walking = this.sound.add("walk",
        {
            loop: true,
            volume: 2
        });
    jumpmusic = this.sound.add("jump",
        {
            loop: false,
            volume: 0.4
        });

    deadmusic = this.sound.add("dead",
        {
            loop: false,
            volume: 100
        });

    //----input----
    cursors = this.input.keyboard.createCursorKeys();
    //----backgound----
    this.add.image(960, 540, 'background');
    //----Particles----
    particles_1 = this.add.particles('smoke');
    emitter_1 = particles_1.createEmitter({
        alpha: { start: 1, end: 0 }, //透明度
        scale: { start: 50, end: 50 },//粒子大小
        speedX: { min: 100, max: 500 },//速度
        speedY: { min: 0, max: 0 },
        accelerationX: { min: -10, max: 10 },//加速度
        accelerationY: { min: 0, max: 0 },
        gravityY: 0,//重力
        angle: { min: 20, max: 20 },
        rotate: { min: 180, max: 180 },
        lifespan: { min: 6000, max: 15000 },
        maxParticles: 0,  //最大數量
        quantity: 1,       //每次發射數量
        frequency: 3500,     //發射間隔
        x: -2000,
        y: 30,
        on: true
    })
    //----platforms----
    platform = this.physics.add.staticGroup();
    platform.create(960, 1065, 'platform_01');
    platform.create(165, 870, 'platform_02-1');
    platform.create(495, 870, 'platform_02-2');
    platform.create(1310, 705, 'platform_03-1');
    platform.create(1710, 705, 'platform_03-3');
    platform.create(780, 870, 'platform_04-1');
    platform.create(1030, 870, 'platform_04-3');
    platform.create(550, 590, 'platform_05');
    platform.create(680, 965, 'platform_06');
    platform.create(1190, 660, 'platform_07');
    platform.create(1710, 1030, 'platform_08');
    platform.create(1035, 653, 'platform_09');
    
    //----ladder----
    ladder = this.physics.add.staticGroup();
    ladder.create(385, 950, 'ladder_1');
    ladder.create(965, 950, 'ladder_2');
    ladder.create(1600, 845, 'ladder_3');

    //----item----
    
    //deadBody
    deadBody = this.physics.add.sprite(200, 500, 'deadBody');
    deadBody.setCollideWorldBounds(true);
    this.physics.add.collider(deadBody, platform);
    //----damage----
    //stab
    stab = this.physics.add.staticGroup();
    stab.create(980, 653, 'stab_1');
    stab.create(590, 430, 'stab_2');
    stab.create(1340, 870, 'stab_3');
    this.add.image(960, 220, 'rule');
    //arrow
    arrow = this.physics.add.sprite(1100, 700, 'arrow');
    arrow.body.allowGravity = false;
    arrowTrigger = this.physics.add.staticSprite(1090, 570, 'Trigger');

    

    //-------------------------------------------
    //-------------------------------------------
    //--------------以下設定為共用設定-------------
    //-------------------------------------------
    //-------------------------------------------
    //----player----
    //create setting
    player = this.physics.add.sprite(200, 980, 'player-stand-right');
    player.setCollideWorldBounds(true);
    this.physics.add.collider(player, platform);

    // particles_3 = this.add.particles('poison');
    // poison = particles_3.createEmitter({
    //     alpha: { start: 0.7, end: 0 }, //透明度
    //     scale: { start: 1, end: 1 },//粒子大小
    //     speedX: { min: 0, max: 10 },//速度
    //     speedY: { min: 0, max: 0 },
    //     accelerationX: { min: 0, max: 0 },//加速度
    //     accelerationY: { min: -10, max: -300 },
    //     gravityY: 0,//重力
    //     angle: { min: -50, max: 50 },
    //     rotate: { min: -180, max: 180 },
    //     lifespan: { min: 1000, max: 2000 },
    //     maxParticles: 0,  //最大數量
    //     quantity: 3,       //每次發射數量
    //     frequency: 500,     //發射間隔
    //     x: 1700,
    //     y: 180,
    //     on: true
    // })
    // poison = particles_3.createEmitter({
    //     alpha: { start: 0.7, end: 0 }, //透明度
    //     scale: { start: 1, end: 1 },//粒子大小
    //     speedX: { min: 0, max: 10 },//速度
    //     speedY: { min: 0, max: 0 },
    //     accelerationX: { min: 0, max: 0 },//加速度
    //     accelerationY: { min: -10, max: -300 },
    //     gravityY: 0,//重力
    //     angle: { min: -50, max: 50 },
    //     rotate: { min: -180, max: 180 },
    //     lifespan: { min: 1000, max: 2000 },
    //     maxParticles: 0,  //最大數量
    //     quantity: 3,       //每次發射數量
    //     frequency: 500,     //發射間隔
    //     x: 1600,
    //     y: 1000,
    //     on: true
    // })

    //anims setting
    //-FOR NORMAL-
    //stand
    this.anims.create({
        key: 'left',
        frames: [{ key: 'player-stand-left', frame: 0 }],
    });
    this.anims.create({
        key: 'right',
        frames: [{ key: 'player-stand-right', frame: 0 }],
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
        repeat: 1,
    });
    this.anims.create({
        key: 'deadRight',
        frames: this.anims.generateFrameNumbers('player-dead-right', { start: 0, end: 3 }),
        frameRate: 5,
        repeat: 1,
    });
    this.anims.create({
        key: 'deadLeftEnd',
        frames: this.anims.generateFrameNumbers('player-dead-left', { start: 3, end: 3 }),
        frameRate: 5,
        repeat: 0,
    });
    this.anims.create({
        key: 'deadRightEnd',
        frames: this.anims.generateFrameNumbers('player-dead-right', { start: 3, end: 3 }),
        frameRate: 5,
        repeat: 0,
    });
    //climb
    this.anims.create({
        key: 'climb',
        frames: this.anims.generateFrameNumbers('player-climb', { start: 0, end: 5 }),
        frameRate: 10,
        repeat: -1
    })


    //----MASK-----
    //stand
    this.anims.create({
        key: 'Mleft',
        frames: [{ key: 'M-player-stand-left', frame: 0 }],
    });
    this.anims.create({
        key: 'Mright',
        frames: [{ key: 'M-player-stand-right', frame: 0 }],
    });
    //run
    this.anims.create({
        key: 'MrunLeft',
        frames: this.anims.generateFrameNumbers('M-player-run-left', { start: 0, end: 4 }),
        frameRate: 10,
        repeat: 1,
    });
    this.anims.create({
        key: 'MrunRight',
        frames: this.anims.generateFrameNumbers('M-player-run-right', { start: 0, end: 4 }),
        frameRate: 10,
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
        frames: [{ key: 'M-player-squat-down-right', frame: 1 }],
    });
    //squat -> slide
    this.anims.create({
        key: 'MslideLeft',
        frames: this.anims.generateFrameNumbers('M-player-slide-left', { start: 0, end: 0 }),
        frameRate: 10,
        repeat: -1,
    });
    this.anims.create({
        key: 'MslideRight',
        frames: this.anims.generateFrameNumbers('M-player-slide-right', { start: 0, end: 0 }),
        frameRate: 10,
        repeat: -1,
    });
    //climb
    this.anims.create({
        key: 'Mclimb',
        frames: this.anims.generateFrameNumbers('M-player-climb', { start: 0, end: 5 }),
        frameRate: 5,
        repeat: -1
    })

    //trigger function
    // overtrap = this.physics.add.overlap(player, trap, getTrap.bind(this));
    // overtrap2 = this.physics.add.overlap(player, trap2, getTrap2.bind(this));
    // overCage = this.physics.add.overlap(player, cageTrigger, getCage.bind(this));
    // overCage2 = this.physics.add.overlap(player, cageTrigger2, getCage2.bind(this));
    // overPoison = this.physics.add.overlap(player, poisonTrigger, GameOver);
    overDeadBody = this.physics.add.overlap(player, deadBody, getDeadBody.bind(this));
    overArrowRight = this.physics.add.overlap(player, arrowTrigger, getArrowRight.bind(this));
    //menu
    restartText = this.add.text(config.width / 2 -250, config.height / 2 -150, 'Restart the game',
        {
            font: '60px Impact',
            color: 'white',
            stroke: 'red',
            padding: 20,
            backgroundColor: 'gray'
        });

        restartText.setInteractive().on('pointerdown', (pointer, localX, localY, event) => 
        {
            restartText.visable = false;
            gameOver = false;
            isCage = false;
            isArrowRight = false;
            isArrowLeft = false;
            haveMask = false;
            this.scene.restart();
        });

    menuText = this.add.text(config.width/2-220, config.height/2+50, 'Go back to menu', 
    {
        font: '60px Impact',
        color: 'white',
        stroke: 'red',
        padding: 20,
        backgroundColor: 'gray'
    });
    menuText.setInteractive().on('pointerdown', (pointer, localX, localY, event) => {
        menuText.visable = false;
        gameOver = false;
        window.location = "./choose.html";
    });

    nextLevelText = this.add.text(config.width / 2 -250, config.height / 2 - 150 , 'Next Level' ,
    {
        font:'60px Impact',
        color: 'white',
        stroke: 'red',
        padding: 20,
        backgroundColor: 'gray'
    })
    nextLevelText.setInteractive().on('pointerdown' ,(pointer, localX ,localY , event) =>{
        nextLevelText.visable = false;
        window.location = "./level_2.html";
    })
    restartText.visible = false;
    menuText.visible = false;
    nextLevelText.setVisible(false);
}
function getTrap() {
    if (isTrap) {
        trap.anims.play('get', true);
        this.physics.world.removeCollider(overtrap);
    }
    gameOver = true;
    isTrap = true;
}

function getCage() {
    if (isCage) {
        cage.body.allowGravity = true;
        this.physics.world.removeCollider(overCage);
        this.physics.add.collider(cage, platform);
    }
    isCage = true;
}

function getDeadBody() {
    if (isDeadBody) {
        nextLevelText.setVisible(true);
        deadBody.disableBody(true, true);
        this.physics.world.removeCollider(overDeadBody);
        player.disableBody(true,false);
    }
    isDeadBody = true;
}
function getArrowRight() {
    if (isArrowRight) {
        arrow.setVelocityY(-2000);
        this.physics.world.removeCollider(overArrowRight);
    }
    isArrowRight = true;
}