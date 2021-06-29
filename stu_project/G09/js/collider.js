function itemAnimation() {
    dog.anims.play('stand', true);
    dog.anims.msPerFrame = 500; //延遲動畫
    bee.anims.play('stand', true);
    bee.anims.msPerFrame = 500;
    passnger.anims.play('stand', true);
    passnger.anims.msPerFrame = 200;
}

function scene3_itemAnimation() {
    dog_group.playAnimation('stand', -1);
    bee_group.playAnimation('stand', -1);
    passnger_group.playAnimation('stand', -1);
    healthbar.anims.play(health.toString(), true);
    healthbar.x = people.x; //跟蹤玩家
    healthbar.y = people.y - 80;
    screenText.x = cam.worldView.x + 50;
}

function checkitem() { //檢查是否物件還有存活 沒有就重新建立
    if (bee_group.countActive() == 0) {
        bee_group.children.each(function(bee_child) {
            bee_child.enableBody(true, Phaser.Math.Between(people.x + 800, people.x + 1000), Phaser.Math.Between(400, 550), true, true);
        }, this);
    }
    if (dog_alive) {
        if (dog_group.countActive() == 0) {
            item_num_max++;
            dog_alive = false;
        }
    }
    if (banana_alive) {
        if (banana_group.countActive() == 0) {
            item_num_max++;
            banana_alive = false;
        }
    }
    if (passnger_alive) {
        if (passnger_group.countActive() == 0) {
            item_num_max++;
            passnger_alive = false;
        }
    }
    if (poison_alive) {
        if (poison_group.countActive() == 0) {
            item_num_max++;
            poison_alive = false;
        }
    }
    if (item_num_max != 0) { //如果場上物件類型沒有達到要求的數量
        var item_poniter = Phaser.Math.Between(0, 3);
        if (item_poniter == 0) {
            if (!banana_alive) {
                var pos = 0;
                banana_group.children.each(function(banana_child) {
                    if (pos != 0) {
                        var pos2 = pos;
                        while (pos2 > pos + 100 || pos2 < pos - 100) {
                            pos2 = Phaser.Math.Between(people.x + 600, people.x + 900);
                        }
                        pos = pos2;
                    } else {
                        pos = Phaser.Math.Between(people.x + 600, people.x + 900);
                    }
                    banana_child.enableBody(true, pos, 0, true, true);
                }, this);
                banana_alive = true;
            } else {
                item_poniter++;
            }
        } else if (item_poniter == 1) {
            if (!passnger_alive) {
                passnger_group.children.each(function(passnger_child) {
                    passnger_child.enableBody(true, Phaser.Math.Between(people.x + 1200, people.x + 1500), 0, true, true);
                }, this);
                passnger_alive = true;
            } else {
                item_poniter++;
            }
        } else if (item_poniter == 2) {
            if (!poison_alive) {
                poison_group.children.each(function(poison_child) {
                    poison_child.enableBody(true, Phaser.Math.Between(people.x + 1800, people.x + 2100), 0, true, true);
                });
                poison_alive = true;
            } else {
                item_poniter++;
            }
        } else if (item_poniter == 3) {
            if (!dog_alive) {
                dog_group.children.each(function(dog_child) {
                    dog_child.enableBody(true, Phaser.Math.Between(people.x + 2300, people.x + 2500), 0, true, true);
                }, this);
                dog_alive = true;
            } else {
                item_poniter = 0;
            }
        }
        item_num_max--;
    }
    if (setReversInput) {
        if (med_group.countActive() == 0) {
            med_group.children.each(function(med_child) {
                med_child.enableBody(true, Phaser.Math.Between(people.x + 600, people.x + 800), 0, true, true);
            });
        }
    }
    if (block_num_max != 0) {
        var item_poniter = Phaser.Math.Between(0, 3);
        if (item_poniter == 0) {
            if (!block1_alive) {
                block1.enableBody(true, Phaser.Math.Between(people.x + 600, people.x + 900), 550, true, true);
                block1_alive = true;
            } else {
                item_poniter++;
            }
        } else if (item_poniter == 1) {
            if (!block2_alive) {
                block2.enableBody(true, Phaser.Math.Between(people.x + 1100, people.x + 1300), 550, true, true);
                block2_alive = true;
            } else {
                item_poniter++;
            }
        } else if (item_poniter == 2) {
            if (!block3_alive) {
                block3.enableBody(true, Phaser.Math.Between(people.x + 1500, people.x + 1800), 550, true, true);
                block3_alive = true;
            } else {
                item_poniter++;
            }
        } else if (item_poniter == 3) {
            if (!block4_alive) {
                block4.enableBody(true, Phaser.Math.Between(people.x + 2000, people.x + 2200), Phaser.Math.Between(400, 550), true, true);
                block4_alive = true;
            } else {
                item_poniter = 0;
            }
        }
        block_num_max--;
    }
    if (platform_num_max != 0) {
        var item_poniter = Phaser.Math.Between(0, 4);
        if (item_poniter == 0) {
            if (!platform1_alive) {
                platform1.enableBody(true, Phaser.Math.Between(people.x + 600, people.x + 800), Phaser.Math.Between(450, 550), true, true);
                platform1_alive = true;
            } else {
                item_poniter++;
            }
        } else if (item_poniter == 1) {
            if (!platform2_alive) {
                platform2.enableBody(true, Phaser.Math.Between(people.x + 1000, people.x + 1200), Phaser.Math.Between(450, 550), true, true);
                platform2_alive = true;
            } else {
                item_poniter++;
            }
        } else if (item_poniter == 2) {
            if (!platform3_alive) {
                platform3.enableBody(true, Phaser.Math.Between(people.x + 1400, people.x + 1600), Phaser.Math.Between(450, 550), true, true);
                platform3_alive = true;
            } else {
                item_poniter++;
            }
        } else if (item_poniter == 3) {
            if (!platform4_alive) {
                platform4.enableBody(true, Phaser.Math.Between(people.x + 1800, people.x + 2000), Phaser.Math.Between(450, 550), true, true);
                platform4_alive = true;
            } else {
                item_poniter++;
            }
        } else if (item_poniter == 4) {
            if (!platform5_alive) {
                platform5.enableBody(true, Phaser.Math.Between(people.x + 2200, people.x + 2200), Phaser.Math.Between(450, 550), true, true);
                platform5_alive = true;
            } else {
                item_poniter = 0;
            }
        }
        platform_num_max--;
    }
}

function num_setup() { //依據難度設定物件數量
    if (diffucutiy == 0) {
        bee_num = 1;
        passnger_num = 1;
        med_num = 2;
        poison_num = 1;
        bike_num = 1;
        banana_num = 2;
        dog_num = 1;
        item_num_max = 2;
        block_num_max = 1;
        platform_num_max = 1;

    } else {
        bee_num = 2;
        passnger_num = 2;
        med_num = 2;
        poison_num = 1;
        bike_num = 1;
        banana_num = 2;
        dog_num = 1;
        item_num_max = 3;
        block_num_max = 1;
        platform_num_max = 2;
    }
}

function resetitem() {
    block1_alive = false;
    block2_alive = false;
    block3_alive = false;
    block4_alive = false;
    platform1_alive = false;
    platform2_alive = false;
    platform3_alive = false;
    platform4_alive = false;
    platform5_alive = false;
    passnger_alive = false;
    dog_alive = false;
    poison_alive = false;
    banana_alive = false;
    if (diffucutiy == 0) {
        item_num_max = 2;
        block_num_max = 1;
        platform_num_max = 1;
    } else {
        item_num_max = 3;
        block_num_max = 1;
        platform_num_max = 2;
    }
}

function health_delete() {
    if (stand == 1) {
        health--;
        if (health == 0) {
            bgmusic.stop();
            scene_img.destroy();
            game.scene.remove('scene3');
            game.scene.start('scene4');
        }
    }
}

function timer_count() {
    time++;
    var hour = 0;
    var min = 0;
    var sec = time;
    if (sec >= 60) {
        min = Math.round(sec / 60);
        sec %= 60;
    }
    if (min >= 60) {
        hour = Math.round(min / 60);
        min %= 60;
    }
    var text = '遊玩時間: ';
    if (hour != 0) {
        text += hour + '時';
    }
    if (min != 0) {
        text += min + '分'
    }
    text += sec += '秒';
    screenText.setText(text + '\n分數: ' + score);
}
//碰撞函式
function passnger_scene(people, passnger) {
    passngermusic.play();
    passnger.disableBody(true, true);
    if (diffucutiy == -1) {
        screenText.setText("暴躁路人：\n屬性：性格暴躁，看到眼鏡就想打掉\n技能：在眼鏡被拍掉後需撿起眼鏡，在眼鏡被撿起之前血值會持續降低。");
    } else {
        score -= 50;
        healthSystem.paused = false;
    }
   if(stand==0||stand==2){
    glasses.setPosition(people.x + Phaser.Math.Between(-175, -120), people.y);
    people.setTexture('d_people');
   }
    if (leftStand) {
        people.anims.play('left_falldown', true);
    } else {
        people.anims.play('right_falldown', true);
    }
    stand = 1;
    glasses.setVelocityX(0);
    return people;
}

function glasses_scene(people, glasses) {
    glasses.setPosition(-100, -1);
    stand = 0;
    glasses.setVelocityX(0);
    people.setBodySize(78, 78);
    people.setPosition(people.x, people.y - 50);
}

function bee_scene(people, bee) {
    beemusic.play();
    bee.disableBody(true, true);
    if (diffucutiy == -1) {
        screenText.setText("歐歐蜂：\n技能：瘋狂地一個區間來回走動，碰到後眼鏡會掉落，在眼鏡撿起之前血值持續下降。");
    } else {
        score -= 100;
        healthSystem.paused = false;
    }
    if(stand==0||stand==2){
        glasses.setPosition(people.x + Phaser.Math.Between(-175, -120), people.y);
    }
    stand = 1;
    glasses.setVelocityX(0);


}

function med_scene(people, med) {
    medmusic.play();
    med.disableBody(true, true);
    if (diffucutiy == -1) {
        screenText.setText("微笑神丹：\n功能：可解除瘋狂小吉、魔鬼邪藥的症狀。");
    } else {
        healthSystem.paused = true;
    }
    setReversInput = false;
    Input_status = 0;
    people.tint = 0xFFFFFF;

}

function dog_scene(people, dog) {
    dogmusic.play();
    dog.disableBody(true, true);
    if (diffucutiy == -1) {
        screenText.setText("瘋狂小吉：\n技能：瘋狂亂吠，吠到頭昏眼花，操作鍵上下左右顛倒，需靠解藥才可恢復操作。");
    } else {
        dog -= 50;
    }
    setReversInput = true;
    Input_status = 1;
}

function bike_scene(people, bike) {
    if (stand == 0) { //沒有眼鏡不能騎腳踏車
        bikemusic.play();
        bike.disableBody(true, true);
        if (diffucutiy == -1) {
            screenText.setText("阿罵的腳踏車：\n功能：阿罵貼心放的腳踏車，以車代步騎回家還阿罵剛剛好，騎上去前10秒無限加速\n，碰到暴躁路人、歐歐蜂、芭那那那會跌下車，需撿起眼鏡再繼續操作。");
        }
        stand = 2;
    }
}

function banana_scene(people, banana) {
    bananamusic.play();
    banana.disableBody(true, true);
    if (diffucutiy == -1) {
        screenText.setText("芭那那那：\n功能：一個沒公德心的人丟的，主要就是要你跟搞笑藝人跌倒，\n需撿起眼鏡，在眼鏡被撿起之前血值持續下降。");
    } else {
        score -= 50;
        healthSystem.paused = false;
    }
    if(stand==0||stand==2){
        glasses.setPosition(people.x + Phaser.Math.Between(-175, -120), people.y);
       }
    if (leftStand) {
        people.anims.play('left_falldown');
    } else {
        people.anims.play('right_falldown');
    }
    stand = 1;
    glasses.setVelocityX(0);


}

function poison_scene(people, poison) {
    poisonmusic.play();
    poison.disableBody(true, true);
    if (diffucutiy == -1) {
        screenText.setText("魔鬼邪藥：\n功能：下藥後操作間重新設定，下變左、右變上、上變左、左變下，\n需用微笑神丹解除症狀。");
    } else {
        score -= 50;
    }
    setReversInput = true;
    Input_status = 2;
    people.tint = 0x9900FF; //改主角顏色
}