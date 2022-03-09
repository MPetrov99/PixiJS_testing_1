const Application = PIXI.Application;


const app = new Application({
    width: 500,
    height: 500,
    transparent: false,
    antialias: true
});

app.renderer.backgroundColor = 0xf0d8c9;

app.renderer.resize(window.innerWidth, window.innerHeight);

app.renderer.view.style.position = 'absolute';

document.body.appendChild(app.view);

const Graphics = PIXI.Graphics;

// Creating a Rectangle
const rectangle = new Graphics();
rectangle.beginFill(0xAA33BB)
    .lineStyle(4, 0x123234, 1)
    .drawRect(150, 200, 100, 120)
    .endFill();

app.stage.addChild(rectangle);

// Creating a Polygon
const poly = new Graphics();
poly.beginFill(0xFF66FF)
    .lineStyle(4, 0x123234, 1)
    .drawPolygon([
        600, 80,
        800, 150,
        900, 300,
        400, 400
    ])
    .endFill();

app.stage.addChild(poly);

// Creating a Circle
const circle = new Graphics();
circle.beginFill(0x22AACC)
    .lineStyle(4, 0x123234, 1)
    .drawCircle(440, 200, 80)
    .endFill();

app.stage.addChild(circle);

// Creating a Line
const line = new Graphics();
line.lineStyle(5, 0x123234, 1)
    .moveTo(1500, 100)
    .lineTo(1500, 800);

app.stage.addChild(line);

// Creating a Torus
const torusFull = new Graphics();
torusFull.beginFill(0x123234)
    .drawTorus(400, 700, 80, 100)
    .endFill();

const torusCut = new Graphics();
torusCut.beginFill(0x123234)
    .drawTorus(650, 700, 80, 100, Math.PI / 2)
    .endFill();

app.stage.addChild(torusFull);

app.stage.addChild(torusCut);

// Creating a Star
const star = new Graphics();
star.beginFill(0x123234)
    .drawStar(900, 700, 20, 80)
    .endFill();

app.stage.addChild(star);

// Creating and styling a Text sheet
const style = new PIXI.TextStyle({
    fontFamily: 'Verdana',
    fontSize: 48,
    fill: 'deepskyblue',
    stroke: '#ffffff',
    strokeThickness: 4,
    dropShadow: true,
    dropShadowDistance: 10,
    dropShadowAngle: Math.PI / 2,
    dropShadowBlur: 4,
    dropShadowColor: '#123234'
});

const myText = new PIXI.Text('Hello World', style);

app.stage.addChild(myText);

myText.text = 'IMAGINE GETTING THE HANG OF IT !!';

// myText.style.wordWrap = true;
// myText.style.wordWrapWidth = 100;
// myText.style.align = 'center';

// Random generated obejcts in screen
app.ticker.add(delta => loop(delta));

function loop(delta) {
    const rect = new Graphics();
    rect.beginFill(0xFFFFFF)
        // .lineStyle(4, 0x123234, 1)
        .drawRect(Math.random() * app.screen.width, Math.random() * app.screen.height, 10, 10)
        .endFill();

    // THIS IS COMMENTED SO IT DOES NOT FILL THE SCREEN
    // app.stage.addChild(rect);
}

//Opening and Loading Picture on the Screen/Canvas

// const char1Texture = PIXI.Texture.from('./images/image1.png');
// const char1Sprite = new PIXI.Sprite(char1Texture);

const char1Sprite = PIXI.Sprite.from('./images/image1.png');

//Positioning the image

// char1Sprite.width = 500;
// char1Sprite.height = 500;

// char1Sprite.scale.x = 1.5;
// char1Sprite.scale.y = 1.5;

// char1Sprite.scale.set(2, 2);

// char1Sprite.x = 200;
// char1Sprite.y = 250;

char1Sprite.position.set(800, 480);

// char1Sprite.anchor.x = 0.5;
// char1Sprite.anchor.y = 0.5;

char1Sprite.anchor.set(0.5, 0.5);

char1Sprite.rotation = 0.7;

app.ticker.add(delta => loop(delta));

function loop(delta) {
    // char1Sprite.x += 1;
    // char1Sprite.rotation += 0.01;

}

char1Sprite.interactive = true;
char1Sprite.buttonMode = true;

char1Sprite.on('pointerdown', function() {
    char1Sprite.scale.x += 0.1;
    char1Sprite.scale.y += 0.1;
})

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight')
        char1Sprite.x += 10;
    if (e.key === 'ArrowLeft')
        char1Sprite.x -= 10;
    if (e.key === 'ArrowDown')
        char1Sprite.y += 10;
    if (e.key === 'ArrowUp')
        char1Sprite.y -= 10;
})

app.stage.addChild(char1Sprite);

//Creating a group of images - Container

const container = new PIXI.Container();

const char2Sprite = PIXI.Sprite.from('./images/image2.png');
char2Sprite.position.set(900, 500);

container.addChild(char2Sprite);

const char3Sprite = PIXI.Sprite.from('./images/image3.png');
char3Sprite.position.set(850, 250);

container.addChild(char3Sprite);

container.x = 200;

app.stage.addChild(container);

//Creating a Particle Container

const particleContainer = new PIXI.ParticleContainer(1000, {
    position: true,
    rotation: true,
    vertices: true,
    tint: true,
    uvs: true
});

const loader = PIXI.Loader.shared;

// loader.add('char4Texture', './images/image4.png');
// loader.add('char5Texture', './images/image5.png');

// loader.load(setup);

//  Chainloading

// loader.add('char4Texture', './images/image4.png')
//     .add('char5Texture', './images/image5.png')

loader.add(['./images/image4.png', './images/image5.png'])
    .load(setup);

function setup(loader, resources) {
    const char4Sprite = new PIXI.Sprite(
        // resources.char4Texture.texture
        resources['./images/image4.png'].texture
    );
    char4Sprite.y = 400;
    app.stage.addChild(char4Sprite);

    const char5Sprite = new PIXI.Sprite(
        // resources.char5Texture.texture
        resources['./images/image5.png'].texture
    );
    char5Sprite.y = 600;
    app.stage.addChild(char5Sprite);
};