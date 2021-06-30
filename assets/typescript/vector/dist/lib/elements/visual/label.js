import { Group } from "../svg/group";
export class Label extends Group {
    constructor(x, y, str) {
        super();
        this.setAttribute('transform', `translate( ${x}, ${y})`);
        this.style.alignmentBaseline = 'middle';
        this.style.textAnchor = 'middle';
        this.textElement = this.text(0, 0, str);
    }
    drawBackgroundRectangle() {
        let box = this.textElement.getBoundingBox();
        this.textElement.remove();
        let rect = this.rectangle(box.x - 3, box.y - 3, box.width + 6, box.height + 6);
        rect.style.fill = '#ffffff';
        rect.style.stroke = 'none';
        this.appendChild(this.textElement);
    }
}
