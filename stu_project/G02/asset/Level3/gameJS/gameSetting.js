const config = {
            type: Phaser.AUTO,
            width: 1920,
            height: 1080,
            scale: {
                mode: Phaser.Scale.FIT,
                autoCenter: Phaser.Scale.CENTER_BOTH,
            },
            scene: {
                preload: preload,
                create: create,
                update: update
            },
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 300 },
                    debug: false,
                }
            },
        }

        const game = new Phaser.Game(config);
        //player setting
        let isRight = true;
        let haveMask = false;
        let jump = false;
        let player;
        let cursors;
        //conlider
        let platform;
        let ladder;
        //item
        let mask;
        let deadBody;
        //damage
        let poison;
        let trap;
        let cage;
        let stab;
        let arrow;
        let stone;
        //system setting
        let gameOver = false;
        let restartText;
        let nextLevelText;