# Nidaamka Aqoonsiga Isticmaalaha - Modern Glassmorphism Auth

Kani waa nidaam yar oo casri ah oo loogu talagalay Diiwaan-gelinta (Register) iyo Gidista Nidaamka (Login). Mashruucan waxaa lagu dhisay **React Hooks Horu-marsan** sida `Context API` iyo `useRef`, waxaana loo nashqadeeyey qaabka **Glassmorphism (Muraayadda dhalanaysa)** iyadoo la isticmaalayo kaliya JavaScript Styles (No Tailwind CSS / No External CSS).

## ✨ Tilmaamaha Interface-ka (Design Features)

* **Glassmorphism UI:** Card-ka weyn wuxuu leeyahay saameyn muraayad ah oo blur ah (`backdropFilter: 'blur(16px)'`) taas oo la jaan-qaadaysa asalka madow ee SaaS look-ga ah.
* **Glow Effects:** Background-ka waxaa lagu daray goobooyin ifaya oo midabada Indigo iyo Purple ah si ay bogga ugu yeelaan bilic gaar ah.
* **Premium Typography:** Qoraalada iyo badhamada waxaa la siiyey midabo shubantay ah (`gradients`) iyo farta Segoe UI oo ah mid aad ugu habboon shaashadaha Desktop-ka.
* **No Horizontal Scroll:** Cabbirka bogga waxaa loo xaddiday `maxWidth: '100%'` iyo `boxSizing: 'border-box'` si looga fogaado in boggu bidix iyo midig u nuuxsado marka mouse-ka la wareejinayo.

## ⚙️ Tiknoolajiyada & Hooks-ka (Tech Stack)

* **React (React 18+):**
  * `createContext` & `useContext`: Loogu talagalay in xogta isticmaalaha laga maamulo meel dhexe (State Management).
  * `useRef`: Si toos ah loogu shido (focus) meesha Username-ka marka uu isbeddelo form-ku.
  * `useEffect`: Si loo xakameeyo falka auto-focus-ka.
* **Styling:** Pure JavaScript CSS Objects (Nadiif ah oo aan u baahnayn wax qalab dheeri).

## 💻 Sida Loo Daaro (Quick Start)

1. **La soo deg mashaariicda (Clone):**
   ```bash
   git clone https://github.com/macaadaxmed5252-droid
   cd one
