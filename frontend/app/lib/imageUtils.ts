type ImageAsset =
  | string
  | { src?: string; default?: { src?: string } };

export type WebpackRequireContext = {
  keys: () => string[];
  <T = ImageAsset>(key: string): T;
};

export function typedRequireContext(context: WebpackRequireContext): WebpackRequireContext {
  return context;
}

export type ImageMap = Record<string, string>;

function isImageObject(value: unknown): value is { src?: string; default?: { src?: string } } {
  return typeof value === "object" && value !== null;
}

export function createImageMap(context: {
  keys: () => string[];
  (key: string): ImageAsset;
}): ImageMap {
  const map: ImageMap = {};

  context.keys().forEach((key) => {
    const fileName = key.replace(/^\.\//, "");
    const asset = context(key);

    let url = "";
    if (typeof asset === "string") {
      url = asset;
    } else if (isImageObject(asset)) {
      url = asset.src ?? asset.default?.src ?? "";
    }

    if (url) {
      map[fileName] = url;
    }
  });

  return map;
}

export function resolveImageUrl(imageMap: ImageMap, name: string): string {
  if (!name) return "";
  if (/^(https?:)?\/\//.test(name) || name.startsWith("/")) return name;
  return imageMap[name] ?? name;
}
