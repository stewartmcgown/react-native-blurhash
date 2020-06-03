import { Bitmap } from "./Bitmap";

export const blurhashToDataURI = (hash: string, width: number, height: number, punch = 1) => {
  const pixels = decode(item.blurhash, width, height, punch);
      const bmap = new Bitmap(width, height);
      let y = 0, x = 0;
      for (let i = 0; i < pixels.length; i += 4, x++) {
        bmap.pixel[x % width][y] = [
          pixels[i] / 255,
          pixels[i + 1] / 255,
          pixels[i + 2] / 255,
          pixels[i + 3] / 255,
        ];
        if (x % width === 0 && x !== 0) y++;
      }
    return bmap.dataURL();
}
