/* script.js - 溫暖爪印核心邏輯 */

// === 1. 神獸資料庫 (The Database) ===
// 這裡儲存了所有動物的詳細資料，用 ID 作為索引
const petDatabase = {
    // --- 狗狗 ---
    "D-01": { name: "銀河衛星毀滅者", gender: "公", age: "2歲 (成年)", color: "虛空咖", location: "臺南市", shelter: "SCP 基金會收容站點-19", origin: "臺南市 安南區", chip: "900123000456789", health: "能量指數穩定，已施打反物質疫苗。", desc: "擁有強大的下顎咬合力，專長是咬壞任何試圖發射訊號的裝置。建議飼主家中不要安裝第四台或衛星電視。", img: "images/dog-01.jpg" },
    "D-02": { name: "賈科米諾 星系守護者", gender: "母", age: "1歲 (成年)", color: "火焰黃", location: "臺北市", shelter: "第 51 區外星收容分部", origin: "臺北市 信義區", chip: "900123000456790", health: "護盾產生器運作正常。", desc: "守護範圍僅限於客廳沙發，任何試圖接近沙發的異界生物（包括郵差）都會受到吠叫攻擊。", img: "images/dog-02.jpg" },
    "D-03": { name: "地獄三頭犬表弟", gender: "公", age: "3歲 (成年)", color: "星塵白", location: "高雄市", shelter: "霍格華茲奇獸飼育場", origin: "高雄市 左營區", chip: "900123000456791", health: "身體強壯，雖然少兩顆頭但食量不減。", desc: "雖然只有一顆頭，但心裡住著三個靈魂。喜歡聽豎琴的音樂，聽到會睡著。", img: "images/dog-03.jpg" },
    "D-04": { name: "核能驅動柴油機", gender: "公", age: "5歲 (成年)", color: "混色戰甲", location: "臺中市", shelter: "侏羅紀公園後勤處", origin: "臺中市 西屯區", chip: "900123000456792", health: "核心反應爐穩定，呼嚕聲分貝略高。", desc: "睡覺時的呼嚕聲聽起來像是一台老舊的柴油拖拉機，但忠誠度是核能等級的。", img: "images/dog-04.jpg" },
    "D-05": { name: "量子糾纏態的阿土", gender: "母", age: "4個月 (幼年)", color: "米咖色", location: "新北市", shelter: "阿斯加德神獸照護中心", origin: "新北市 板橋區", chip: "900123000456793", health: "狀態不穩定，需要大量罐頭觀測。", desc: "既在又不在，當你拿著零食時，她會瞬間塌縮到你面前；當你要洗澡時，她會瞬間消失。", img: "images/dog-05.jpg" },
    "D-06": { name: "虛空吞噬者", gender: "公", age: "1歲 (成年)", color: "深褐", location: "臺北市", shelter: "SCP 基金會收容站點-19", origin: "臺北市 大安區", chip: "900123000456794", health: "消化系統連黑洞都能消化。", desc: "專吃拖鞋、襪子以及你作業本的角落。他的胃連接著異次元空間。", img: "images/dog-06.jpg" },
    "D-07": { name: "傑克船長", gender: "公", age: "4歲 (成年)", color: "深褐", location: "高雄市", shelter: "侏羅紀公園後勤處", origin: "高雄市 旗津區", chip: "900123000456795", health: "除了暈船外一切健康。", desc: "身為海盜王卻怕水，洗澡時會發出殺豬般的慘叫。喜歡站在最高處俯瞰他的領地。", img: "images/dog-07.jpg" },
    "D-08": { name: "終結者T-800", gender: "母", age: "2歲 (成年)", color: "金屬灰", location: "臺南市", shelter: "第 51 區外星收容分部", origin: "臺南市 東區", chip: "900123000456796", health: "液態金屬骨架完好。", desc: "每當你出門上班時，她的眼神彷彿在說：I'll be back (我會等你回來)。", img: "images/dog-08.jpg" },
    "D-09": { name: "五維空間觀測者", gender: "公", age: "3歲 (成年)", color: "黃", location: "新北市", shelter: "霍格華茲奇獸飼育場", origin: "新北市 新店區", chip: "900123000456797", health: "精神力波動正常。", desc: "經常對著空無一物的牆角凝視並搖尾巴，疑似在跟五維空間的生物溝通。", img: "images/dog-09.jpg" },
    "D-10": { name: "宇宙大爆炸", gender: "公", age: "6歲 (成年)", color: "星雲混色", location: "臺中市", shelter: "阿斯加德神獸照護中心", origin: "臺中市 北區", chip: "900123000456798", health: "能量過剩，需每日散步釋放。", desc: "一旦在家裡奔跑，破壞力堪比宇宙大爆炸。需要一位體力充沛的守護者。", img: "images/dog-10.jpg" },

    // --- 貓咪 ---
    "C-01": { name: "施努爾米內爾瓦大公爵夫人", gender: "母", age: "2歲 (成年)", color: "皇家潔白", location: "臺南市", shelter: "霍格華茲奇獸飼育場", origin: "臺南市 中西區", chip: "900123000456799", health: "尊貴之軀，無任何瑕疵。", desc: "擁有純正的貴族血統，每天需要進行三次下午茶儀式（罐頭）。不允許人類隨意觸摸聖體。", img: "images/cat-01.jpg" },
    "C-02": { name: "起司巫師戴夫", gender: "母", age: "1歲 (成年)", color: "混色戰甲", location: "臺北市", shelter: "侏羅紀公園後勤處", origin: "臺北市 松山區", chip: "900123000456800", health: "魔法迴路暢通。", desc: "精通「貪吃咒」，只要對你叫一聲，你手中的起司就會自動飛到她嘴裡。", img: "images/cat-02.jpg" },
    "C-03": { name: "薩諾斯·無限手套", gender: "公", age: "5歲 (成年)", color: "虎斑", location: "高雄市", shelter: "第 51 區外星收容分部", origin: "高雄市 三民區", chip: "900123000456801", health: "體重是無限寶石等級。", desc: "橘貓的食量是宇宙真理。只需彈指之間，你盤子裡的食物就會消失一半。", img: "images/cat-03.jpg" },
    "C-04": { name: "煤炭爵士", gender: "公", age: "2歲 (成年)", color: "暗物質", location: "新北市", shelter: "SCP 基金會收容站點-19", origin: "新北市 永和區", chip: "900123000456802", health: "隱形迷彩系統正常。", desc: "來自深淵的暗影刺客。關燈後會完全隱形，只剩下兩顆漂浮的眼睛。", img: "images/cat-04.jpg" },
    "C-05": { name: "支配者·罐頭粉碎機", gender: "母", age: "3歲 (成年)", color: "白灰戰神", location: "臺中市", shelter: "阿斯加德神獸照護中心", origin: "臺中市 南屯區", chip: "900123000456803", health: "戰鬥力 9000 以上。", desc: "家中真正的統治者。任何未經允許開啟的罐頭都將被視為對女王的供品。", img: "images/cat-05.jpg" },
    "C-06": { name: "神聖羅馬帝國皇帝", gender: "公", age: "1歲 (成年)", color: "賓士", location: "臺北市", shelter: "霍格華茲奇獸飼育場", origin: "臺北市 文山區", chip: "900123000456804", health: "精神錯亂但可愛。", desc: "既不神聖，也不羅馬，更不是皇帝，只是一隻臉上有白鬍子的賓士貓。", img: "images/cat-06.jpg" },
    "C-07": { name: "混沌編織者", gender: "公", age: "4歲 (成年)", color: "土星", location: "高雄市", shelter: "SCP 基金會收容站點-19", origin: "高雄市 鼓山區", chip: "900123000456805", health: "手賤屬性點滿。", desc: "他的貓掌能編織混沌。只要放在桌緣的水杯，絕對活不過三秒鐘。", img: "images/cat-07.jpg" },
    "C-08": { name: "不可名狀的克蘇魯", gender: "母", age: "2個月 (幼年)", color: "玳瑁", location: "臺南市", shelter: "侏羅紀公園後勤處", origin: "臺南市 安平區", chip: "900123000456806", health: "SAN 值檢定通過。", desc: "雖然只有兩個月大，但可愛程度足以讓任何人類理智斷線（San Check failed）。", img: "images/cat-08.jpg" },
    "C-09": { name: "跨維度旅行者·露露", gender: "母", age: "3歲 (成年)", color: "長毛舞姬", location: "新北市", shelter: "第 51 區外星收容分部", origin: "新北市 淡水區", chip: "900123000456807", health: "空間跳躍冷卻中。", desc: "經常消失在衣櫃深處的異次元入口（那是你剛摺好的衣服堆）。", img: "images/cat-09.jpg" },
    "C-10": { name: "噬元獸·大頭", gender: "公", age: "6歲 (成年)", color: "銀河短尾", location: "臺中市", shelter: "阿斯加德神獸照護中心", origin: "臺中市 豐原區", chip: "900123000456808", health: "危險等級：高。", desc: "外表看似藍貓，其實是宇宙危險生物噬元獸。請勿隨意拍打屁股，後果自負。", img: "images/cat-10.jpg" }
};

document.addEventListener('DOMContentLoaded', () => {
    // === 2. 通用：漢堡選單控制 ===
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('toggle');
        });
    }

    // === 3. 頁面判斷：如果在 adoption.html ===
    // 自動修正所有卡片的連結，加上 ?id=XXX
    const petGrid = document.getElementById('pet-grid');
    if (petGrid) {
        const cards = document.querySelectorAll('.pet-card');
        cards.forEach(card => {
            const id = card.getAttribute('data-id');
            const linkBtn = card.querySelector('.btn');
            if (id && linkBtn) {
                // 將連結改為帶參數的形式
                linkBtn.href = `details.html?id=${id}`;
            }
        });
        console.log("Adoption page: Links updated.");
    }

    // === 4. 頁面判斷：如果在 details.html ===
    // 讀取 URL 參數並渲染資料
    const detailName = document.getElementById('detail-name');
    if (detailName) { // 簡單判斷是否存在這個元素，代表在詳情頁
        // 1. 取得網址上的 id 參數
        const params = new URLSearchParams(window.location.search);
        const petId = params.get('id');

        // 2. 從資料庫找資料
        const pet = petDatabase[petId];

        if (pet) {
            // 3. 填入資料
            document.getElementById('detail-img').src = pet.img;
            document.getElementById('detail-name').textContent = pet.name;
            document.getElementById('detail-id').textContent = petId;
            document.getElementById('detail-chip').textContent = pet.chip;
            document.getElementById('detail-gender').textContent = pet.gender;
            document.getElementById('detail-age').textContent = pet.age;
            document.getElementById('detail-color').textContent = pet.color;
            document.getElementById('detail-location').textContent = pet.location;
            document.getElementById('detail-shelter').textContent = pet.shelter;
            document.getElementById('detail-origin').textContent = pet.origin;
            document.getElementById('detail-health').textContent = pet.health;
            document.getElementById('detail-desc').textContent = pet.desc;
            
            // 影片文字隨機化
            document.getElementById('detail-video-text').textContent = `[ 正在播放：${pet.name} 的異次元生活紀錄_Vlog.mp4 ]`;
            
            // 更新網頁標題
            document.title = `溫暖爪印 - ${pet.name}`;
        } else {
            // 找不到資料時
            document.querySelector('main').innerHTML = '<div style="text-align:center; padding:50px;"><h2>⚠️ 404 Error: 神獸信號丟失</h2><p>找不到指定的召喚對象，可能已返回異世界。</p><a href="adoption.html" class="btn">返回搜尋</a></div>';
        }
    }

    // === 5. 篩選功能邏輯 (adoption.html only) ===
    const searchForm = document.getElementById('searchForm');
    const citySelect = document.getElementById('city-select');
    const areaSelect = document.getElementById('area-select');

    // 縣市資料
    const cityData = {
        'Taipei': ['中正區', '大同區', '中山區', '松山區', '大安區', '萬華區', '信義區', '士林區', '北投區', '內湖區', '南港區', '文山區'],
        'NewTaipei': ['板橋區', '三重區', '中和區', '永和區', '新莊區', '新店區', '土城區', '蘆洲區', '汐止區', '樹林區', '淡水區'],
        'Taichung': ['中區', '東區', '南區', '西區', '北區', '北屯區', '西屯區', '南屯區', '豐原區', '大甲區', '沙鹿區'],
        'Tainan': ['中西區', '東區', '南區', '北區', '安平區', '安南區', '永康區', '歸仁區', '新化區', '左鎮區', '玉井區', '楠西區', '南化區', '仁德區', '關廟區', '龍崎區'],
        'Kaohsiung': ['楠梓區', '左營區', '鼓山區', '三民區', '苓雅區', '新興區', '前金區', '鹽埕區', '前鎮區', '旗津區', '小港區']
    };

    if (citySelect && areaSelect) {
        citySelect.addEventListener('change', function() {
            const selectedCity = this.value;
            areaSelect.innerHTML = '<option value="">請選擇區域</option>';
            if (selectedCity && cityData[selectedCity]) {
                cityData[selectedCity].forEach(area => {
                    const option = document.createElement('option');
                    option.value = area;
                    option.textContent = area;
                    areaSelect.appendChild(option);
                });
            }
        });
    }

    const resetBtn = document.getElementById('resetBtn');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // 取得篩選值
            const typeInput = document.querySelector('input[name="type"]:checked');
            const selectedSpecies = typeInput ? typeInput.value : 'all';
            const selectedLocation = document.getElementById('filter-location').value;
            const selectedShelter = document.getElementById('filter-shelter').value;
            const selectedGender = document.getElementById('filter-gender').value;
            const selectedAge = document.getElementById('filter-age').value;
            const selectedOrgCity = document.getElementById('city-select').value;
            const selectedOrgArea = document.getElementById('area-select').value;
            const inputColor = document.getElementById('filter-color').value.trim().toLowerCase();
            const inputID = document.getElementById('filter-id').value.trim().toUpperCase();

            const cards = document.querySelectorAll('.pet-card');
            let visibleCount = 0;

            cards.forEach(card => {
                const cSp = card.getAttribute('data-species');
                const cLoc = card.getAttribute('data-location');
                const cShe = card.getAttribute('data-shelter');
                const cGen = card.getAttribute('data-gender');
                const cAge = card.getAttribute('data-age');
                const cCity = card.getAttribute('data-city');
                const cArea = card.getAttribute('data-area');
                const cCol = (card.getAttribute('data-color') || "").toLowerCase();
                const cID = (card.getAttribute('data-id') || "").toUpperCase();

                let isMatch = true;
                if (selectedSpecies !== 'all' && selectedSpecies !== 'other' && selectedSpecies !== cSp) isMatch = false;
                else if (selectedSpecies === 'other' && (cSp === 'dog' || cSp === 'cat')) isMatch = false;
                
                if (selectedLocation !== 'all' && selectedLocation !== cLoc) isMatch = false;
                if (selectedShelter !== 'all' && selectedShelter !== cShe) isMatch = false;
                if (selectedGender !== 'all' && selectedGender !== cGen) isMatch = false;
                if (selectedAge !== 'all' && selectedAge !== cAge) isMatch = false;
                if (selectedOrgCity !== "" && selectedOrgCity !== cCity) isMatch = false;
                if (selectedOrgArea !== "" && selectedOrgArea !== cArea) isMatch = false;
                if (inputColor !== "" && !cCol.includes(inputColor)) isMatch = false;
                if (inputID !== "" && !cID.includes(inputID)) isMatch = false;

                if (isMatch) { card.style.display = 'block'; visibleCount++; } 
                else { card.style.display = 'none'; }
            });

            const noResults = document.getElementById('no-results');
            if(noResults) noResults.style.display = (visibleCount === 0) ? 'block' : 'none';
        });

        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                searchForm.reset();
                if (areaSelect) areaSelect.innerHTML = '<option value="">請選擇區域</option>';
                searchForm.dispatchEvent(new Event('submit'));
            });
        }
    }
});

// === 6. 隨機召喚功能 (Random Summon) ===
const randomBtn = document.getElementById('randomBtn');
if (randomBtn) {
    randomBtn.addEventListener('click', () => {
        // 取得資料庫中所有的 ID (keys)
        const petIds = Object.keys(petDatabase);
        // 隨機選一個
        const randomId = petIds[Math.floor(Math.random() * petIds.length)];
        
        // 加上一點儀式感 (確認視窗)
        if(confirm(`🔮 水晶球正在閃爍...\n\n命運指引你前往編號 [${randomId}] 的神獸所在之處。\n是否接受召喚？`)) {
            window.location.href = `details.html?id=${randomId}`;
        }
    });

}
