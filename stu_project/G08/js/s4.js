
const s4 = {
key: 's4',
preload: function(){
	this.load.image('story4', 'img/story4.png');//載入說明
	this.load.spritesheet('continueBtn', 'img/continueBtn.png', {frameWidth: 120, frameHeight: 40});

	this.load.audio('s4_bg','audio/s4.mp3');//載入背景音樂
},
create: function(){
   //把他們都畫上去
	
    story4 = this.physics.add.staticSprite(450, 350, 'story4');
	


	let next = this.add.sprite(800, 645, 'continueBtn');
	next.setInteractive();
	next.on('pointerover', () => {
		next.setFrame(1);
	})
	next.on('pointerout', () => {
		next.setFrame(0);
	})
	next.on('pointerdown', () => {
		next.setFrame(2);
	})
	next.on('pointerup', () => {
		next.setFrame(0);
		this.scene.start('s5');
	})
	
	s4_bg = this.sound.add('s4_bg',{
		volume:0.5,
	});
	s4_bg.play();
	
	
},
update: function(){}
	
}