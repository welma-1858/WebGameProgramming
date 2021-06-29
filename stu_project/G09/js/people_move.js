function normalInput() {
    if (people.body.deltaY() > 0 && people.body.onFloor()) {
        jumpcount = 0;
    }
    if (stand == 0) {
        if (checkCrounch) {
            people.setBodySize(75, 75);
            checkCrounch = false;
            people.setPosition(people.x, people.y - 18);
        }
        if (cursors.up.isDown && jumpcount <= 100) {
            if (leftStand) {
                people.setVelocityY(-150);
                people.anims.play('left_jump', true);
                jumpcount++;
            } else if (rightStand) {
                people.setVelocityY(-150);
                people.anims.play('right_jump', true);
                jumpcount++;
            }
        } else if (cursors.down.isDown) {
            if (leftStand) {
                if (cursors.left.isDown) {
                    people.anims.play('left_squat', true);
                    people.setVelocityX(-100);
                } else if (cursors.right.isDown) {
                    rightStand = true;
                    leftStand = false;
                    people.anims.play('right_squat', true);
                    people.setVelocityX(100);
                } else {
                    people.anims.play('left_squat_stand', true);
                    people.setVelocityX(0);
                }
            } else {
                if (cursors.right.isDown) {
                    people.anims.play('right_squat', true);
                    people.setVelocityX(100);
                } else if (cursors.left.isDown) {
                    rightStand = false;
                    leftStand = true;
                    people.anims.play('left_squat', true);
                    people.setVelocityX(-100);
                } else {
                    people.anims.play('right_squat_stand', true);
                    people.setVelocityX(0);
                }
            }
            people.setBodySize(40, 57, false);
            if (!checkCrounch) {
                people.setPosition(people.x, people.y + 18);
            }
            checkCrounch = true;
        } else if (cursors.left.isDown) {
            people.setVelocityX(-160);
            people.anims.play('left', true);
            leftStand = true;
            rightStand = false;
        } else if (cursors.right.isDown) {
            people.setVelocityX(160);
            people.anims.play('right', true);
            leftStand = false;
            rightStand = true;
        } else {
            people.setVelocityX(0);
            if (leftStand) {
                people.anims.play('left_stand');
            } else {
                people.anims.play('right_stand');
            }

        }

    } else if (stand == 1) {
        if (cursors.left.isDown) {
            people.setVelocityX(-110);
            people.anims.play('left_crawl', true);
            leftStand = true;
            rightStand = false;
        } else if (cursors.right.isDown) {
            people.setVelocityX(110);
            people.anims.play('right_crawl', true);
            leftStand = false;
            rightStand = true;
        } else {
            people.setVelocityX(0);
            if (leftStand) {
                people.anims.play('left_crawl');

            } else {
                console.log(people.texture.key);
                people.anims.play('right_crawl');

            }
        }
        people.setBodySize(78, 33, false);
    } else if (stand == 2) {
        if (cursors.left.isDown) {
            people.setVelocityX(-220);
            people.anims.play('left_bike', true);
            leftStand = true;
            rightStand = false;
        } else if (cursors.right.isDown) {
            people.setVelocityX(220);
            people.anims.play('right_bike', true);
            leftStand = false;
            rightStand = true;
        } else {
            people.setVelocityX(0);
            if (leftStand) {
                people.anims.play('left_bike');
            } else {
                people.anims.play('right_bike');
            }
        }
    }
}

function reverseInput() {
    if (people.body.deltaY() > 0 && people.body.onFloor()) {
        jumpcount = 0;
    }
    if (Input_status == 1) {
        if (stand == 0) {
            if (checkCrounch) {
                people.setBodySize(75, 75);
                checkCrounch = false;
                people.setPosition(people.x, people.y - 18);
            }
            if (cursors.down.isDown && jumpcount <= 100) {
                if (leftStand) {
                    people.setVelocityY(-150);
                    people.anims.play('left_jump', true);
                    jumpcount++;
                } else if (rightStand) {
                    people.setVelocityY(-150);
                    people.anims.play('right_jump', true);
                    jumpcount++;
                }
            } else if (cursors.up.isDown) {
                if (leftStand) {
                    if (cursors.left.isDown) {
                        people.anims.play('right_squat', true);
                        people.setVelocityX(100);
                        rightStand = false;
                        leftStand = true;
                    } else if (cursors.right.isDown) {
                        people.anims.play('left_squat', true);
                        people.setVelocityX(-100);
                    } else {
                        people.anims.play('left_squat_stand', true);
                        people.setVelocityX(0);
                    }
                } else {
                    if (cursors.right.isDown) {
                        people.anims.play('left_squat', true);
                        people.setVelocityX(-100);
                        rightStand = false;
                        leftStand = true;
                    } else if (cursors.left.isDown) {
                        people.anims.play('right_squat', true);
                        people.setVelocityX(100);
                    } else {
                        people.anims.play('right_squat_stand', true);
                        people.setVelocityX(0);
                    }
                }
                people.setBodySize(40, 57, false);
                if (!checkCrounch) {
                    people.setPosition(people.x, people.y + 18);
                }
                checkCrounch = true;
            } else if (cursors.right.isDown) {
                people.setVelocityX(-160);
                people.anims.play('left', true);
                leftStand = true;
                rightStand = false;
            } else if (cursors.left.isDown) {
                people.setVelocityX(160);
                people.anims.play('right', true);
                leftStand = false;
                rightStand = true;
            } else {
                people.setVelocityX(0);
                if (leftStand) {
                    people.anims.play('left_stand');
                } else {
                    people.anims.play('right_stand');
                }

            }

        } else if (stand == 1) {
            if (cursors.right.isDown) {
                people.setVelocityX(-110);
                people.anims.play('left_crawl', true);
                leftStand = true;
                rightStand = false;
            } else if (cursors.left.isDown) {
                people.setVelocityX(110);
                people.anims.play('right_crawl', true);
                leftStand = false;
                rightStand = true;
            } else {
                people.setVelocityX(0);
                if (leftStand) {
                    people.anims.play('left_crawl');
                } else {
                    people.anims.play('right_crawl');
                }
            }
            people.setBodySize(78, 33, false);
        } else if (stand == 2) {
            if (cursors.right.isDown) {
                people.setVelocityX(-220);
                people.anims.play('left_bike', true);
                leftStand = true;
                rightStand = false;
            } else if (cursors.left.isDown) {
                people.setVelocityX(220);
                people.anims.play('right_bike', true);
                leftStand = false;
                rightStand = true;
            } else {
                people.setVelocityX(0);
                if (leftStand) {
                    people.anims.play('left_bike');
                } else {
                    people.anims.play('right_bike');
                }
            }
        }
    } else if (Input_status == 2) {
        if (stand == 0) {
            if (checkCrounch) {
                people.setBodySize(75, 75);
                checkCrounch = false;
                people.setPosition(people.x, people.y - 18);
            }
            if (cursors.left.isDown) {
                if (leftStand && jumpcount <= 100) {
                    people.setVelocityY(-150);
                    people.anims.play('left_jump', true);
                    jumpcount++;
                } else if (rightStand && jumpcount <= 100) {
                    people.setVelocityY(-150);
                    people.anims.play('right_jump', true);
                    jumpcount++;
                }
            } else if (cursors.right.isDown) {
                if (leftStand) {
                    if (cursors.down.isDown) {
                        people.anims.play('left_squat', true);
                        people.setVelocityX(-100);
                    } else if (cursors.up.isDown) {
                        rightStand = true;
                        leftStand = false;
                        people.anims.play('right_squat', true);
                        people.setVelocityX(100);
                    } else {
                        people.anims.play('left_squat_stand', true);
                        people.setVelocityX(0);
                    }
                } else {
                    if (cursors.up.isDown) {
                        people.anims.play('right_squat', true);
                        people.setVelocityX(100);
                    } else if (cursors.down.isDown) {
                        rightStand = false;
                        leftStand = true;
                        people.anims.play('left_squat', true);
                        people.setVelocityX(-100);
                    } else {
                        people.anims.play('right_squat_stand', true);
                        people.setVelocityX(0);
                    }
                }
                people.setBodySize(40, 57, false);
                if (!checkCrounch) {
                    people.setPosition(people.x, people.y + 18);
                }
                checkCrounch = true;
            } else if (cursors.down.isDown) {
                people.setVelocityX(-160);
                people.anims.play('left', true);
                leftStand = true;
                rightStand = false;
            } else if (cursors.up.isDown) {
                people.setVelocityX(160);
                people.anims.play('right', true);
                leftStand = false;
                rightStand = true;
            } else {
                people.setVelocityX(0);
                if (leftStand) {
                    people.anims.play('left_stand');
                } else {
                    people.anims.play('right_stand');
                }

            }

        } else if (stand == 1) {
            if (cursors.left.isDown) {
                people.setVelocityX(-110);
                people.anims.play('left_crawl', true);
                leftStand = true;
                rightStand = false;
            } else if (cursors.right.isDown) {
                people.setVelocityX(110);
                people.anims.play('right_crawl', true);
                leftStand = false;
                rightStand = true;
            } else {
                people.setVelocityX(0);
                if (leftStand) {
                    people.anims.play('left_crawl');
                } else {
                    people.anims.play('right_crawl');
                }
            }
            people.setBodySize(78, 33, false);
        } else if (stand == 2) {
            if (cursors.down.isDown) {
                people.setVelocityX(-220);
                people.anims.play('left_bike', true);

                leftStand = true;
                rightStand = false;
            } else if (cursors.up.isDown) {
                people.setVelocityX(220);
                people.anims.play('right_bike', true);
                leftStand = false;
                rightStand = true;
            } else {
                people.setVelocityX(0);
                if (leftStand) {
                    people.anims.play('left_bike');
                } else {
                    people.anims.play('right_bike');

                }
            }
        }
    }
}

function move() {
    //主角左邊動畫
    people.anims.create({
        key: 'left',
        frames: people.anims.generateFrameNumbers('people', {
            start: 13,
            end: 10
        }),
        frameRate: 15,
        repeat: -1
    });
    //主角往左跳動畫
    people.anims.create({
        key: 'left_jump',
        frames: [{
            key: 'people',
            frame: 9
        }],
        frameRate: 12,
        repeat: -1
    });
    //主角往右跳動畫
    people.anims.create({
        key: 'right_jump',
        frames: [{
            key: 'people',
            frame: 20
        }],
        frameRate: 20,
        repeat: -1
    });
    //主角右邊站著
    people.anims.create({
        key: 'right_stand',
        frames: [{
            key: 'people',
            frame: 15
        }],
        framesRate: 20
    });
    //主角左邊站著
    people.anims.create({
        key: 'left_stand',
        frames: [{
            key: 'people',
            frame: 14
        }],
        frameRate: 20
    });
    //主角右邊動畫
    people.anims.create({
        key: 'right',
        frames: people.anims.generateFrameNumbers('people', {
            start: 16,
            end: 19
        }),
        frameRate: 15,
        repeat: -1
    });
    //主角往左蹲
    people.anims.create({
        key: 'left_squat',
        frames: people.anims.generateFrameNumbers('people', {
            start: 6,
            end: 8
        }),
        frameRate: 12,
        repeat: -1
    });
    //主角往右蹲
    people.anims.create({
        key: 'right_squat',
        frames: people.anims.generateFrameNumbers('people', {
            start: 21,
            end: 23
        }),
        frameRate: 12,
        repeat: -1
    });
    //主角往右蹲不動
    people.anims.create({
        key: 'right_squat_stand',
        frames: [{
            key: 'people',
            frame: 21
        }],
        frameRate: 12,
        repeat: -1
    });
    //主角往左蹲不動
    people.anims.create({
        key: 'left_squat_stand',
        frames: [{
            key: 'people',
            frame: 8
        }],
        frameRate: 12,
        repeat: -1
    });
    //主角向左爬
    people.anims.create({
        key: 'left_crawl',
        frames: people.anims.generateFrameNumbers('people', {
            start: 0,
            end: 1
        }),
        frameRate: 12,
        repeat: -1
    });
    //主角向右爬
    people.anims.create({
        key: 'right_crawl',
        frames: people.anims.generateFrameNumbers('people', {
            start: 28,
            end: 29
        }),
        frameRate: 12,
        repeat: -1
    });
    //主角腳踏車向左
    people.anims.create({
        key: 'left_bike',
        frames: people.anims.generateFrameNumbers('people', {
            start: 4,
            end: 5
        }),
        frameRate: 12,
        repeat: -1
    });
    //主角腳踏車向右
    people.anims.create({
        key: 'right_bike',
        frames: people.anims.generateFrameNumbers('people', {
            start: 24,
            end: 25
        }),
        frameRate: 12,
        repeat: -1
    });
    people.anims.create({
        key: 'right_falldown',
        frames: people.anims.generateFrameNumbers('people', {
            start: 26,
            end: 27
        }),
        frameRate: 12,
        repeat: -1
    });
    people.anims.create({
        key: 'left_falldown',
        frames: people.anims.generateFrameNumbers('people', {
            start: 3,
            end: 2
        }),
        frameRate: 12,
        repeat: -1
    });
}
function healthbar_setup() {
    for (var i = 27; i >= 0; i--) {
        healthbar.anims.create({
            key: i.toString(),
            frames: [{
                key: 'health',
                frame: 27 - i
            }],
            frameRate: 12,
            repeat: -1
        })
    }

}