declare const p5: any; // これだと動く
// import p5 from "p5"; // こっちは動かない
import "p5/lib/addons/p5.sound";

const sketch = (p: p5) => {

	/** 初期化 */
	p.setup = () => {
		p.createCanvas(p.windowWidth, p.windowHeight);
	};

	/** フレームごとの描画処理 */
	p.draw = () => {
		p.background("#292a33");
		p.circle(p.mouseX, p.mouseY, p.mouseX);
	};
};

new p5(sketch)