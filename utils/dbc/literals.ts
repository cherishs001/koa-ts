class Literal {
    _text: string;

    constructor(text: string) {
        if (!(this instanceof Literal)) {
            return new Literal(text);
        }
        this._text = text;
    }

    toString(): string {
        return this._text;
    }
}

const now = new Literal('now()');

export {
    Literal,
    now,
}
