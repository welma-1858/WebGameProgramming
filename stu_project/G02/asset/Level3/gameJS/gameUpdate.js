function update() {
  //normal setting
  if (player.body.touching.down) jump = false;
  else jump = true;

  if (haveMask == false) {
    run();
    if (player.body.touching.down) {
      if (cursors.up.isDown) {
        jumping();
      }
      if(cursors.down.isDown){
        if(player.body.velocity.x == 0){
          squat();
        }else slide();
      }
    }
  }
  //mask setting
  else {
  }
}

//move function
function run() {
  if (jump == false) {
    if (cursors.left.isDown) {
      player.setVelocityX(-200);
      isRight = false;
      player.anims.play('runLeft', true);
    }
    else if (cursors.right.isDown) {
      player.setVelocityX(200);
      isRight = true;
      player.anims.play('runRight', true);
    } else {
      player.setVelocityX(0);
      if (isRight == false) {
        player.anims.play('left');
      } else {
        player.anims.play('right');
      }
    }
  }
  else if( jump == true){
    if (cursors.left.isDown) {
      player.setVelocityX(-200);
      isRight = false;
      player.anims.play('jumpLeft', true);
    }
    else if (cursors.right.isDown) {
      player.setVelocityX(200);
      isRight = true;
      player.anims.play('jumpRight', true);
    }
  } 
}

function jumping() {
  jump = true;
  player.setVelocityY(-200);
  if (isRight == false) {
    player.anims.play('jumpLeft', true);
  }
  else {
    player.anims.play('jumpRight', true);
  }
}

function squat() {
  if (isRight == false) {
    player.anims.play('squatLeft');
  } else {
    player.anims.play('squatRight');
  }
}

function slide() {
  if (isRight == false) {
    player.anims.play('slideLeft');
  } else {
    player.anims.play('slideRight');
  }
}
