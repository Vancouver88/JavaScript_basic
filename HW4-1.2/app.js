'use strict';

//ES5
/* function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    this.text = text;
};

function AttachedPost(author, text, date, highlighted) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
};

let AttachedPost1 = new AttachedPost('Ivan', 'lorem ipsum', '10.05.2021');
AttachedPost1.edit('hello world');
AttachedPost1.makeTextHighlighted();
console.log(AttachedPost1); */

//ES6
class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

class AttachedPost extends Post {
    constructor(author, text, date, highlighted) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let AttachedPost1 = new AttachedPost('Egor', 'hello kitty', '11.08.2020');
AttachedPost1.edit('lorem ipsum');
AttachedPost1.makeTextHighlighted();
console.log(AttachedPost1);