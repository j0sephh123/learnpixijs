function init() {
  stage = new PIXI.Container();
  renderer = PIXI.autoDetectRenderer(
    512, 384, {view: document.getElementById('game-canvas')}
  );

  let farTexture = PIXI.Texture.fromImage("resources/bg-far.png");
  far = new PIXI.extras.TilingSprite(farTexture,512, 256);
  // texture, weight, height
  far.position.x = 0; // location of the texture in the canvas
  far.position.y = 0;
  far.tilePosition.x = 0; // the texture itself 
  far.tilePosition.y = 0;
  stage.addChild(far);

  let midTexture = PIXI.Texture.fromImage("resources/bg-mid.png");
  mid = new PIXI.extras.TilingSprite(midTexture, 512, 256);
  mid.position.x = 0;
  mid.position.y = 128;
  mid.tilePosition.x = 0;
  mid.tilePosition.y = 0;
  stage.addChild(mid);

  function update() {
    far.tilePosition.x -= 0.128;
    mid.tilePosition.x -= 0.64;
  
    renderer.render(stage);
  
    requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}