/**
 * Advances an item by one day, updating its sellIn and quality.
 * @param {{ name: string, sellIn: number, quality: number }} item
 * @returns {{ name: string, sellIn: number, quality: number }} The same item, mutated.
 * @example
 * tick({ name: "+5 Dexterity Vest", sellIn: 10, quality: 20 });
 * // => { name: "+5 Dexterity Vest", sellIn: 9, quality: 19 }
 */

module.exports = function tick(item) {
  if (
    item.name !== "Aged Brie" &&
    item.name !== "Backstage passes to a TAFKAL80ETC concert"
  ) {
    if (item.quality > 0) {
      if (item.name !== "Sulfuras, Hand of Ragnaros") {
        item.quality = item.quality - 1;
      }
    }
  } else {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
      if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
        if (item.sellIn < 11) {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
          }
        }
        if (item.sellIn < 6) {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
          }
        }
      }
    }
  }
  if (item.name !== "Sulfuras, Hand of Ragnaros") {
    item.sellIn = item.sellIn - 1;
  }
  if (item.sellIn < 0) {
    if (item.name !== "Aged Brie") {
      if (item.name !== "Backstage passes to a TAFKAL80ETC concert") {
        if (item.quality > 0) {
          if (item.name !== "Sulfuras, Hand of Ragnaros") {
            item.quality = item.quality - 1;
          }
        }
      } else {
        item.quality = item.quality - item.quality;
      }
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
      }
    }
  }

  return item;
};
