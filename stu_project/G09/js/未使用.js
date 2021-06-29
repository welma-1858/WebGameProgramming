function scene3_itemAnimation() {
    dog_group.playAnimation('stand',-1);
    //延遲動畫
    /*bee_group.playAnimation('stand');
    bee_group.playAnimation.msPerFrame = 500;*/
    /*passnger.playAnimation('stand', true);
    passnger.playAnimation.msPerFrame = 200;*/
}

function scene3_passnger_scene(people, passnger) {
    passngermusic.play();
    passnger.disableBody(true, true);
    if (diffucutiy == -1) {
        screenText.setText("暴躁路人：\n屬性：性格暴躁，看到眼鏡就想打掉\n技能：在眼鏡被拍掉後需撿起眼鏡，在眼鏡被撿起之前血值會持續降低。");
    }
    glasses.setPosition(people.x + Phaser.Math.Between(-175, -120), people.y - 100);
    stand = 1;
    glasses.setVelocityX(0);
}

function scene3_glasses_scene(people, glasses) {
    glasses.setPosition(-100, -1);
    stand = 0;
    glasses.setVelocityX(0);
    people.setBodySize(78, 78);
    people.setPosition(people.x, people.y - 50);
}

function scene3_bee_scene(people, bee) {
    beemusic.play();
    bee.disableBody(true, true);
    if (diffucutiy == -1) {
        screenText.setText("歐歐蜂：\n技能：瘋狂地一個區間來回走動，碰到後眼鏡會掉落，在眼鏡撿起之前血值持續下降。");
    }
    glasses.setPosition(people.x + Phaser.Math.Between(-175, -120), people.y - 100);
    stand = 1;
    glasses.setVelocityX(0);
}

function scene3_med_scene(people, med) {
    medmusic.play();
    med.disableBody(true, true);
    if (diffucutiy == -1) {
        screenText.setText("微笑神丹：\n功能：可解除瘋狂小吉、魔鬼邪藥的症狀。");
    }
    setReversInput = false;
    Input_status = 0;
    people.tint=0xFFFFFF;
}

function scene3_dog_scene(people, dog) {
    dogmusic.play();
    dog.disableBody(true, true);
    if (diffucutiy == -1) {
        screenText.setText("瘋狂小吉：\n技能：瘋狂亂吠，吠到頭昏眼花，操作鍵上下左右顛倒，需靠解藥才可恢復操作。");
    }
    setReversInput = true;
    Input_status = 1;
}

function scene3_bike_scene(people, bike) {
    if (stand == 0) { //沒有眼鏡不能騎腳踏車
        bikemusic.play();
        bike.disableBody(true, true);
        if (diffucutiy == -1) {
            screenText.setText("阿罵的腳踏車：\n功能：阿罵貼心放的腳踏車，以車代步騎回家還阿罵剛剛好，騎上去前10秒無限加速\n，碰到暴躁路人、歐歐蜂、芭那那那會跌下車，需撿起眼鏡再繼續操作。");
        }
        stand = 2;
    }
}

function scene3_banana_scene(people, banana) {
    bananamusic.play();
    banana.disableBody(true, true);
    if (diffucutiy == -1) {
        screenText.setText("芭那那那：\n功能：一個沒公德心的人丟的，主要就是要你跟搞笑藝人跌倒，\n需撿起眼鏡，在眼鏡被撿起之前血值持續下降。");
    }
    glasses.setPosition(people.x + Phaser.Math.Between(-175, -120), people.y - 100);
    stand = 1;
    glasses.setVelocityX(0);
}

function scene3_poison_scene(people, poison) {
    poisonmusic.play();
    poison.disableBody(true, true);
    if (diffucutiy == -1) {
        screenText.setText("魔鬼邪藥：\n功能：下藥後操作間重新設定，下變左、右變上、上變左、左變下，\n需用微笑神丹解除症狀。");
    }
    setReversInput = true;
    Input_status = 2;
    people.tint = 0x9900FF;         //改主角顏色
}
function num_setup(){     //依據難度設定物件數量
    if(diffucutiy==0){
        bee_num=2;
        passnger_num=1;
        med_num=1;
        poison_num=2;
        bike_num=1;
        banana_num=2;
    }else{
        bee_num=3;
        passnger_num=2;
        med_num=1;
        poison_num=3;
        bike_num=1;
        banana_num=4;
    }
}