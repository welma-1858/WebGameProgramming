const config =
        {
            type: Phaser.AUTO,
            width: 1920,
            height: 1080,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 300},
                    debug: false
                }
            },
            scene:
            {
                preload: preload,
                create: create,
                update: update
            },
            scale:
            {
                mode: Phaser.Scale.FIT,
                autoCenter: Phaser.Scale.CENTER_BOTH
            },
            audio:
            {
                disableWebAudio: true
            }
        };
        const game = new Phaser.Game(config);
        
        //----------player----------
        let player;
        let cursors;
        let isRight = true;
        let jump = false;
        let haveMask = false;
        let onLadder = false;
        let isDead = false;
        let isGameOver = false;

        //----------collider----------
        let platforms;
        let ladder;

        //----------items----------
        let mask;
        let body;

        //----------damage----------
        let poison;
        let particles_3;
        let overPoison;
        let trap;
        let isTrap = false;
        let overtrap;
        let cage;
        let isCage = false;
        let overCage;
        let stab;
        let arrowRight;
        let arrowLeft;
        let isArrowRight = false;
        let isArrowLeft = false;
        let overArrowRight;
        let overArrowLeft;

        //----------system----------
        let gameOver = false;
        let restartText;
        let finishText;
        let deadTime = 0;
        let cageTime = 0;
        let arrowTimeRight = 0;
        let arrowTimeLeft = 0;

        //----------trigger----------
        let cageTrigger;
        let arrowTriggerRight;
        let arrowTriggerLeft;
        let poisonTrigger;
        // let bodyTrigger;

        //----------audio----------
        let bgMusic;
        let walkMusic;
        let jumpMusic;
        let deadMusic;
        let poisonMusic;
        let shootMusic;
        let trapMusic;
        let isWalk = false;


        let video;
        let isDeadBody = false;
        let overDeadBody;



        var finalVideo;
        var volume;
