const totalPrice = document.getElementById('total-price');

/* memory price for 8gb */
const memory = document.getElementById('memory-price');
const extraMemoryCost = document.getElementById('extra-memory');
memory.addEventListener('click', function () {
    extraMemoryCost.innerText = 0;
    totalPricee();
});
/* memory price for 16gb */
const memory16Gb = document.getElementById('memory-price-16gb');
memory16Gb.addEventListener('click', function () {
    extraMemoryCost.innerText = 180;
    totalPricee();
});

/* for extra storageCost for 256gb */
const storage = document.getElementById('storage-price');
const extraStorageCost = document.getElementById('extra-storage');
storage.addEventListener('click', function () {
    extraStorageCost.innerText = 0;
    totalPricee();
});
/*  for 512gb */

const storage512Gb = document.getElementById('storage-512gb')
storage512Gb.addEventListener('click', function () {
    extraStorageCost.innerText = 100;
    totalPricee();
});
/* for 1tb storage */
const storage1Tb = document.getElementById('storage-1tb');
storage1Tb.addEventListener('click', function () {
    extraStorageCost.innerText = 180;
    totalPricee();
});


/* chosing delivarey option */
/* without charge */
const delivaryWithout = document.getElementById('without-fee');
const delivaryCost = document.getElementById('delivary-fee');
delivaryWithout.addEventListener('click', function () {
    delivaryCost.innerText = 0;
    totalPricee();
});

/* with-charge */

const delivareyWith = document.getElementById('with-fee');
delivareyWith.addEventListener('click', function () {
    delivaryCost.innerText = 20;
    totalPricee();
});

/* call function */

const promoTotal = document.getElementById('promo-total');
function totalPricee() {
    const extra = 1299 + parseInt(extraMemoryCost.innerText) + parseInt(extraStorageCost.innerText) + parseInt(delivaryCost.innerText);
    totalPrice.innerText = extra;
    promoTotal.innerText = extra;
};

/*-- ---promo-code discount section---- */
const promoButton = document.getElementById('promo-button');
promoButton.addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input');
    const totalInput = parseInt(totalPrice.innerText);
    if (promoInput.value == 'stevekaku') {
        promoTotal.innerText = totalInput - (totalInput * 20 / 100);
    }
    promoInput.value = "";
})
