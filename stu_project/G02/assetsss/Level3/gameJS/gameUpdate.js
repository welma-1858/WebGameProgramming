function update() 
{
  onLadder = false;
  //normal setting
  if (player.body.touching.down) jump = false;
  else jump = true;
  if (haveMask == true) 
  {
    this.physics.world.removeCollider(overPoison);
  }
  if (player.body.velocity.x == 0 || !player.body.touching.down) 
  {
    walkMusic.stop();
    isWalk = false;
  }

  if(!gameOver)
  {
    if (isCage) 
    {
      cageTime++;
      if (cageTime >= 200) 
      {
        cage.disableBody(true, true);
        isCage = false;
      }
    }
    if (isArrowRight) 
    {
      arrowTimeRight++;
      if (arrowTimeRight >= 200) 
      {
        arrowRight.disableBody(true, true);
        isArrowRight = false;
      }
    }
    if (isArrowLeft) 
    {
      arrowTimeLeft++;
      if (arrowTimeLeft >= 200) 
      {
        arrowLeft.disableBody(true, true);
        isArrowLeft = false;
      }
    }
    player.body.velocity.x = 0;
    run();

    if (player.body.touching.down) 
    {
      if (cursors.up.isDown) 
      {
        jumping();
        jumpMusic.play();
      }
      if (cursors.down.isDown) 
      {
        if (player.body.velocity.x == 0) 
        {
          squat();
        } 
        else
        {
          slide();
        }
      }
    }
    if (onLadder) 
    {
      Ladder();
    }
    onLadder = false;
    deadTime = 0;
    isGameOver = false;
  }

  else 
  {
    if (isGameOver == false) 
    {
      isDead = true;
    }
    if (isDead == true) 
    {
      deadMusic.play();
      isDead = false;
    }
    if (isCage == false) 
    {
      if (isRight == true)
      {
        player.anims.play('blood right',true);
      } else player.anims.play('blood left',true);
      // deadMusic.play();
    }
    if (isArrowRight == false) 
    {
      if (isRight == true)
      {
        player.anims.play('blood right',true);
      } else player.anims.play('blood left',true);
      // deadMusic.play();
    }
    if (isArrowLeft == false) 
    {
      if (isRight == true)
      {
        player.anims.play('blood right',true);
      } else player.anims.play('blood left',true);
      // deadMusic.play();
    }
    if (isTrap == false) 
    {
      if (isRight == true)
      {
        player.anims.play('blood right',true);
      } else player.anims.play('blood left',true);
      // deadMusic.play();
    }
    player.body.velocity.x = 0;
    deadTime++;
    if (deadTime >= 45) 
    {
      if(isRight == true)
      {
        player.play('deadRightEnd');
      }
      else 
      {
        player.play('deadLeftEnd');
      }
      restartText.setVisible(true);
      menuText.setVisible(true);
      console.log('遊戲結束，重新開始遊戲');
    }
    cageTime = 0;
    arrowTime = 0;
  }
      // restartText.setVisible(true);
      // menuText.setVisible(true);
      // console.log('遊戲結束，重新開始遊戲');
}

//move function
// function run() 
// {
//   if (jump == false) 
//   { 
//     if (cursors.left.isDown) 
//     {
//       walkMusic.play();
//       player.setVelocityX(-400);
//       isRight = false;
//       if(haveMask == false)
//       {
//         player.anims.play('run left', true);
//       }
//       else
//       {
//         player.anims.play('run left (mask)', true);
//       }
//     }
//     else if (cursors.right.isDown) 
//     {
//       walkMusic.play();
//       player.setVelocityX(400);
//       isRight = true;
//       if(haveMask == false)
//       {
//         player.anims.play('run right', true);
//       }
//       else
//       {
//         player.anims.play('run right (mask)', true);
//       }
//     } 
//     else 
//     {
//       player.setVelocityX(0);
//       if (isRight == false) 
//       {
//         if(haveMask == false)
//         {
//           player.anims.play('left');
//         }
//         else
//         {
//           player.anims.play('left (mask)');
//         }
//       } 
//       else 
//       {
//         if(haveMask == false)
//         {
//           player.anims.play('right');
//         }
//         else
//         {
//           player.anims.play('right (mask)');
//         }
//       }
//     }
//   }
//   else if( jump == true)
//   {
//     if (cursors.left.isDown) 
//     {
//       player.setVelocityX(-400);
//       isRight = false;
//       if(haveMask == false)
//       {
//         player.anims.play('jump left', true);
//       }
//       else
//       {
//         player.anims.play('jump left (mask)', true);
//       }
//     }
//     else if (cursors.right.isDown) 
//     {
//       player.setVelocityX(400);
//       isRight = true;
//       if(haveMask == false)
//       {
//         player.anims.play('jump right', true);
//       }
//       else
//       {
//         player.anims.play('jump right (mask)', true);
//       }
//     }
//   } 
// }
function run() {
  if (jump == false) {
    if (cursors.left.isDown) {
      player.setVelocityX(-400);
      isRight = false;
      if (haveMask == false) {
        player.anims.play('run left', true);
      } else player.anims.play('run left (mask)', true);
      //particles
      if ((player.body.velocity.x > 0 || player.body.velocity.x < 0) && isWalk == false) {

        walkMusic.play();
        isWalk = true;
      }
    }
    else if (cursors.right.isDown) {

      player.setVelocityX(400);
      isRight = true;
      if (haveMask == false) {
        player.anims.play('run right', true);
      } else player.anims.play('run right (mask)', true);
      if ((player.body.velocity.x > 0 || player.body.velocity.x < 0) && isWalk === false) {
        walkMusic.play();
        isWalk = true;
      }
    } else {

      player.setVelocityX(0);
      if (isRight == false) {
        if (haveMask == false) {
          player.anims.play('left (new)');
        } else player.anims.play('left (new) (mask)');
      } else {
        if (haveMask == false) {
          player.anims.play('right (new)');
        } else player.anims.play('right (new) (mask)');
      }
    }
  }
  else if (jump == true) {
    if (cursors.left.isDown) {
      player.setVelocityX(-400);
      isRight = false;
      if (haveMask == false) {
        player.anims.play('jump left', true);
      } else player.anims.play('jump left (mask)', true);
    }
    else if (cursors.right.isDown) {
      player.setVelocityX(400);
      isRight = true;
      if (haveMask == false) {
        player.anims.play('jump right', true);
      } else player.anims.play('jump right (mask)', true);
    }
  }
}

function jumping() 
{
  jump = true;
  player.setVelocityY(-320);
  if (isRight == false) 
  {
    if(haveMask == false)
    {
      player.anims.play('jump left', true);
    }
    else
    {
      player.anims.play('jump left (mask)', true);
    }
  }
  else 
  {
    if(haveMask == false)
    {
      player.anims.play('jump right', true);
    }
    else
    {
      player.anims.play('jump right (mask)', true);
    }
  }
}

function squat() 
{
  if (isRight == false) 
  {
    if(haveMask == false)
    {
      player.anims.play('down left', true);
    }
    else
    {
      player.anims.play('down left (mask)', true);
    }
  } 
  else 
  {
    if(haveMask == false)
    {
      player.anims.play('down right', true);
    }
    else
    {
      player.anims.play('down right (mask)', true);
    }
  }
}

function slide() 
{
  if (isRight == false) 
  {
    if(haveMask == false)
    {
      player.anims.play('slide left', true);
    }
    else
    {
      player.anims.play('slide left (mask)', true);
    }
  } 
  else 
  {
    if(haveMask == false)
    {
      player.anims.play('slide right', true);
    }
    else
    {
      player.anims.play('slide right (mask)', true);
    }
  }
}

function climb(player, ladder)
{
  if(cursors.up.isDown)
  {
    player.setVelocityY(-350);
    if(haveMask == false)
    {
      player.anims.play('climb', true);
    }
    else
    {
      player.anims.play('climb (mask)', true);
    }
  }
}

function maskOn(player, mask)
{
    haveMask = true;
    mask.disableBody(true, true);
}

function getCage() 
{
  if (isCage) 
  {
    cage.body.allowGravity = true;
    this.physics.world.removeCollider(overCage);
    this.physics.add.collider(cage, platforms);
  }
  isCage = true;
}

function getArrowRight() 
{
  if (isArrowRight) 
  {
    arrowRight.body.allowGravity = true;
    arrowRight.setVelocityX(2000);
    this.physics.world.removeCollider(overArrowRight);
    this.physics.add.collider(arrowRight, platforms);
  }
  isArrowRight = true;
}

function getArrowLeft() 
{
  if (isArrowLeft) 
  {
    arrowLeft.body.allowGravity = true;
    arrowLeft.setVelocityX(-2000);
    this.physics.world.removeCollider(overArrowLeft);
    this.physics.add.collider(arrowLeft, platforms);
  }
  isArrowLeft = true;
}


function GameOver()
{
  gameOver = true;
  deadMusic.play();
}