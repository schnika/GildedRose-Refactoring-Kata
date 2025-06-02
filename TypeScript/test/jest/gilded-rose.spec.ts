import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose", () => {
  it("should foo", () => {
    const gildedRose = new GildedRose([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  describe("Sulfuras", () => {
    it("quality should never change", () => {
      const gildedRose = new GildedRose([
        new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(80);
    });

    it("sellIn should never change", () => {
      const gildedRose = new GildedRose([
        new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(0);
    });
  });

  describe("Aged Brie", () => {
    it("quality should increase", () => {
      const gildedRose = new GildedRose([new Item("Aged Brie", 10, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(2);
    });

    it("quality should not exceed 50", () => {
      const gildedRose = new GildedRose([new Item("Aged Brie", 10, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
    });
  });

  describe("Normal Item", () => {
    it("quality should decrease", () => {
      const gildedRose = new GildedRose([new Item("Normal Item", 10, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(9);
    });
    it("quality should not be negative", () => {
      const gildedRose = new GildedRose([new Item("Normal Item", 10, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });

    it("sellIn should decrease", () => {
      const gildedRose = new GildedRose([new Item("Normal Item", 10, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(9);
    });

    it("quality should decrease twice as fast after sellIn date", () => {
      const gildedRose = new GildedRose([new Item("Normal Item", 0, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(8);
    });

    // it("quality should not be more than 50", () => {
    //   const gildedRose = new GildedRose([new Item("Normal Item", 10, 80)]);
    //   const items = gildedRose.updateQuality();
    //   expect(items[0].quality).toBe(49);
    // });
  });

  describe("Backstage passes to a TAFKAL80ETC concert", () => {
    it("quality should increase by 1 when there are more than 10 days left", () => {
      const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 11, 30)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(31);
    })

    it("quality should increase by 2 when there between 10 and 6 days left", () => {
      const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 30)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(32);
    });

    it("quality should increase by 3 when there are less than 6 days left", () => {
      const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 30)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(33);
    });

    it("quality should set the quality to 0 when the sellIn date has passed", () => {
      const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 30)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });

    it("quality should not increase to more than 50", () => {
      const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 11, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
    });
  })
});
