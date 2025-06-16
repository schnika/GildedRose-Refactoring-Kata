export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class StockItem  {

  }


export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  increaseQuality(item: Item) {
    item.quality += 1;
    }

  decreaseQuality(item: Item) {
    item.quality -= 1;
  }

  setQuality(item: Item, quality: number) {
    item.quality = quality;
  }

  decreaseSellIn(item: Item) {
    item.sellIn -= 1;
  }

  updateQuality() {
    for (let item of this.items) {
      if (
        item.name != "Aged Brie" &&
        item.name != "Backstage passes to a TAFKAL80ETC concert"
      ) {
        if (item.quality > 0) {
          if (item.name != "Sulfuras, Hand of Ragnaros") {
            this.decreaseQuality(item);
          }
        }
      } else {
        if (item.quality < 50) {
          this.increaseQuality(item);

          if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
            if (item.sellIn < 11) {
              if (item.quality < 50) {
                this.increaseQuality(item);
              }
            }
            if (item.sellIn < 6) {
              if (item.quality < 50) {
                this.increaseQuality(item);
              }
            }
          }
        }
      }
      if (item.name != "Sulfuras, Hand of Ragnaros") {
        this.decreaseSellIn(item);
      }
      if (item.sellIn < 0) {
        if (item.name != "Aged Brie") {
          if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
            // sets the quality to 0
            this.setQuality(item, 0);
          } else {
            if (item.quality > 0) {
              if (item.name != "Sulfuras, Hand of Ragnaros") {
                this.decreaseQuality(item);
              }
            }
          }
        } else {
          if (item.quality < 50) {
            this.increaseQuality(item);
          }
        }
      }
    }

    return this.items;
  }
}
