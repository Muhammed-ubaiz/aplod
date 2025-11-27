  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
    import { 
        getDatabase, 
        ref, 
        onValue, 
        push, 
        update, 
        remove,
        get,      // ← needed for reading the cart
        set       // ← needed for writing the whole cart
    } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";
    import { getStorage, ref as sRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-storage.js";




    // Initialize Firebase (one instance for all features)
    const firebaseConfig = {
        apiKey: "AIzaSyDfB0pwHCxzPHzeyPa0GvLOS-gQg0CaDA4",
        authDomain: "packup-4223f.firebaseapp.com",
        databaseURL: "https://packup-4223f-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "packup-4223f",
        storageBucket: "packup-4223f.firebasestorage.app",
        messagingSenderId: "747632150416",
        appId: "1:747632150416:web:69458ee5ad3ab5b27cd515"
    };

   
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);
    const storage = getStorage(app);

    // Helper: Re-init Swiper after dynamic content
    function updateSwiper(swiperClass) {
        setTimeout(() => {
            if (window.swipers && window.swipers[swiperClass]) {
                window.swipers[swiperClass].update();
            }
            // Or reinitialize if not using global swipers object
            else if (typeof Swiper !== 'undefined') {
                new Swiper(`.${swiperClass}`, {
                    slidesPerView: 1,
                    spaceBetween: 15,
                    pagination: { el: `.${swiperClass.replace('tf-sw-', 'sw-pagination-')}`, clickable: true },
                    breakpoints: {
                        768: { slidesPerView: 1.3 },
                        1024: { slidesPerView: 2 }
                    }
                });
            }
        }, 100);
    }
// 1. Load Categories (Collection Slider)
const collectionWrapper = document.getElementById('collectionWrapper');
if (collectionWrapper) {
    onValue(ref(db, 'categories'), (snapshot) => {
        collectionWrapper.innerHTML = '';

        if (snapshot.exists()) {
            // Get categories with their IDs
            const categoriesData = snapshot.val();
            const categories = Object.entries(categoriesData).map(([id, data]) => ({
                id: id,
                ...data
            }));

            if (categories.length === 0) {
                collectionWrapper.innerHTML = `<div class="swiper-slide text-center py-5"><p class="text-secondary">No categories available</p></div>`;
                return;
            }

            categories.forEach(cat => {
                const slide = document.createElement('div');
                slide.className = 'swiper-slide';
                slide.innerHTML = `
                    <div class="collection-circle hover-img">
                        <a href="products.html?category=${encodeURIComponent(cat.name)}" class="img-style radius-12">
                            <img class="lazyload" 
                                 data-src="${cat.imageUrl || 'images/collections/placeholder.jpg'}"
                                 src="${cat.imageUrl || 'images/collections/placeholder.jpg'}" 
                                 alt="${cat.name}" 
                                 style="height: 260px; object-fit: cover; width: 100%;">
                        </a>
                        <div class="collection-content text-center">
                            <div>
                                <a href="products.html?category=${encodeURIComponent(cat.name)}" class="cls-title">
                                    <h6 class="text">${cat.name}</h6>
                                    <i class="icon icon-arrowUpRight"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                `;
                collectionWrapper.appendChild(slide);
            });

            updateSwiper('tf-sw-collection');
        } else {
            collectionWrapper.innerHTML = `<div class="swiper-slide text-center py-5"><p class="text-secondary">No categories found</p></div>`;
        }
    }, (error) => {
        console.error("Error loading categories:", error);
        collectionWrapper.innerHTML = `<div class="swiper-slide text-center py-5"><p class="text-secondary text-danger">Error loading categories</p></div>`;
    });
}
    // 2. Load Products (Example: Product Grid)
    const productWrapper = document.getElementById('productWrapper');
    if (productWrapper) {
        onValue(ref(db, 'products'), (snapshot) => {
            productWrapper.innerHTML = '';

            if (snapshot.exists()) {
                const products = Object.values(snapshot.val());

                if (products.length === 0) {
                    productWrapper.innerHTML = `<p class="text-center text-secondary py-5">No products available</p>`;
                    return;
                }

                products.forEach(p => {
                    const item = document.createElement('div');
                    item.className = 'col-md-4 col-sm-6 mb-4';
                    item.innerHTML = `
                        <div class="product-card hover-img">
                            <a href="product-detail.html?id=${p.id || ''}">
                                <img src="${p.imageUrl || 'images/products/placeholder.jpg'}" 
                                     alt="${p.name}" class="img-fluid rounded">
                            </a>
                            <div class="product-info text-center mt-3">
                                <h6 class="product-name">${p.name}</h6>
                                <p class="text-primary fw-bold">$${Number(p.price || 0).toFixed(2)}</p>
                                <small class="text-muted">${p.category || 'Uncategorized'}</small>
                            </div>
                        </div>
                    `;
                    productWrapper.appendChild(item);
                });
            } else {
                productWrapper.innerHTML = `<p class="text-center text-secondary py-5">No products found</p>`;
            }
        });
    }

    // 3. Load Best Sellers (Horizontal or Grid)
    const bestSellerWrapper = document.getElementById('bestSellerWrapper');
    if (bestSellerWrapper) {
        onValue(ref(db, 'bestsellers'), (snapshot) => {
            bestSellerWrapper.innerHTML = '';

            if (snapshot.exists()) {
                const items = Object.values(snapshot.val());

                items.forEach(item => {
                    const card = document.createElement('div');
                    card.className = 'swiper-slide'; // or remove if not in swiper
                    card.innerHTML = `
                        <div class="best-seller-item hover-img text-center">
                            <img src="${item.imageUrl || 'images/bestseller/placeholder.jpg'}" 
                                 alt="${item.name}" class="rounded-circle mb-3" style="width:120px;height:120px;object-fit:cover;">
                            <h6 class="fw-bold">${item.name}</h6>
                            <p class="text-muted small">${item.type}</p>
                            <p class="text-primary fw-bold">$${Number(item.price || 0).toFixed(2)}</p>
                        </div>
                    `;
                    bestSellerWrapper.appendChild(card);
                });

                updateSwiper('tf-sw-bestseller');
            }
        });
    }

    // 4. Load Testimonials (Full Dynamic Swiper)
    const testimonialWrapper = document.getElementById('testimonialWrapper');
    if (testimonialWrapper) {
        onValue(ref(db, 'testimonials'), (snapshot) => {
            testimonialWrapper.innerHTML = '';

            if (snapshot.exists() && Object.values(snapshot.val()).length > 0) {
                const testimonials = Object.values(snapshot.val());

                testimonials.forEach(t => {
                    const slide = document.createElement('div');
                    slide.className = 'swiper-slide';

                    slide.innerHTML = `
                        <div class="testimonial-item hover-img" style="min-height: 290px;">
                            <div class="content">
                                <div class="content-top">
                                    <div class="list-star-default">
                                        <i class="icon icon-star"></i>
                                        <i class="icon icon-star"></i>
                                        <i class="icon icon-star"></i>
                                        <i class="icon icon-star"></i>
                                        <i class="icon icon-star"></i>
                                    </div>
                                    <p class="text-secondary">“${t.description || 'Great experience! Highly recommended.'}”</p>
                                </div>
                                <div class="box-avt d-flex align-items-center gap-3">
                                    <div class="avatar avt-60 round">
                                        <img src="${t.imageUrl || 'images/avatar/default-user.jpg'}" 
                                             alt="${t.name}" 
                                             onerror="this.src='https://via.placeholder.com/60/cccccc/666666?text=User'"
                                             class="rounded-circle">
                                    </div>
                                    <div class="info">
                                        <h6 class="name text-title mb-0">${t.name || 'Happy Customer'}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                    testimonialWrapper.appendChild(slide);
                });

                // Reinitialize testimonial swiper
                updateSwiper('tf-sw-testimonial');

            } else {
                testimonialWrapper.innerHTML = `
                    <div class="swiper-slide text-center py-5">
                        <p class="text-secondary fs-18">No testimonials yet. Be the first to share your experience!</p>
                    </div>`;
            }
        });
    }

    // Optional: Auto-reload Swipers on window resize (if needed)
    window.addEventListener('resize', () => {
        setTimeout(() => {
            ['tf-sw-collection', 'tf-sw-testimonial', 'tf-sw-bestseller'].forEach(cls => {
                if (window.swipers && window.swipers[cls]) {
                    window.swipers[cls].update();
                }
            });
        }, 300);
    });



		    // 5. Load Best Sellers – DYNAMIC GRID (replaces the static one above)
    const bestSellersGrid = document.getElementById('bestSellersGrid');
    if (bestSellersGrid) {
        onValue(ref(db, 'bestsellers'), (snapshot) => {
            // Clear loading / previous content
            bestSellersGrid.innerHTML = '';

            if (!snapshot.exists() || Object.keys(snapshot.val() || {}).length === 0) {
                bestSellersGrid.innerHTML = `
                    <div class="text-center w-100 py-5">
                        <p class="text-secondary fs-18">No best sellers yet.</p>
                    </div>`;
                return;
            }

            const bestsellers = Object.values(snapshot.val());

            bestsellers.forEach(item => {
                const productCard = document.createElement('div');
                productCard.className = 'card-product wow fadeInUp';
                productCard.setAttribute('data-wow-delay', '0s');

            productCard.innerHTML = `
    <div class="card-product-wrapper">
        <a href="products.html" class="product-img">
            <img class="lazyload img-product" 
                 data-src="${item.imageUrl || 'images/products/placeholder.jpg'}"
                 src="${item.imageUrl || 'images/products/placeholder.jpg'}"
                 alt="${item.name}">
            <img class="lazyload img-hover" 
                 data-src="${item.imageUrl || 'images/products/placeholder.jpg'}"
                 src="${item.imageUrl || 'images/products/placeholder.jpg'}"
                 alt="${item.name}">
        </a>
        <div class="list-btn-main">
            <a href="javascript:void(0)" class="btn-main-product" 
               onclick='addToCart({
                   name: "${item.name.replace(/'/g, "&#39;")}",
                   price: ${Number(item.price || 0)},
                   imageUrl: "${item.imageUrl || 'images/products/placeholder.jpg'}",
                   type: "${(item.type || '').replace(/'/g, "&#39;")}"
               })'>
               Add To Cart
            </a>
        </div>
    </div>
    <div class="card-product-info">
        <a href="product-detail.html" class="title link">${item.name}</a>
        ${item.type ? `<span class="text-secondary-2 d-block mb-0">${item.type}</span>` : ''}
        <span class="price">$${Number(item.price || 0).toFixed(2)}</span>
    </div>
`;

                bestSellersGrid.appendChild(productCard);
            });

            // Re-trigger lazyload (if you use lazysize)
            if (typeof lazySizes !== 'undefined') {
                lazySizes.autoSizer.checkElems();
            }

            // Re-init WOW.js for new cards (optional but nice)
            if (typeof WOW !== 'undefined') {
                new WOW().init();
            }
        }, { onlyOnce: false });
    }


		    // ==================== CART SYSTEM ====================
    const CART_REF = 'carts';
    let cartId = localStorage.getItem('cartSessionId');
    if (!cartId) {
        cartId = 'guest_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('cartSessionId', cartId);
    }
    const userCartRef = ref(db, `${CART_REF}/${cartId}`);

    // Load cart on page load
    onValue(userCartRef, (snapshot) => {
        const cartItems = snapshot.val() || {};
        renderMiniCart(Object.values(cartItems));
        updateCartCount();
    });

    // Update cart item count in header
    function updateCartCount() {
        const countEl = document.querySelector('.nav-cart .count-box');
        onValue(userCartRef, (snap) => {
            const items = snap.val() || {};
            const total = Object.values(items).reduce((sum, item) => sum + (item.quantity || 1), 0);
            if (countEl) countEl.textContent = total;
        }, { onlyOnce: true });
    }

    // Add to Cart Function (call from Add to Cart buttons)
    window.addToCart = async (product) => {
        try {
            const snapshot = await get(userCartRef);
            const currentCart = snapshot.val() || {};

            const productId = product.id || Date.now().toString();
            if (currentCart[productId]) {
                // Increase quantity
                currentCart[productId].quantity += 1;
            } else {
                // Add new item
                currentCart[productId] = {
                    id: productId,
                    name: product.name,
                    price: product.price,
                    imageUrl: product.imageUrl,
                    type: product.type || '',
                    quantity: 1
                };
            }

            await set(userCartRef, currentCart);
            showSuccessToast(`"${product.name}" added to cart!`);

            // Auto open cart modal
            const modal = new bootstrap.Modal(document.getElementById('shoppingCart'));
            modal.show();
        } catch (err) {
            console.error("Add to cart failed:", err);
            alert("Failed to add item to cart");
        }
    };

    // Remove from Cart
    window.removeFromCart = async (productId) => {
        try {
            const snapshot = await get(userCartRef);
            const cart = snapshot.val() || {};
            delete cart[productId];
            await set(userCartRef, cart);
            showSuccessToast("Item removed from cart");
        } catch (err) {
            console.error("Remove failed:", err);
        }
    };

    // Render Mini Cart in Modal
    function renderMiniCart(items) {
        const container = document.querySelector('#shoppingCart .tf-mini-cart-items');
        const subtotalEl = document.querySelector('#shoppingCart .tf-totals-total-value');

        if (!container) return;

        if (items.length === 0) {
            container.innerHTML = `
                <div class="text-center py-5">
                    <p class="text-secondary">Your cart is empty</p>
                    <a href="index.html" class="btn-line">Continue Shopping</a>
                </div>`;
            if (subtotalEl) subtotalEl.textContent = '$0.00';
            return;
        }

        container.innerHTML = items.map(item => `
            <div class="tf-mini-cart-item file-delete" data-id="${item.id}">
                <div class="tf-mini-cart-image">
                    <img class="lazyload" src="${item.imageUrl || 'images/products/placeholder.jpg'}" alt="${item.name}">
                </div>
                <div class="tf-mini-cart-info flex-grow-1">
                    <div class="mb_12 d-flex align-items-center justify-content-between flex-wrap gap-12">
                        <div class="text-title">
                            <a href="product-detail.html" class="link text-line-clamp-1">${item.name}</a>
                        </div>
                        <div class="text-button tf-btn-remove remove" onclick="removeFromCart('${item.id}')">
                            Remove
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-12">
                        ${item.type ? `<div class="text-secondary-2">${item.type}</div>` : '<div></div>'}
                        <div class="text-button">${item.quantity} × $${Number(item.price).toFixed(2)}</div>
                    </div>
                </div>
            </div>
        `).join('');

        // Update subtotal
        const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    }

    // Toast (reuse your existing or add this)
    window.showSuccessToast = (msg) => {
        const toast = `
            <div class="toast align-items-center text-white bg-success border-0 position-fixed" style="top:20px;right:20px;z-index:9999;">
                <div class="d-flex">
                    <div class="toast-body">${msg}</div>
                    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
                </div>
            </div>`;
        const el = document.createElement('div');
        el.innerHTML = toast;
        document.body.appendChild(el);
        new bootstrap.Toast(el.querySelector('.toast'), { delay: 3000 }).show();
        setTimeout(() => el.remove(), 4000);
    };