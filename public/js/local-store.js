const STORE_KEY = "aplodLocalData";
const AUTH_KEY = "aplodAdminLoggedIn";

const seedData = {
  categories: {
    cases: {
      name: "Cases",
      description: "Premium mobile case covers",
      status: "active",
      imageUrl: "images/Screenshot 2026-05-19 182848.png"
    },
    screen_glass: {
      name: "Screen Glass",
      description: "Premium borderless corning glass screen protectors",
      status: "active",
      imageUrl: "images/WhatsApp Image 2026-05-19 at 2.07.46 PM.jpeg"
    }
  },
  products: {
    green_iphone_cover: {
      name: "Aplod Green iPhone Cover",
      categoryId: "cases",
      type: "Cases",
      price: 449,
      imageUrl: "images/Screenshot 2026-05-19 182848.png",
      hoverImageUrl: "images/Screenshot 2026-05-19 182738.png",
      insideImageUrl: "images/Screenshot 2026-05-19 182832.png"
    },
    iphone_17_pro_max_sports_car_logo_case: {
      name: "iPhone 17 Pro Max Sports Car Logo Liquid Silicone Case Cover",
      categoryId: "cases",
      type: "Cases",
      price: 449,
      imageUrl: "images/frato-iphone-17-series-iphone-17-pro-max-sports-car-logo-liquid-silicone-case-cover-iphone-17-pro-max-sports-car-logo-liquid-silicone-case-cover-1220975347_1800x1800.webp",
      hoverImageUrl: "images/frato-iphone-17-series-iphone-17-pro-max-sports-car-logo-liquid-silicone-case-cover-iphone-17-pro-max-sports-car-logo-liquid-silicone-case-cover-1220975343_1800x1800.webp",
      insideImageUrl: "images/frato-iphone-17-series-iphone-17-pro-sports-car-logo-liquid-silicone-case-cover-iphone-17-pro-sports-car-logo-liquid-silicone-case-cover-1220975341_1800x1800.webp",
      imageUrls: [
        "images/frato-iphone-17-series-iphone-17-pro-max-sports-car-logo-liquid-silicone-case-cover-iphone-17-pro-max-sports-car-logo-liquid-silicone-case-cover-1220975347_1800x1800.webp",
        "images/frato-iphone-17-series-iphone-17-pro-max-sports-car-logo-liquid-silicone-case-cover-iphone-17-pro-max-sports-car-logo-liquid-silicone-case-cover-1220975343_1800x1800.webp",
        "images/frato-iphone-17-series-iphone-17-pro-sports-car-logo-liquid-silicone-case-cover-iphone-17-pro-sports-car-logo-liquid-silicone-case-cover-1220975341_1800x1800.webp",
        "images/frato-iphone-17-series-iphone-17-pro-max-sports-car-logo-liquid-silicone-case-cover-iphone-17-pro-max-sports-car-logo-liquid-silicone-case-cover-1220975345_1800x1800.webp"
      ]
    },
    yongpoix_borderless_corning_glass: {
      name: "Yongpoix Borderless Corning Glass Screen Protector",
      categoryId: "screen_glass",
      type: "Screen Glass",
      price: 199,
      imageUrl: "images/WhatsApp Image 2026-05-19 at 2.07.46 PM.jpeg",
      hoverImageUrl: "images/WhatsApp Image 2026-05-19 at 2.07.46 PM.jpeg",
      insideImageUrl: "images/WhatsApp Image 2026-05-19 at 2.07.46 PM.jpeg",
      videoUrl: "images/WhatsApp Video 2026-05-19 at 2.08.04 PM.mp4",
      imageUrls: [
        "images/WhatsApp Image 2026-05-19 at 2.07.46 PM.jpeg"
      ]
    }
  },
  bestsellers: {
    green_iphone_cover: {
      name: "Aplod Green iPhone Cover",
      type: "Cases",
      price: 449,
      imageUrl: "images/Screenshot 2026-05-19 182848.png",
      hoverImageUrl: "images/Screenshot 2026-05-19 182738.png",
      insideImageUrl: "images/Screenshot 2026-05-19 182832.png"
    },
    iphone_17_pro_max_sports_car_logo_case: {
      name: "iPhone 17 Pro Max Sports Car Logo Liquid Silicone Case Cover",
      type: "Cases",
      price: 449,
      imageUrl: "images/frato-iphone-17-series-iphone-17-pro-max-sports-car-logo-liquid-silicone-case-cover-iphone-17-pro-max-sports-car-logo-liquid-silicone-case-cover-1220975347_1800x1800.webp",
      hoverImageUrl: "images/frato-iphone-17-series-iphone-17-pro-max-sports-car-logo-liquid-silicone-case-cover-iphone-17-pro-max-sports-car-logo-liquid-silicone-case-cover-1220975343_1800x1800.webp",
      insideImageUrl: "images/frato-iphone-17-series-iphone-17-pro-sports-car-logo-liquid-silicone-case-cover-iphone-17-pro-sports-car-logo-liquid-silicone-case-cover-1220975341_1800x1800.webp",
      imageUrls: [
        "images/frato-iphone-17-series-iphone-17-pro-max-sports-car-logo-liquid-silicone-case-cover-iphone-17-pro-max-sports-car-logo-liquid-silicone-case-cover-1220975347_1800x1800.webp",
        "images/frato-iphone-17-series-iphone-17-pro-max-sports-car-logo-liquid-silicone-case-cover-iphone-17-pro-max-sports-car-logo-liquid-silicone-case-cover-1220975343_1800x1800.webp",
        "images/frato-iphone-17-series-iphone-17-pro-sports-car-logo-liquid-silicone-case-cover-iphone-17-pro-sports-car-logo-liquid-silicone-case-cover-1220975341_1800x1800.webp",
        "images/frato-iphone-17-series-iphone-17-pro-max-sports-car-logo-liquid-silicone-case-cover-iphone-17-pro-max-sports-car-logo-liquid-silicone-case-cover-1220975345_1800x1800.webp"
      ]
    },
    yongpoix_borderless_corning_glass: {
      name: "Yongpoix Borderless Corning Glass Screen Protector",
      type: "Screen Glass",
      price: 199,
      imageUrl: "images/WhatsApp Image 2026-05-19 at 2.07.46 PM.jpeg",
      hoverImageUrl: "images/WhatsApp Image 2026-05-19 at 2.07.46 PM.jpeg",
      insideImageUrl: "images/WhatsApp Image 2026-05-19 at 2.07.46 PM.jpeg",
      videoUrl: "images/WhatsApp Video 2026-05-19 at 2.08.04 PM.mp4",
      imageUrls: [
        "images/WhatsApp Image 2026-05-19 at 2.07.46 PM.jpeg"
      ]
    }
  },
  testimonials: {},
  orders: {},
  carts: {},
  uploads: {}
};

const clone = (value) => value == null ? value : JSON.parse(JSON.stringify(value));
const pinnedSeedKeys = {
  categories: ["cases", "screen_glass"],
  products: ["green_iphone_cover", "iphone_17_pro_max_sports_car_logo_case", "yongpoix_borderless_corning_glass"],
  bestsellers: ["green_iphone_cover", "iphone_17_pro_max_sports_car_logo_case", "yongpoix_borderless_corning_glass"]
};

const removedSeedKeys = {
  categories: ["aplod_design", "iphone_17_series"]
};

function readStore() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORE_KEY)) || {};
    const data = {
      ...seedData,
      ...saved,
      categories: { ...seedData.categories, ...(saved.categories || {}) },
      products: { ...seedData.products, ...(saved.products || {}) },
      bestsellers: { ...seedData.bestsellers, ...(saved.bestsellers || {}) },
      testimonials: { ...seedData.testimonials, ...(saved.testimonials || {}) },
      orders: { ...seedData.orders, ...(saved.orders || {}) },
      carts: { ...seedData.carts, ...(saved.carts || {}) },
      uploads: { ...seedData.uploads, ...(saved.uploads || {}) }
    };

    Object.entries(pinnedSeedKeys).forEach(([section, keys]) => {
      keys.forEach((key) => {
        data[section][key] = clone(seedData[section][key]);
      });
    });

    Object.keys(data.categories).forEach((key) => {
      if (!pinnedSeedKeys.categories.includes(key)) {
        delete data.categories[key];
      }
    });

    Object.entries(removedSeedKeys).forEach(([section, keys]) => {
      keys.forEach((key) => {
        delete data[section][key];
      });
    });

    return data;
  } catch {
    return { ...seedData };
  }
}

function writeStore(data) {
  localStorage.setItem(STORE_KEY, JSON.stringify(data));
  window.dispatchEvent(new CustomEvent("aplod-local-store-change"));
}

function parts(path = "") {
  return String(path).split("/").filter(Boolean);
}

function readPath(path) {
  return parts(path).reduce((obj, key) => obj?.[key], readStore());
}

function writePath(path, value, merge = false) {
  const data = readStore();
  const keys = parts(path);
  let cursor = data;

  keys.slice(0, -1).forEach((key) => {
    cursor[key] = cursor[key] && typeof cursor[key] === "object" ? cursor[key] : {};
    cursor = cursor[key];
  });

  const last = keys[keys.length - 1];
  if (!last) return;

  if (value === null || value === undefined) {
    delete cursor[last];
  } else if (merge && cursor[last] && typeof cursor[last] === "object") {
    cursor[last] = { ...cursor[last], ...value };
  } else {
    cursor[last] = value;
  }

  writeStore(data);
}

function makeSnapshot(path) {
  const value = clone(readPath(path));
  return {
    exists: () => value !== undefined && value !== null,
    val: () => value ?? null,
    forEach: (callback) => {
      if (!value || typeof value !== "object") return false;
      Object.entries(value).forEach(([key, childValue]) => {
        callback({
          key,
          val: () => clone(childValue)
        });
      });
      return false;
    }
  };
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

export function initializeApp(config = {}) {
  return { config };
}

export function getDatabase() {
  return {};
}

export function ref(_db, path = "") {
  return { path };
}

export function onValue(reference, callback) {
  const emit = () => callback(makeSnapshot(reference.path));
  emit();
  window.addEventListener("aplod-local-store-change", emit);
  window.addEventListener("storage", emit);
  return () => {
    window.removeEventListener("aplod-local-store-change", emit);
    window.removeEventListener("storage", emit);
  };
}

export async function get(reference) {
  return makeSnapshot(reference.path);
}

export async function set(reference, value) {
  writePath(reference.path, clone(value));
}

export async function push(reference, value) {
  const id = `local_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
  writePath(`${reference.path}/${id}`, clone(value));
  return ref(null, `${reference.path}/${id}`);
}

export async function update(reference, value) {
  writePath(reference.path, clone(value), true);
}

export async function remove(reference) {
  writePath(reference.path, null);
}

export function getStorage() {
  return {};
}

export function getAuth() {
  return {};
}

export async function uploadBytes(reference, file) {
  const url = await fileToDataUrl(file);
  writePath(`uploads/${reference.path}`, url);
  reference.downloadURL = url;
  return { ref: reference };
}

export async function getDownloadURL(reference) {
  return reference.downloadURL || readPath(`uploads/${reference.path}`) || "";
}

export async function signInWithEmailAndPassword(_auth, email, password) {
  if (!email || !password) throw new Error("Email and password are required.");
  localStorage.setItem(AUTH_KEY, "true");
  window.dispatchEvent(new CustomEvent("aplod-auth-change"));
  return { user: { email } };
}

export function onAuthStateChanged(_auth, callback) {
  const emit = () => callback(localStorage.getItem(AUTH_KEY) === "true" ? { email: "local-admin" } : null);
  emit();
  window.addEventListener("aplod-auth-change", emit);
  return () => window.removeEventListener("aplod-auth-change", emit);
}

export async function signOut() {
  localStorage.removeItem(AUTH_KEY);
  window.dispatchEvent(new CustomEvent("aplod-auth-change"));
}

window.switchProductMedia = (button, type, mediaUrl) => {
  const card = button.closest(".card-product");
  if (!card || !mediaUrl) return;

  card.querySelectorAll(".aplod-image-option").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");

  const video = card.querySelector(".product-video");
  const images = card.querySelectorAll(".img-product, .img-hover");

  if (type === "video" && video) {
    images.forEach((img) => {
      img.style.display = "none";
    });
    video.src = mediaUrl;
    video.style.display = "block";
    video.play?.().catch(() => {});
    return;
  }

  if (video) {
    video.pause?.();
    video.style.display = "none";
  }

  images.forEach((img) => {
    img.style.display = "";
    img.src = mediaUrl;
    img.dataset.src = mediaUrl;
  });
};

window.switchProductImage = (button, imageUrl) => {
  window.switchProductMedia(button, "image", imageUrl);
};
