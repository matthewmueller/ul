/**
 * Module Dependencies
 */

var emitter = require('emitter');
var classes = require('classes');
var domify = require('domify');
var events = require('events');

/**
 * Export `ul`
 */

module.exports = ul;

/**
 * Elements
 */

var list = document.createElement('ul');
var item = document.createElement('li');

/**
 * Initialize `ul`
 */

function ul(parent) {
  if (!(this instanceof ul)) return new ul(parent);

  this.parent = parent || null;
  this.el = list.cloneNode();
  this.classes = classes(this.el);
  this.opened = true;

  if (!parent) this.classes.add('ul');

  this.events = events(this.el, this);
  this.events.bind('click .toggle', 'toggle')
}

/**
 * Mixin `Emitter`
 */

emitter(ul.prototype);

/**
 * toggle
 */

ul.prototype.toggle = function(e) {
  e.stopPropagation();

  var target = e.delegateTarget;
  var li = target.parentNode;
  classes(li).toggle('closed');

  // toggle
  this.opened = !this.opened;
};

/**
 * open
 */

ul.prototype.open = function(e) {
  var li = this.el.parentNode;
  if (!li) return this;
  classes(li).remove('closed');
  this.opened = true;
  return this;
};

/**
 * close
 */

ul.prototype.close = function(e) {
  var li = this.el.parentNode;
  if (!li) return this;
  classes(li).add('closed');
  this.opened = false;
  return this;
};

/**
 * li
 */

ul.prototype.li = function(el) {
  var li = item.cloneNode();
  li.appendChild(label(el));
  this.el.appendChild(li);
  return this;
};

/**
 * ul
 */

ul.prototype.ul = function() {
  var li = this.el.lastChild;
  var label = li.firstElementChild;
  classes(label).add('toggle');
  var list = new ul(this);
  li.appendChild(list.el);
  return list;
};

/**
 * end
 */

ul.prototype.end = function() {
  if (this.parent) return this.parent;
};

/**
 * create an item label
 */

function label(el) {
  return el.nodeType
    ? el
    : isHTML(el)
    ? domify(el)
    : domify('<label>' + el + '</label>');
}

/**
 * is html
 *
 * @param {String} str
 * @return {Boolean}
 * @api private
 */

function isHTML(str) {
  return '>' == str[str.length - 1]
      && '<' == str[0];
}
