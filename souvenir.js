document.addEventListener("DOMContentLoaded", function () {
  // -----------discountElements-----------
  const discountElements = [
    {
      id: 1,
      src: "./images/header/apartment.avif",
      cardName: "Rockfeller binası Suvenir",
      discountPrice: "10 AZN",
      realPrice: "20 AZN",
    },
    {
      id: 2,
      src: "./images/header/lasVegas.webp",
      cardName: "Las Vegas Suvenir",
      discountPrice: "25 AZN",
      realPrice: "50 AZN",
    },
    {
      id: 3,
      src: "./images/header/globus.avif",
      cardName: "Globus Suvenir",
      discountPrice: "12 AZN",
      realPrice: "24 AZN",
    },
    {
      id: 4,
      src: "./images/header/table.jpg",
      cardName: "Masa Suvenir",
      discountPrice: "45 AZN",
      realPrice: "90 AZN",
    },
  ];
  const discountCards = document.querySelector(".cards-discount");
  discountElements.map((element) => {
    const li = document.createElement("li");

    let starMarkup = "";
    for (let i = 0; i < 5; i++) {
      if (element.id === 1 && i >= 3) {
        starMarkup += `<p style="color: black;">★</p>`;
      } else if (element.id === 2 && i >= 4) {
        starMarkup += `<p style="color: black;">★</p>`;
      } else if (element.id === 3 && i >= 5) {
        starMarkup += `<p style="color: black;">★</p>`;
      } else if (element.id === 4 && i >= 3) {
        starMarkup += `<p style="color: black;">★</p>`;
      } else {
        starMarkup += `<p>★</p>`;
      }
    }

    li.innerHTML = `
          <div class="discount-percentage">
              <p>✸</p>
          </div>
          <p class="discount-text">50%</p>
          <div class="discount-image">
              <img
                  src=${element.src}
                  alt=${element.cardName}
              />
          </div>
          <h3>${element.cardName}</h3>
          <div class="value-discount">
              <p>Qiyməti :</p>
              <p>${element.discountPrice}</p>
              <p>${element.realPrice}</p>
          </div>
          <div class="star-element">
              ${starMarkup}
          </div>
          <button>Sifariş ver</button>
          <h4>Tələs, endirim bitmədən sifariş ver!</h4>
      `;
    discountCards.appendChild(li);
  });

  // -----------trending-products-----------
  const trendingProducts = [
    {
      id: 1,
      img: "./images/trending/paris.webp",
      alt: "Eyfel Suvenir",
    },
    {
      id: 2,
      img: "./images/trending/plate.png",
      alt: "Boşqab Suvenir",
    },
    {
      id: 3,
      img: "./images/trending/antika.png",
      alt: "Saxsı qablar Suvenir",
    },
    {
      id: 4,
      img: "./images/trending/minimans.png",
      alt: "Mini adamlar Suvenir",
    },
  ];
  const cardsTrending = document.querySelector(".cards-trending");
  trendingProducts.map((element) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <div class="trending-image">
            <img src=${element.img} alt=${element.alt} />
        </div>
        <h3>${element.alt}</h3>
    `;
    cardsTrending.appendChild(li);
  });
  // -----------exclusive-cards-----------
  const exclusiveElements = [
    {
      id: 1,
      src: "./images/trending/antika.png",
      cardName: "Saxsı qablar Suvenir",
      realPrice: "120 AZN",
    },
    {
      id: 2,
      src: "./images/trending/minimans.png",
      cardName: "Mini adamlar Suvenir",
      realPrice: "53 AZN",
    },
  ];
  const excCards = [
    {
      id: 1,
      src: "./images/trending/plate.png",
      cardName: "Boşqab Suvenir",
      realPrice: "Hədiyyə",
    },
  ];
  const cardsexclusive = document.querySelector(".cards-exclusive");
  exclusiveElements.map((element) => {
    const li = document.createElement("li");

    let starMarkup = "";
    for (let i = 0; i < 5; i++) {
      if (element.id === 1 && i >= 4) {
        starMarkup += `<p style="color: black;">★</p>`;
      } else if (element.id === 2 && i >= 2) {
        starMarkup += `<p style="color: black;">★</p>`;
      } else {
        starMarkup += `<p>★</p>`;
      }
    }

    li.innerHTML = `
        <div class="exc-image">
            <img
              src=${element.src}
              alt=${element.cardName}
            />
        </div>
        <h3>${element.cardName}</h3>
        <div class="value-element">
            <p>Qiyməti :</p>
            <p>${element.realPrice}</p>
        </div>
        <div class="star-element">
            ${starMarkup}
        </div>
    `;
    cardsexclusive.appendChild(li);
  });
  const excCard = document.querySelector(".exc-card");
  excCards.map((element) => {
    const li = document.createElement("li");

    let starMarkup = "";
    for (let i = 0; i < 5; i++) {
      if (element.id === 1 && i >= 4) {
        starMarkup += `<p style="color: black;">★</p>`;
      } else {
        starMarkup += `<p>★</p>`;
      }
    }

    li.innerHTML = `
        <div class="exc-image">
            <img
                src=${element.src}
                alt=${element.cardName}
            />
        </div>
        <h3>${element.cardName}</h3>
        <div class="value-element">
            <p>Qiyməti :</p>
            <p>${element.realPrice}</p>
        </div>
        <div class="star-element">
          ${starMarkup}
        </div>
    `;
    excCard.appendChild(li);
  });
  //   -----------all-cards-------------
  const allCardsElement = [
    {
      id: 1,
      src: "./images/allCards/mountain.png",
      cardName: "Dağ Suvenir",
      realPrice: "35 AZN",
    },
    {
      id: 2,
      src: "./images/allCards/kukla.png",
      cardName: "Kukla Suvenir",
      realPrice: "52 AZN",
    },
    {
      id: 3,
      src: "./images/allCards/kuklalar.png",
      cardName: "Kuklalar Suvenir",
      realPrice: "65 AZN",
    },
    {
      id: 4,
      src: "./images/header/lasVegas.webp",
      cardName: "Las Vegas Suvenir",
      realPrice: "25 AZN",
    },
    {
      id: 5,
      src: "./images/allCards/taxtaQab.png",
      cardName: "Taxta qablar Suvenir",
      realPrice: "33 AZN",
    },
    {
      id: 6,
      src: "./images/allCards/sandiq.png",
      cardName: "Sandıq Suvenir",
      realPrice: "45 AZN",
    },
    {
      id: 7,
      src: "./images/header/apartment.avif",
      cardName: "Rockfeller binası Suvenir",
      realPrice: "10 AZN",
    },
    {
      id: 8,
      src: "./images/allCards/saxsiQab.png",
      cardName: "Saxsı qab Suvenir",
      realPrice: "110 AZN",
    },
    {
      id: 9,
      src: "./images/allCards/saxsiBosqab.png",
      cardName: "Saxsı boşqab Suvenir",
      realPrice: "200 AZN",
    },
    {
      id: 10,
      src: "./images/header/table.jpg",
      cardName: "Masa Suvenir",
      realPrice: "45 AZN",
    },
    {
      id: 11,
      src: "./images/allCards/acarliq.png",
      cardName: "Açarlıq Suvenir",
      realPrice: "10 AZN",
    },
    {
      id: 12,
      src: "./images/allCards/atHeykelleri.png",
      cardName: "At heykəlləri Suvenir",
      realPrice: "30-100 AZN",
    },
    {
      id: 13,
      src: "./images/allCards/dibcek.png",
      cardName: "Dibçək Suvenir",
      realPrice: "33 AZN",
    },
    {
      id: 14,
      src: "./images/allCards/saxsiQablar.png",
      cardName: "Saxsı qablar Suvenir",
      realPrice: "140 AZN",
    },
    {
      id: 15,
      src: "./images/header/globus.avif",
      cardName: "Globus Suvenir",
      realPrice: "12 AZN",
    },
    {
      id: 16,
      src: "./images/allCards/heykeller.png",
      cardName: "Heykəllər Suvenir",
      realPrice: "60 AZN",
    },
    {
      id: 17,
      src: "./images/trending/paris.webp",
      cardName: "Eyfel Suvenir",
      realPrice: "30 AZN",
    },
    {
      id: 18,
      src: "./images/trending/plate.png",
      cardName: "Boşqab Suvenir",
      realPrice: "40 AZN",
    },
    {
      id: 19,
      src: "./images/trending/antika.png",
      cardName: "Saxsı qablar Suvenir",
      realPrice: "120 AZN",
    },
    {
      id: 20,
      src: "./images/trending/minimans.png",
      cardName: "Mini adamlar Suvenir",
      realPrice: "53 AZN",
    },
    {
      id: 21,
      src: "./images/man/cup.png",
      cardName: "Fincan Suvenir",
      realPrice: "42 AZN",
    },
    {
      id: 22,
      src: "./images/man/serabQabi.png",
      cardName: "Şərab qabı Suvenir",
      realPrice: "67 AZN",
    },
    {
      id: 23,
      src: "./images/man/qapaqAcan.png",
      cardName: "Qapaq açan Suvenir",
      realPrice: "12 AZN",
    },
    {
      id: 24,
      src: "./images/man/saat.png",
      cardName: "Cib Saatı Suvenir",
      realPrice: "115 AZN",
    },
    {
      id: 25,
      src: "./images/man/qapaqAcan1.png",
      cardName: "Qapaq Açan Suvenir",
      realPrice: "35 AZN",
    },
    {
      id: 26,
      src: "./images/man/adamlar.png",
      cardName: "Mini Men Suvenir",
      realPrice: "46 AZN",
    },
    {
      id: 27,
      src: "./images/man/qolduymesi.png",
      cardName: "Qol Düyməsi Suvenir",
      realPrice: "39 AZN",
    },
    {
      id: 28,
      src: "./images/man/serabQabi1.png",
      cardName: "Şərab qabı Suvenir",
      realPrice: "49 AZN",
    },
    {
      id: 29,
      src: "./images/man/orduBicagi.png",
      cardName: "Ordu Bıçağı Suvenir",
      realPrice: "20 AZN",
    },
    {
      id: 30,
      src: "./images/man/kopukQabi.png",
      cardName: "Köpük qabı Suvenir",
      realPrice: "30 AZN",
    },
    {
      id: 31,
      src: "./images/man/gulle.png",
      cardName: "Güllə Suvenir",
      realPrice: "43 AZN",
    },
    {
      id: 32,
      src: "./images/man/miniFutbolcu.png",
      cardName: "Futbolçu Suvenir",
      realPrice: "34 AZN",
    },
    {
      id: 33,
      src: "./images/woman/esyaQabi.png",
      cardName: "Əşya qabı Suvenir",
      realPrice: "30 AZN",
    },
    {
      id: 34,
      src: "./images/woman/kubik.png",
      cardName: "Kubik Suvenir",
      realPrice: "22 AZN",
    },
    {
      id: 35,
      src: "./images/woman/brelok.png",
      cardName: "Açarlıq Suvenir",
      realPrice: "15 AZN",
    },
    {
      id: 36,
      src: "./images/woman/mermer.png",
      cardName: "Mərmər Suvenir",
      realPrice: "75 AZN",
    },
    {
      id: 37,
      src: "./images/woman/gul.png",
      cardName: "Süni gül Suvenir",
      realPrice: "25 AZN",
    },
    {
      id: 38,
      src: "./images/woman/hediyye.png",
      cardName: "Hədiyyəlik Suvenir",
      realPrice: "50 AZN",
    },
    {
      id: 39,
      src: "./images/woman/rengliQablar.png",
      cardName: "Rəngli qablar Suvenir",
      realPrice: "44 AZN",
    },
    {
      id: 40,
      src: "./images/woman/lampa.png",
      cardName: "Lampa Suvenir",
      realPrice: "40 AZN",
    },
    {
      id: 41,
      src: "./images/woman/hediyyelik.png",
      cardName: "Hediyyelik Suvenir",
      realPrice: "53 AZN",
    },
    {
      id: 42,
      src: "./images/woman/taxtaLovhe.png",
      cardName: "Taxta lövhə Suvenir",
      realPrice: "39 AZN",
    },
    {
      id: 43,
      src: "./images/woman/samQabi.png",
      cardName: "Şam qabı Suvenir",
      realPrice: "32 AZN",
    },
    {
      id: 44,
      src: "./images/woman/taxta.png",
      cardName: "Taxta Suvenir",
      realPrice: "18 AZN",
    },
  ];
  const allCards = document.querySelector(".cards-all");
  const paginationAllCards = document.querySelector(".pagination-in-all-cards");
  let isCardClicked = false;
  const recordsPerPage = 8;
  const numberOfPages = Math.ceil(allCardsElement.length / recordsPerPage);

  function renderAllCards(page) {
    const startIndex = (page - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    const paginatedRecords = allCardsElement.slice(startIndex, endIndex);

    allCards.innerHTML = "";

    const starThresholds = {
      1: 4,
      2: 3,
      3: 5,
      4: 3,
      5: 2,
      6: 4,
      7: 5,
      8: 1,
      9: 5,
      10: 2,
      11: 2,
      12: 4,
      13: 3,
      14: 3,
      15: 5,
      16: 5,
      17: 3,
      18: 2,
      19: 4,
      20: 5,
      21: 1,
      22: 4,
      23: 5,
      24: 5,
      25: 4,
      26: 4,
      27: 2,
      28: 2,
      29: 1,
      30: 2,
      31: 5,
      32: 4,
      33: 1,
      34: 5,
      35: 5,
      36: 2,
      37: 4,
      38: 5,
      39: 3,
      40: 5,
      41: 2,
      42: 5,
      43: 3,
      44: 5,
    };

    paginatedRecords.forEach((element) => {
      const li = document.createElement("li");

      const threshold = starThresholds[element.id] || 5;

      let starMarkup = "";
      for (let i = 0; i < 5; i++) {
        if (i >= threshold) {
          starMarkup += `<p style="color: black;">★</p>`;
        } else {
          starMarkup += `<p>★</p>`;
        }
      }

      li.innerHTML = `
        <div class="all-card-image">
            <img
                src=${element.src}
                alt=${element.cardName}
            />
        </div>
        <h3>${element.cardName}</h3>
        <div class="value-element">
            <p>Qiyməti :</p>
            <p>${element.realPrice}</p>
        </div>
        <div class="star-element">
          ${starMarkup}
        </div>
        <button>Sifariş ver</button>
    `;
      allCards.appendChild(li);
      // -----------cards-clicked-----------
      li.addEventListener("click", () => {
        if (!isCardClicked) {
          li.classList.add("clicked-card");
          isCardClicked = true;
        } else {
          li.classList.remove("clicked-card");
          isCardClicked = false;
        }
      });
    });
  }
  function renderAllCardsPagination(currentPage) {
    paginationAllCards.innerHTML = "";
    for (let i = 1; i <= numberOfPages; i++) {
      const pageLink = document.createElement("button");
      pageLink.textContent = i;
      pageLink.className = "page-number";
      if (i === currentPage) {
        pageLink.style.backgroundColor = "#2f4858";
      }
      pageLink.addEventListener("click", () => {
        renderAllCards(i);
        renderAllCardsPagination(i);
      });
      paginationAllCards.appendChild(pageLink);
    }
  }
  renderAllCards(1);
  renderAllCardsPagination(1);
  // ----------------man-cards--------------
  const manCardsElement = [
    {
      id: 1,
      src: "./images/man/cup.png",
      cardName: "Fincan Suvenir",
      realPrice: "42 AZN",
    },
    {
      id: 2,
      src: "./images/man/serabQabi.png",
      cardName: "Şərab qabı Suvenir",
      realPrice: "67 AZN",
    },
    {
      id: 3,
      src: "./images/man/qapaqAcan.png",
      cardName: "Qapaq açan Suvenir",
      realPrice: "12 AZN",
    },
    {
      id: 4,
      src: "./images/man/saat.png",
      cardName: "Cib Saatı Suvenir",
      realPrice: "115 AZN",
    },
    {
      id: 5,
      src: "./images/man/qapaqAcan1.png",
      cardName: "Qapaq Açan Suvenir",
      realPrice: "35 AZN",
    },
    {
      id: 6,
      src: "./images/man/adamlar.png",
      cardName: "Mini Men Suvenir",
      realPrice: "46 AZN",
    },
    {
      id: 7,
      src: "./images/man/qolduymesi.png",
      cardName: "Qol Düyməsi Suvenir",
      realPrice: "39 AZN",
    },
    {
      id: 8,
      src: "./images/man/serabQabi1.png",
      cardName: "Şərab qabı Suvenir",
      realPrice: "49 AZN",
    },
    {
      id: 9,
      src: "./images/man/orduBicagi.png",
      cardName: "Ordu Bıçağı Suvenir",
      realPrice: "20 AZN",
    },
    {
      id: 10,
      src: "./images/man/kopukQabi.png",
      cardName: "Köpük qabı Suvenir",
      realPrice: "30 AZN",
    },
    {
      id: 11,
      src: "./images/man/gulle.png",
      cardName: "Güllə Suvenir",
      realPrice: "43 AZN",
    },
    {
      id: 12,
      src: "./images/man/miniFutbolcu.png",
      cardName: "Futbolçu Suvenir",
      realPrice: "34 AZN",
    },
  ];
  const manCards = document.querySelector(".man-cards");
  const paginationManCards = document.querySelector(".pagination-in-man-cards");
  let isCardClickedMan = false;
  const recordsPerPageMan = 6;
  const numberOfPagesMan = Math.ceil(
    manCardsElement.length / recordsPerPageMan
  );

  function renderManCards(page) {
    const startIndex = (page - 1) * recordsPerPageMan;
    const endIndex = startIndex + recordsPerPageMan;
    const paginatedRecords = manCardsElement.slice(startIndex, endIndex);

    manCards.innerHTML = "";

    const starThresholds = {
      1: 4,
      2: 3,
      3: 5,
      4: 3,
      5: 2,
      6: 4,
      7: 5,
      8: 1,
      9: 5,
      10: 2,
      11: 2,
      12: 4,
      13: 3,
      14: 3,
      15: 5,
      16: 5,
    };

    paginatedRecords.forEach((element) => {
      const li = document.createElement("li");

      const threshold = starThresholds[element.id] || 5;

      let starMarkup = "";
      for (let i = 0; i < 5; i++) {
        if (i >= threshold) {
          starMarkup += `<p style="color: black;">★</p>`;
        } else {
          starMarkup += `<p>★</p>`;
        }
      }

      li.innerHTML = `
        <div class="man-image-souvenir">
            <img
                src=${element.src}
                alt=${element.cardName}
            />
        </div>
        <h3>${element.cardName}</h3>
        <div class="value-element">
            <p>Qiyməti :</p>
            <p>${element.realPrice}</p>
        </div>
        <div class="star-element">
            ${starMarkup}
        </div>
        <button>Sifariş ver</button>
    `;
      manCards.appendChild(li);
      // -----------cards-clicked-----------
      li.addEventListener("click", () => {
        if (!isCardClickedMan) {
          li.classList.add("clicked-card");
          isCardClickedMan = true;
        } else {
          li.classList.remove("clicked-card");
          isCardClickedMan = false;
        }
      });
    });
  }
  function renderManCardsPagination(currentPage) {
    paginationManCards.innerHTML = "";
    for (let i = 1; i <= numberOfPagesMan; i++) {
      const pageLink = document.createElement("button");
      pageLink.textContent = i;
      pageLink.className = "page-number";
      if (i === currentPage) {
        pageLink.style.backgroundColor = "#2f4858";
      }
      pageLink.addEventListener("click", () => {
        renderManCards(i);
        renderManCardsPagination(i);
      });
      paginationManCards.appendChild(pageLink);
    }
  }
  renderManCards(1);
  renderManCardsPagination(1);
  // ----------------woman-cards--------------
  const womanCardsElement = [
    {
      id: 1,
      src: "./images/woman/esyaQabi.png",
      cardName: "Əşya qabı Suvenir",
      realPrice: "30 AZN",
    },
    {
      id: 2,
      src: "./images/woman/kubik.png",
      cardName: "Kubik Suvenir",
      realPrice: "22 AZN",
    },
    {
      id: 3,
      src: "./images/woman/brelok.png",
      cardName: "Açarlıq Suvenir",
      realPrice: "15 AZN",
    },
    {
      id: 4,
      src: "./images/woman/mermer.png",
      cardName: "Mərmər Suvenir",
      realPrice: "75 AZN",
    },
    {
      id: 5,
      src: "./images/woman/gul.png",
      cardName: "Süni gül Suvenir",
      realPrice: "25 AZN",
    },
    {
      id: 6,
      src: "./images/woman/hediyye.png",
      cardName: "Hədiyyəlik Suvenir",
      realPrice: "50 AZN",
    },
    {
      id: 7,
      src: "./images/woman/rengliQablar.png",
      cardName: "Rəngli qablar Suvenir",
      realPrice: "44 AZN",
    },
    {
      id: 8,
      src: "./images/woman/lampa.png",
      cardName: "Lampa Suvenir",
      realPrice: "40 AZN",
    },
    {
      id: 9,
      src: "./images/woman/hediyyelik.png",
      cardName: "Hediyyelik Suvenir",
      realPrice: "53 AZN",
    },
    {
      id: 10,
      src: "./images/woman/taxtaLovhe.png",
      cardName: "Taxta lövhə Suvenir",
      realPrice: "39 AZN",
    },
    {
      id: 11,
      src: "./images/woman/samQabi.png",
      cardName: "Şam qabı Suvenir",
      realPrice: "32 AZN",
    },
    {
      id: 12,
      src: "./images/woman/taxta.png",
      cardName: "Taxta Suvenir",
      realPrice: "18 AZN",
    },
  ];
  const womanCards = document.querySelector(".woman-cards");
  const paginationWomanCards = document.querySelector(
    ".pagination-in-woman-cards"
  );
  let isCardClickedWoman = false;
  const recordsPerPageWoman = 6;
  const numberOfPagesWoman = Math.ceil(
    womanCardsElement.length / recordsPerPageWoman
  );

  function renderWomanCards(page) {
    const startIndex = (page - 1) * recordsPerPageWoman;
    const endIndex = startIndex + recordsPerPageWoman;
    const paginatedRecords = womanCardsElement.slice(startIndex, endIndex);

    womanCards.innerHTML = "";

    const starThresholds = {
      1: 3,
      2: 2,
      3: 4,
      4: 5,
      5: 1,
      6: 4,
      7: 5,
      8: 5,
      9: 4,
      10: 4,
      11: 2,
      12: 2,
      13: 1,
      14: 2,
      15: 5,
      16: 4,
    };

    paginatedRecords.forEach((element) => {
      const li = document.createElement("li");

      const threshold = starThresholds[element.id] || 5;

      let starMarkup = "";
      for (let i = 0; i < 5; i++) {
        if (i >= threshold) {
          starMarkup += `<p style="color: black;">★</p>`;
        } else {
          starMarkup += `<p>★</p>`;
        }
      }

      li.innerHTML = `
        <div class="woman-image-souvenir">
            <img
                src=${element.src}
                alt=${element.cardName}
            />
        </div>
        <h3>${element.cardName}</h3>
        <div class="value-element">
            <p>Qiyməti :</p>
            <p>${element.realPrice}</p>
        </div>
        <div class="star-element">
            ${starMarkup}
        </div>
        <button>Sifariş ver</button>
    `;
      womanCards.appendChild(li);
      // -----------cards-clicked-----------
      li.addEventListener("click", () => {
        if (!isCardClickedWoman) {
          li.classList.add("clicked-card");
          isCardClickedWoman = true;
        } else {
          li.classList.remove("clicked-card");
          isCardClickedWoman = false;
        }
      });
    });
  }
  function renderWomanCardsPagination(currentPage) {
    paginationWomanCards.innerHTML = "";
    for (let i = 1; i <= numberOfPagesWoman; i++) {
      const pageLink = document.createElement("button");
      pageLink.textContent = i;
      pageLink.className = "page-number";
      if (i === currentPage) {
        pageLink.style.backgroundColor = "#d55593";
      }
      pageLink.addEventListener("click", () => {
        renderWomanCards(i);
        renderWomanCardsPagination(i);
      });
      paginationWomanCards.appendChild(pageLink);
    }
  }
  renderWomanCards(1);
  renderWomanCardsPagination(1);
  // -----------navbar---------
  const navbarLogoImage = document.querySelector(".navbar-image");
  navbarLogoImage.addEventListener("click", () => {
    window.location.reload();
  });
});
