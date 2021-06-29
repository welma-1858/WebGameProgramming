function update() {
  // onLadder = false;
  //normal setting
  if (player.body.touching.down) jump = false;
  else jump = true;


  this.physics.add.overlap(player, ladder, isOnLadder);
  this.physics.add.overlap(player, mask, isHaveMask);
  this.physics.add.overlap(player, cage, GameOver);
  this.physics.add.overlap(player, stab, GameOver);
  this.physics.add.overlap(player, arrow, GameOver);
  if (haveMask == true) {
    this.physics.world.removeCollider(overPoison);
  }
  if (player.body.velocity.x == 0 || !player.body.touching.down) {
    walking.stop();
    isWalk = false;
  }
  if (!gameOver) {
    if (isArrowRight) {
      arrowTimeRight++;
      if (arrowTimeRight >= 100) {
        arrow.disableBody(true, true);
        isArrowRight = false;
      }
    }
    if (isCage) {
      cageTime++;
      if (cageTime >= 200) {
        cage.disableBody(true, true);
        isCage = false;
      }
    }
    player.body.velocity.x = 0;
    run();
    if (player.body.touching.down) {
      if (cursors.up.isDown) {
        jumping();
        jumpmusic.play();
      }
      if (cursors.down.isDown) {
        if (player.body.velocity.x == 0) {
          squat();
        } else slide();
      }
    }
    if (onLadder) {
      Ladder();
    }
    
    onLadder = false;
    deadTime = 0;
    isGameOver = false;
  } else {
    if(isGameOver == false){
      isDead = true;
    }
    if(isDead == true){
      deadmusic.play();
      isDead = false;
    }
    if (isCage == false || isCage2 == false) {
      if (isRight == true) {
        player.anims.play('deadRight', true);
      } else player.anims.play('deadLeft', true);
    }
    player.body.velocity.x = 0;
    deadTime++;
    if (deadTime >= 45) {
      if(isRight == true){
        player.play('deadRightEnd');
      }else player.play('deadLeftEnd');
      restartText.setVisible(true);
      menuText.setVisible(true);
      console.log('遊戲結束，重新開始遊戲');
    }
    cageTime = 0;
    isGameOver = true;
  }
}

//move function
function run() {
  if (jump == false) {
    if (cursors.left.isDown) {
      player.setVelocityX(-200);
      isRight = false;
      if (haveMask == false) {
        player.anims.play('runLeft', true);
      } else player.anims.play('MrunLeft', true);
      //particles
    }
    else if (cursors.right.isDown) {
      player.setVelocityX(200);
      isRight = true;
      if (haveMask == false) {
        player.anims.play('runRight', true);
      } else player.anims.play('MrunRight', true);
      if ((player.body.velocity.x > 0 || player.body.velocity.x < 0) && isWalk === false) {
        walking.play();
        isWalk = true;
      }
    } else {
      player.setVelocityX(0);
      if (isRight == false) {
        if (haveMask == false) {
          player.anims.play('left');
        } else player.anims.play('Mleft');
      } else {
        if (haveMask == false) {
          player.anims.play('right');
        } else player.anims.play('Mright');
      }
    }
  }
  else if (jump == true) {
    if (cursors.left.isDown) {
      player.setVelocityX(-200);
      isRight = false;
      if (haveMask == false) {
        player.anims.play('jumpLeft', true);
      } else player.anims.play('MjumpLeft', true);
    }
    else if (cursors.right.isDown) {
      player.setVelocityX(200);
      isRight = true;
      if (haveMask == false) {
        player.anims.play('jumpRight', true);
      } else player.anims.play('MjumpRight', true);
    }
  }
}

// jumping function
function jumping() {
  jump = true;
  player.setVelocityY(-200);
  if (isRight == false) {
    if (haveMask == false) {
      player.anims.play('jumpLeft', true);
    } else player.anims.play('MjumpLeft', true);

  }
  else {
    if (haveMask == false) {
      player.anims.play('jumpRight', true);
    } else player.anims.play('MjumpRight', true);

  }
}

// squat function
function squat() {
  if (isRight == false) {
    if (haveMask == false) {
      player.anims.play('squatLeft');
    } else player.anims.play('MsquatLeft');

  } else {
    if (haveMask == false) {
      player.anims.play('squatRight');
    } else player.anims.play('MsquatRight');
  }
}

// slide function
function slide() {
  if (isRight == false) {
    if (haveMask == false) {
      player.anims.play('slideLeft');
    } else player.anims.play('MslideLeft');

  } else {
    if (haveMask == false) {
      player.anims.play('slideRight');
    } else player.anims.play('MslideRight');
  }
}

function Ladder(){
  if (cursors.up.isDown) {
    player.body.velocity.y = -150;
    if (haveMask == false) {
      player.anims.play('climb', true);
    } else player.anims.play('Mclimb', true);
  }
  if (cursors.down.isDown) {
    player.body.velocity.y = 150;
    if (haveMask == false) {
      player.anims.play('climb', true);
    } else player.anims.play('Mclimb', true);
  }
  if (!cursors.up.isDown && !cursors.down.isDown) {
    player.body.gravity.y = 0;
    player.body.velocity.y = 0;
  }
  if (haveMask == false) {
    player.anims.play('climb', true);
  } else player.anims.play('Mclimb', true);
}
function isOnLadder() {
  onLadder = true;
}
function isHaveMask() {
  haveMask = true;
  mask.disableBody(true, true);
}
function GameOver(){
  gameOver = true;
}

